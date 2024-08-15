import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

const Form = ({ setFormData, setError }) => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [meaning, setMeaning] = useState('');

  const resetForm = () => {
    setName('');
    setColor('');
    setMeaning('');
  };

  const validateForm = () => {
    if (name.trim().length < 3 || name.startsWith(' ')) {
      setError('Por favor chequea que la información sea correcta.');
      return false;
    }

    if (!/^#[0-9A-F]{6}$/i.test(color)) {
      setError('Por favor ingresa un color válido en formato HEX (#FFF000)');
      return false;
    }
    
    if (meaning.length < 6) {
      setError('Por favor chequea que la información sea correcta.');
      return false;
    }

    setError('');
    return true;
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    // Validations
    if (validateForm()) {
      setFormData({
        name,
        color,
        meaning
      });
      resetForm();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ingresa tu nombre"
        className={styles.input}
      />
      <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="Tu color favorito favorito (formato HEX)"
        className={styles.input}
      />
      <input
        type="text"
        value={meaning}
        onChange={(e) => setMeaning(e.target.value)}
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
