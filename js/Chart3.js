// JUMLAH TENDER SELESAI
var xValues = [];
var yValues = [];

new Chart("myChart3", {
  type: "line",
  
  data: {
	
    labels: xValues,
    datasets: [{
	  label: 'Jumlah Tender Selesai',
      fill: false,
      lineTension: 0,
      backgroundColor: "rgb(201, 76, 76)",
      borderColor: "rgb(201, 76, 76)",
      data: yValues
    }]
  },
  animation: {
	duration: 500,
	easing: "easeOutQuart",
  	onAnimationComplete : function () {

	var ctx = this.chart.ctx;
	ctx.font = this.scale.font;
	ctx.fillStyle = this.scale.textColor
	ctx.textAlign = "center";
	ctx.textBaseline = "bottom";

	this.datasets.forEach(function (dataset) {
		dataset.points.forEach(function (points) {
			ctx.fillText(points.value, points.x, points.y - 10);
		});
	})
	}
  },
	plugins: [ChartDataSource],
	legend: {display: false},
	options:{
		title:{
			display: true,
			fotSize: 30,
			text: 'JUMLAH TENDER SELESAI',
		},
		scales: {
			xAxes: [{
				barPercentage: 0.4,
				scaleLabel: {
					display: true,
					labelString: 'Tahun'
				}
			}],
			yAxes: [{
				id: 'jmlPeserta',
				ticks: {min: 0, max:700},
				gridLines: {
					drawOnChartArea: false
				},
				scaleLabel: {
					display: true,
					labelString: 'Jumlah Tender Selesai (Satuan)'
				}
			}]
		},
		plugins:{
			datasource:{
				url: 'DataExcel.xlsx',
				rowMapping: 'index',
				dataSetLabels: "'Sheet5'!C5",
                indexLabels: "'Sheet5'!B6:B10",
                data: "'Sheet5'!C6:C10"
			}
		}
	}
});