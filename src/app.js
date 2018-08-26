console.log('App.js is running');

const app = {
    title: 'Task App',
    description: 'A CRUD App for tasks using React + Redux',
    options: ['one', 'two']
};


const template = (
    <div> 
        <h1> {app.title} </h1> 
        {(app.description) && <p> {app.description} </p>}
        <p> {app.options.length > 0 ? 'Here are your options' : 'No options'} </p>
        <ol>
            <li> Item One </li>
            <li> Item Two </li>
        </ol>
    </div>
);

let count = 0;
const addOne = () => {
    count++;
    renderCounter();
}

const subOne = () => {
    count--;
    renderCounter();
}

const resetCounter = () => {
    count = 0;
    renderCounter();
}

 
const appRoot = document.getElementById('app');

const renderCounter = () => {
    const template2 = (
        <div>
            <h1> Count: {count}</h1>
            <button onClick={addOne}> +1 </button>
            <button onClick={subOne}> -1 </button>
            <button onClick={resetCounter}> Reset </button>
        </div>
    );

    ReactDOM.render(template2, appRoot);
}

renderCounter();