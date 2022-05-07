### `QQ`音乐新碟页面

- React

> - 将整体页面拆分设计成4个组件
>
>   ![imgs](https://raw.githubusercontent.com/ly-jing/lyj_works/main/QQMusicAlbum/imgs/structure.jpg)
>
>   ------
>
>   1. Header
>
>      页面的头部，包含QQ音乐logo
>
>   2. Areas
>
>      导航栏地区部分，3个接口
>
>      - areas: IArea[];
>
>      - currentArea: number;
>
>      - switchTab
>
>   3. AlbumList
>
>      专辑列表整体，2个接口
>
>      - currentAlbums: IAlbum[];
>      - deleteAlbum: (album: IAlbum) => void;
>
>   4. Album
>
>      每一项专辑，2个接口
>
>      - currentAlbums: IAlbum[];
>      - deleteAlbum: (album: IAlbum) => void;

### `Dribbble` 首页

- `HTML` / `CSS`  / `JavaScript`
- 响应式布局  ` 移动优先设计`
  - `媒体查询 / Grid布局 / rem`

> 简化版的 `Dribbble` 首页，采用移动优先的方式，实现响应式设计
>
> - 媒体查询和Grid布局的高级用法
> - 页面宽度 `375px` 时的页面状态，顶部导航菜单折叠了起来，并且固定在顶部，点击菜单按钮切换展开，通过 `JavaScript` 脚本实现，出现一个遮罩遮住整个页面

### `QQ`音乐新碟页面

- `ES6` /  `TypeScript`

> 简化版的`QQ`音乐新碟页面
>
> - 点击标签项动态切换下方列表内容
> - 鼠标悬停列表项会出现删除按钮，点击删除按钮可以将该条目删除
> - 移动优先，页面支持响应式，如列表项的列数，从1到5逐级过渡
> - 代码风格遵循 `standard.js` 规范
> - 使用动态创建 `DOM` 的方式来实现页面
> - 使用泛型方法请求 `json` 数据
> - 异步请求使用 `async/await`
