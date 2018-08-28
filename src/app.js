console.log('New App.js');

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1> To Do </h1>
                <h2> Using React and Redux </h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render () {
        return (
            <div>
                <button> What should I do? </button>
            </div>
        )
    }
}

class Options extends React.Component {
    render () {
        return (
            <div>
                See Options 
            </div>
        );
    }
}

class AddOption extends React.Component {
    render () {
        return (
            <div>
                Adding Options 
            </div>
        );
    }
}

const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'))