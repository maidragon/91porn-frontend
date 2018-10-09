import { connect } from 'dva'
import Redirect from 'umi/redirect';

const home = () => {
  return (
    <Redirect to="/posts?page=1" />
  )
}

export default connect()(home);