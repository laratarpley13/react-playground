import React from 'react';

class HelloWorld extends React.Component {
    state = {
        who: 'world',
    }
    handleWorldButtonClick = () => {
        this.setState({
            who: 'world!',
        })
    }
    handleFriendButtonClick = () => {
        this.setState({
            who: 'friend!',
        })
    }
    handleReactButtonClick = () => {
        this.setState({
            who: 'React!',
        })
    }
    render () {
        return(
            <div className="hello-world">
                <p>Hello, {this.state.who}</p>
                <button onClick={this.handleWorldButtonClick}>World</button>
                <button onClick={this.handleFriendButtonClick}>Friend</button>
                <button onClick={this.handleReactButtonClick}>React</button>
            </div>
        )
    }
}

export default HelloWorld