import {createStore} from "vuex";
import persistedState from 'vuex-persistedstate'
import user from "./user";
export default createStore({
  modules: {
    user,
  },
  plugins: [persistedState({ storage: window.localStorage })],
})
