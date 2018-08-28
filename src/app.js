console.log('New App.js');

class Header extends React.Component {
    render() {
        return <p> This is from the header </p> 
    }
}

const jsx = (
    <div>
        <h1> Title </h1>
        <Header />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'))