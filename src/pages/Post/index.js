import { connect } from 'dva';

const Post = ({ source, status }) => {

  return (
    <div>
      <h3>this is post page</h3>
      <p>{source}</p>
      <p>{status === 'failed' ? '解析失败' : '解析成功'}</p>
    </div>
  )
}

const mapStateToProps = ({ post }) => ({
  source: post.source,
  status: post.status,
})
export default connect(mapStateToProps)(Post);