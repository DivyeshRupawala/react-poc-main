import React, {useEffect} from 'react';

class Cell extends React.Component {
  render() {
    return <td key = {this.props.idx} >{this.props.data}</td>;
  }
}

class Row extends React.Component {
  render() {
    var cells = [];
    for (var i = 0; i < 10; i++) {
      cells.push(Object.keys(this.props).map((data,id)=>{
        let props = {
          idx:id,
          data:this.props[data]
        }
        return (        
          <Cell {...props}/>
        )
      }));
    }
    return cells;
  }
}

const Table = (props) => {

  const { tableData, headerData } = props;

  const tableHeader = () => {
    var columns = [];
    for (var i = 0; i < 10; i++) {
        columns.push(headerData.map((data, idx) => {
          let props = {
            idx:idx,
            data:data
          }
          return (        
              <Cell {...props}/>
          )
        }));
    }
    return columns;
  }

  const returnTableData = () => {
    return tableData.map((todos, idx) => {
      const { id } = todos;
      return (
        <tr data-id = {id} key = {id}>
          <Row {...todos}/>
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