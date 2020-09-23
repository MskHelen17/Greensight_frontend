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

    componentWillMount(){
        {/* Певроначально загружаем 1 страницу вакансий без сортировки*/}
        this.setState({positionChoosed: true});
        fetchAPI("")
            .then(res => {
                console.log(res.status)
                if(!res.ok )
                    this.setState({ error: true })
                return res.json();
            }).then(json => {
                this.setState({
                    filteredList: json,
                    positionsList: json,
                    isLoaded: true
                });
            });
    }

    componentWillReceiveProps(nextProps){
        {/* Поиск по описанию вакансии */}
        if((nextProps.description !== this.props.description) ||
        (nextProps.description === '' && this.state.positionsList.length === 0)){
            {/* Сбрасываем счетчик открытых страниц*/}
            this.setState({
                positionChoosed: true,
                showIndex: 5
            });
            fetchAPI(nextProps.description)
                .then(res => {
                    console.log(res.status)
                    if(!res.ok )
                        this.setState({ error: true })
                    return res.json();
                }).then(json => {
                    this.setState({
                        filteredList: json,
                        positionsList: json,
                        isLoaded: true
                    });
            });
        }

        {/* Фильтрация по типу*/}
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
            return <div>Error! Maybe you've made too many requests.</div>
        if (!this.state.positionChoosed)
            return <div>Choose position and press "Enter"</div>
        if (!this.state.isLoaded)
            return <div>Loading...</div>
        if(this.state.filteredList.length === 0)
            return <div>No results</div>
        else
            return (
                <div className="positionsList">
                    {this.state.filteredList.map((position, index) =>
                            <Position key={index} position={position} index={index} showIndex={this.state.showIndex}/>
                    )}
                <button
                    style={this.state.showIndex >= this.state.filteredList.length ? {'display': 'none'} : {'display': 'block'}}
                    onClick={this.handleShowMoreClick}>
                    Show more</button>
                </div>
            )
    }

    handleShowMoreClick(event){
        this.setState({showIndex: this.state.showIndex + 5});
    }
}

export default PositionsList
