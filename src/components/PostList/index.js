import { Card } from 'antd'
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
  return (
    <div className="post-item-container">
      <Card
        hoverable
        style={{ width: 240, marginTop: 10, marginBottom: 10 }}
        cover={<img alt="example" src={item.thumbnail} />}
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