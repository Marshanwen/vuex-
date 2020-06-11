vuex的练习

下载依赖
npm install express

启动代码:
npm run dev

说明：
共有5个模块
A、B、C、D、E
数据从C传到B再传到A，A传到D再传到E
方法一：
分别用props[]、$emit()传输数据
方法二：
用vuex，建立store仓库，使得各模块共用store中state的数据。