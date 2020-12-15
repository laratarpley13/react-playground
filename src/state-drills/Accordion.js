import React from "react";

class Accordion extends React.Component {
    static defaultProps = {sections: []};
    state = {
        currentSectionIndex: null,
    }
    handleButtonClick = (index) => {
        this.setState({ currentSectionIndex: index })
    }
    renderButtons(section, index, currentSectionIndex) {
        return (
            <li key={index}>
                <button onClick={() => this.handleButtonClick(index)}>
                    {section.title}
                </button>
                {(currentSectionIndex === index) && <p>{section.content}</p>}
            </li>
        )
    }
    render() {
        return (
            <ul>
                {this.props.sections.map((section, index) => 
                    this.renderButtons(section, index, this.state.currentSectionIndex)
                )}
            </ul>
        )
    }
}

export default Accordion