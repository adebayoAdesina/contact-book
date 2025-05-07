import Swal from "sweetalert2";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import { useFormik } from "formik";
import { contactApi } from "@/api/ContactApi";
import { clearEditContent } from "@/store/contactSlice";

/**
 * Validation schema for the contact form using Yup.
 * Ensures that the name, email, and phone fields are required and valid.
 */
const ContactFormSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone is required"),
});

/**
 * The ContactForm component.
 * This component handles the form for adding a new contact.
 */
const ContactForm: React.FC = () => {
  const dispatch = useDispatch();
  const edit = useSelector(
    (state: { contacts: { editList: any } }) => state.contacts.editList
  );
  console.log(edit);

  /**
   * Formik configuration for handling form submission and validation.
   * Initializes form values, sets up validation schema, and defines the submit handler.
   */
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: edit?.name || "",
      email: edit?.email || "",
      phone: edit?.phone || "",
    },
    validationSchema: ContactFormSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        if (edit) {
          await contactApi.editContact({
            id: edit.id,
            name: values.name,
            email: values.email,
            phone: values.phone,
          });
          await contactApi.getContacts(dispatch);
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Edit successfully",
          });
          resetForm();
        } else {
          await contactApi.postContact(values);
          await contactApi.getContacts(dispatch);
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Contact added",
          });
          resetForm();
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error || "An error occur",
          text: "Something went wrong!",
        });
      }
    },
  });

  return (
    <div className="max-w-md mx-auto p-4 glassmorphism rounded-lg shadow-md text-white">
      {edit?.id ? (
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold mb-4">Edit Contact</h2>
          <button
            onClick={() => dispatch(clearEditContent())}
            className="bg-white text-black px-2 py-1 w-10 h-10 rounded-full"
          >
            X
          </button>
        </div>
      ) : (
        <h2 className="text-2xl font-bold mb-4">Add Contact</h2>
      )}
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
          {formik.touched.name && typeof formik.errors.name === "string" && (
            <div className="text-red-500">{formik.errors.name}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
          {formik.touched.email && typeof formik.errors.email === "string" && (
            <div className="text-red-500">{formik.errors.email}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block font-bold mb-2">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
          {formik.touched.phone && typeof formik.errors.phone === "string" && (
            <div className="text-red-500">{formik.errors.phone}</div>
          )}
        </div>
        <Button
          type="submit"
          disabled={formik.isSubmitting}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Contact
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
