import request from '../util/request'
import config from '../util/config'

export async function fetchPosts({ page = 1 }) {
  return request(`${config.host}/search?p=${page}`);
}

