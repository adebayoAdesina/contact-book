import type { Dispatch, UnknownAction } from '@reduxjs/toolkit';
import axiosInstance from '../axios-config';
import type { ContactApiInterface, GetContactsResponse, PostContactRequest, PostContactResponse, EditContactRequest, DeleteContactRequest } from './ContactApiInterface';
import { addContact } from '@/store/contactSlice';

/**
 * Class representing the Contact API.
 * This class provides methods to interact with the backend API for managing contacts.
 */
class ContactApi implements ContactApiInterface {
  /**
   * Fetches a list of contacts from the backend.
   * @param dispatch - Redux dispatch function to update the store.
   * @returns A promise that resolves to the list of contacts.
   */
  async getContacts(dispatch: Dispatch<UnknownAction>): Promise<GetContactsResponse> {
    const response = await axiosInstance.get('/contacts');
    try {
      dispatch(addContact(response.data));
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      throw new Error(errorMessage);
    }
    return response.data;
  }

  /**
   * Creates a new contact and sends it to the backend.
   * @param contact - The contact data to be created.
   * @returns A promise that resolves to the created contact.
   */
  async postContact(contact: PostContactRequest): Promise<PostContactResponse> {
    const response = await axiosInstance.post('/contacts', contact);
    return response.data;
  }

  /**
   * Edits an existing contact and sends the updated data to the backend.
   * @param contact - The contact data to be updated.
   */
  async editContact(contact: EditContactRequest): Promise<void> {
    await axiosInstance.put(`/contacts/${contact.id}`, contact);
  }

  /**
   * Deletes a contact from the backend.
   * @param id - The ID of the contact to be deleted.
   */
  async deleteContact(id: DeleteContactRequest['id']): Promise<void> {
    await axiosInstance.delete(`/contacts/${id}`);
  }
}

export const contactApi = new ContactApi();
