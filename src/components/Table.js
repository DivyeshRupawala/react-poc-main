import React, {useEffect} from 'react';

class Cell extends React.Component {
  cellClick(e) {
    console.log("Cell clicked: Cell : "+e.target.attributes[0].value + " Value: "+e.target.textContent)
  }

  render() {
    return <td key = {this.props.idx} onClick={this.cellClick} data-cell={this.props.cell}>{this.props.data}</td>;
  }
}

class Row extends React.Component {
  render() {
    var cells = [];
    for (var i = 0; i < 10; i++) {
      cells.push(Object.keys(this.props).map((data,id)=>{
        let props = {
          idx:id,
          data:this.props[data],
          cell:i
        }
        return (            
          <Cell {...props} />          
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

  const onGridClick = (e) => {    
    console.log("Grid clicked: Cell : "+e.target.attributes[0].value + " Value: "+e.target.textContent)     
  }

  const returnTableData = () => {
    const onRowclick = (e) => {         
      console.log("Row clicked: Cell : "+e.target.attributes[0].value + " Value: "+e.target.textContent)    
    }

    return tableData.map((todos, idx) => {
      const { id } = todos;
      return (
        <tr data-id = {id} key = {id}>
          <div onClick={onRowclick}>
            <Row {...todos}/>
          </div>          
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
        <tbody onClick={onGridClick}>
          {returnTableData()}    
        </tbody>
      </table>
    </>
  )
}

export default Table;