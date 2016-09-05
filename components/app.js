(function() {
	'use strict'
	
	const fs = require('fs'),
		React = require('react'),
		ReactDOM = require('react-dom'),
		Balance = require('./balance')
	
		ReactDOM.render(< Balance data={[
			{"id": 1, "name": "a", balance: "+1"},
			{"id": 2, "name": "b", balance: "-1"},
			{"id": 3, "name": "c", balance: "+1"}
		]}/>, document.getElementById('lines'))
})()