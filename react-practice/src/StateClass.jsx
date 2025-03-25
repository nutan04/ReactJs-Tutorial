import React, { Component } from 'react'

export class StateClass extends Component {
    constructor() {
        super();
        this.state = { displayBio: false };
        console.log('Component this', this);
        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    }
    toggleDisplayBio() {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render() {
        const bio = this.state.displayBio ? (
            <div>
                <p><h3>Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad. We have a team of experienced Java developers and trainers from multinational companies to teach our campus students.</h3></p>
            </div>
        ) : null;
        const readLessMore = this.state.displayBio ? (<div><div>
            <p><h4>Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad. We have a team of experienced Java developers and trainers from multinational companies to teach our campus students.</h4></p>
            <button onClick={this.toggleDisplayBio}> Show Less </button>
        </div>  </div>) : (
            <div>
                <button onClick={this.toggleDisplayBio}> Read More </button>
            </div>
        );
        return (
            <div>
                <h1> Welcome to JavaTpoint!! </h1>
                {bio}
                {readLessMore}
            </div>
        );

    }
}

export default StateClass