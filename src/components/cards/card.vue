<template>
	<div class="card in-view">
		<div class="card-title">
			Super awesome title	
		</div>
		<div class="card-sub-title">
			Super awesome title	
		</div>
		<charts></charts>
	</div>
</template>

<script>
import charts from 'components/charts/allCharts'
export default {
	name: 'template',
	components: {
		charts
	},
	data() {
		return {
		}
	}
};
</script>
<style lang="scss">
</style>