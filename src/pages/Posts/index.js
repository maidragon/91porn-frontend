import styles from './index.css';
import React, { Component } from 'react'
import { connect } from 'dva';
import { Pagination } from 'antd';
import router from 'umi/router';
import PostList from '../../components/PostList'

class Posts extends Component {
  onPageChange = (page) => {
    router.push(`/posts?page=${page}`);
  }

  render() {
    const { posts, currentPage } = this.props;
    return (
      <div className={styles.list}>
        <PostList posts={posts} />
        <Pagination defaultCurrent={1} total={50} current={currentPage} onChange={this.onPageChange}/>
      </div>
    );
  }
}


const mapStateToProps = ({ posts }) => ({
    posts: posts.posts,
    currentPage: posts.currentPage,
})

export default connect(mapStateToProps)(Posts)