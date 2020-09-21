import React from 'react'
import Position from './Position';

class PositionsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            positionsList: {},
            isLoaded: false,
        }
    }
    componentDidMount() {
        const url = new URL("https://cors-anywhere.herokuapp.com/" +
            "https://jobs.github.com/positions.json");
        let description = ""
        url.searchParams.append("description", description);
        fetch(url)
        .then(res => {return res.json();})
        .then(json => {
            this.setState({
                isLoaded: true,
                positionsList: json,    })
        });
    }


  render() {
        const { isLoaded, positionsList } = this.state;
        if (!isLoaded)
            return <div>Loading...</div>
        else
            return (
                <div >
                    <ul>{positionsList.map( (position, index) =>
                        <li key={index}>
                            <Position position={position}/>
                        </li>
                    )}</ul>
                </div>
            )

    }
}

export default PositionsList
