import React from 'react'
import FilterBlock from './FilterBlock';
import PositionsList from './PositionsList';
import RequestForm from './RequestForm';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: "",
            type: "",

        }
        this.handlePositionChanged = this.handlePositionChanged.bind(this);
        this.handleTypeChanged = this.handleTypeChanged.bind(this);
    }
    render() {
        return (
            <div className="page">
                <h1 className="title">List of vacancies</h1>
                <FilterBlock onPositionChange={this.handlePositionChanged} onTypeChange={this.handleTypeChanged}/>
                <PositionsList description={this.state.description} type={this.state.type}/>
                <h1 className="title">Leave a request</h1>
                <RequestForm />
            </div>
        )
    }
    handlePositionChanged(position) {
        this.setState({description: position});
    }
    handleTypeChanged(type) {
        this.setState({type: type});
    }
}

export default App
