import React from 'react'
import './App.css'
import data from './data.json'
import * as ReactBootStrap from 'react-bootstrap'

function App () {

  const nonRepeatedCategory = []
  const nonRepeatedData = data => {
    data.forEach(basket => { //(2)
      for (let [key, value] of Object.entries(basket)) { //(3)
        if (result[key]) { //(4)
          result[key] += value; //(5)
        } else { //(6)
          result[key] = value;
        }
      }});
    // for (var j = 0; j < 5; j++) {
    //   if (nonRepeatedCategory.indexOf(data[j].category) < 0) {
    //     nonRepeatedCategory.push(data[j])
    //   }
    // }
    console.log(nonRepeatedCategory)
  }
  const renderDataForRow = (dataForRow, index) => {
    return (
      <tr key={index}>
        <td>{dataForRow.category}</td>
        <td>{dataForRow.amount}</td>
        <td>{dataForRow.balance}</td>
        <td>{dataForRow.transaction_date}</td>
        <td>{dataForRow.day_sequence}</td>
      </tr>
    )
  }
  return (
    <div className='App'>
      <ReactBootStrap.Table striped bordered hover>
        <thead>
          <tr>
            <th>Category</th>
            <th>Amout</th>
            <th>Balance</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {nonRepeatedData()}
          {nonRepeatedCategory.map(renderDataForRow)}
        </tbody>
      </ReactBootStrap.Table>
    </div>
  )
}

export default App
