import React, { useEffect, useState } from 'react';
import './Table.css';
const Table = (props) => {
  const [tableData, setTableData] = useState([]);

  useEffect((props) => {
    fetch('http://localhost:8080/api/v1/card')
      .then((response) => response.json())
      .then((data) => setTableData(data.content));
     
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTableData({
      ...tableData,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // code to save data to state or API

  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Card Number</th>
          <th>Balance</th>
          <th>Limit</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row) => (
          <tr>
            <td>{row.cardHolderName}</td>
            <td>{row.cardNumber}</td>
            <td>{row.balance}</td>
            <td>{row.spendLimit}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table;