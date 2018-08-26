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
    )
);

var count = 0;
var addOne = function addOne() {
    console.log('add one');
};

var subOne = function subOne() {
    console.log('subtract');
};

var resetCounter = function resetCounter() {
    console.log('reset');
};

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' Count: ',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        ' +1 '
    ),
    React.createElement(
        'button',
        { onClick: subOne },
        ' -1 '
    ),
    React.createElement(
        'button',
        { onClick: resetCounter },
        ' Reset '
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
