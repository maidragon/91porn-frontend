import { connect } from 'dva'

const home = ({ posts }) => {
  return (
    <div className="test">
      <h1>this is index page</h1>
      {posts.map((post) => <p>post._id</p>)}
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log('state: ', state);
  return {
    posts: [],
  }
}
export default connect(mapStateToProps)(home);