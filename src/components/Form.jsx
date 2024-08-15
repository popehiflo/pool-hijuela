import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

const Form = ({ setFormData, setError }) => {
  const [formState, setFormState] = useState({
    name: '',
    color: '',
    meaning: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const resetForm = () => {
    setFormState({
      name: '',
      color: '',
      meaning: ''
    });
  };

  const validateForm = () => {
    if (formState.name.trim().length < 3 || formState.name.startsWith(' ')) {
      setError('Por favor chequea que la información sea correcta.');
      return false;
    }

    if (!/^#[0-9A-F]{6}$/i.test(formState.color)) {
      setError('Por favor ingresa un color válido en formato HEX (#FFF000)');
      return false;
    }
    
    if (formState.meaning.length < 6) {
      setError('Por favor chequea que la información sea correcta.');
      return false;
    }

    setError('');
    return true;
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setFormData(formState);
      resetForm();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        name="name"
        value={formState.name}
        onChange={handleInputChange}
        placeholder="Ingresa tu nombre"
        className={styles.input}
      />
      <input
        type="text"
        name="color"
        value={formState.color}
        onChange={handleInputChange}
        placeholder="Tu color favorito favorito (formato HEX)"
        className={styles.input}
      />
      <input
        type="text"
        name="meaning"
        value={formState.meaning}
        onChange={handleInputChange}
        placeholder="¿Qué significa ese color para ti?"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>Enviar</button>
    </form>
  );
};

Form.propTypes = {
  setFormData: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired
};

export default Form;
