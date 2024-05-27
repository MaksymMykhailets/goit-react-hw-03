import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import styles from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(50, 'Must be 50 characters or less')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(50, 'Must be 50 characters or less')
    .required('Required'),
});

const ContactForm = ({ addContact }) => {
  const userId = useId();
  const numberId = useId();

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    addContact({ name: values.name, number: values.number });
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor={userId} className={styles.label}>
            Name
          </label>
          <Field name="name" type="text" id={userId} className={styles.input} />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor={numberId} className={styles.label}>
            Number
          </label>
          <Field
            name="number"
            type="text"
            id={numberId}
            className={styles.input}
          />
          <ErrorMessage
            name="number"
            component="div"
            className={styles.error}
          />
        </div>
        <button type="submit" className={styles.button}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
