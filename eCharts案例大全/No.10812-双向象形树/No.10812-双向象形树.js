// option = {
//     title: {
//         text: 'Awesome Chart'
//     },
//     xAxis: {
//         data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
//     },
//     yAxis: {},
//     series: [{
//         type: 'line',
//         data:[220, 182, 191, 234, 290, 330, 310]
//     }]
// };
 var myData = ['区级河长', '镇级河长', '村级河长']
 var riverCount = {1: [145, 225, 225]}
 var timeLineData = [1]
 var lineData = [685, 685, 685]
option = {
    baseOption: {
        timeline: {
            show: false,
            top: 0,
            data: []
        },

        grid: [{
            show: false,
            left: '10%',
            top: 0,
            bottom: "15",
            containLabel: false,
            width: '35%'
        }, {
            show: false,
            left: '60%',
            top: 0,
            bottom: 10,
            width: '0%'
        }, {
            show: false,
            right: '10%',
            top: 0,
            bottom: 15,
            containLabel: false,
            width: '20%'
        }],
        xAxis: [{
            type: 'value',
            inverse: true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            position: 'top',
            axisLabel: {
                show: false
            },
            splitLine: {
                show: false
            }
        }, {
            gridIndex: 1,
            show: false
        }, {
            gridIndex: 2,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            position: 'top',
            axisLabel: {
                show: false
            },
            splitLine: {
                show: false
            }
        }],
        yAxis: [{
            type: 'category',
            inverse: true,
            position: 'right',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitLine: {
                show: false
            },
            data: myData
        }, {
            gridIndex: 1,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                color: '#16b199',
                fontSize: 14

            },
            splitLine: {
                show: false
            },
            data: myData.map(function(value) {
                return {
                    value: value,
                    textStyle: {
                        align: 'center'
                    }
                }
            })
        }, {
            gridIndex: 2,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false

            },
            splitLine: {
                show: false
            },
            data: myData
        }],
        series: []
    },
    options: [{
        series: [
            //左外框
            {
                type: 'pictorialBar',
                xAxisIndex: 0,
                yAxisIndex: 0,
                symbol: 'react',
                barWidth: 10,
                itemStyle: {
                    color: '#abe5e2'
                },
                label: {
                    show: true,
                    position: 'left',
                    offset: [0, 0],
                    textStyle: {
                        fontFamily: 'NumberFont',
                        color: '#fff',
                        fontSize: 15
                    }
                },
                symbolRepeat: false,
                data: riverCount[timeLineData[0]],
                animationEasing: 'linear',
            },
            //左内条
            {
                name: '20172',
                type: 'pictorialBar',
                xAxisIndex: 0,
                yAxisIndex: 0,
                barGap: '-60%',
                symbol: 'react',
                barWidth: 3,
                itemStyle: {
                    color: '#16b199'
                },
                symbolRepeat: false,
                data: riverCount[timeLineData[0]],
                animationEasing: 'linear',
            },
            //右外框
            {
                type: 'pictorialBar',
                xAxisIndex: 2,
                yAxisIndex: 2,
                symbol: 'rect',
                barCategoryGap: '-40%',
                itemStyle: {
                    borderWidth: 0,
                    borderColor: '#16b199',
                    borderType: 'dashed',
                    color: '#0e2147'
                },

                barWidth: 10,
                symbolRepeat: false,
                data: lineData,

            },
            //真实值
            {
                name: '2018',
                type: 'pictorialBar',
                xAxisIndex: 2,
                yAxisIndex: 2,
                symbol: 'rect',
                barGap: '-50%',
                barWidth: 2,
                itemStyle: {
                    color: '#abe5e2'
                },
                label: {
                    show: true,
                    position: 'right',
                    fontFamily: 'NumberFont',
                    color: '#fff',
                    fontSize: 15,
                    formatter: (series) => {
                        return (riverCount[timeLineData[0]][series.dataIndex] / lineData[0]).toFixed(2) + '%'
                    },
                },
                data: riverCount[timeLineData[0]],
                animationEasing: 'bounceIn',
            },
            //竖线
            {
                name: '201811',
                type: 'pictorialBar',
                xAxisIndex: 2,
                yAxisIndex: 2,
                symbol: 'path://M0 0 L0 2 L1 2 L1 0 Z',
                barGap: '-60%',
                barWidth: 1,
                itemStyle: {
                    color: '#abe5e2'
                },
                symbolRepeat: false,
                symbolSize: 10,
                data: riverCount[timeLineData[0]],
                symbolPosition: 'end',
            }
        ]
    }]
}