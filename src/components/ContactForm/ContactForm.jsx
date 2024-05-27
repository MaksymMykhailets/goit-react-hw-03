import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';

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
      <Form>
        <div>
          <label htmlFor={userId}>Name</label>
          <Field name="name" type="text" id={userId} />
          <ErrorMessage name="name" component="div" />
        </div>
        <div>
          <label htmlFor={numberId}>Number</label>
          <Field name="number" type="text" id={numberId} />
          <ErrorMessage name="number" component="div" />
        </div>
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
