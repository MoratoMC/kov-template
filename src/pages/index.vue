<template>
	<div class="wrap">
		<HelloWorld class="m-20" />
		<SwitchDark class="m-15" />
	</div>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
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
