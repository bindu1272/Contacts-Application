const intialContacts = {
  contacts: [
    {
      name: "bindu",
      phoneNumber: "6302654379",
      email: "n151272@rguktn.ac.in",
    },
  ],
  contact: {},
};
export const contactReducers = (state = intialContacts, action) => {
  switch (action.type) {
    case "GET_ALL_CONTACTS":
      return { ...state };
    case "ADD_CONTACT": {
      let contacts = [...state.contacts];
      contacts.push(action.payload);
      return { ...state, contacts };
    }
    case "GET_SINGLE_CONTACT":
      return {
        ...state,
        contact: { ...state.contacts[action.index], id: action.index },
      };
    case "EDIT_CONTACT":
      let contacts = [...state.contacts];
      contacts[action.id] = action.payload;
      return { ...state, contacts };
    case "DELETE_CONTACT":
      const newcontacts = [...state.contacts];
      newcontacts.splice(action.index, 1);
      return { ...state, contacts : newcontacts };

    default:
      return state;
  }
};
