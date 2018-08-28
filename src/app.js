console.log('New App.js');

class TaskApp extends React.Component {
    render () {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        )
    }
}

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
            <Option />
        );
    }
}

class Option extends React.Component {
    render () {
        return (
            <div>
                See Options SINGULAR
            </div>
        )
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

ReactDOM.render(<TaskApp />, document.getElementById('app'))