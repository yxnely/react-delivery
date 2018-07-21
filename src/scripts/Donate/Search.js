import React from 'react';

const Search = () => {
	return (
		<form>
			<div className="form-row">
				<div className="col-12">
					<label className="sr-only" htmlFor="inlineFormInputGroup">Search</label>
					<div className="input-group mb-2">
						<div className="input-group-prepend">
							<div className="input-group-text">Search</div>
						</div>
						<input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Search" />
					</div>
				</div>
			</div>
		</form>
	)
}

export default Search;