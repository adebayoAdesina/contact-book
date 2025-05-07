import type { Dispatch, UnknownAction } from "@reduxjs/toolkit";

/**
 * Interface representing a contact.
 * Each contact has an ID, name, email, and phone number.
 */
export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

/**
 * Interface representing the response from the `getContacts` API method.
 * It contains a list of contacts.
 */
export interface GetContactsResponse {
  contacts: Contact[];
}

/**
 * Interface representing the request payload for the `postContact` API method.
 * It contains the name, email, and phone number of the contact to be created.
 */
export interface PostContactRequest {
  name: string;
  email: string;
  phone: string;
}

/**
 * Interface representing the response from the `postContact` API method.
 * It contains the ID of the newly created contact.
 */
export interface PostContactResponse {
  id: number;
}

/**
 * Interface representing the request payload for the `editContact` API method.
 * It contains the ID, name, email, and phone number of the contact to be updated.
 */
export interface EditContactRequest {
  id: number;
  name: string;
  email: string;
  phone: string;
}

/**
 * Interface representing the request payload for the `deleteContact` API method.
 * It contains the ID of the contact to be deleted.
 */
export interface DeleteContactRequest {
  id: string;
}

/**
 * Interface representing the methods of the Contact API.
 * This interface defines the methods for interacting with the backend API for managing contacts.
 */
export interface ContactApiInterface {
  /**
   * Fetches a list of contacts from the backend.
   * @param dispatch - Redux dispatch function to update the store.
   * @returns A promise that resolves to the list of contacts.
   */
  getContacts(dispatch: Dispatch<UnknownAction>): Promise<GetContactsResponse>;

  /**
   * Creates a new contact and sends it to the backend.
   * @param contact - The contact data to be created.
   * @returns A promise that resolves to the created contact.
   */
  postContact(contact: PostContactRequest): Promise<PostContactResponse>;

  /**
   * Edits an existing contact and sends the updated data to the backend.
   * @param contact - The contact data to be updated.
   */
  editContact(contact: EditContactRequest): Promise<void>;

  /**
   * Deletes a contact from the backend.
   * @param id - The ID of the contact to be deleted.
   */
  deleteContact(id: DeleteContactRequest['id']): Promise<void>;
}