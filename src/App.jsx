import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import s from "./App.module.css";
import initContacts from "./helpers/init-contacts.json";

const LS_KEY = "contacts";

export default function App() {
  const [isEmpty, setIsEmpty] = useState(false);
  const [searchField, setSearchField] = useState("");
  const [contact, setContact] = useState(
    () => JSON.parse(localStorage.getItem(LS_KEY)) ?? initContacts
  );
  const filteredContacts = contact.filter((search) =>
    search.name.toLowerCase().includes(searchField.toLowerCase())
  );

  useEffect(() => {
    !contact.length ? setIsEmpty(true) : setIsEmpty(false);
    localStorage.setItem(LS_KEY, JSON.stringify(contact));
  }, [contact]);

  const handleChangeInput = (e) => {
    setSearchField(e.target.value.trim() || "");
  };

  const handleAdd = (values, action) => {
    const contactInclude = contact.some(
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
    const newContact = {
      id: crypto.randomUUID(),
      ...values,
    };
    setContact((prev) => [...prev, newContact]);
    action.resetForm();
  };

  return (
    <section className={s.wrapper}>
      <h1>Phone book</h1>
      <ContactForm handleAdd={handleAdd} />
      <SearchBox searchField={searchField} inputSearch={handleChangeInput} />
      <ContactList
        filteredContacts={filteredContacts}
        setContact={setContact}
        isEmpty={isEmpty}
      />
    </section>
  );
}
