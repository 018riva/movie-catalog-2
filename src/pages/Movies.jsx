import React, { useEffect, useState } from 'react';
import { JsonServer } from "./table/JsonServer";

const Movies = () => {
  const [filmsData, setFilmsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3031/movies');
        const data = await response.json();

        setFilmsData(data);
      } catch (error) {
        console.error('Помилка завантаження даних:', error);
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

  return <JsonServer columns={columns} data={filmsData} />;
};;
  
export {Movies}