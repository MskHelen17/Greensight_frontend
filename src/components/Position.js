import React from 'react'

class Position extends React.Component {
    render() {
        const {position} = this.props
        if(this.props.index < this.props.showIndex){
            return(
                <div className="position">
                    <img src={position.company_logo}/>
                    <div className="quickInfo">
                        <a>Form: </a><p>{position.type}</p>
                        <a>Company: </a><p>{position.company}</p>
                        <a>Web: </a><p>{position.company_url}</p>
                        <a>Address: </a><p>{position.location}</p>
                    </div>
                    <div className="mainInfo">
                        <h2>{position.title}</h2>
                        <p dangerouslySetInnerHTML={{__html: position.description}}/>
                    </div>
                    <button className="lightBtn">more details</button>
                    </div>
            )
        }
        else {
            return(<div></div>)
        }
    }
}

export default Position
