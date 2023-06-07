import './App.css';
import Header from './components/Header/Header';
import Contacts from './components/Dashboard/Contacts/Contacts'
import { useEffect, useState } from 'react';
import NewContact from './components/Dashboard/NewContact/NewContact';

const DUMMY_CONTACTS = [
  { id: Math.random().toString(), contactName: 'Priyanshi', mobileNumber: 1234567890 },
  { id: Math.random().toString(), contactName: 'Mom', mobileNumber: 6476348912 },
  { id: Math.random().toString(), contactName: 'Alice', mobileNumber: 3689426578 },
  { id: Math.random().toString(), contactName: 'Hellen', mobileNumber: 6482940764 },
  { id: Math.random().toString(), contactName: 'Alia', mobileNumber: 5434940764 },
]

function App() {

  const [contactList, setContactList] = useState(DUMMY_CONTACTS);

  const onDeleteContactHandler = (id) => {
    setContactList(prevContactList => {
      const updatedContactList = prevContactList.filter(contact => contact.id !== id);
      return updatedContactList;
    });
  }

  const onAddContactHandler = (contact) => {
    setContactList(prevState => {
      const updatedContactList = [...prevState, contact];
      return updatedContactList;
    })
  }

  function compare(a, b) {
    if (a.contactName < b.contactName) {
      return -1;
    }
    if (a.contactName > b.contactName) {
      return 1;
    }
    return 0;
  }
  contactList.sort(compare);
  useEffect(
    () => {
      contactList.sort(compare);

    }
  )

  let content = (
    <p style={{ textAlign: 'center', color: 'purple', fontSize: '25px' }}>No contact found. Maybe add one?</p>
  );

  if (contactList.length > 0) {
    content = (
      <Contacts contacts={contactList} onDeleteContact={onDeleteContactHandler} />

    )
  }

  return (
    <>
      <Header />
      <NewContact addContact={onAddContactHandler} />
      {content}
    </>
  );
}

export default App;
