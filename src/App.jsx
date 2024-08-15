import { useState } from 'react';
import Card from './Card';
import Form from './Form';

function App() {
  const [formData, setFormData] = useState(null);
  const [error, setError] = useState('');

  return (
    <div>
      <h1>Tu Color Favorito</h1>
      <Form setFormData={setFormData} setError={setError} />
      {error && <p>{error}</p>}
      {formData ? <Card name={formData.name} color={formData.color} meaning={formData.meaning} /> : null}
    </div>
  )
}

export default App
