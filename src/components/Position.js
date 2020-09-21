import React from 'react'

class Position extends React.Component {
    render() {
        const {position} = this.props
        return(
            <div key="">
                <img />
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
                <button>more details</button>
            </div>
        )
    }
}

export default Position