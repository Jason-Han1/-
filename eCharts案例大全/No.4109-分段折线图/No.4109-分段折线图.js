option = {
    xAxis: {
        type: 'time',
        nameTextStyle: {
          color: '#A4A6AD'
        },
        axisLine: {
          lineStyle: {
            color: '#D8D8D8'
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#A4A6AD'
        },
        splitLine:{
            show:false
        }
    },
    yAxis: {
        show : false,
        data :[0]
    },
    legend: {
      show: true,
      icon: 'rect'
    },
    series: [{
        data: [["2021-06-05", 1], ["2021-08-08", 1]],
        type: 'line',
        name: '启动',
        symbolSize: 0,
        itemStyle: {
            color: '#108EE9'
        },
        lineStyle: {
            width: 30
        }
    },
   
    {
        data:[["2021-08-08", 1], ["2021-08-12", 1]],
        type: 'line',
        name: '停机',
        symbolSize: 0,
        itemStyle: {
            color: '#FFBF00'
        },
        lineStyle: {
            width: 30
        }
    },
     {
        data: [["2021-08-12", 1], ["2021-08-20", 1]],
        type: 'line',
        name: '离线',
        symbolSize: 0,
        itemStyle: {
            color: '#D9D9D9'
        },
        lineStyle: {
            width: 30
        }
    }
    ,
     {
        data: [["2021-08-20", 1], ["2021-09-20", 1]],
        type: 'line',
        name: '启动',
        symbolSize: 0,
        itemStyle: {
            color: '#108EE9'
        },
        lineStyle: {
            width: 30
        }
    }
    ]
};