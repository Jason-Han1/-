let windsData = ['1.5', '1.6', '1.7', '1.5', '1.9', '1.5', '1.5', '1.5'];
let visData = ['10', '10', '10', '10', '10', '10', '10', '10'];
let timeData = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00'];
let temData = [5.0, 1.2, 3.3, 4.5, 6.3, 12.2, 12.0, 6.2];
let temData1 = [2.2, 2.3, 3.4, 4.6, 6.7, 10.7, 12.8, 6.8];

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
            let Htm = `${timeData[index]}<br>温度:${temData[index]}<br>风力:${windsData[index]}m/s <br>能见度:${visData[index]}km`
            return Htm;
        }

    },
    grid: {
        top: '32',
        bottom: '208',
        left: '95',
        right: '48'
    },

    xAxis: [
        {
            type: 'category',
            position: 'bottom',
            offset: 3,
            axisTick: {
                show: true,
                length:45,
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#000000',
                    fontSize: 14,
                    lineHeight: 20,
                },
                interval: 0
            },
            data: timeData
        },
        {
            name: '风力(m/s)',
            type: 'category',
            position: 'bottom',
            offset: 42,
            axisTick: {
                show: true,
                length:45,
            },
            axisLine: {
                show: true
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#000000',
                    fontSize: 14,
                    // backgroundColor: '#FFE282',
                    lineHeight: 20,
                    // padding: [3, 14]
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
            name: '能见度(km)',
            type: 'category',
            position: 'bottom',
            offset: 84,
            axisTick: {
                show: true,
                length:40,
            },
            axisLine: {
                show: true
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#000000',
                    fontSize: 14,
                    lineHeight: 25,
                    // backgroundColor: '#B1E7F2',
                    // padding: [3, 15]
                },
                interval: 0
            },
            nameTextStyle: {
                color: '#585858',
                padding: [0, 0, -36]
            },
            nameLocation: 'start',
            data: visData
        },
        {
            type: 'category',
            position: 'bottom',
            offset: 125,
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            data: []
        },
    ],
    yAxis: [{
            type: 'value',
            name: '综合指数',
            position: 'left',
            offset: 0,
            axisTick: {
                // lineStyle: {
                //     color: colors[0]
                // },
                inside: true
            },
            // nameTextStyle: {
            //     color: colors[0]
            // },
            // axisLabel: {
            //     color: colors[0]
            // },
            splitLine: {
                show: true
            },
            
        }
    ],
    series: [{
            name: '温度',
            type: 'line',
            data: temData
        },{
            name: '温度',
            type: 'line',
            data: temData1,
            itemStyle: {
                normal: {
                    color: '#ff975f',
                    lineStyle: {
                        width: 3,
                        type: 'dotted',
                    }
                }
            }
        }
    ]
};