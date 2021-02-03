import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {

  static propTypes = {
    title: PropTypes.string,
  }

  render() {
    return (
      <div className={styles.component}>
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}

export default Card;