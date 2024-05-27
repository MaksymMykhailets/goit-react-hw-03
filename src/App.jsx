import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import initialContacts from './components/ContactList/contacts.json';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import styles from './App.module.css';

function App() {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) || initialContacts;
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const addContact = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <div className={styles.appContainer}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox filter={filter} setFilter={setFilter} />
      <ContactList
        contacts={getFilteredContacts()}
        deleteContact={deleteContact}
      />
    </div>
  );
}

export default App;
