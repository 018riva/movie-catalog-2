import React, { useEffect, useState } from 'react';
import { TableActors } from "./table/TableActors";

const Actors = () => {
  const [actorsData, setActorsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3032/actors');
        const data = await response.json();

        setActorsData(data);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    fetchData();
  }, []);

  const columns = React.useMemo(
    () => [
      { Header: 'ID', accessor: 'objectID' },
      { Header: 'Name', accessor: 'name' },
      { Header: 'Rating', accessor: 'rating' }
    ],
    []
  );

  return <TableActors columns={columns} data={actorsData} />;
};

export { Actors };