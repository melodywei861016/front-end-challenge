import React, {Component} from 'react';

class Report extends Component {
    constructor(props) {
      super(props);
      this.state = {
        report: this.props.report,
      }
    }
    render() {
      return (
          <tr>
              <td>{this.state.report.firstName}</td>
              <td>{this.state.report.lastName}</td>
              <td>{this.state.report.dob}</td>
              <td>{this.state.report.score}</td>
              <td>{this.state.report.ssn}</td>
              <td> <img src={this.state.report.img.picture} /> </td>
              <td> <button type="button" onClick={() => this.props.archive(this.state.report.id)}> Archive </button> </td>
          </tr>
      );
    }
}
export default Report;
