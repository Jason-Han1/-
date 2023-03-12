let windsData = ['1.5', '1.6', '1.7', '1.5', '1.9', '1.5', '1.5', '1.5', '1.5', '1.5', '1.5', '1.5'];
let windxData = ['东南', '东南', '东南', '东南', '东南', '东南', '东南', '东南', '东南', '东南', '东南', '东南'];
let preData = ['1006.9', '1006.9', '1006.9', '1006.9', '1006.9', '1006.9', '1006.9', '1006.9', '1006.9', '1006.9', '1006.9', '1006.9'];
let visData = ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'];
let timeData = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00'];
let temData = [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2];
let rainData = [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3];
let humData = [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3];

let colors = ['#FF6863', '#6EAB40', '#3BB5F5'];
option = {
    color: colors,
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        },
        formatter: function(params, ticket, callback) {
            let index = params[0].dataIndex;
            let Htm = `${timeData[index]}<br>温度:${temData[index]}<br>降水:${rainData[index]}mm<br>风力:${windsData[index]}m/s ${windxData[index]}<br>
                湿度:${humData[index]}%<br>气压:${preData[index]}hPa<br>能见度:${visData[index]}km`
            return Htm;
        }

    },
    grid: {
        top: '32',
        bottom: '208',
        left: '95',
        right: '48'
    },
    dataZoom: {
        bottom: '0',
        height: '30',
        dataBackground: {
            lineStyle: {
                color: '#39977D'
            },
            areaStyle: {
                color: 'rgba(57,151,125,1)'
            }
        },
        borderColor: 'rgba(57,151,125,0.2)',
        textStyle: {
            color: '#39977D',
        },
        end: 50,
        xAxisIndex: [0, 1, 2, 3, 4]
    },
    xAxis: [{
            name: '风力(m/s)',
            type: 'category',
            position: 'bottom',
            offset: 8,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#000000',
                    fontSize: 14,
                    backgroundColor: '#FFE282',
                    lineHeight: 20,
                    padding: [3, 14]
                },
                interval: 0
            },
            nameTextStyle: {
                color: '#585858',
                padding: [0, 0, -53]
            },
            nameLocation: 'start',
            data: windsData
        },
        {
            name: '风向',
            type: 'category',
            position: 'bottom',
            offset: 40,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#000000',
                    fontSize: 14,
                    lineHeight: 20
                },
                interval: 0
            },
            nameTextStyle: {
                color: '#585858',
                padding: [0, 0, -113]
            },
            nameLocation: 'start',
            data: windxData
        },
        {
            name: '气压(hPa)',
            type: 'category',
            position: 'bottom',
            offset: 65,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#000000',
                    fontSize: 14,
                    lineHeight: 20,
                    backgroundColor: '#EEDEFF',
                    padding: [3, 3]
                },
                interval: 0
            },
            nameTextStyle: {
                color: '#585858',
                padding: [0, 0, -170]
            },
            nameLocation: 'start',
            data: preData
        },
        {
            name: '能见度(km)',
            type: 'category',
            position: 'bottom',
            offset: 97,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#000000',
                    fontSize: 14,
                    lineHeight: 20,
                    backgroundColor: '#B1E7F2',
                    padding: [3, 15]
                },
                interval: 0
            },
            nameTextStyle: {
                color: '#585858',
                padding: [0, 0, -35]
            },
            nameLocation: 'start',
            data: visData
        },
        {
            type: 'category',
            position: 'bottom',
            offset: 138,
            axisTick: {
                alignWithLabel: true,
                textStyle: {
                    color: '#707070'
                }
            },
            data: timeData
        },

    ],
    yAxis: [{
            type: 'value',
            name: '温度(°C)',
            position: 'left',
            offset: 54,
            axisTick: {
                lineStyle: {
                    color: colors[0]
                },
                inside: true
            },
            nameTextStyle: {
                color: colors[0]
            },
            axisLabel: {
                color: colors[0]
            },
            splitLine: {
                show: false
            }
        },
        {
            type: 'value',
            name: '降水(mm)',
            position: 'left',
            axisTick: {
                lineStyle: {
                    color: colors[1]
                },
                inside: true
            },
            nameTextStyle: {
                color: colors[1]
            },
            axisLabel: {
                color: colors[1]
            },
            splitLine: {
                show: false
            }
        },
        {
            type: 'value',
            name: '相对湿度(%)',
            position: 'right',
            axisTick: {
                lineStyle: {
                    color: colors[2]
                },
                inside: true
            },
            nameTextStyle: {
                color: colors[2]
            },
            axisLabel: {
                color: colors[2]
            },
            splitLine: {
                show: false
            }
        }
    ],
    series: [{
            name: '温度',
            type: 'line',
            data: temData
        },
        {
            name: '降水',
            type: 'line',
            smooth: true,
            yAxisIndex: 1,
            lineStyle: {
                normal: {
                    opacity: 0
                }
            },
            symbol: 'none',
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(110,171,64,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(110,171,64,0.1)'
                    }],
                    globalCoord: false
                }
            },
            data: rainData
        },
        {
            name: '相对湿度',
            type: 'line',
            yAxisIndex: 2,
            data: humData
        }
    ]
};