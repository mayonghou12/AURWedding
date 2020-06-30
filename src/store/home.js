import { getJewelry, getTourPhoto, getWedding, getHotel, getTourThree, getWeddingSix } from 'pub/axiosRequest'
var state = {
  typeList: [],
  weddingList: []
}

var mutations = {
  changeList (state, list) {
    state.typeList = list
  },
  changeweddingList (state, list) {
    state.weddingList = list
  }
}

var actions = {
  // 珠宝
  actionGetJewelryList ({ commit }) {
    getJewelry({
      success: (data) => {
        commit('changeList', data.data.list)
      }
    })
  },
  // 首页旅拍
  actionGetTourThree (context, data) {
    getTourThree({
      data,
      success: (res) => {
        if (res.status === 200) {
          var typeList = res.data.list
          typeList.forEach((item) => {
            item.img_url = item.img_url.split(',')
          })
          context.commit('changeList', res.data.list)
        }
      }
    })
  },
  // 旅拍
  actionGetTourPhoto ({ commit }, data) {
    getTourPhoto({
      data,
      success: (res) => {
        if (res.status === 200) {
          var typeList = res.data.list
          typeList.forEach((item) => {
            item.img_url = item.img_url.split(',')
          })
          commit('changeList', typeList)
        }
      }
    })
  },
  // 首页婚礼
  actionGetWeddingSix (context, data) {
    getWeddingSix({
      data,
      success: (res) => {
        if (res.status === 200) {
          var weddingList = res.data.list
          weddingList.forEach((item, index) => {
            item.img_url = item.img_url.split(',')
          })
          context.commit('changeweddingList', res.data.list)
        }
      }
    })
  },
  // 婚礼
  actionGetWedding (context, data) {
    getWedding({
      data,
      success: (res) => {
        if (res.status === 200) {
          var weddingList = res.data.list
          weddingList.forEach((item) => {
            item.img_url = item.img_url.split(',')
          })
          context.commit('changeweddingList', weddingList)
        }
      }
    })
  },
  // 酒店
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
