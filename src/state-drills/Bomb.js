import React from 'react';

class Bomb extends React.Component {
    state = {
        count: 0,
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                count: this.state.count + 1,
            })
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    displayTickTockBoom() {
        if (this.state.count >= 8) {
            clearInterval(this.interval)
            return "BOOM!!!!"
        }
        else if (this.state.count % 2 === 0) {
            return "tick"
        }
        else {
            return "tock"
        }
    }
    render() {
        return(
            <div className="bomb">
                <p>{this.displayTickTockBoom()}</p>
            </div>
        )
    }
}

export default Bomb