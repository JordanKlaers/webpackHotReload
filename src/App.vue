<template>
	<div id="app">
		<card></card>
		<!-- <all-charts></all-charts> -->
		<button v-on:click="transform">
			click me
		</button>
		<div id="mutate">
			huh 
		</diV>
	</div>
</template>

<script>
import allCharts from './components/charts/allCharts';
import card from './components/cards/card';
export default {
	name: 'app',
	components: {
		"all-charts": allCharts,
		"card": card
	},
	data() {
		return {
			clicker: ''
		}
	},
	mounted() {
		window.addEventListener('wheel', function(event) {
			let div = document.getElementsByClassName("card")[0];
			if (event.deltaY < 0) {
				if (div.classList.contains('in-view')) {
					div.classList.remove("in-view");
					div.classList.add("up");
				} else if (div.classList.contains('down')) {
					div.classList.remove("down");
					div.classList.add("in-view");
				}
			}
			if (event.deltaY > 0) {
				if (div.classList.contains('in-view')) {
					div.classList.remove("in-view");
					div.classList.add("down");
				} else if (div.classList.contains('up')) {
					div.classList.remove("up");
					div.classList.add("in-view");
				}
			}
		})
	},
	methods: {
		transform() {
			this.clicker = document.getElementById('mutate');
			console.log(' clicked ');
			if (this.clicker.classList.contains('newnew')) {
				this.clicker.classList.remove('newnew');
			} else {
				this.clicker.classList.add('newnew');
			}
		}
	}
};
</script>
<style lang="scss" src="./assets/scss/app">
</style>
<style lang="scss">
#mutate{
	display: inline-block;
	height: 100px;
	width: 100px;
	background-color: white;
	transition: width 3s;
}
.newnew {
	width:50px !important;
}
</style>

