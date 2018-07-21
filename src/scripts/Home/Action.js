import React from 'react';

const CallToAction = () => {
	return (
		<div className="mt-5">
			<h2 className="text-center mb-4">Two Ways to Donate</h2>

			<div className="container">
				<div className="row">
					<div className="col-md mb-3">
						<img src="/imgs/icons/dollar-sign.svg" alt="Dollar sign icon" className="mb-3" />
						<h3 className="mb-3 h4">Direct Donation</h3>
						<p>Id tempor nullam vivamus lobortis turpis ac condimentum porta vehicula, nisl fringilla velit. Id tempor nullam vivamus lobortis turpis ac condimentum porta vehicula, nisl fringilla velit.</p>
						<button type="button" className="btn btn-primary">Donate</button>
					</div>
					<div className="col-md mb-3">
						<img src="/imgs/icons/user.svg" alt="User icon" className="mb-3" />
						<h3 className="mb-3 h4">Personalized Donation</h3>
						<p>Id tempor nullam vivamus lobortis turpis ac condimentum porta vehicula, nisl fringilla velit. Id tempor nullam vivamus lobortis turpis ac condimentum porta vehicula, nisl fringilla velit.</p>
						<button type="button" className="btn btn-primary">Donate</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CallToAction;