'use strict';

console.log('App.js is running');

var app = {
    title: 'Task App',
    description: 'A CRUD App for tasks using React + Redux',
    options: ['one', 'two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' ',
        app.title,
        ' '
    ),
    app.description && React.createElement(
        'p',
        null,
        ' ',
        app.description,
        ' '
    ),
    React.createElement(
        'p',
        null,
        ' ',
        app.options.length > 0 ? 'Here are your options' : 'No options',
        ' '
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            ' Item One '
        ),
        React.createElement(
            'li',
            null,
            ' Item Two '
        )
    ),
    React.createElement(
        'form',
        null,
        React.createElement('input', { type: 'text', name: 'option' }),
        React.createElement(
            'button',
            null,
            ' Add Options '
        )
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
