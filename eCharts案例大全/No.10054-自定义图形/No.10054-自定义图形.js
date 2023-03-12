let timeData = ['08-10 01:48', '08-10 01:54', '08-10 02:00', '08-10 02:06', '08-10 02:12', '08-10 02:18', '08-10 02:24', '08-10 02:30', '08-10 02:36', '08-10 02:42'];
let BASEData = ['4', '3', '2', '3.4', '3', '4', '5', '5.5', '6', '5.5'];
let TOPData = ['13', '12', '11', '13', '12', '13', '14', '13', '12', '12'];
let DBZMData = [7, 7.5, 7.9, 8, 8, 9, 8.4, 9, 9.2, 9.4];
let CENTData = [11, 6, 9, 9, 9, 7.8, 10, 8.6, 8.6, 8.8];

let BASE_TOP_Data = []
echarts.util.map(timeData, (item, dataIndex) => {
    BASE_TOP_Data.push([item, BASEData[dataIndex], TOPData[dataIndex]])
})

function renderItem(params, api) {
    var xValue = api.value(0);
    var highPoint = api.coord([xValue, api.value(1)]);
    var lowPoint = api.coord([xValue, api.value(2)]);
    var halfWidth = api.size([1, 0])[0] * 0.1 / 2;
    var style = api.style({
        stroke: api.visual('color'),
        fill: null
    });

    return {
        type: 'group',
        children: [{
            type: 'line',
            shape: {
                x1: highPoint[0] - halfWidth,
                y1: highPoint[1],
                x2: highPoint[0] + halfWidth,
                y2: highPoint[1]
            },
            style: style
        }, {
            type: 'line',
            shape: {
                x1: highPoint[0],
                y1: highPoint[1],
                x2: lowPoint[0],
                y2: lowPoint[1]
            },
            style: style
        }, {
            type: 'line',
            shape: {
                x1: lowPoint[0] - halfWidth,
                y1: lowPoint[1],
                x2: lowPoint[0] + halfWidth,
                y2: lowPoint[1]
            },
            style: style
        }, {
            type: 'line',
            shape: {
                x1: highPoint[0] - halfWidth,
                y1: highPoint[1] - 20,
                x2: highPoint[0],
                y2: highPoint[1]
            },
            style: style
        }, {
            type: 'line',
            shape: {
                x1: highPoint[0],
                y1: highPoint[1],
                x2: highPoint[0] + halfWidth,
                y2: highPoint[1] - 20
            },
            style: style
        }]
    };
}
console.log(BASE_TOP_Data)
option = {
    grid: {
        left: '10%',
        top: '20%',
        right: '10%',
        bottom: '20%'
    },
    tooltip: {
        trigger: 'axis',
        formatter: (params, ticket, callback) => {
            let index = params[0].dataIndex;
            return `${timeData[index]}<br>
                    TOP-BASE：${BASEData[index]}-${TOPData[index]}<br>
                    DBZM HT：${DBZMData[index]}<br>
                    CENT HT：${CENTData[index]}
                    `;
        }
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            rotate: 50,
            color: '#333333'
        },
        axisLine: {
            lineStyle: {
                color: '#ACACAC'
            }
        },
        axisTick: {
            alignWithLabel: true
        },
        data: timeData
    },
    yAxis: {
        type: 'value',
        name: 'km',
        nameGap: 35,
        nameTextStyle: {
            color: '#999999'
        },
        splitLine: {
            lineStyle: {
                color: '#DBDBDB',
                type: 'dashed'
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#333333'
        },
    },
    series: [{
            type: 'custom',
            color: '#2890D1',
            itemStyle: {
                normal: {
                    borderWidth: 2
                }
            },
            renderItem: renderItem,
            encode: {
                x: 0,
                y: [1, 2]
            },
            data: BASE_TOP_Data,
            z: 100
        },
        {
            type: 'line',
            itemStyle: {
                color: '#15A271',
                borderColor: '#15A271',
                borderWidth: 4
            },
            lineStyle: {
                width: 2
            },
            data: DBZMData
        }, {
            type: 'line',
            itemStyle: {
                color: '#BC19F8',
                borderColor: '#BC19F8',
                borderWidth: 4
            },
            lineStyle: {
                width: 2
            },
            data: CENTData
        }
    ]
};