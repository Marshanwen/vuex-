vuex的练习

下载依赖
npm install express

启动代码:
npm run dev

说明：
共有5个模块
A、B、C、D、E

方法一：
数据从C传到B再传到A，A传到D再传到E
分别用props[]、$emit()传输数据

方法二：
用vuex，建立store仓库，使得各模块共用store中state的数据。

练习目的：
熟悉vuex的创建及使用，提高工程的处理效率及提升性能。

额外：
webpack文件的配置
cnpm install vuex --save-dev //搭配在本地
cnpm install vuex --save //搭配在线上
