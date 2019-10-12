import { DemoState } from '@/types/views/demo.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as DemoApi from '@/api/demo'

const state: DemoState = {
  author: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<DemoState, any> = {
  author: (state: DemoState) => state.author
}

// 更改state
const mutations: MutationTree<DemoState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: DemoState, data: DemoState) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) { return }
      state[key] = data[key]
    }
  }
}

const actions: ActionTree<DemoState, any> = {
  UPDATE_STATE_ASYN({ commit, state: DemoState }, data: DemoState) {
    commit('UPDATE_STATE', data)
  },
  // GET_DATA_ASYN({ commit, state: LoginState }) {
  //   Demo.getData()
  // }
}

export default {
  state,
  getters,
  mutations,
  actions
}

