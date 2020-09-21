import React from 'react'
import FilterBlock from './FilterBlock';
import PositionsList from './PositionsList';
import RequestForm from './RequestForm';


class App extends React.Component {

    render() {
        return (
            <div className="page">
                <h1>List of vacancies</h1>
                <FilterBlock />
                <PositionsList/>
                <RequestForm />
            </div>
        )
    }
}

export default App
