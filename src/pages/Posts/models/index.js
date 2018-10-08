import { fetchPosts } from '../../../services/post'

export default {
  namespace: 'posts',

  state: {
    posts: [],
  },

  effects: {
    *fetch({ payload: { page } }, { call, put }) {
      const { result } = yield call(fetchPosts, { page });
      console.log('posts: ', result.docs);
      yield put({ type: 'save', payload: { posts: result.docs } });
    },
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        posts: [...payload.posts],
      };
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        console.log('query: ', query);
        if (pathname === '/posts') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
}