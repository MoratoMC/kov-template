<template>
	<img width="200px" height="200px" class="logo" src="/src/assets/logo.svg" />
	<br />
	<h1 class="m-10">Kov</h1>
	<p>Vite + Vue3 + TypeScript 开发模板</p>
</template>

<style lang="scss" scoped>
.logo {
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #49d3ea);
}
</style>
