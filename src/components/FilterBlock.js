import React from 'react'

class FilterBlock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            position: '',
            type: 'not selected'
        };
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handlePositionChange = this.handlePositionChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleClearClick = this.handleClearClick.bind(this);
    }
    render() {
        return (
            <div className="filterBlock">
                <div className="selectType">
                    <label>Form</label>
                    <select value={this.state.type} onChange={this.handleTypeChange}>
                        <option value="not selected" disabled defaultValue hidden>Not selected</option>
                        <option value="Full time">Full time</option>
                        <option value="Half time">Half time</option>
                        <option value="Part time">Part time</option>
                    </select>
                </div>
                <div className="selectPosition">
                    <label>Position</label>
                    <input type="text" placeholder="Unspecified" value={this.state.position} onChange={this.handlePositionChange} onKeyPress={this.handleKeyPress}></input>
                </div>
                <div className="clearType">
                    <button id="clear-btn" onClick={this.handleClearClick} className="lightBtn">
                        Clear sorting
                        <img></img>
                    </button>
                </div>
            </div>
        )
    }

    handleTypeChange(event) {
        this.setState({type: event.target.value});
        this.props.onTypeChange(event.target.value);
    }
    handleClearClick(event){
        this.setState({type: "not selected"});
        this.props.onTypeChange("not selected");
    }
    handlePositionChange(event) {
        this.setState({position: event.target.value});
    }
    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            this.props.onPositionChange(this.state.position);
            console.log('enter')
        }
    }
}

export default FilterBlock
