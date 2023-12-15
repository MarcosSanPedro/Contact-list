import { useContactContext } from '../ContactContext.jsx';
const Contact = ({ contact }) => {
  const { dispatch } = useContactContext();

  const handleDelete = () => {
    dispatch({ type: 'DELETE_CONTACT', payload: contact.id });
  };

  return (
    <div className="border p-4 mb-4 flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold">{contact.name}</h3>
        <p className="text-gray-600">{contact.email}</p>
      </div>
      <button
        onClick={handleDelete}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
