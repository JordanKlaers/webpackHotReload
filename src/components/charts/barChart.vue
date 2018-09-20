<template>
	<div id="barChart">
	</div>
</template>

<script>
import Chartist from 'chartist';
export default {
	name: 'barChart',
	data() {
		return {
			chart: null,
			barChartData: {
				labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
				series: [
					[5, 2, 4, 2, 0]
				]
			}
		}
	},
	mounted() {
		this.chart = new Chartist.Bar("#barChart", this.barChartData, {
			seriesBarDistance: 12,
			low: 0,
			high: 10
		});
	}
};
</script>