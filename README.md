# 康威生命游戏

用原生 JS + Canvas 实现的康威生命游戏（Conway's Game of Life）。

## 演示

- 点「随机初始化」：随机生成初始棋盘
- 点「下一代」：手动演化一步
- 点「自动演化」：自动播放，再点变「暂停」
- 点「取消」：停止并清空棋盘

## 规则

每个格子根据上一代状态同时更新：

- 活细胞，邻居 < 2 → 死（孤独）
- 活细胞，邻居 2 或 3 → 继续活
- 活细胞，邻居 > 3 → 死（拥挤）
- 死细胞，邻居 = 3 → 复活

## 技术

- 原生 JS（ES Module）
- Canvas 2D API
- 无任何依赖

## 文件结构

```
├── index.html   # 页面结构
├── conway.js    # 游戏逻辑（Conway class）
├── render.js    # Canvas 渲染
└── main.js      # 入口，事件绑定
```

## 本地运行

需要本地服务器（ES Module 不支持直接打开 html 文件）：

用 VS Code Live Server 插件打开 `index.html` 即可。
