import React from 'react';

class App extends React.Component {

    state = { spacePeople : [] }

    render(){
        return(
            <div>
                <h1>{this.state.spacePeople.map(person => person.name)}</h1>
            </div>
        );
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => {
            this.setState({
                spacePeople: data.people
            })
        })
    }

}

export default App;