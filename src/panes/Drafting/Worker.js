import React from "react";

const Worker = ({name, id, reserve, bag, working, className}) => {
  return (
    <li key={id} className={className}>
      <table>
        <thead>
        <tr>
          <th colspan="2">{name}</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>In Bag:</td>
          <td>{bag}</td>
        </tr>
        <tr>
          <td>Working:</td>
          <td>{working}</td>
        </tr>
        <tr>
          <td>Reserve:</td>
          <td>{reserve}</td>
        </tr>
        </tbody>
      </table>
    </li>
  );
};

export default Worker;
