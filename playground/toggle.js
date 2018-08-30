console.log('toggle is running!');

// VisibilityToggle Component - render, constructor, state, handleToggleVisibility

class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility() {
        this.setState ((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {

        const app = {
            title: 'Visibility Toggling',
            description: 'This is the toggle description'
        };

        return (
            <div> 
                <h1> {app.title} </h1>
                <button onClick={this.handleToggleVisibility}> {this.state.visibility ? 'Hide Details' : 'Show details'} </button>
                {this.state.visibility && (
                    <div>   
                        {app.description}
                    </div>
                )}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))