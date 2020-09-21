import React from 'react'

class RequestForm extends React.Component {
  render() {
    return(
        <div className="requestContact">
            <h1></h1>
            <form>
                <label>Your name</label>
                <input type="text" placeholder="Please introduce yourself"></input>

                <label>Email</label>
                <input type="text" placeholder="ivanov@mail.ru"></input>

                <label>Phone number</label>
                <input type="text" placeholder="+7 (999) 123-45-78"></input>

                <label>Comment</label>
                <input type="text" placeholder="Message text"></input>
                
                <button>Send</button>
            </form>
            <div className="contactInfo">
                <p>We will advise you and help you start a new project</p>
                <h2>+7 499 391-66-69</h2>
                <h2>mail@greensight.ru</h2>
                <div className="adress">
                    <p>Moscow, Zelenograd, Central Ave.,</p>
                    <p>bldg.305, 3rd floor</p>
                </div>
                <p>How to get there?</p>
            </div>
        </div>
    )
  }
}

export default RequestForm
