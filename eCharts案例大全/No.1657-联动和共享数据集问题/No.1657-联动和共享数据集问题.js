setTimeout(function () {
  option = {
    legend: {},
    tooltip: {
      trigger: 'axis',
      showContent: false
    },
    dataset: {
      source: [
        [
          'date',
          '2020-10',
          '2020-11',
          '2020-12',
          '2021-1',
          '2021-2',
          '2021-3',
          '2021-4',
          '2021-5',
          '2021-6',
          '2021-7',
          '2021-8',
          '2021-9'
        ],
        ['美', 3, 1, 29.59, 35, 65, 50, 30, 30, 60, 0, 156.23, 0],
        ['生', 3, 1, 0, 0, 5.28, 0, 0, 0.32, 0, 0, 0, 0],
        ['数', 3, 2, 0, 3, 0, 0, 0, 0, 0, 0, 2, 0],
        ['号', 3, 4, 50, 100, 20, 30, 40, 50, 60, 70, 80.19, 90]
      ]
    },
    xAxis: { type: 'category' },
    yAxis: { gridIndex: 0 },
    grid: { top: '55%' },
    series: [
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'pie',
        id: 'pie',
        radius: '30%',
        center: ['50%', '25%'],
        emphasis: {
          focus: 'self'
        },
        encode: {
          itemName: 'date',
          value: '2021-9',
          tooltip: '2021-9'
        }
      }
    ]
  };
  myChart.on('updateAxisPointer', function (event) {
    const xAxisInfo = event.axesInfo[0];
    if (xAxisInfo) {
      const dimension = xAxisInfo.value + 1;
      myChart.setOption({
        series: {
          id: 'pie',
          encode: {
            value: dimension,
            tooltip: dimension
          }
        }
      });
    }
  });
  myChart.setOption(option);
});
