
import { useState } from 'react';
import { useContactContext } from '../ContactContext.jsx';

const AddContact = () => {
  const { dispatch } = useContactContext();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      const newContact = {
        id: new Date().getTime().toString(),
        name,
        email,
      };
      dispatch({ type: 'ADD_CONTACT', payload: newContact });
      setName('');
      setEmail('');
    }
  };

  return (
    <form className="border p-4" onSubmit={handleSubmit}>
      <h2 className="text-2xl mb-4 font-semibold">Add Contact</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-600">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 p-2 border rounded w-full"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Contact
      </button>
    </form>
  );
};

export default AddContact;
