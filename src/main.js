'use strict';
import Vue from 'vue';
import App from './App';
// import css from 'scss/app'
console.log('file is reached WOO HOO', App);
new Vue({
	el: '#crazyapp',
	components: { App },
	render: function(createElement) {
		return createElement(App);
	}
});