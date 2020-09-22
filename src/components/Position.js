import React from 'react'

class Position extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
        this.handleMoreClick = this.handleMoreClick.bind(this);
    }
    render() {
        const {position} = this.props
        if(this.props.index < this.props.showIndex){
            return(
                <div className="position">
                    <div className="leftColumn">
                        <img src={position.company_logo}/>
                        <p><span>Form: </span>{position.type}</p>
                        <p><span>Company: </span>{position.company}</p>
                        <p><span>Web: </span>{position.company_url}</p>
                        <p><span>Address: </span>{position.location}</p>
                    </div>
                    <div className={this.state.isOpen ? "rightColumn mainInfo": "rightColumn mainInfo closedInfo"}>
                        <h2>{position.title}</h2>
                        <p dangerouslySetInnerHTML={{__html: position.description}}/>
                        <button className="lightBtn" onClick={this.handleMoreClick}>{this.state.isOpen ? 'close' : 'more details'}</button>
                    </div>
                </div>
            )
        }
        else {
            return(<div></div>)
        }
    }
    handleMoreClick(event){
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Position
