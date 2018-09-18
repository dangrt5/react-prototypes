import React, {Component} from "react";
import contactData from "./contacts";
import ContactCard from "./contact-card";

class ContactList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: contactData
    }
  }

  render() {
    const list = this.state.contacts.map((item, index) => {
      return (
        <ContactCard
          className="col-8"
          key={index}
          contact={item}
        />
      )
    });
    return (
      <div>
        <div className="row">{list}</div>
      </div>
    )
  }
}

export default ContactList;
