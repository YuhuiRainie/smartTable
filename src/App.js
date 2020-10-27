import React from 'react'
import './App.css'
import data from './data.json'
import * as ReactBootStrap from 'react-bootstrap'

function App () {
  const nonRepeatedCategory = []
  const nonRepeatedArray = []
  // const nonRepeatedData = () => {
  //   data.forEach((item) => {
  //     if (!nonRepeatedCategory[item.category]) {
  //       nonRepeatedArray.push(item)
  //       nonRepeatedCategory[item.category] = item.amount
  //     } else {
  //       nonRepeatedCategory[item.category] += item.amount
  //       nonRepeatedArray[nonRepeatedArray.indexOf(item)].amount += item.amount
  //     }
  //   })
  //   console.log(nonRepeatedArray)
  //   console.log(nonRepeatedCategory)
  // }
  const nonRepeated = () => {
    // data.forEach(element => {
    //   if (nonRepeatedCategory.indexOf(element.category) < 0) {
    //     nonRepeatedCategory.push(element.category)
    //     nonRepeatedArray.push(element)
    //   } else {
    //     console.log(Object.entries(element))
    //   }
    // })
  }
  let set = new Set(data)
  const renderDataForRow = (dataForRow, index) => {
    return (
      <tr key={dataForRow.id}>
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
            <th> </th>
            <th>Category</th>
            <th>Amout</th>
            <th>Balance</th>
            <th>Date</th>
            <th>day_sequence</th>
          </tr>
        </thead>
        <tbody>
          {nonRepeated()}
          {nonRepeatedArray.map((row, key) => {
            return (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{row.category}</td>
                <td>{row.amount}</td>
                <td>{row.balance}</td>
                <td>{row.transaction_date}</td>
                <td>{row.day_sequence}</td>
              </tr>
            )
          })}
          {/* {console.log(nonRepeatedArray)}
          {console.log(nonRepeatedCategory)} */}
          {console.log(set)}
        </tbody>
      </ReactBootStrap.Table>
    </div>
  )
}

export default App
