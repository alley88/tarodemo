import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Header from "../../components/header"
import "./index.css"




@inject('booksStore')
@observer
class Index extends Component {
  constructor(){
    super()
  }
  render() {
    console.log(this.props);
    let { banner, navs, recommend, classify } = this.props.booksStore;
   
    return (
      <View className='index'>
        <Header />
        <Swiper
          className="banner"
          indicatorDots={true}
          autoplay={true}
          interval={3000}
        >
          {
            banner.list.map((item, index) => (
              <SwiperItem key={index}>
                <Image src={item.imgUrl} className="banner_img" />
              </SwiperItem>
            ))
          }
        </Swiper>
        <View className="navs">
          {
            navs.list.map((item, index) => (
              <View key={index} class="nav_item" onClick={this.handleTo.bind(this, item.addressId)}>
                <Image src={item.imgUrl} />
                <Text>{item.name}</Text>
              </View>
            ))
          }
        </View>
        <View className="recommend">
          <View className="recommend_t">
            <Text>主编力荐</Text>
          </View>
          <View className="recommend_b">
            {
              recommend.list.map((item, index) => (
                <View
                  key={index}
                  className="recommend_b_item"
                  onClick={this.handleToDetail.bind(this, item.bookId, item.bookName)}
                >
                  <Image src={item.imgUrl} />
                  <Text>{item.bookName}</Text>

                </View>
              ))
            }

          </View>
        </View>

        <View className="classify">
          <View className="classify_t">
            <Text>本期主打分类</Text>
          </View>
          <View className="classify_b">
            {
              classify.list.map((item, index) => (
                <View
                  key={index}
                  className="classify_b_item"
                  onClick={this.handleToDetail.bind(this, item.bookId, item.bookName)}
                >
                  <View className="books_logo">
                    <Image src={item.imgUrl} />
                  </View>
                  <View className="books_desc">
                    <Text>{item.bookName}</Text>
                    <View className="books_content">
                      <Text>{item.introduction}</Text>
                    </View>
                  </View>
                </View>
              ))
            }

          </View>
        </View>
      </View>
    )
  }
  handleToDetail(bookId, bookName) {
    Taro.navigateTo({
      url: "/pages/booksDetail/index?id=" + bookId + "&bookName=" + bookName
    })
  }
  handleTo(addressId) {
    let url = "";
    switch (addressId) {
      case 490:
        url = '/pages/classify/index';
        break;
      case 492:
        url = '/pages/recommend/index';
        break;
      default:
        return;
    }
    console.log(url);

    Taro.navigateTo({
      url: url
    })
  }
  componentDidMount() {
    this.props.booksStore.handleHomeData()
  }
}

export default Index 
