import React, { Component } from 'react';

class TableHeader extends Component {
	constructor() {
		super();
		this.columns = [
			{
				column: 'date',
				name: 'Date'
			},
			{
				column: 'transaction_id',
				name: 'Transaction ID'
			},
			{
				column: 'name',
				name: 'Name'
			},
			{
				column: 'location',
				name: 'Location'
			},
			{
				column: 'amount',
				name: 'Amount'
			}
    ]
	}

	render() {
		return (
      <thead>
        <tr>
          {this.columns.map((col, idx) => (
            <th key={idx} scope="col">{col.name}</th>
          ))}
        </tr>
      </thead>
    );
	}
}

export default TableHeader;