var xValues = [];
var yValues = [];
var barColors = ["violet","violet","violet","violet","violet"];

new Chart("myChart2", {
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
        text: 'JUMLAH PESERTA TERBANYAK DALAM SATU TENDER',
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
            ticks: {min: 0, max:250},
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
            ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, 'italic', Chart.defaults.global.defaultFontFamily);
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';

            this.data.datasets.forEach(function (dataset) {
                for (var i = 0; i < dataset.data.length; i++) {
                    var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                        scale_max = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._yScale.maxHeight;
                    ctx.fillStyle = '#e999a4';
                    var y_pos = model.y - 5;
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
            dataSetLabels: "'Sheet2'!C3",
            indexLabels: "'Sheet2'!B4:B8",
            data: "'Sheet2'!C4:C8"
        }
    }
  }
});var xValues = [];
var yValues = [];
var barColors = ["violet","violet","violet","violet","violet"];

new Chart("myChart", {
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
        text: 'JUMLAH PESERTA TERBANYAK DALAM SATU TENDER',
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
            ticks: {min: 0, max:250},
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
                    ctx.fillStyle = '#444';
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
            dataSetLabels: "'Sheet2'!C3",
            indexLabels: "'Sheet2'!B4:B8",
            data: "'Sheet2'!C4:C8"
        }
    }
  }
});