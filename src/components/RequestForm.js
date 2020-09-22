import React from 'react'

class RequestForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            tel: '',
            comment: ''
        };
        this.handleSendClick = this.handleSendClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    render() {
    return(
        <div className="requestContact">
            <form className="leftColumn">
                <label>Your name</label>
                <input type="text" placeholder="Please introduce yourself" name="name" onChange={this.handleInputChange}  value={this.state.name}></input>

                <label>Email</label>
                <input type="email" placeholder="ivanov@mail.ru" name="email" onChange={this.handleInputChange} value={this.state.email}></input>

                <label>Phone number</label>
                <input type="tel" placeholder="+7 (999) 123-45-78" name="tel" onChange={this.handleInputChange} value={this.state.tel}></input>

                <label>Comment</label>
                <input type="text" placeholder="Message text" name="comment" onChange={this.handleInputChange} value={this.state.comment}></input>
                <div className="clearfix">
                    <button onClick={this.handleSendClick}>Send</button>
                    <div className="sendInfo">By clicking "Send" you confirm your consent to the
                    <p><u className="dotted">processing of personal data</u></p></div>
                </div>
            </form>
            <div className="rightColumn">
                <h4>We will advise you and help you start a new project</h4>
                <h2>+7 499 391-66-69</h2>
                <h2>mail@greensight.ru</h2>
                <div className="adress">
                    <p>Moscow, Zelenograd, Central Ave.,</p>
                    <p>bldg.305, 3rd floor</p>
                </div>
                <p>How to get there?</p>
            </div>
        </div>
    )}

    handleInputChange(event){
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSendClick(event){
        alert(`name: ${this.state.name}\n`+
            `email: ${this.state.email}\n`+
            `tel: ${this.state.tel}\n`+
            `comment: ${this.state.comment}\n`);
    }
}

export default RequestForm
