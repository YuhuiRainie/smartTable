import React from 'react'
import './App.css'
import data from './data.json'
import * as ReactBootStrap from 'react-bootstrap'

function App () {
  const nonRepeatedCategory = {}
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
    for (let i = 0; i < data.length; i++) {
      if (!nonRepeatedCategory[data[i].category]) {
        nonRepeatedArray.push(data[i])
        nonRepeatedCategory[data[i].category] = data[i].amount
      } else {
        nonRepeatedCategory[data[i].category] += data[i].amount
        nonRepeatedArray.forEach((row) => {
          if (row.category === data[i].category) {
            console.log("before",row.category,row.amount)
            row.amount += data[i].amount
            row.amount = Number.parseFloat(row.amount).toFixed(2)
            console.log("after",row.category,row.amount)
            row.balance += data[i].balance
          }
        })
      }
    }
    console.log("as",nonRepeatedArray)
    console.log(nonRepeatedCategory)
  }
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
        </tbody>
      </ReactBootStrap.Table>
    </div>
  )
}

export default App
