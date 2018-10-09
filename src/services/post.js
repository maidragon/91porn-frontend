import request from '../util/request'
import config from '../util/config'

export async function fetchPosts({ page = 1 }) {
  return request(`${config.host}/search?p=${page}`);
}

export async function fetchSource({ viewkey = ''}) {
  // https://api.prpr.io/parse?url=http://91porn.com/view_video.php?viewkey=a097700fdd197d206274
  return request(`${config.host}/parse?url=http://91porn.com/view_video.php?viewkey=${viewkey}`);
}