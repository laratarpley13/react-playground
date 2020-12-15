import React from 'react';

class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8,
    };
    state = {
        chamber: null,
        spinningTheChamber: false,
    };
    componentWillUnmount() {
        clearTimeout(this.timeout)
    }
    handleButtonClick = () => {
        this.setState({spinningTheChamber: true,})
        this.timeout = setTimeout(() => {
            let numRandom = Math.ceil(Math.random() * 8)
            this.setState({
                chamber: numRandom,
                spinningTheChamber: false,
            })
        }, 2000);
    }
    displayRender() {
        if (this.state.spinningTheChamber === true) {
            return "spining the chamber and pulling the trigger! ...";
        } else if (this.state.chamber === this.props.bulletInChamber) {
            return "BANG!!!!";
        } else {
            return "you're safe!";
        }
    }
    render() {
        return (
            <div className="roulette-gun">
                <p>{this.displayRender()}</p>
                <button onClick={this.handleButtonClick}>Pull the trigger!</button>
            </div>
        )
    }
}

export default RouletteGun