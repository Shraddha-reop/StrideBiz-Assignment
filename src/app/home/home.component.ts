import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';
import * as HighCharts from 'highcharts';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
  loading = false;
  user: User;
  userFromApi: User;

  constructor() { }

  ngOnInit() {
    this.barChartPopulation();
    this.pieChartBrowser();
  }

  barChartPopulation() {
    HighCharts.chart('barChart', {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'User with score'
      },
      xAxis: {
        categories: ['20', '40', '60', '80', '100'],
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Score(Max)',
          align: 'high'
        },
      },
      tooltip: {
        valueSuffix: ' score'
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      series: [{
        type: undefined,
        name: 'Score 20',
        data: [107, 31, 635, 203, 2]
      }, {
        type: undefined,
        name: 'Score 40 1900',
        data: [133, 156, 947, 408, 6]
      }, {
        type: undefined,
        name: 'Score 60',
        data: [814, 841, 3714, 727, 31]
      }, {
        type: undefined,
        name: 'Score 80',
        data: [1216, 1001, 4436, 738, 40]
      },
      {
        type: undefined,
        name: 'Score 100',
        data: [1216, 1001, 4436, 738, 40]
      }]
    });
  }

  pieChartBrowser() {
    HighCharts.chart('pieChart', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Browser market shares in October, 2019'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        type: undefined,
        data: [{
          name: 'Chrome',
          y: 61.41,
          sliced: true,
          selected: true
        }, {
          name: 'Internet Explorer',
          y: 11.84
        }, {
          name: 'Firefox',
          y: 10.85
        }, {
          name: 'Edge',
          y: 4.67
        }, {
          name: 'Safari',
          y: 4.18
        }, {
          name: 'Sogou Explorer',
          y: 1.64
        }, {
          name: 'Opera',
          y: 1.6
        }, {
          name: 'QQ',
          y: 1.2
        }, {
          name: 'Other',
          y: 2.61
        }]
      }]
    });
  }

}