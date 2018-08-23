console.log('App.js is running');
// const React = require('react');
// const ReactDOM = require('react-dom');

// import React from 'react';
// import ReactDOM from 'react-dom';

var template = React.createElement(
	'h1',
	{ id: 'someid' },
	' Something new '
);


ReactDOM.render(template, document.getElementById('app'));