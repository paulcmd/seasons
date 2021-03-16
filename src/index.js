import React from 'react'
import ReactDom from 'react-dom'
import "semantic-ui-css/semantic.min.css"
import SeasonDisplay from './SeasonDisplay'


class App extends React.Component {
    state = {
        lat: null,
        errorMessage: ''
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => { this.setState({ lat: position.coords.latitude }) },
            err => { this.setState({ errorMessage: err.message }) }
        )
    }
    render() {

        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }


        if (this.state.lat && !this.state.errorMessage) {
            return <SeasonDisplay lat={this.state.lat} />
        }


        return <div> Loading! </div>


    }
}


ReactDom.render(<App />, document.querySelector('#root'))

/*

1- constructor function and super are not needed. babel can create that behind the scenes
5 - first callback(position) is called when position is successfully found,
else 2nd callback is called with the error message

- constructor overrides/replaces the parent class' constructor function
-super is a reference to the parent's constructor function
-initializing state does not need this.state babel understands it is this.state

- use componentDidMount to load methods/ functions that you want to load at first run. eg method that
 finds user's location. you can initialize in the constructor, but not recommended

 a component will re-render if its children have state eg SeasonDisplay
*/