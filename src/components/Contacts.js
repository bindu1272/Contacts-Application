import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getAllContacts,
  getSingleContact,
  deleteContact,
} from "../components/redux/actions/contactAction";
import AddEditContacts from "./AddEditContacts";

function Contacts({
  getAllContacts,
  contacts,
  getSingleContact,
  contact,
  deleteContact,
}) {
  useEffect(() => {
    getAllContacts();
  }, []);
  const handleDelete = (index) => {
    const confirm = window.confirm("Are you sure to delete?");
    if (confirm) {
      deleteContact(index);
    }
  };
  return (
    <>
      <div className="container d-flex justify-content-between mt-4">
        <h1> All Contacts</h1>
        <button
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          Add contact
        </button>
      </div>
      <div className="container  mt-4">
        {!contacts.length > 0 ? <h1 className="text-center text-danger">There is No Contacts</h1>  :(
          <table class="table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => {
                return (
                  <tr>
                    <th>{index + 1}</th>
                    <td>{contact.name}</td>
                    <td>{contact.phoneNumber}</td>
                    <td>{contact.email}</td>
                    <td>
                      <button
                        className="btn btn-primary me-2"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        onClick={() => getSingleContact(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}

        <div
          class="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <AddEditContacts editContactData={contact} />
          </div>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
    contact: state.contact,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getAllContacts: () => dispatch(getAllContacts()),
    getSingleContact: (index) => dispatch(getSingleContact(index)),
    deleteContact: (index) => dispatch(deleteContact(index)),
  };
  //   return bindActionCreators(
  //     {
  //       getAllContacts,
  //     },
  //     dispatch
  //   );
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
