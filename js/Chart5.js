var xValues = ["Persentase Tender Selesai", "Persentase Tender Tidak Selesai"];
var yValues = [85.71, 14.29];
var barColors = [
    "#CD5C5C",
    "#FFA07A",
];

new Chart("myChart5", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues,
      hoverOffset: 4
    }]
  },
  plugins: [ChartDataSource],
  options: {
    title: {
      display: true,
      text: "PERSENTASE KEBERHASIL TENDER DALAM LIMA TAHUN TERAKHIR"
    }
  },
  plugins:{
    datasource:{
        url: 'DataExcel.xlsx',
        rowMapping: 'index',
        indexLabels: "'Sheet5'!G5:G6",
        data: "'Sheet5'!H5:H6"
    }
}
});