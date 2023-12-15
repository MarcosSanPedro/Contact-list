import { ContactProvider, useContactContext } from './ContactContext';
import Contact from './components/Contact';
import AddContact from './components/AddContact';

function App() {
  return (
    <ContactProvider>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">Contact List App</h1>
        <AddContact />
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contacts</h2>
          <ContactList />
        </div>
      </div>
    </ContactProvider>
  );
}

const ContactList = () => {
  const { state } = useContactContext();

  return (
    <div>
      {state.contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default App;
