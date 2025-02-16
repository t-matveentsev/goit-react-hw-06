import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { applySchema } from "../../helpers/schema";
import { addContact } from "../../redux/contactsSlice/contactSlice";

const ContactForm = () => {
  const contacts = useSelector((state) => state.contacts.contact);

  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    number: "",
  };

  const onSubmit = (values, options, action) => {
    const newContact = {
      id: crypto.randomUUID(),
      name: values.name,
      number: values.number,
    };
    const contactInclude = contacts.some(
      (contact) =>
        contact.name.toLowerCase() === values.name.toLowerCase() ||
        contact.number === values.number
    );

    if (contactInclude) {
      alert(
        "A contact with that name or phone number already exists! Use the search!"
      );
      action.setSubmitting(false);
      return;
    }
    dispatch(addContact(newContact));
    options.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={applySchema}
      >
        <Form>
          <Field name="name" placeholder="Name" />
          <ErrorMessage name="name" component="p" className={s.errorMessage} />
          <Field name="number" placeholder="Phone number" />
          <ErrorMessage
            name="number"
            component="p"
            className={s.errorMessage}
          />
          <button className={s.button} type="submit">
            Add new contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
