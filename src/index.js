import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Styles
import './styles/vendors/bootstrap.min.css';
import './index.css';

import App from './App';
import Body from './scripts/Home/Body';
import CallToAction from './scripts/Home/Action';
import Footer from './scripts/Home/Footer';
import Search from './scripts/Donate/Search';
import Options from './scripts/Donate/quickOptions';
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
			<Route path="/donate/personalize" component={DonatePersonalized} />
      <Route path="/transactions" component={App} />
    </div>
  </Router>
);

const Home = () => (
	<div>
		<div className="jumbotron jumbotron-fluid">
			<div className="container">
				<h1>UCare</h1>
				<p className="lead">Give a helping hand to your neighborhood.</p>
				<button type="button" className="btn btn-primary">Donate</button>
			</div>
		</div>
		<Body></Body>
		<CallToAction></CallToAction>
		<Footer></Footer>
	</div>
);

const DonatePersonalized = () => (
	<div className="container">
		<Search></Search>
		<Options></Options>
	</div>
);

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
