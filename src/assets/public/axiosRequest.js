/**
 * 所有axios请求都会从当前文件出发
 */

import { axiosRequest } from './axios'

const getJewelry = (options) => {
  axiosRequest({
    url: 'getJewel'
    // data: options.data
  }).then((data) => {
    options.success(data)
  })
  // .catch(() => {

  // })
}

const getTourPhoto = (options) => {
  axiosRequest({
    url: 'getTour'
  }).then((data) => {
    options.success(data)
  })
}

const getWedding = (options) => {
  axiosRequest({
    url: 'getWedding'
  }).then((data) => {
    options.success(data)
  })
}

const getHotel = (options) => {
  axiosRequest({
    url: 'getHotel'
  }).then((data) => {
    options.success(data)
  })
}

const getTourThree = (options) => {
  axiosRequest({
    url: 'getTourThree'
  }).then((data) => {
    options.success(data)
  })
}

const getWeddingSix = (options) => {
  axiosRequest({
    url: 'getWeddingSix'
  }).then((data) => {
    options.success(data)
  })
}

export {
  getJewelry,
  getTourPhoto,
  getTourThree,
  getWedding,
  getWeddingSix,
  getHotel
}
