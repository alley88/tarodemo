import Taro,{Component} from "@tarojs/taro";
import {View,Text} from "@tarojs/components"
import logo from "../../static/logo.png";
import "./index.css";
export default class Header extends Component{
    render(){
        return (
            <View className="header_container">
                <View className="header_logo">
                    <Image src={logo} alt="logo"/>
                </View>
                <View className="header_title">
                    <View>
                        <Text>男生</Text>
                    </View>
                    <View>
                        <Text>女生</Text>
                    </View>
                    <View>
                        <Text>出版</Text>
                    </View>
                </View>
            </View>
        )
    }
}