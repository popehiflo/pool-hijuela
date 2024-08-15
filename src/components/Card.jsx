import PropTypes from 'prop-types';
import styles from './Card.module.css';

const Card = ({ name, color, meaning }) => {
  return (
    <div className={styles.card}>
      <h2>Hola {name}!</h2>
      <h3>Tu color favorito es: {color}</h3>
      <p>Y para ti, significa: {meaning}</p>
    </div>
  )
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  meaning: PropTypes.string.isRequired
};

export default Card;
