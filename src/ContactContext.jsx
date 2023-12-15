import { createContext, useReducer, useContext } from 'react';

const ContactContext = createContext();

const initialState = {
  contacts: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        contacts: [...state.contacts, action.payload],
      };
    case 'UPDATE_CONTACT':
      return {
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    case 'DELETE_CONTACT':
      return {
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export const ContactProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContactContext.Provider value={{ state, dispatch }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContactContext = () => {
  return useContext(ContactContext);
};
