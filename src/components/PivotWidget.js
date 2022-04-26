import React from "react";
import { publish, subscribe } from "../utils/PubSub"


export class PivotWidget extends React.Component {

  constructor(props) {
    super(props);
    this.state = {sales: 10};
    this.data = {
        chart1: {
          labels: ["Eating", "Drinking", "Sleeping"],
          datasets: [
            {
              label: "My First dataset",
              backgroundColor: ["#F2C94C", "#2F80ED", "#9B51E0"],
              borderWidth: 0,
              data: [9, 22, 7],
            },
          ],
        },
      };          
  }

  componentDidMount() {
    this.unsubscribe = subscribe("calculated-value-binding", "111", (data) => {
      console.log("Calculated Data Binding:", data);
      this.setState({
        sales: data.data[0].sales
      });
    });
  }

  publishEvent(val) {
    publish("pivot-binding", { data: [{sales: val}]});          
  }

  render() {
    return (
      <div className="card-bg">
      <div className="d-flex flex-column p-0 h-100">
        <div className="mx-4 mt-3 d-flex justify-content-between align-items-center">
          <h4 className="font-weight-bold text-dark h5">Page Visits</h4>
          <div className="p-1 bg-grey rounded-circle">
            <i className="fas fa-sticky-note"></i>
          </div>
        </div>
        <table style={{height:'200ox;', scroll:'none'}}>
          <thead color="light">
            <tr>
              <th>Page Name</th>
              <th className="table-rem">Views</th>
              <th className="table-rem">Value</th>
              <th>Bounce Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>/demo/admin/index.html</td>
              <td className="table-rem">3,689</td>
              <td className="table-rem" onClick={ () => this.publishEvent(this.state.sales)}>{this.state.sales}</td>
              <td className="text-success text-center">
                <i className="fas fa-arrow-up"></i> 20%
              </td>
            </tr>
            <tr>
              <td>/demo/admin/index.html</td>
              <td className="table-rem">3,689</td>
              <td className="table-rem">$10</td>
              <td className="text-success text-center">
                <i className="fas fa-arrow-up"></i> 20%
              </td>
            </tr>
            <tr>
              <td>/demo/admin/index.html</td>
              <td className="table-rem">3,689</td>
              <td className="table-rem">$10</td>
              <td className="text-success text-center">
                <i className="fas fa-arrow-up"></i> 20%
              </td>
            </tr>
          </tbody>
        </table>
        <p className="c-p text-dark font-weight-bold text-right mt-auto mr-3">
          See More
          <i className="fas fa-arrow-right ml-1"></i>
        </p>
      </div>
    </div>
    );
  }

}
