'use strict';

console.log('App.js is running');

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' Yan Yan Huang '
    ),
    React.createElement(
        'p',
        null,
        ' This is some info '
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

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' Yan Yan '
    ),
    React.createElement(
        'p',
        null,
        'Age: 25 '
    ),
    React.createElement(
        'p',
        null,
        'Location: NY '
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
