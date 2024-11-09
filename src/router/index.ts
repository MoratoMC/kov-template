import { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { handleHotUpdate, routes } from 'vue-router/auto-routes';

// 创建一个可以被 Vue 应用程序使用的路由实例
export const router = createRouter({
	history: createWebHistory(),
	routes,
});

// 配置路由器
export function setupRouter(app: App<Element>) {
	app.use(router);
}

if (import.meta.hot) {
	handleHotUpdate(router);
}
