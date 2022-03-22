import React, {useEffect} from 'react';

const Table = (props) => {

  const { tableData, headerData } = props;

  const tableHeader = () => {
    return headerData.map((data, idx) => {
      return (        
          <td key={idx}>{data}</td>
      )
    })
  }

  const returnTableData = () => {
    return tableData.map((todos, idx) => {
      const { id, albumId, title, url } = todos;
      return (
        <tr data-id={id} key={id}>
          <td>{id}</td>
          <td>{albumId}</td>
          <td>{title}</td>
          <td>{url}</td>
        </tr>
      )
    });
  }

  return (
    <>
      <table>
        <thead>
          <tr>            
            {tableHeader()}
          </tr>          
        </thead>
        <tbody>
          {returnTableData()}          
        </tbody>
      </table>
    </>
  )
}

export default Table;