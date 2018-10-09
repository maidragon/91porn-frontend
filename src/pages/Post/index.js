import { connect } from 'dva';
import styles from './index.css'
import Player from '../../components/DPlayer/index'

const Post = ({ source, status }) => {
  console.log('source: ', source);
  if (source.length > 0) {
    return (
      <div className={styles.post}>
        <Player video={{ url: source }} screenshot={true} className={styles.player}/>
      </div>
    )
  }
  return <h3>loading...</h3>
}

const mapStateToProps = ({ post }) => ({
  source: post.source,
  status: post.status,
})
export default connect(mapStateToProps)(Post);