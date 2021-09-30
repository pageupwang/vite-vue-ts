export default {
  namespaced: true,
  state: () => ({
    count: 0
  }),
  mutations: {
    increment(state: object | any) {
      state.count++
    }
  },
  getters: {
    doubleCount(state: object | any) {
      return state.count * 2
    }
  }
}
