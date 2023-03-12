option = {
    title: {
        text: 'Awesome Chart'
    },
    tooltip: {
        trigger: 'axis',
        alwaysShowContent: true,
        confine: true
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'bar',
        data: [220, 182, 191, 234, 290, 330, 310]
    }]
};

myChart.dispatchAction({
      type: 'showTip',
      seriesIndex: 0,
      dataIndex: 0
    })