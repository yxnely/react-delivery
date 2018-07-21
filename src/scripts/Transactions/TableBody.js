import React, { Component } from 'react';

class TableBody extends Component {
	constructor() {
		super();
		this.transactionsList = [
      {
        id: 1,
        order: {
					id: 10001,
          location: '100 Main St, Orlando, FL 32718',
          name: 'Pub of America',
          date: new Date(),
          amount: 17
        }
      },
      {
        id: 2,
        order: {
					id: 10002,
          location: '200 Main St, Orlando, FL 32718',
          name: 'Walmart',
          date: new Date(),
          amount: 20
        }
      },
      {
        id: 3,
        order: {
					id: 10003,
          location: '300 Main St, Orlando, FL 32718',
          name: 'Chinese Takeout',
          date: new Date(),
          amount: 100
        }
      },
      {
        id: 4,
        order: {
					id: 10004,
          location: '400 Main St, Orlando, FL 32718',
          name: 'Orlando Park',
          date: new Date(),
          amount: 120
        }
      }
    ]
	}

	render() {
		return (
      <tbody>
				{this.transactionsList.map(item => (
					<tr key={item.id}>
						<th scope="row">{item.order.date.toLocaleDateString('en-US')}</th>
						<td>{item.order.id}</td>
						<td>{item.order.name}</td>
						<td>{item.order.location}</td>
						<td>{item.order.amount.toLocaleString('USD')}</td>
					</tr>
				))}
      </tbody>
    );
	}
}

export default TableBody;