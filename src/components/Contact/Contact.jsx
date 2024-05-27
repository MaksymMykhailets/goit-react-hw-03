import styles from './Contact.module.css';

const Contact = ({ id, name, number, deleteContact }) => {
  return (
    <li className={styles.contactItem}>
      <span>
        <p>
          {name}: {number}
        </p>
      </span>
      <button onClick={() => deleteContact(id)} className={styles.deleteButton}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
