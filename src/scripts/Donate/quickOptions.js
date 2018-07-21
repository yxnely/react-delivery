import React from 'react';

class options extends React.Component {
	constructor() {
    super();
    this.state = {};
    this.options = []
	}

	render() {
		return (
			<div className="d-flex justify-content-between">
				{this.options.map(opt => (
					<button key={opt.id} type="button" className="btn btn-primary mb-1">
						{opt.name}
					</button>
				))}
			</div>
		);
	}
}

export default options;