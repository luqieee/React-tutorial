import React, {Component} from 'react';


class AppIntro extends Component {
    render() {
        return <p className="App-intro">
            To get started, edit <code>{this.props.path}</code> and save to reload.
        </p>;
    }
}

export default AppIntro;

