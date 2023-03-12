var colors = ['#5470C6','#5470C6', '#91CC75','#91CC75', '#EE6666','#EE6666' ];

option = {
    title: {
        text: '客流、运力、满载率走势',
        subtext: '数据来自网络'
    },
    color: colors,

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        right: '20%',
        top:'120px'
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        top:'60px',
        data: ['上行满载率', '下行满载率', '上行运力', '下行运力', '上行客流', '下行客流']
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '满载率',
            min: -250,
            max: 250,
            position: 'right',
            axisLine: {
                show: true,
                lineStyle: {
                    color: colors[0]
                }
            },
            axisLabel: {
                formatter: '{value} %'
            }
        },
        {
            type: 'value',
            name: '运力',
            min: -250,
            max: 250,
            position: 'right',
            offset: 80,
            axisLine: {
                show: true,
                lineStyle: {
                    color: colors[2]
                }
            },
            axisLabel: {
                formatter: '{value}  '
            }
        },{
            type: 'value',
            name: '运力',
            min: -250,
            max: 250,
            position: 'right',
            offset: 80,
            axisLine: {
                show: true,
                lineStyle: {
                    color: colors[2]
                }
            },
            axisLabel: {
                formatter: '{value}  '
            }
        },
        {
            type: 'value',
            name: '客流',
            min: -25,
            max: 25,
            position: 'left',
            axisLine: {
                show: true,
                lineStyle: {
                    color: colors[4]
                }
            },
            axisLabel: {
                formatter: '{value} '
            }
        }
    ],
    series: [
        {
            name: '上行满载率',
            type: 'bar',
            stack: '满载率',
            data: [2.0, 4.9, 7.0, 23.2, 5.6, 76.7, 35.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
            name: '下行满载率',
            type: 'bar',
            stack: '满载率',
            data: [-2.0, -4.9, -7.0, -2.2, -25.6, -76.7, -135.6, -62.2, -32.6, -20.0, -6.4, -3.3]
        },
        {
            name: '上行运力',
            type: 'bar',
            stack: '运力',
            yAxisIndex: 1,
            data: [2.6,5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 82.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name: '下行运力',
            type: 'bar',
            stack: '运力',
            yAxisIndex: 1,
            data: [-2.6,-5.9, -9.0, -26.4, -28.7, -70.7, -75.6, -182.2, -48.7, -18.8, -6.0, -2.3]
        },
        {
            name: '上行客流',
            type: 'line',
            stack: '客流',
            yAxisIndex: 3,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 16.3, 23.4, 23.0, 6.5, 12.0, 4.2]
        }
        ,
        {
            name: '下行客流',
            type: 'line',
            stack: '客流',
            yAxisIndex: 3,
            data: [-2.0, -2.2, -3.3, -4.5, -6.3, -10.2, -20.3, -23.4, -23.0, -16.5, -12.0, -6.2]
        }
    ]
};