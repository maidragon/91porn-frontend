import styles from './index.css';
import React, { Component } from 'react'
import { connect } from 'dva';
import PostList from '../../components/PostList'

class Posts extends Component {

  render() {
    const { posts } = this.props;
    console.log('posts: ', posts);
    return (
      <div className={styles.normal}>
        <h1>this is index page</h1>
        <PostList posts={posts} />
      </div>
    );
  }
}


const mapStateToProps = ({ posts }) => ({
    posts: posts.posts,
})

export default connect(mapStateToProps)(Posts)