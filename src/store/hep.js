import { getWeddingDress, getHotel } from 'pub/axiosRequest'

var state = {
  typeList: []
}

var mutations = {
  changeGetWediingDress (state, list) {
    state.typeList = list
  },
  changeGetHotel (state, list) {
    state.typeList = list
  }
}
var actions = {
  // 婚纱
  actionGetWeddingDressList ({ commit }, data) {
    getWeddingDress({
      data,
      success: (res) => {
        if (res.status === 200) {
          // console.log(res.data.list)
          var typeList = res.data.list
          typeList.forEach((item) => {
            item.img_url = item.img_url.split(',')
          })
          commit('changeGetWediingDress', res.data.list)
        }
      }
    })
  },
  // 酒店
  actionGetHotelList (context) {
    getHotel({
      success: (res) => {
        context.commit('changeGetHotel', res.data.list)
        // console.log(res)
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
