console.log('App.js is running');

const app = {
    title: 'Task App',
    description: 'A CRUD App for tasks using React + Redux',
    options: []
};


const onFormSubmit = (e) => {
    e.preventDefault();

    console.log('my e is', e);
    console.log('OPTION IS', option);

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderTask();
    }
}


const resetCounter = () => {
    app.options = [];
    renderTask();
}

const onMakeDecision = () => {
    const randomTask = Math.floor(Math.random() * app.options.length);
    const index = app.options[randomTask];
    alert(index);
}


const appRoot = document.getElementById('app');


const renderTask = () => {
    const template = (
        <div> 
            <h1> {app.title} </h1> 
            {(app.description) && <p> {app.description} </p>}
            <p> {app.options.length > 0 ? 'Here are your options' : 'No options'} </p>
            <p> {app.options.length} </p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}> What do I do? </button>
            <button onClick={resetCounter}> Remove all </button>
            <ol>
                {app.options.map((item, i) => 
                    <li key={i}> {item} </li>
                )}
                {/* <li> Item One </li>
                <li> Item Two </li> */}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button> Add Options </button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderTask();
