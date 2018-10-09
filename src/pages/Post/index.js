import { connect } from 'dva';
import styles from './index.css'
import Player from '../../components/DPlayer/index'

const Post = ({ source, status }) => {

  return (
    <div className={styles.post}>
      <Player video={{ url: 'https://marisa.s3.didiyunapi.com/BilibiliJJ.COM-【东方偶像乡MMD】这的确是偶像级的dream★fighter_.mp4' }} screenshot={true} className={styles.player}/>
    </div>
  )
}

const mapStateToProps = ({ post }) => ({
  source: post.source,
  status: post.status,
})
export default connect(mapStateToProps)(Post);