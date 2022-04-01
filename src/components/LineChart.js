import React, { Component } from 'react';
import Chart from 'chart.js';

class LineChart extends Component {

	chartRef = React.createRef();

	componentDidMount() {
		const ctx = this.chartRef.current.getContext("2d");
		
		new Chart(ctx, {
			type: "bar", //bar, line,bubble
			data: {
				labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
				datasets: [{ 
					data: [86,114,102,95,107,111,133],
					label: "Total",
					borderColor: "#3e95cd",
					backgroundColor: "#7bb6dd",
					fill: false,
					showLine: true,
					type: 'scatter'
				}, { 
					data: [70,90,44,60,83,90,100],
					label: "Accepted",
					borderColor: "#3cba9f",
					backgroundColor: "#71d1bd",
					fill: false,
					// showLine: true,
					// type: 'scatter'			
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
				}
				]
			},
			options: {
				 responsive: true,
				  legend: {
					onHover:  function(evt, item, legend) {
						console.log("called on over");						
					},
					onLeave: function(evt, item, legend) {
						console.log("called on leave");
					}
				  },
				  onClick(c,i) {
					var e = i[0];
					console.log(e._index)
					var x_value = this.data.labels[e._index];
					var y_value = this.data.datasets[0].data[e._index];
					console.log(x_value);
					console.log(y_value);					
				  }
			  }
		});
	}
	render() {
		return (
			<div>
				<canvas id="myChart" ref={this.chartRef} style={{width:1000,height:700}}/>
			</div>
			)
	}
}

export default LineChart;