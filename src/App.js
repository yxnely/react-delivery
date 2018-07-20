import React, { Component } from 'react';

import TransactionsList from './Transactions/List';

class Transactions extends Component {
	render() {
		return (
			<div>
				<header>
					<h2>Transactions</h2>
				</header>
        <TransactionsList></TransactionsList>
			</div>
		)
	}
}

class App extends Component {
  render() {
    return (
      <div className="container mt-3">
        <header>
          <h1>Delivery App</h1>
        </header>
        <Transactions></Transactions>
      </div>
    );
  }
}

export default App;
