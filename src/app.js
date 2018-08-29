console.log('New App.js');

class TaskApp extends React.Component {
    render () {

        const title = "Task App";
        const subtitle = "Using React and Redux";
        const options = ['Thing One', 'Thing Two', 'Thing Three'];

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1> {this.props.title} </h1>
                <h2> {this.props.subtitle} </h2>
            </div>
        )
    }
}

class Action extends React.Component {
    handlePick() {
        alert('handlePick')
    }
    render () {
        return (
            <div>
                <button onClick={this.handlePick}> What should I do? </button>
            </div>
        )
    }
}

class Options extends React.Component {

    onRemove() {
        alert('Removing All')
    }
    render () {
        return (
            <div>
            {this.props.options.map((option) => <Option key={option} optionText={option} />
            )}
            <button onClick={this.onRemove}> Remove all </button>
            </div>
        );
    }
}

class Option extends React.Component {
    render () {
        console.log(this.props.optionText)
        return (
            <div>
                Option: {this.props.optionText}
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