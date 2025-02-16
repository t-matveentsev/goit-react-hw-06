import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ setContact, filteredContacts, isEmpty }) => {
  // const handleDelete = (id) => {
  //   const newContactList = filteredContacts.filter((item) => item.id != id);
  //   setContact(newContactList);
  // };
  const handleDelete = (contactId) => {
    setContact((prev) => {
      return prev.filter((item) => item.id !== contactId);
    });
  };

  return (
    <div>
      <ul className={s.wrapper}>
        {filteredContacts.map((item) => (
          <Contact key={item.id} {...item} handleDelete={handleDelete} />
        ))}
      </ul>
      {isEmpty && (
        <p className={s.info}>
          Oops, it seems you don&apos;t have any contacts yet, add them in the
          field above!
        </p>
      )}
    </div>
  );
};

export default ContactList;
