import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import onlyLetters from "../../helpers/validation-name";
import onlyPhone from "../../helpers/validation-phone";
import s from "./ContactForm.module.css";

const ContactForm = ({ handleAdd }) => {
  const initialValues = {
    name: "",
    number: "",
  };

  const applySchema = Yup.object().shape({
    name: Yup.string()
      .required("required")
      .matches(onlyLetters, "The name cannot contain numbers!")
      .min(3, "The name must be longer than 3 symbols!")
      .max(50, "Maximum 50 symbols"),
    number: Yup.string()
      .required("required")
      .matches(
        onlyPhone,
        "Please enter your phone number in the format 000-00-00 or 000-000-000"
      )
      .min(8, "The phone number must be longer than 8 symbols!")
      .max(11, "Maximum 11 symbols"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleAdd}
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
