// -When the Deposit button is clicked, you should add the amount entered in the text field to the balance
// -When the Withdraw button is clicked, you should deduct the amount entered in the text field to the balance
// You should not be able to withdraw more than the current balance
// -If the current balance is 0, you should add a class of zero to the <div className="balance"> div
import React, { Component } from 'react';

export default class Account extends Component {
  constructor(){
    super();
    this.state = {
      balance: 0
    }
  }
  _deposit(){
    // get user input from ref enteredAmount
    // reset the balance state,by adding that new amount
    let currentAmount = this.state.balance;
    this.setState({
      balance: currentAmount + +this.refs.enteredAmount.value
    })
  }
  _withdraw(){
    // get user input from ref enteredAmount
    // reset the balance state, by subtracting that new amount
    let currentAmount = this.state.balance;
    this.setState({
      balance: currentAmount + -this.refs.enteredAmount.value
    })
    // make if statement for withdraw is larger than balance
    // disable withdraw button if withdraw is larger than balance
    if (this.refs.enteredAmount.value > currentAmount) {
      alert("Don't you dare")
    }
  }

  render() {
    return (
      <div className="account">
        <h2>TODO: {this.props.name}</h2>
        <div className="balance">${this.state.balance}</div>
        <input type="text" ref="enteredAmount" placeholder="enter an amount" />
        <input type="button" value="Deposit" onClick={this._deposit.bind(this)} />
        <input type="button" value="Withdraw" onClick={this._withdraw.bind(this)} />
      </div>
    )
  }
}
