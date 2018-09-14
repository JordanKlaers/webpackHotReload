<template>
	<div id="app">
		<all-charts></all-charts>
	</div>
</template>

<script>
import allCharts from './components/charts/allCharts';
export default {
	name: 'app',
	components: {
		"all-charts": allCharts
	}
};
</script>
<style lang="scss" src="./assets/scss/app">
</style>
