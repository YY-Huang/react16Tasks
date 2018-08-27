console.log('toggle is running!');

const app = {
    title: 'Visibility Toggling',
    description: 'This is the toggle description'
};

const appRoot = document.getElementById('app');

let visibility = false;

const onToggle = () => {
    visibility = !visibility;

    render();
}

const render = () => {
    const template = (
        <div>
            <h1> {app.title} </h1>
            <button onClick={onToggle}> 
                {visibility ? 'Hide details' : 'Show details'}
            </button>
            {visibility && (
                <div>
                    {app.description}
                </div>
            )}
        </div>
    );

	ReactDOM.render(template, appRoot);
};

render();