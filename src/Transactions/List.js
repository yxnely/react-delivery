import React, { Component } from 'react';
import TableHeader from './TableHeader';

class TransactionsList extends Component {
  constructor(props) {
    super(props);
    this.transactionsList = [
      {
        id: 1,
        order: {
          location: '100 Main St, Orlando, FL 32718',
          name: 'Pub of America',
          date: new Date(),
          amount: 17
        }
      },
      {
        id: 2,
        order: {
          location: '200 Main St, Orlando, FL 32718',
          name: 'Walmart',
          date: new Date(),
          amount: 20
        }
      },
      {
        id: 3,
        order: {
          location: '300 Main St, Orlando, FL 32718',
          name: 'Chinese Takeout',
          date: new Date(),
          amount: 100
        }
      },
      {
        id: 4,
        order: {
          location: '400 Main St, Orlando, FL 32718',
          name: 'Orlando Park',
          date: new Date(),
          amount: 120
        }
      }
    ];
  }

  render() {
    return (
      <table className="table">
        <TableHeader></TableHeader>
      </table>
    );
  }
}

export default TransactionsList;