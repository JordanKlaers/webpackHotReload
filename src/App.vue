<template>
	<div id="app">
		<card></card>
		<!-- <all-charts></all-charts> -->
		<!-- <button v-on:click="transform">
			click me
		</button>
		<div id="mutate">
			huh 
		</diV> -->
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
			let children = div.children
			if (event.deltaY < 0) {
				if (div.classList.contains('in-view')) {
					div.classList.remove("in-view");
					div.classList.add("up");
					for (let el in children) {
						children[el].classList.remove("fade-in");
						children[el].classList.add("fade-out");
					};
				} else if (div.classList.contains('down')) {
					div.classList.remove("down");
					div.classList.add("in-view");
					for (let el in children) {
						children[el].classList.remove("fade-out");
						children[el].classList.add("fade-in");
					};
				}
			}
			if (event.deltaY > 0) {
				console.log('scroll down');
				if (div.classList.contains('in-view')) {
					console.log('was in view');
					div.classList.remove("in-view");
					div.classList.add("down");
					for (let el in children) {
						children[el].classList.remove("fade-in");
						children[el].classList.add("fade-out");
					};
				} else if (div.classList.contains('up')) {
					div.classList.remove("up");
					div.classList.add("in-view");
					for (let el in children) {
						children[el].classList.remove("fade-out");
						children[el].classList.add("fade-in");
					};
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

