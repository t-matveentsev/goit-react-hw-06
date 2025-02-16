import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contact);
  const filter = useSelector((state) => state.filter.filter);

  const filterData = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      {filterData.length > 0 ? (
        <ul className={s.wrapper}>
          {filterData.map((item) => (
            <Contact key={item.id} {...item} />
          ))}
        </ul>
      ) : (
        <p className={s.info}>
          Oops, it seems you don&apos;t have any contacts yet, add them in the
          field above!
        </p>
      )}
    </div>
  );
};

export default ContactList;
