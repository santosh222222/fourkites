import React from 'react';
import { useTable } from 'react-table';

const DataTable = () => {
  // Sample data
  const data = React.useMemo(
    () => [
      { id: 1, name: 'John Doe', age: 25 },
      { id: 2, name: 'Jane Smith', age: 32 },
      { id: 3, name: 'Bob Johnson', age: 45 },
    ],
    []
  );

  // Define table columns
  const columns = React.useMemo(
    () => [
      { Header: 'ID', accessor: 'id' },
      { Header: 'Name', accessor: 'name' },
      { Header: 'Age', accessor: 'age' },
    ],
    []
  );

  // Create an instance of the table
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  // Render the table
  return (
    <table {...getTableProps()} style={{ border: '1px solid black' }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{ borderBottom: 'solid 3px red' }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td
                  {...cell.getCellProps()}
                  style={{
                    padding: '10px',
                    border: 'solid 1px gray',
                    background: 'papayawhip',
                  }}
                >
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataTable;
