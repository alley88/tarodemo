import Taro from "@tarojs/taro"
export const channelsPath = ()=>Taro.getEnv() =="WEB"?'/api/home/info?id=106' :`https://alleyzyh.natappvip.cc/home/info?id=106`