import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './formLayout'

import Display from "./DisplayInfo"

import uuid from 'uuid'

class App extends Component {


  expense = new Array();
  income = new Array();
  a = 0
  e = 0;
  total = 0
  state = {

    budget: [{
      id: undefined,
      description: undefined,
      budgetType: undefined,
      amount: undefined,
      total: undefined
    }]

  }

  add = (e) => {
    e.preventDefault()
    //amount
    const description = e.target.elements.description.value;
    const amount = e.target.elements.amount.value;
    const expense = e.target.elements.expense.value;

    var tempAmount = parseInt(amount);







    if (expense == "Expense") {
      var tempAmount = this.e + tempAmount
      let obj = {
        id: uuid.v4(),

        description: description,
        budgetType: "Expense",
        amount: amount,
        totalExpense: tempAmount
      }
      this.e = tempAmount

      this.state.budget.push(obj)
      this.setState(this.state)

      console.log(this.state)


    } else {

      var tempAmount = this.a + tempAmount
      let obj = {
        id: uuid.v4(),
        description: description,
        budgetType: "Income",
        amount: amount,
        totalIncome: tempAmount
      }
      this.a = tempAmount

      this.state.budget.push(obj)
      this.setState(this.state)

      console.log(this.state)

    }

  }

  render() {
    const incomes = this.state.budget.map(item => <Display key={item.id} description={item.description} amount={item.amount} budgetType={item.budgetType} handleClick={this.handleClick} />)
    console.log(this.a)
    console.log(this.e)
    this.total = this.a - this.e
    return (
      <div >

        <div className="show-balance">
        <div class="container">
          <div class="row">
            <div class="col-sm">
              Total icome  :{this.a}
            </div>
            <div class="col-sm">
              Total icome  : {this.e}
            </div>
            <div class="col-sm">
              Total = {this.total}
            </div>
          </div>
        </div>
        </div>
        <Form add={this.add} />
        <div className="kb">
          {incomes}
        </div>
      </div>
    );
  }
}

export default App;
