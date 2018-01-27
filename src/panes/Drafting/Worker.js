import React from "react";
import cx from 'classnames';
import styles from './styles.css';

const CountDisplay = ({name, val}) => (
  <p className={styles.countDisplay}>
    <span className={styles.countName}>{name}</span>
    <span className={styles.countVal}>{val}</span>
  </p>
);

class Worker extends React.PureComponent {
  render() {
    const {id, name, className, theme, summary} = this.props;
    const {reserve, draw, active, dead} = summary || {};
    return (
      <div className={cx(styles.Worker,theme, className)}>
        <header className={styles.header}>
          <h3>{name}</h3>
        </header>
        <main className={styles.main}>
          <CountDisplay name="In Bag" val={draw} />
          <CountDisplay name="Active" val={active} />
          <CountDisplay name="Reserve" val={reserve} />
          <CountDisplay name="Dead" val={dead} />
        </main>
      </div>
    );
  }
}

export default Worker;
