import { useState } from 'react';
import Card from './components/Card';
import Form from './components/Form';
import styles from './App.module.css';

function App() {
  const [formData, setFormData] = useState(null);
  const [error, setError] = useState('');

  return (
    <div className={styles.app}>
      <h1>Tu Color Favorito</h1>
      <Form setFormData={setFormData} setError={setError} />
      {error && <p className={styles.error}>{error}</p>}
      {formData ? <Card name={formData.name} color={formData.color} meaning={formData.meaning} /> : null}
    </div>
  )
}

export default App;
