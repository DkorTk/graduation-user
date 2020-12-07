import { apiLogin } from '../api/index'
import { setToken } from '@/utils/auth'


export default {
  state: {
    token: ''
  },
  mutations: {
    SET_TOKEN:(state, token) => {
      state.token = token
  }
  },
  actions: {
    apiLogin({ commit }, info) {
      return new Promise((resolve, reject) => {
          apiLogin(info).then(response => {
              console.log(response);
              if(response.data.state === 1) {
                  const { data } = response;
                  commit('SET_TOKEN', data.token);
                  setToken(data.token);
                  resolve();
                  console.log('走到了这');
              } else {
                  reject();
              }
              
          }).catch(error => {
              reject(error);
          })
      })
  }
  },
  modules: {}
};
