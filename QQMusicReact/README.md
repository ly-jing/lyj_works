# 思路

将整体页面拆分设计成4个组件

![imgs](https://raw.githubusercontent.com/ly-jing/lyj_works/main/QQMusicAlbum/imgs/structure.jpg)

- Header
- Areas
- AlbumList
- Album

------

1. Header

   > 页面的头部，包含QQ音乐logo

2. Areas

   > 导航栏地区部分，3个接口

   > - areas: IArea[];
   >
   > - currentArea: number;
   >
   > - switchTab

3. AlbumList

   > 专辑列表整体，2个接口

   > - currentAlbums: IAlbum[];
   > - deleteAlbum: (album: IAlbum) => void;

4. Album

   > 每一项专辑，2个接口

   > - currentAlbums: IAlbum[];
   > - deleteAlbum: (album: IAlbum) => void;

# 问题

**无法实现切换导航功能以及删除专辑功能**

## 原因

实现该功能的函数内部this没有指向 App 而是为 undefined。

> 在main中，定义switchTAB 和 deleteAlbum 函数中的 this 指向全局window，由于`babel`会自动给js文件上加上严格模式，所以this为undefined

## 解决方法

- 使用箭头函数定义 switchTAB 函数和 deleteAlbum 函数，this就会指向App

> 箭头函数不使用this的四种标准规则，而是根据外层（函数或者全局）作用域来决定this。

> ES中的箭头函数并不会使用四条标准的绑定规则，而是根据当前的词法作用域来决定this，具体来说，箭头函数会继承外层函数调用的this绑定（无论this绑定到什么）。这其实和ES6之前中的self=this机制一样

