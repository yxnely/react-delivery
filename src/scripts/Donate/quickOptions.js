import React from 'react';

class options extends React.Component {
	constructor() {
    super();
    this.state = {
			isChosen: false
		};
    this.options = [
			{
				"id": 1,
				"name": "Socks",
				"price": 2.99
			},
			{
				"id": 2,
				"name": "Shoes",
				"price": 9.99
			},
			{
				"id": 3,
				"name": "Toothbrush",
				"price": 0.99
			},
			{
				"id": 4,
				"name": "Toothpaste",
				"price": 1.99
			},
			{
				"id": 5,
				"name": "Brush",
				"price": 1.99
			}
			,
			{
				"id": 6,
				"name": "Shirt",
				"price": 3.99
			},
			{
				"id": 7,
				"name": "Jeans",
				"price": 8.99
			},
			{
				"id": 8,
				"name": "Deodorant",
				"price": 1.99
			},
			{
				"id": 9,
				"name": "Shampoo",
				"price": 1.99
			},
			{
				"id": 10,
				"name": "Mittens",
				"price": 3.99
			},
			{
				"id": 11,
				"name": "Blanket",
				"price": 10.49
			},
			{
				"id": 12,
				"name": "Canned Food",
				"price": 5.00
			},
			{
				"id": 13,
				"name": "Water",
				"price": 1.99
			},
			{
				"id": 14,
				"name": "Canned Food",
				"price": 5.00
			},
			{
				"id": 15,
				"name": "Water",
				"price": 1.99
			}
		];
		this.list = [];
	}

	handleClick(evt) {
		evt.preventDefault();
		
		const selectedItem = Number(evt.target.value);

		this.addItem(this.options[selectedItem - 1]);

	}

	addItem(item) {
		this.list.push(item);
	}

	render() {
		return (
			<div className="d-flex flex-wrap justify-content-between">
				{this.options.map(opt => (
					<button
						onClick={e => this.handleClick(e)}
						key={opt.id}
						type="button"
						value={opt.id}
						className="col-md-2 btn btn-light mb-3 mr-2"
					>{opt.name}
					</button>
				))}
			</div>
		);
	}
}

export default options;