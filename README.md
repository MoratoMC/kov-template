<div align="center">
    <img width="200px" height="200px" src="./public/logo.svg" />
   	<br />
    <h1 style="margin: 10px">
        Kov
    </h1>
    <p>Vite + Vue3 + TypeScript 开发模板</p>
</div>

## 特点 🐳

-   ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [esbuild](https://github.com/evanw/esbuild)
-   🗂 [基于文件的路由](./src/pages)
-   🎨 [UnoCSS](https://github.com/unocss/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎
-   🔥 使用 [新的 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)
-   🧰 [TypeScript](https://www.typescriptlang.org/) 支持

## 安装
此项目使用 [pnpm](https://pnpm.io/), 请确保你已经安装了最新的 pnpm

```bash
pnpm install
```

## 开发
```bash
pnpm dev
```

## 构建
```bash
pnpm build
```

## 部署
```bash
pnpm preview
```

## 一些说明
### 文件路由
目录结构即路由。

eg:

src/pages/index.vue => /<br>
src/pages/about.vue => /about<br>
src/pages/users/index.vue => /users<br>
src/pages/users/profile.vue => /users/profile<br>
src/pages/users/[id].vue => /users/:id<br>
src/pages/[user]/settings.vue => /:user/settings<br>
src/pages/[...notFound].vue => 404 路由

通过 [unplugin-vue-router](https://uvr.esm.is/) 实现
