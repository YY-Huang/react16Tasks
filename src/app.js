console.log('App.js is running');

var template = (
    <div> 
        <h1> Yan Yan Huang </h1> 
        <p> This is some info </p> 
        <ol>
            <li> Item One </li>
            <li> Item Two </li>
        </ol>
    </div>
);

let template2 = (
    <div>
        <h1> Yan Yan </h1>
        <p>Age: 25 </p>
        <p>Location: NY </p>
    </div>
)
 
var appRoot = document.getElementById('app')


ReactDOM.render(template2, appRoot);