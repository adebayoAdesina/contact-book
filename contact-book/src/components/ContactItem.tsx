import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../store/contactSlice';

interface ContactProps {
  contact: {
    id: string;
    name: string;
    email: string;
    phone: string;
  };
}

const ContactItem: React.FC<ContactProps> = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      dispatch(deleteContact(contact.id));
    }
  };

  return (
    <li className="border-b py-2 last:border-b-0">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-lg font-bold">{contact.name}</p>
          <p className="text-gray-600">{contact.email}</p>
          <p className="text-gray-600">{contact.phone}</p>
        </div>
        <button onClick={handleDelete} className="bg-red-500 text-white px-2 py-1 rounded">
          Delete
        </button>
      </div>
    </li>
  );
};

export default ContactItem;