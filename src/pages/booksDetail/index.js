import Taro ,{Component} from "@tarojs/taro"
import {View,Text,Image} from "@tarojs/components"
import { AtIcon } from 'taro-ui'
import "@tarojs/async-await"
import "./index.css"
import "taro-ui/dist/style/components/icon.scss";
export default class BooksDetail extends Component{
    constructor(){
        super()
        this.state = {
            booksInfo:{}
        }
    }
    render(){
        let {booksInfo} = this.state;
        return (
            <View className="booksDetail">
                <View className="booksDetail_header">
                    <AtIcon value='chevron-left' size='28' color='#000' className="dir"
                    onClick={this.handleBack.bind(this)}
                    />
                    <Text>{this.$router.params.bookName}</Text>
                </View>
                <View className="booksInfo">
                    <View className="booksInfo_l">
                        <Image src={booksInfo.icon}/>
                    </View>
                    <View className="booksInfo_r">
                        <View className="booksInfo_booksName">
                            <Text>{booksInfo.name}</Text>
                        </View>
                        <View className="booksInfo_booksName">
                            <Text>{booksInfo.authorName}</Text>
                            <Text>{booksInfo.sortName}</Text>
                            <Text>{booksInfo.finished?'已完结':'连载中'}</Text>
                        </View>
                        <View className="booksInfo_booksName">
                            <Text></Text>
                        </View>
                    </View>
                </View>
                <View className="books_content">
                    <Text>{booksInfo.introduce}</Text>
                </View>
            </View>
        )
    }
    
  async componentDidMount(){
        console.log(this.$router)
        let data = await Taro.request({
            url:Taro.getEnv() == 'WEB'?"/api/books/detail?booksId="+this.$router.params.id:"https://alleyzyh.natappvip.cc/books/detail?booksId="+this.$router.params.id
        })
        this.setState({
            booksInfo:data.data.data.detail
        })
  
    }
    handleBack(){
        Taro.navigateBack()
    }
}