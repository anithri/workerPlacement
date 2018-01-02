import React from "react";
import cx from 'classnames';

const Worker = ({name, id, summary, className}) => {
  const {reserve, draw, active, dead} = summary;
  return (
    <li key={id} className={cx(className)}>
      <table>
        <thead>
        <tr>
          <th colspan="2" className={id}>{name}</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>In Bag:</td>
          <td>{draw}</td>
        </tr>
        <tr>
          <td>Active:</td>
          <td>{active}</td>
        </tr>
        <tr>
          <td>Reserve:</td>
          <td>{reserve}</td>
        </tr>
        <tr>
          <td>Dead:</td>
          <td>{dead}</td>
        </tr>
        </tbody>
      </table>
    </li>
  );
};

export default Worker;
