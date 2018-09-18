import React, {Component} from "react";
import ContactList from "./contact-list";
import ContactForm from "./contact-form";
import contactData from "./contacts"

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      contacts: contactData
    }
  }


  render() {
  return  (
      <div className="container">
        <h1 className="text-center my-3">Address Book</h1>
        <div className="row">
          <div className="col-4">
            <ContactForm/>
          </div>
          <ContactList contacts={this.state.contacts}/>
        </div>
      </div>
        )
  }
}

export default App;
