import React from 'react';

const Search = () => {
	return (
		<form>
			<div className="form-row">
				<div className="col-sm-11 mb-2">
					<label className="sr-only" htmlFor="search">Search</label>
					<div className="input-group">
						<input type="text" className="form-control" id="search" placeholder="Enter item name" />
					</div>
				</div>
				<div className="col-sm-1 mb-2">
					<button type="submit" className="btn btn-primary">Search</button>
				</div>
			</div>
		</form>
	)
}

export default Search;