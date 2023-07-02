import React, { useEffect, useState } from 'react';
import { TableMovies } from "./table/TableMovies";

const Movies = () => {
  const [filmsData, setFilmsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3031/movies');
        const data = await response.json();

        setFilmsData(data);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    fetchData();
  }, []);

  const columns = React.useMemo(
    () => [
      { Header: 'ID', accessor: 'id' },
      { Header: 'Title', accessor: 'title' },
      { Header: 'Year', accessor: 'year' },
      { Header: 'Actors', accessor: 'actors'}
    ],
    []
  );

  return <TableMovies columns={columns} data={filmsData} />;
};;
  
export {Movies}