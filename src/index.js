import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Styles
import './styles/vendors/bootstrap.min.css';
import './index.css';

import App from './App';
import Body from './scripts/Home/Body';
import registerServiceWorker from './registerServiceWorker';

const Routes = () => (
  <Router>
    <div>
      <nav className="navbar navbar-expand-lg container">
				<ul className="navbar-nav">
					<li className="nav-item">
						<Link className="nav-link" to="/">Home</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/transactions">Transactions</Link>
					</li>
				</ul>
      </nav>

      <Route exact path="/" component={Home} />
      <Route path="/transactions" component={App} />
    </div>
  </Router>
);

const Home = () => (
	<div>
		<div className="jumbotron jumbotron-fluid">
			<div className="container">
				<h1>YouCare</h1>
				<h2 className="h3 mb-2">Give a helping hand to your neighborhood.</h2>
				<button type="button" class="btn btn-primary">Donate</button>
			</div>
		</div>
		<Body></Body>
	</div>
);


ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
