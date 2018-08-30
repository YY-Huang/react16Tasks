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
        this.setState = ((prevState) => {
            visibility: !prevState
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
                <button onClick={this.handleToggleVisibility}> Show Details </button>
                {this.state.visibility == true && (
                    <div>   
                        {app.description}
                    </div>
                )}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))



// const appRoot = document.getElementById('app');

// let visibility = false;

// const onToggle = () => {
//     visibility = !visibility;

//     render();
// }

// const render = () => {
//     const template = (
//         <div>
//             <h1> {app.title} </h1>
//             <button onClick={onToggle}> 
//                 {visibility ? 'Hide details' : 'Show details'}
//             </button>
//             {visibility && (
//                 <div>
//                     {app.description}
//                 </div>
//             )}
//         </div>
//     );

// 	ReactDOM.render(template, appRoot);
// };

// render();