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
    count++;
    renderCounter();
};

var subOne = function subOne() {
    count--;
    renderCounter();
};

var resetCounter = function resetCounter() {
    count = 0;
    renderCounter();
};

var appRoot = document.getElementById('app');

var renderCounter = function renderCounter() {
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

    ReactDOM.render(template2, appRoot);
};

renderCounter();
