# MuYu | A Movies Demo powered by React Native

![](https://img.shields.io/badge/iOS-14.5-orange)
![](https://img.shields.io/badge/React-17.0.1-blue)
![](https://img.shields.io/badge/node-12.13.1-blue)
![](https://img.shields.io/badge/ReactNative-v0.64.2-brightgreen)

> 本教程文档基于MacOS系统，目前暂未完成，请各位大佬不要下载。

## 事先准备

React Native一直以来宣称一次编译到处运行，但是事实上做过React Native项目的开发人员都清楚它是一次编译到处debug。这是由于原生系统平台的不断的发展使得React Native需要不断地去兼容，除了通过命令行编译之外，我们很多时候需要自己对编译后的原生代码进行配置。目前最新版本0.64.2集成了Metro打包器，对于原生系统的集成已经有了很大地改善。

首先我们本地需要的基本开发工具为Node环境和监听系统文件变化的watchman（Metro打包器依赖于此）。

```bash
# version 12.13.1
brew install node
# Metro bundler
brew install watchman
```

### iOS

对于iOS的开发我们本地需要有Xcode（version 10+）和CocoPods，Xcode为MacOS系统自带软件在这里不必多说，开发时打开即可。现在我们安装cocoapods

```bash
sudo gem install cocoapods
```

### Android

尚未编写

### Startup

```bash
## 启动Metro
npx react-native start
## 打开新bash，启动iOS应用
npx react-native run-ios
## 打开新bash，启动Android应用
npx react-native run-android
```

## 后台数据

本项目的后台数据为[聚合数据](https://www.juhe.cn/)提供的免费公开接口。

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

###  Network Request Failed

[iOS解决方案](https://stackoverflow.com/questions/31254725/transport-security-has-blocked-a-cleartext-http)

## react-native-unimodules

`react-native-unimodules`是React Native适配Expo库的一个重要组件，安装之后针对不同的系统对于配置文件也需要进行配置，详情请阅读[文档](https://docs.expo.io/bare/installing-unimodules/)