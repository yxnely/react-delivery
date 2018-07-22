import React from 'react';
import Rqst from '../Service/Request';
import 'whatwg-fetch';

class options extends React.Component {
	constructor() {
    super();
    this.state = {
			isChosen: false,
			options: [],
			list: [],
		};
		this.list = [];
	}

	componentDidMount() {
		fetch('https://raw.githubusercontent.com/yxnely/react-delivery/master/src/data/options.json', {
			method: 'GET',
		})
		.then(res => res.json())
		.then((data) => {
			this.setState({ options: data.options });
		});
	}

	handleClick(evt) {
		evt.preventDefault();
		
		const selectedItem = Number(evt.target.value);

		this.addItem(this.state.options[selectedItem - 1], this.setBtn, evt);
	}

	setBtn(btn) {
		if (btn.classList.contains('btn-light')) {
			btn.classList.add('btn-success')
			btn.classList.remove('btn-light')
		} else {
			btn.classList.add('btn-light')
			btn.classList.remove('btn-success')
		}
	}

	addItem(item, callback, evt) {
		this.list.push(item);

		this.setState({ list: this.list })

		Rqst.set('list', this.list);

		callback(evt.target);
	}

	render() {
		console.log(100, this.list);
		return (
			<div>
				<div className="d-flex flex-wrap justify-content-between">
					{this.state.options.map(opt => (
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
				<ul className="list-group">
					{this.list.map((item) => 
						<li className="list-group-item" key={item.id}>{item.name}</li>
					)}
				</ul>
			</div>
		);
	}
}

export default options;