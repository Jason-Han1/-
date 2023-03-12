var colors = ['#29AF81', '#F9BD3D'];

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
            axisLabel: {
                formatter: '{value}% ',
                color : '#fff'
            },
            axisLine : {
                show : false,
                lineStyle : {
                    color : '#0373B1'
                }
            },
            splitLine : {
                lineStyle : {
                    color : '#0373B1'
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
            axisLabel: {
                formatter: '{value}% ',
                color : '#B2DDFF'
            },
            axisLine : {
                show : true,
                lineStyle : {
                    color : '#0373B1'
                }
            },
            splitLine : {
                lineStyle : {
                    color : '#0373B1'
                }
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
                    color: '#0373B1'
                }
            },
            axisLabel: {
                formatter: '{value} %'
            },
            splitLine : {
                lineStyle : {
                    color : '#0373B1'
                }
            }
        }
    ],
    series: [
         {
            name:'监测均值',
            type:'bar',
            barWidth: 20,
            itemStyle : {
              normal : {
                  barBorderRadius: [10, 10, 0, 0] //圆角
              }  
            },
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

