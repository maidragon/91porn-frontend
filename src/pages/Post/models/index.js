import { fetchSource } from '../../../services/post'

export default {
  namespace: 'post',

  state: {
    viewkey: '',
    source: '',
  },

  effects: {
    *fetchSource({ payload: { viewkey } }, { call, put }) {
      const { result, status } = yield call(fetchSource, { viewkey });
      yield put({ type: 'save', payload: { result, status } });
    },
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        source: payload.result,
        status: payload.status,
      };
    },
    changeViewkey(state, { payload }) {
      console.log('payload: ', payload);
      return {
        ...state,
        viewkey: payload.viewkey,
      }
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        console.log('query: ', query);
        if (pathname === '/post') {
          dispatch({ type: 'changeViewkey', payload: query });
          dispatch({ type: 'fetchSource', payload: query });
        }
      });
    },
  },
}