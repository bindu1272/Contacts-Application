import React, { useState,useRef, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addContact, editContact } from "./redux/actions/contactAction";

function AddEditContacts({ addContact,editContactData,editContact }) {
  const closeRef = useRef();
  const [contact, setContact] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });
  useEffect(()=>{
    setContact(editContactData);
  },[editContactData])

  const changeHandler = (name, value) => {
    const oldContact = { ...contact };
    oldContact[name] = value;
    setContact(oldContact);
  };
  const handleSubmit = () => {
      if(contact.id!== null && contact.id!== undefined){
        editContact(contact,contact.id);
      }else{
        addContact(contact);
      }
      setContact({
        name: "",
        phoneNumber: "",
        email: "",
      });
    
    closeRef.current.click();
  };
  return (
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">
          Add/Edit
        </h5>
        <button
          type="button"
          ref={closeRef}
          class="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="name" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="name"
              value={contact.name}
              onChange={(e) => changeHandler("name", e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">
              Phone Number
            </label>
            <input
              type="text"
              class="form-control"
              id="phone"
              value={contact.phoneNumber}
              onChange={(e) => changeHandler("phoneNumber", e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              value={contact.email}
              onChange={(e) => changeHandler("email", e.target.value)}
            />
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">
          Cancel
        </button>
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => handleSubmit()}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  };
};
const mapDispatchToProps = (dispatch) => {
  // return bindActionCreators(
  //     {
  //         addContact(contact)
  //     },
  //     dispatch
  // )
  return {
    addContact: (contact) => dispatch(addContact(contact)),
    editContact : (contact,id)=>dispatch(editContact(contact,id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEditContacts);
