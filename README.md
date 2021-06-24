# MuYu | A Movies Demo powered by React Native

![](https://img.shields.io/badge/iOS-14.5-orange)
![](https://img.shields.io/badge/React-17.0.1-blue)
![](https://img.shields.io/badge/React%20Native-react--native-blue)


```bash
## 启动Metro
npx react-native start
## 启动iOS应用
npx react-native run-ios
```

## FQA

### Module AppRegistry is not a registered callabel module

导致这一bug的原因可能是node_modules中有多个版本的react-native
对于Android 系统开发步骤如下：

```bash
watchman watch-del-all
react-native start --reset-cache
```

打开Android Studio 选择`build > clean`

对于iOS 系统开发步骤如下：

```bash
cd ios \
rm -rf Pods 
pod cache clean --all
pod install
cd ../
yarn add
```

###  Newwork Request Failed

![iOS解决方案](https://stackoverflow.com/questions/31254725/transport-security-has-blocked-a-cleartext-http)

## react-native-unimodules

`react-native-unimodules`是React Native适配Expo库的一个重要组件，安装之后针对不同的系统对于配置文件也需要进行配置，详情请阅读[文档](https://docs.expo.io/bare/installing-unimodules/)