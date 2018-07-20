import React, { Component } from 'react';

class TableHeader extends Component {
	constructor() {
		super();
		this.columns = [
      'date',
      'transaction_id',
      'location',
      'amount'
    ]
	}

	render() {
		return (
      <thead>
        <tr>
          {this.columns.map((col, idx) => (
            <th key={idx} scope="col">{col}</th>
          ))}
        </tr>
      </thead>
    );
	}
}

export default TableHeader;