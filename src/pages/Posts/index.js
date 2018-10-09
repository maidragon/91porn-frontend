import styles from './index.css';
import { connect } from 'dva';
import { Pagination } from 'antd';
import router from 'umi/router';
import PostList from '../../components/PostList'

const Posts = ({ posts, currentPage }) => {
  function onPageChange(page) {
    router.push(`/posts?page=${page}`);
  }

  return (
    <div className={styles.list}>
      <PostList posts={posts} />
      <Pagination defaultCurrent={1} total={50} current={currentPage} onChange={onPageChange}/>
    </div>
  )
}


const mapStateToProps = ({ posts }) => ({
    posts: posts.posts,
    currentPage: posts.currentPage,
})

export default connect(mapStateToProps)(Posts)