import * as Yup from "yup";

const onlyLetters = /^[A-Za-zА-Яа-яЄєІіЇїҐґ-\s]+$/;
const onlyPhone = /^\d{3}-\d{2,3}-\d{2,3}$/;

export const applySchema = Yup.object().shape({
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
