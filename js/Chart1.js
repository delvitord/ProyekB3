// JUMLAH PERUSAHAAN YANG IKUT TENDER SETIAP TAHUN
var xValues = [];
var yValues = [];
var barColors = ["LightSalmon","LightSalmon","LightSalmon","LightSalmon","LightSalmon"];

new Chart("myChart1", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  plugins: [ChartDataSource],
  options: {
    legend: {display: false},
    title: {
        display: true,
        fotSize: 30,
        text: 'JUMLAH PERUSAHAAN YANG IKUT TENDER SETIAP TAHUN',
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
            ticks: {min: 0, max:4500},
            gridLines: {
                drawOnChartArea: false
            },
            scaleLabel: {
                display: true,
                labelString: 'Jumlah Peserta (Satuan)'
            }
        }]
    },
	animation: {
		duration: 500,
		easing: "easeOutQuart",
		onComplete: function () {
			var ctx = this.chart.ctx;
			ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, 'normal', Chart.defaults.global.defaultFontFamily);
			ctx.textAlign = 'center';
			ctx.textBaseline = 'bottom';

			this.data.datasets.forEach(function (dataset) {
				for (var i = 0; i < dataset.data.length; i++) {
					var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
						scale_max = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._yScale.maxHeight;
					ctx.fillStyle = '#ff0000';
					var y_pos = model.y - 5;
					// Make sure data value does not get overflown and hidden
					// when the bar's value is too close to max value of scale
					// Note: The y value is reverse, it counts from top down
					if ((scale_max - model.y) / scale_max >= 0.93)
						y_pos = model.y + 20;
					ctx.fillText(dataset.data[i], model.x, y_pos);
				}
			});
		}
	},
	plugins:{
		datasource:{
			url: 'DataExcel.xlsx',
			rowMapping: 'index',
			dataSetLabels: "'Sheet1'!C5",
        	indexLabels: "'Sheet1'!B6:B10",
            data: "'Sheet1'!C6:C10"
			}
		}
	}
});