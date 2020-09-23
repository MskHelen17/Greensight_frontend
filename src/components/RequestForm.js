import React from 'react'

const emailRegexp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
const telRegexp = /\+7\s?[\(]{0,1}[0-9]{3}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}/;

class RequestForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            tel: '',
            comment: '',
            validTel: true,
            validEmail: true,
            validName: true
        };
        this.handleSendClick = this.handleSendClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    render() {
    return(
        <div className="requestContact">
            <form className="leftColumn">
                <label>Your name</label>
                <input type="text" placeholder="Please introduce yourself" name="name"
                onChange={this.handleInputChange}  value={this.state.name}
                className={!!this.state.validName ? "" : "invalid"}></input>
                <p style={!!this.state.validName ? {"display": "none"} : {"display": "block"}}>Пожалуйста, введите имя</p>

                <label>Email</label>
                <input type="email" placeholder="ivanov@mail.ru" name="email"
                onChange={this.handleInputChange} value={this.state.email}
                className={!!this.state.validEmail ? "" : "invalid"}></input>
                <p style={!!this.state.validEmail ? {"display": "none"} : {"display": "block"}}>Почтовый адрес имеет неверный формат</p>

                <label>Phone number</label>
                <input type="tel" placeholder="+7 (999) 123-45-78" name="tel"
                onChange={this.handleInputChange} value={this.state.tel}
                className={!!this.state.validTel ? "" : "invalid"}></input>
                <p style={!!this.state.validTel ? {"display": "none"} : {"display": "block"}}>Номер имеет неверный формат</p>

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
        console.log('send')
        this.setState({
            validName:true,
            validEmail:true,
            validTel:true
        })
        let flag = 0;
        
        if(!telRegexp.test(this.state.tel))
            this.setState({validTel:false})
        else flag++

        if(!emailRegexp.test(this.state.email))
            this.setState({validEmail:false})
        else flag++

        if(this.state.name === "")
            this.setState({validName:false})
        else flag++

        if(flag === 3){
            alert(`name: ${this.state.name}\n`+
                `email: ${this.state.email}\n`+
                `tel: ${this.state.tel}\n`+
                `comment: ${this.state.comment}\n`);
        }
        event.preventDefault();

    }
}

export default RequestForm
