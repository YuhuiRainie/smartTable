import React from 'react'
import './App.css'
import data from './data.json'
import * as ReactBootStrap from 'react-bootstrap'

function App () {

  const nonRepeatedCategory = {}
  // const nonRepeatedData = () => {
     
  //   for (var j = 0; j < 5; j++) {
  //     if (nonRepeatedCategory.indexOf(data[j].category) < 0) {
  //       nonRepeatedCategory.push(data[j])
  //     }
  //   }
  //   console.log(Object.keys(nonRepeatedCategory))
  //   console.log(Object.values(nonRepeatedCategory))
  // }
  // const nonRepeatedData = (data,keyGetter)=> {
  //   const map = new Map()
  //   data.forEach(element => {
  //     const key = keyGetter(element)
  //     const collection = map.get(key)
  //     if(!collection) {
  //       map.set(key,[element])
  //     } else {
  //       collection.push(element)
  //     }
      
  //   });
  // }
  const nonRepeatedData = () => {
    data.forEach((item) => {
      if(!nonRepeatedCategory[item.category]){
        nonRepeatedCategory[item.category] = item.amount
      }
      else{
        nonRepeatedCategory[item.category] =+ item.amount
      }
    });
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
          {renderDataForRow(nonRepeatedCategory)}
        </tbody>
      </ReactBootStrap.Table>
    </div>
  )
}

export default App
