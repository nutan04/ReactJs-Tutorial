import React, { Component } from 'react'

export class NewApp extends Component {
    render() {
        var myStyle = {
            fontSize: 80,
            fontFamily: 'Courier',
            color: 'red'

        }
        return (
            <div>
                <h1>This is my Name {this.props.name}</h1>
                <h1>JavaTpoint</h1>
                <h2 style={myStyle}>Training Institutes</h2>
                <p className='hello'>Training Institutes</p>
                <span>{5 * 3}</span>
                {/* This is the comments */}
                <p data-demoAttribute="demo">This website contains the best CS tutorials.</p>
            </div>
        )
    }
}

export default NewApp