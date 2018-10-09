import { Card } from 'antd'
import Link from 'umi/link';
import styles from './index.css'
const { Meta } = Card;

const PostList = ({ posts }) => {
  if (posts && posts.length > 0) {
    return posts.map((post) => {
      return <PostItem item={post} key={post.viewkey} />;
    });
  }
  return null;
}

const PostItem = ({ item }) => {
  function renderCover() {
    return (
      <Link to={`/post?viewkey=${item.viewkey}`}><img alt="example" src={item.thumbnail} /></Link>
    )
  }

  return (
    <div className={styles['post-item']}>
      <Card
        hoverable
        style={{ width: 240, marginTop: 10, marginBottom: 10 }}
        cover={renderCover()}
      >
        <Meta
          title={item.title}
          description={item.description}
          className="desc"
          style={{ overflow: 'hidden', textO0verflow: 'ellipsis', whiteSpace: 'nowrap'}}
        />
      </Card>
    </div>
  )
}

export default PostList;