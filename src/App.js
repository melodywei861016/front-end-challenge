import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import logo from './logo.svg';
import { BACKEND_SERVER_PORT } from './constants';
import ReportsScreenFunc from './components/ReportsScreenFunc';
import './App.css'; 

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			response: {
				count: 10,
				cursor: new Date(new Date().setFullYear(2011)).toISOString(),
				reports: [],
			},
		}
		this.patch = this.patch.bind(this);
		this.archive = this.archive.bind(this);
		this.load = this.load.bind(this);
	}

	componentDidMount() {
		this.fetch_reports();
	}

	patch(url, data) {
		return fetch(url, {
			body: JSON.stringify(data),
			headers: {'content-type': 'application/json'},
			method: 'PATCH',
		})
		.then(response => response.json())
	}

	archive(report_id) {
		this.patch(`http://localhost:${BACKEND_SERVER_PORT}/api/requests/archive`, {id: report_id})
		.then(result => this.setState({ response: {
				count: 0,
				cursor: new Date(new Date().setFullYear(2011)).toISOString(),
				reports: this.state.response.reports.filter(report => report.id !== report_id),
			}
		}));
	}

	load() {
		this.setState({ response: {
			count: this.state.response.count + 10,
			cursor: new Date(new Date().setFullYear(2011)).toISOString(),
			reports: this.state.response.reports,
			}
		});
	}

	fetch_reports() {
		// const nextCount = cursor === this.state.cursorFilter ? this.state.data.count + 20 : 20;
		const date = new Date(new Date().setFullYear(2011)).toISOString();
		fetch(`http://localhost:${BACKEND_SERVER_PORT}/api/requests?count=${this.state.response.count}&cursor=${date}`)
			.then(result => result.json())
			.then(result => this.setState({ response: result }));
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to Nova's front-end code challenge!</h1>
				</header>
				<ReportsScreenFunc
					reports={this.state.response.reports}
					archive = {this.archive}
				/>
				<button type="button" onClick={() => this.load()}>Load</button>
			</div>
		);
	}
}
export default App;
