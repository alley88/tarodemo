import { observable, runInAction } from 'mobx'
import { channelsPath } from "../api/channels"
import Taro from "@tarojs/taro";


const booksStore = observable({
  banner: [],
  navs: [],
  recommend: [],
  classify: [],
  handleHomeData() {
    Taro.request({
      url: channelsPath(),
      success: (data) => {
        var list = data.data.data.list
        runInAction(() => {
          this.banner = list[0];
          this.navs = list[2];
          this.recommend = list[3];
          this.classify = list[4];
        })
      }
    })

  }
})

export default booksStore;