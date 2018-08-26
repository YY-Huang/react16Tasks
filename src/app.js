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
        <form>
            <input type="text" name="option" />
            <button> Add Options </button>
        </form>
    </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

console.log('testing if my git is fixed now');

