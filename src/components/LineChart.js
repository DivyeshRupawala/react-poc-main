import React, { Component } from 'react';
import Chart from 'chart.js';

class LineChart extends Component {

	chartRef = React.createRef();

    constructor(props) {
        super(props);
    }

	componentDidMount() {
		const ctx = this.chartRef.current.getContext("2d");		
		new Chart(ctx, {
			type: "line",
            events: ['click'],           
			data: {
				labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
				datasets: [{ 
					data: [86,114,106,106,107,111,133],
					label: "Total",
					borderColor: "#3e95cd",
					backgroundColor: "#7bb6dd",
					fill: false,
				}, { 
					data: [70,90,44,60,83,90,100],
					label: "Accepted",
					borderColor: "#3cba9f",
					backgroundColor: "#71d1bd",
					fill: false,
				}, { 
					data: [10,21,60,44,17,21,17],
					label: "Pending",
					borderColor: "#ffa500",
					backgroundColor:"#ffc04d",
					fill: false,
				}, { 
					data: [6,3,2,2,7,0,16],
					label: "Rejected",
					borderColor: "#c45850",
					backgroundColor:"#d78f89",
					fill: false,
				},
                { 
					data: [16,13,12,12,17,10,116],
					label: "Rejected",
					borderColor: "#c45850",
					backgroundColor:"#d78f89",
					fill: false,
				},
                { 
					data: [186,14,6,6,7,11,33],
					label: "Total",
					borderColor: "#3e95cd",
					backgroundColor: "#7bb6dd",
					fill: false,
				}, { 
					data: [170,190,144,160,183,190,10],
					label: "Accepted",
					borderColor: "#3cba9f",
					backgroundColor: "#71d1bd",
					fill: false,
				}, { 
					data: [101,20,150,200,171,211,171],
					label: "Pending",
					borderColor: "#ffa500",
					backgroundColor:"#ffc04d",
					fill: false,
				}, { 
					data: [6,3,2,2,7,0,16],
					label: "Rejected",
					borderColor: "#c45850",
					backgroundColor:"#d78f89",
					fill: false,
				},
                { 
					data: [16,13,12,12,17,10,116],
					label: "Rejected",
					borderColor: "#c45850",
					backgroundColor:"#d78f89",
					fill: false,
				}
				]
			},
		});
	}

    calledClick(evt, element) {
        alert("test");
    }

	render() {
		return (
			<div style={{width:500,height:1000}}>
				<canvas id="myChart" ref={this.chartRef} style={{width:500,height:300}} onClick={this.calledClick}/>
			</div>
			)
	}
}

export default LineChart;