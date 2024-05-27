const Contact = ({ id, name, number, deleteContact }) => {
  return (
    <li>
      <span>
        <p>
          {name} : {number}
        </p>
      </span>
      <button onClick={() => deleteContact(id)}>Delete</button>
    </li>
  );
};

export default Contact;
