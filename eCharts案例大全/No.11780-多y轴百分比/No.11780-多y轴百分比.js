var colors = ['#5793f3', '#01FDA8', '#675bba'];

option = {
    color: colors,
    backgroundColor: 'black',
    tooltip: {
        trigger: 'axis',
        axisPointer: {type: 'cross'}
    },
    grid: {
        right: '20%'
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['监测均值','达标率'],
        textStyle: {
            color: 'white'
        }
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                lineStyle: {
                    color: 'white'
                }
            },
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '分贝',
              min: 0,
            max: 100,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: 'white'
                }
            },
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '达标率',
             min: 0,
            max: 100,
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: 'white'
                }
            },
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
         {
            name:'监测均值',
            type:'bar',
            data: [50, 60, 60, 50, 60, 60,50, 60, 60, 50, 60 ]
        },
        {
            name:'达标率',
            type:'line',
            yAxisIndex: 1,
            data: [60, 70, 70, 50, 60, 70, 50, 60, 60, 50, 60 ]
        }
    ]
};
