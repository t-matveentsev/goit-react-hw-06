import s from "./Contact.module.css";

const Contact = ({ name, number, id, handleDelete }) => {
  return (
    <li className={s.item}>
      <p>{name}</p>
      <p>{number}</p>
      <button className={s.itemBtn} onClick={() => handleDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
