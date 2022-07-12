# @wei/tool

## 使用

### npm配置

https://blog.csdn.net/weixin_38384296/article/details/116403848

npm config set registry=https://forguo.cn/npm/

.npmrc配置

```
registry=https://forguo.cn/npm/

```

## package.json文件说明

name: 包名，后续在npm中搜索全靠它

version：版本号，每发布一次npm包就要增加一个版本，每个版本不能重复。

description：描述

main: 本包向外暴露的文件，很重要，一定要和你打包出来的文件名一模一样，我的叫做"dist/index.js"

private: true/false 是否为私有。一般为false否则只有自己能使用

flies: 暴露的文件夹, 有哪些文件夹提交到npm上面 格式为[ "dist" ]

keywords: npm检索的关键字

author: 作者

license: ISC

peerDependencies: 代表着当前npm包依赖下面这几种环境。
