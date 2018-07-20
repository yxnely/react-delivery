import React, { Component } from 'react';

class TableHeader extends Component {
	constructor() {
		super();
		this.columns = [
			{
				id: 1,
				column: 'date',
				name: 'Date'
			},
			{
				id: 2,
				column: 'transaction_id',
				name: 'Transaction ID'
			},
			{
				id: 3,
				column: 'location',
				name: 'Location'
			},
			{
				id: 4,
				column: 'amount',
				name: 'Amount'
			}
    ]
	}

	render() {
		return (
      <thead>
        <tr>
          {this.columns.map(col => (
            <th key={col.id} scope="col">{col.name}</th>
          ))}
        </tr>
      </thead>
    );
	}
}

export default TableHeader;