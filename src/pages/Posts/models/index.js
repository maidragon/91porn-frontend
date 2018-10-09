import { fetchPosts } from '../../../services/post'

export default {
  namespace: 'posts',

  state: {
    posts: [],
    currentPage: 1,
  },

  effects: {
    *fetch({ payload: { page } }, { call, put }) {
      const { result } = yield call(fetchPosts, { page });
      var posts = result.docs.map((doc) => {
        doc.thumbnail = "https://img.hacpai.com/bing/20180613.jpg?imageView2/1/w/220/h/150/format/jpg/interlace/1/q"
        return doc;
      });
      console.log('posts: ', result.docs);
      yield put({ type: 'save', payload: { posts } });
    },
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        posts: [...payload.posts],
      };
    },
    changePage(state, { payload }) {
      console.log('payload: ', payload);
      return {
        ...state,
        currentPage: +payload.page,
      }
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        console.log('query: ', query);
        if (pathname === '/posts') {
          dispatch({ type: 'fetch', payload: query });
          dispatch({ type: 'changePage', payload: query });
        }
      });
    },
  },
}