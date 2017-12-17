app.directive('voChart', function () {
  return {
    restrict: 'A',
    templateUrl: 'views/partials/chart.html',
    controller: () => {
      var chart = Highcharts.chart('view-chart', {
        chart: {
          plotBackgroundColor: null,
          backgroundColor: null,
          borderColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        title: {
          text: '',
        },
        credits: {
          enabled: false
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              style: {
                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
              },
            }
          }
        },
        series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [
            {
              name: 'IE',
              y: 56.33
            }, {
              name: 'Chrome',
              y: 24.03,
              // sliced: true,
              // selected: true
            }, {
              name: 'Firefox',
              y: 10.38
            }
            // , {
            //   name: 'Safari',
            //   y: 4.77
            // }, {
            //   name: 'Opera',
            //   y: 0.91
            // }, {
            //   name: 'Other',
            //   y: 0.2
            // }
          ]
        }]
      });
    }
  }
})
