option = {
    title: {
        text: 'Awesome Chart'
    },
    tooltip: {
        trigger: 'axis',
        padding: 12,
        axisPointer: {
          type: 'cross',
          label: {
            lineHeight: 106
          }
        }
    },
    xAxis: {
        axisLabel: {
            lineHeight: 20,
        },
        data: ['2020-01-05\n2020-02-05', '2020-01-06\n2020-02-06', '2020-01-07\n2020-02-07']
    },
    yAxis: {},
    series: [{
        type: 'line',
        data:[220, 182, 191]
    }]
};