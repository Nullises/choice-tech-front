import React from "react";
import { Table } from "react-bootstrap";

const DataTable = ({ file, lines }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>File Name</th>
          <th>Text</th>
          <th>Number</th>
          <th>Hex</th>
        </tr>
      </thead>
      <tbody>
        {lines && lines.length > 0 ? (
          lines.map((line, index) => (
            <tr key={index}>
              <td>{file}</td>
              <td>{line.text}</td>
              <td>{line.number}</td>
              <td>{line.hex}</td>
            </tr>
          ))
        ) : (
          <p>No hay datos</p>
        )}
      </tbody>
    </Table>
  );
};

export default DataTable;
