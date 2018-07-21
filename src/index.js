import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './styles/vendors/bootstrap.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Routes = () => (
  <Router>
    <div>
      <ul className="nav">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/transactions">Transactions</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/transactions" component={App} />
    </div>
  </Router>
);

const Home = () => (
  <div className="jumbotron jumbotron-fluid">
		<div className="container">
    	<h1>YouCare</h1>
			<p>Give a helping hand to your neighborhood.</p>
		</div>
  </div>
);


ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
