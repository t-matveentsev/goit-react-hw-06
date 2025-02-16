import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import s from "./App.module.css";

export default function App() {
  return (
    <section className={s.wrapper}>
      <h1>Phone book</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </section>
  );
}
