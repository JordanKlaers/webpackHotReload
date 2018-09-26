<template>
	<div id="allChart" class="in-view section-container">
		<barChart></barChart>
	</div>
</template>

<script>
import barChart from './barChart';
export default {
	name: 'allCharts',
	components: {
		barChart
	},
	data() {
		return {
		}
	}
};
</script>
<style lang="scss">
</style>