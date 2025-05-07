import { contactApi } from "@/api/ContactApi";
import { editContact } from "@/store/contactSlice";
import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

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

  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You are about to delete this contact!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        await contactApi.deleteContact(id);
        await contactApi.getContacts(dispatch);
        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: "The contact has been deleted.",
          timer: 1500,
          showConfirmButton: false,
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "An error occurred",
          text: (error as Error)?.message || "Something went wrong!",
        });
      }
    }
  };

  const handleEdit = (res: {
    id: string;
    name: string;
    email: string;
    phone: string;
  }) => {
    dispatch(editContact(res));
  };

  return (
    <li className="border-b py-2 last:border-b-0">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-lg font-bold">{contact.name}</p>
          <p className="text-gray-600">{contact.email}</p>
          <p className="text-gray-600">{contact.phone}</p>
        </div>
        <div className="flex">
          <button
            onClick={() => handleEdit(contact)}
            className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(contact.id)}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default ContactItem;
