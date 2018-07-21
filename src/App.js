import React, { Component } from 'react';
import TransactionsList from './scripts/Transactions/List';

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

const App = () => (
  <div className="container mt-3">
    <header>
      <h1>Delivery App</h1>
    </header>
    <Transactions></Transactions>
  </div>
);

export default App;
