import { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({ setFormData, setError }) => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [meaning, setMeaning] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setError('');
    setFormData({
      name,
      color,
      meaning
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ingresa tu nombre"
        
      />
      <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="Tu color favorito favorito (formato HEX)"
        
      />
      <input
        type="text"
        value={meaning}
        onChange={(e) => setMeaning(e.target.value)}
        placeholder="¿Qué significa ese color para ti?"
        
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

Form.propTypes = {
  setFormData: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired
};

export default Form;
