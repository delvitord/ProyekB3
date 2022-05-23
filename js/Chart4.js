// JUMLAH TENDER Batal
var xValues = [];
var yValues = [];

new Chart("myChart4", {
  type: "line",
	data: {
	
		labels: xValues,
		datasets: [{
		  label: 'Jumlah Tender Batal',
		  fill: false,
		  lineTension: 0,
		  backgroundColor: "rgb(201, 76, 76)",
		  borderColor: "rgb(201, 76, 76)",
		  data: yValues
		}]
	  },
	plugins: [ChartDataSource],
	options:{
		title:{
			display: true,
			fotSize: 30,
			text: 'JUMLAH TENDER BATAL',
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
				ticks: {min: 0, max:150},
				gridLines: {
					drawOnChartArea: false
				},
				scaleLabel: {
					display: true,
					labelString: 'Jumlah Tender Batal (Satuan)'
				}
			}]
		},
		plugins:{
			datasource:{
				url: 'DataExcel.xlsx',
				rowMapping: 'index',
				dataSetLabels: "'Sheet6'!C5",
                indexLabels: "'Sheet6'!B6:B10",
                data: "'Sheet6'!C6:C10"
			}
		}
	}
});