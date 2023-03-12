var xData = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月'];
var yData1 = [12, 5, 7, 10, 15, 12, 5, 7, 2, 15];
var yData2 = [1, 5, 7, 2, 15, 12, 5, 7, 2, 15];
var yData3 = [12, 5, 7, 20, 15, 12, 5, 7, 2, 15];
var yData4 = [12, 5, 7, 20, 15, 12, 5, 7, 2, 15];
var option = {
    backgroundColor: '#fff',
    grid: {
        top: '5%',
        right: '5%',
        left: '10%',
        bottom: '12%'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        bottom: '10',
        // x: 'right', //可设定图例在左、右、居中
        icon: 'rect',
        textStyle: { //图例文字的样式
           
            color: '#8C8C8C',
            fontSize: 12
        },
        itemWidth: 40,  
　      itemHeight: 8, 
　　    itemGap: 40 ,
        data: ['测试1', '测试2','测试3','测试4']
    },
    xAxis: [{
        type: 'category',
        color: '#59588D',
        data: xData,
        axisLabel: {

            margin: 20,
            color: '#999',
            textStyle: {
                fontSize: 10
            },
        },
        axisLine: {
            //  show: false,
            lineStyle: {
                color: '#d2d2d2',
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{

            axisLabel: {
                formatter: '{value}',
                color: '#999',
                textStyle: {
                    fontSize: 10
                },
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(107,107,107,0.37)',
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(131,101,101,0.2)',
                    type: 'dashed',
                }
            }
        },
        {

            axisLabel: {
                formatter: '{value}%',
                color: '#999',
                textStyle: {
                    fontSize: 10
                },
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(107,107,107,0.37)',
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(131,101,101,0.2)',
                    type: 'dashed',
                }
            }
        },

    ],
    series: [{
            name: '测试1',
            type: 'bar',
            data: yData1,
            barWidth: '12px',
            itemStyle: {
                normal: {
                    color: '#2d9bff',
                    barBorderRadius: [5, 5, 0, 0],
                }
            }

        },
        {
            name: '测试2',
            type: 'bar',
            data: yData2,
            barWidth: '12px',
           
            itemStyle: {
                normal: {
                    color: '#26c6c7',
                    barBorderRadius: [5, 5, 0, 0],
                }
            }

        },
        {
            name: '测试3',
            type: 'bar',
            data: yData3,
            yAxisIndex: 1,
            barWidth: '12px',
            itemStyle: {
                normal: {
                    color: '#ff2225',
                    barBorderRadius: [5, 5, 0, 0],
                }
            }

        },
        {
            name: '测试4',
            type: 'bar',
            data: yData4,
            yAxisIndex: 1,
            
            barWidth: '12px',
            itemStyle: {
                normal: {
                    color: '#ff9901',
                    barBorderRadius: [5, 5, 0, 0],
                }
            }

        }

    ],

};