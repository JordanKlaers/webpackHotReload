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
	},
	beforeCreate() {
		console.log('vue component beforejhhh crteateafgaegweg');
	}
};
</script>
<style type="text/css" src="css/app.css">
</style>
