# 应用发布

![](https://img.shields.io/badge/node-12.13.1-brightgreen)
![](https://img.shields.io/badge/expocli-4.7.1-brightgreen)

## iOS端

iOS应用的构建分为档案模式（expo build:ios -t archive）和模拟器模式（expo build:ios -t simulator）两种。模拟器模式用于本地机器测试使用，**如果是通过TestFlight或是Apple store发布应用，则必须使用档案模式**。

在构建之前我们需要在apple上注册开发者账户，在构建时Expo会要求进行填写。整个时长大约为20分钟左右，在打包成功后。
我们首先将其上传到TestFlight做线上测试。

点击编译成功后的下载链接，下载ipa软件。使用MacOS中Transport软件，将ipa软件上传至[Apple Store Connect](https://appstoreconnect.apple.com/)。整个时间约10分钟。

之后我们需要在App Store Connect中在TestFlight中提交Beta版本的测试信息。


## EAS Submit提交方式

> EAS Submit 是一项可以将应用上传至Apple App Store和Google Play Store的托管服务。只需运行EAS CLI即可。

原文：[https://docs.expo.io/workflow/configuration/]
