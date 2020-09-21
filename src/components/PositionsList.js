import React from 'react'
import Position from './Position';

function fetchAPI(description) {
    {/* Используем CORS proxy, чтобы получить json со стороннего сайта*/}
    const url = new URL("https://cors-anywhere.herokuapp.com/" +
        "https://jobs.github.com/positions.json");
    if(description !== "")
        url.searchParams.append("description", description);
    {/* Используем метод get, параметры передаем с помощью searchParams.append*/}
    return fetch(url);
}

class PositionsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            positionsList: [],
            filteredList: [],
            isLoaded: false,
            positionChoosed: false,
            error: false,
            showIndex: 5
        }
        this.handleShowMoreClick = this.handleShowMoreClick.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if((nextProps.description !== this.props.description) ||
        (nextProps.description === '' && this.state.positionsList.length === 0)){
            this.setState({positionChoosed: true});
            fetchAPI(nextProps.description)
                .then(res => {
                    console.log(res.status)
                    if(!res.ok )
                        this.setState({
                            error: true
                        })
                    return res.json();
                })
                .then(json => {
                    this.setState({
                        filteredList: json,
                        positionsList: json,
                        isLoaded: true
                    });
            });
        }
        if(nextProps.type !== this.props.type){
            let tempList = this.state.positionsList.slice();

            if(nextProps.type === "not selected")
                this.setState({filteredList: tempList})
            else
                this.setState({
                    filteredList: tempList.filter((position) => position.type.toUpperCase() === nextProps.type.toUpperCase())
                })
        }
    }

    render() {
        if (this.state.error)
            return <div>Error! Maybe you've made too many requests or there is no such vacancies.</div>
        if (!this.state.positionChoosed)
            return <div>Choose position and press "Enter"</div>
        if (!this.state.isLoaded)
            return <div>Loading...</div>
        else
            return (
                <div>
                    <ul>{this.state.filteredList.map((position, index) =>
                        <li key={index}>
                            <Position position={position} index={index} showIndex={this.state.showIndex}/>
                        </li>
                    )}</ul>
                <button onClick={this.handleShowMoreClick}>Show more</button>
                </div>
            )
    }

    handleShowMoreClick(event){
        this.setState({showIndex: this.state.showIndex + 5});
    }
}

export default PositionsList
