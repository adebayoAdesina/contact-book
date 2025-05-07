import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact, type Contact } from "../store/contactSlice";
import { Button } from "./ui/button";
import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";

const ContactFormSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone is required"),
});

const ContactForm: React.FC = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validationSchema: ContactFormSchema,
    onSubmit: (values, { resetForm }) => {
      const contactWithId = {
        ...values,
        id: uuidv4(), // or Date.now() if you prefer
      };

      dispatch(addContact(contactWithId));
      resetForm();
    },
  });

  return (
    <div className="max-w-md mx-auto p-4 glassmorphism rounded-lg shadow-md text-white">
      <h2 className="text-2xl font-bold mb-4">Add Contact</h2>
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
          {formik.touched.name && formik.errors.name && (
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
          {formik.touched.email && formik.errors.email && (
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
          {formik.touched.phone && formik.errors.phone && (
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
