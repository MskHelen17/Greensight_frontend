import React from 'react'

class FilterBlock extends React.Component {
    render() {
        return ([
            <div className="elem" key="form">
                <label>Form</label>
                <select></select>
            </div>,
            <div className="elem" key="position">
                <label>Position</label>
                <input type="text"  placeholder="Unspecified" onKeyPress={this.handleKeyPress}></input>
            </div>,
            <div className="elem" key="clear">
                <button id="clear-btn">
                    <img></img>
                </button>
            </div>
        ])
    }
    handleKeyPress = (event) => {
        if(event.key === 'Enter')
            console.log('enter press here! ')
    }
}

export default FilterBlock
