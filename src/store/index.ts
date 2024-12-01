import { createPinia } from 'pinia';
import PersistedState from 'pinia-plugin-persistedstate';
import { App } from 'vue';

// 创建pinia实例
const store = createPinia();
store.use(PersistedState);

// 配置pinia
export function setupStore(app: App<Element>) {
	app.use(store);
}

export { store };
