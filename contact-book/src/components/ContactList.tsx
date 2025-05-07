import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from './ContactItem';

const ContactList: React.FC = () => {
  const contacts = useSelector((state: { contacts: { list: any[] } }) => state.contacts.list);

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Contacts</h2>
      <ul>
        {contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;