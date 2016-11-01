// When the Deposit button is clicked, you should add the amount entered in the text field to the balance
import React, { Component } from 'react';

export default class Account extends Component {
  constructor(){
    super();
    this.state = {
      balance: 0
    }
  }
  render() {
    return (
      <div className="account">
        <h2>TODO: {this.props.name}</h2>
        <div className="balance">$0</div>
        <input type="text" placeholder="enter an amount" />
        <input type="button" value="Deposit" />
        <input type="button" value="Withdraw" />
      </div>
    )
  }
}
