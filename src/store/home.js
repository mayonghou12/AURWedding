import { getJewelry, getTourPhoto, getWedding, getHotel } from 'pub/axiosRequest'
var state = {
  typeList: [],
  weddingList: []
}

var mutations = {
  changeList (state, list) {
    state.typeList = list
  },
  changeWeddingList (state, list) {
    state.weddingList = list
  }
}

var actions = {
  actionGetJewelryList ({ commit }) {
    getJewelry({
      success: (data) => {
        commit('changeList', data.data.list)
      }
    })
  },
  actionGetTourPhoto ({ commit }, data) {
    getTourPhoto({
      data,
      success: (res) => {
        if (res.status === 200) {
          var typeList = res.data.list
          typeList.forEach((item) => {
            item.img_url_new = item.img_url.split(',')
          })
          commit('changeList', typeList)
        }
      }
    })
  },
  actionGetWedding (context, data) {
    getWedding({
      data,
      success: (res) => {
        if (res.status === 200) {
          var weddingList = res.data.list
          weddingList.forEach((item) => {
            item.img_url = item.img_url.split(',')
          })
          context.commit('changeWeddingList', weddingList)
        }
      }
    })
  },
  actionGetHotel (context) {
    getHotel({
      success: (res) => {
        context.commit('changeList', res.data.list)
      }
    })
  }
}

var getters = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
