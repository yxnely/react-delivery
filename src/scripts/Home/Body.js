import React from 'react';

const Body = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-4">
					<div>
						<img src="/imgs/icons/heart.svg" alt="Heart icon" />
						<h3>Spread your love</h3>
						<p>This first thing</p>
					</div>
				</div>
  			<div className="col-4">
					<div>
						<img src="/imgs/icons/unlock.svg" alt="Unlocked lock icon" />
						<h3>Unlock the possibilities</h3>
						<p>This first thing</p>
					</div>
				</div>
				<div className="col-4">
					<div>
						<img src="/imgs/icons/award.svg" alt="Award icon" />
						<h3>Reap the rewards</h3>
						<p>This first thing</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Body;