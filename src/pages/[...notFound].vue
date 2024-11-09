<template>
	<div class="wrap">
		<img width="200px" height="200px" class="logo" src="/src/assets/notFound.svg" />
		<br />
		<h1 class="m-10">404 NotFound</h1>
		<p>此页面位于 <code>src/pages/[...notFound].vue</code></p>
		<switchDark class="m-15" />
	</div>
</template>

<script setup lang="ts">
import SwitchDark from '@/components/SwitchDark/index.vue';
</script>

<style lang="scss" scoped>
.wrap {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
}
</style>
