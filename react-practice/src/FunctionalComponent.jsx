import React, { Component } from 'react'

export class FunctionalComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Child Component",
        }
    }
    render() {
        return (
            <>
                <h1>This is my sirname {this.props.sirname}</h1>
                <First jtpProp={this.state.name} />
                <Second />
            </>
        )
    }
}
class First extends React.Component {
    render() {
        return (
            <div>
                <p>this is example pass props parent to child {this.props.jtpProp}</p>
                <h1>JavaTpoint</h1>
            </div>
        );
    }
}
class Second extends React.Component {
    render() {
        return (
            <div>
                <h2>www.javatpoint.com</h2>
                <p>This websites contains the great CS tutorial.</p>
            </div>
        );
    }
}
FunctionalComponent.defaultProps = {
    sirname: "Bhoyar"
}
export default FunctionalComponent