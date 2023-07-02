import React from "react";
import { useTable, useFilters, useSortBy } from "react-table";
import { useState } from 'react';
import "./table-styles.css"

const TableActors = ({ columns, data }) => {
  const [filterInput, setFilterInput] = useState('');

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setFilter,
  } = useTable({ columns, data }, useFilters, useSortBy);

  const handleFilterChange = (e) => {
    const value = e.target.value || '';
    setFilter('name', value);
    setFilterInput(value);
  };

  return (
    <>
      <div>
        <label htmlFor="nameFilter">Search Name:</label>
        <input
          id="nameFilter"
          type="text"
          placeholder="Search by name"
          value={filterInput}
          onChange={handleFilterChange}
        />
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                  </span>
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
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export { TableActors };