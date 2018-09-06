import _ from 'lodash';
import printMe from './print.js';

function component() {
	var element = document.createElement('div');
	var btn = document.createElement('button');
	btn.innerHTML = 'Click meeee!';
	btn.onclick = printMe;

	var bigBox = document.createElement('div');
	// Lodash, now imported by this script
	var style = document.createElement('style')
	// .setAttribute('type', 'text/css')
	element.appendChild(style);
	element.innerHTML = _.join(['Hello', 'webpack', 'boi'], ' ');
	element.appendChild(btn);
	return element;
}
console.log(style.outerHTML);
document.getElementsByTagName('head')[0].appendChild(style);
document.body.appendChild(component());