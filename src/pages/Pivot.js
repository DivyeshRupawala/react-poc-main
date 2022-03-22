import { useEffect, useState } from 'react';
import Table from '../components/Table';


export const Pivot = () => {
const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => setData(json))
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="App">
      {
        data && 
        <Table
          tableData = {data}
          headerData = {['id', 'albumId', 'title', 'url']}
        />
      }
    </div>
  );
};
