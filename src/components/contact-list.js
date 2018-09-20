import React, {Component} from "react";
import ContactCard from "./contact-card";

class ContactList extends Component {
  render() {
    const list = this.props.contacts.map((item, index) => {
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
