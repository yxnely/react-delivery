import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

class TransactionsList extends Component {

  render() {
    return (
      <table className="table">
        <TableHeader></TableHeader>
        <TableBody></TableBody>
      </table>
    );
  }
}

export default TransactionsList;