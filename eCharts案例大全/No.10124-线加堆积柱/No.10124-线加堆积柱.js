option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['01月', '02月', '03月', '04月', '05月', '06月', '07月']
    },
    tooltip: {
        trigger: 'axis'
    },
    legend:{},
    yAxis: [
        {
          type: 'value',
          name: '',
        },
        {
          type: 'value',
          name: '',
        //   max:100,
          axisLabel: {
            formatter: '{value} %'
          }
        }
    ],
    color:['#1890FF','#BFBFBF','#1890FF','#BFBFBF','#1890FF','#BFBFBF','#1890FF','#BFBFBF'],
    series: [{
        type: 'line',
        name: '本月5',
        smooth: true,
        yAxisIndex: 1,
        data:[2.2, 1.8, 1.6, 2.4]
    },{
        type: 'line',
        name: '本月4',
        smooth: true,
        yAxisIndex: 1,
        data:[2, 1.8, 1.1, 3.4, 8.5, 2.8, 6.6]
    },{
        type: 'bar',
        name: '本月3',
        stack: 'name',
        barWidth:15,
        data:[20, 18, 11, 34, 85, 28, 66]
    },{
        type: 'bar',
        name: '本月2',
        barWidth:15,
        stack: 'name',
        data:[20, 18, 11, 34, 0, 0,0,0]
    },{
        type: 'bar',
        name: '本月1',
        stack: 'name',
        barWidth:15,
        data:[20, 18, 11, 34, 85, 28, 66]
    },{
        type: 'bar',
        barWidth:15,
        name: '本月',
        data:[20, 18, 11, 34, 85, 28, 66]
    }]
};