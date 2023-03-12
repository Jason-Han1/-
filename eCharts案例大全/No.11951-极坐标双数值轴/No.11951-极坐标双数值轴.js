let XData = [];
let data1 = [{
        windDirection: 'N',
        windSpeedAvg: '30',
        percent: '10',
    },
    {
        windDirection: 'NNW',
        windSpeedAvg: 6,
        percent: 10,
    },
    {
        windDirection: 'NW',
        windSpeedAvg: '45',
        percent: '20',
    },
    {
        windDirection: 'WNW',
        windSpeedAvg: '50',
        percent: '30',
    },
    {
        windDirection: 'W',
        windSpeedAvg: '30',
        percent: '40',
    },
    {
        windDirection: 'WSW',
        windSpeedAvg: '67',
        percent: '50',
    },
    {
        windDirection: 'SW',
        windSpeedAvg: '10',
        percent: '10',
    },
    {
        windDirection: 'SSW',
        windSpeedAvg: '50',
        percent: '10',
    },
    {
        windDirection: 'S',
        windSpeedAvg: '80',
        percent: '10',
    },
    {
        windDirection: 'SSE',
        windSpeedAvg: '30',
        percent: '10',
    },
    {
        windDirection: 'SE',
        windSpeedAvg: '30',
        percent: '10',
    },
    {
        windDirection: 'ESE',
        windSpeedAvg: '30',
        percent: '10',
    },
    {
        windDirection: 'E',
        windSpeedAvg: '30',
        percent: '10',
    }, {
        windDirection: 'ENE',
        windSpeedAvg: '30',
        percent: '10',
    }, {
        windDirection: 'NE',
        windSpeedAvg: '30',
        percent: '10',
    },
    {
        windDirection: 'NNE',
        windSpeedAvg: '30',
        percent: '10',
    },
    {
        windDirection: 'N',
        windSpeedAvg: '30',
        percent: '10',
    },
];
let data2 = [];
let data3 = [];
let windDirection = [];
data1.forEach((e, i) => {
    XData.push(i);
    windDirection.push(e.windDirection)
    data2.push([e.windSpeedAvg, i, e.windDirection, ])
    data3.push([e.percent, i, e.windDirection])
})


option = {
    title: {
        text: '极坐标双数值轴'
    },
    legend: {
        data: ['line']
    },
    polar: [{
            center: ['50%', '54%']
        },
        {
            center: ['50%', '54%']
        },
    ],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            snap:true
        },
        formatter:(e)=>{
            return `<div>
              <p>风向：${e[0].value[2]} <p>
              <p>平均风速：${e[0].value[1]} <p>
              <p>风向频率：${e[1].value[1]} <p>
            <div>`
        }

    },
    angleAxis: [{
            // type: 'value',
            boundaryGap: false,
            startAngle: 90,
            polarIndex: 0,
            // data: XData,
            axisLabel: {
                formatter: (e) => {
                    return windDirection[e]
                    // return e[0].value[3]
                }
            }
        },
        {
            // type: 'value',
            boundaryGap: false,
            startAngle: 90,
            polarIndex: 1,
            // data: XData,
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            }
        }
    ],
    radiusAxis: [{
        min: 0,
        polarIndex: 0,
        max: 'dataMax',
       
        axisLabel: {
            show: false
        },
       
        axisTick: {
            show: false
        }
    }, {
        min: 0,
        polarIndex: 1,
        max: 'dataMax',
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    }],
    series: [{
            coordinateSystem: 'polar',
            type: 'line',
            itemStyle: {
                normal: {
                    color: "#f4ad04",
                }
            },
            polarIndex: 0,
            symbol: 'emptyCircle',
            symbolSize: 6,
            areaStyle: {
                normal: {
                    color: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [{
                            offset: 0,
                            color: 'transparent',
                        }, {
                            offset: 1,
                            color: '#f0b30c' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    opacity: 0.7
                }
            },
            data: data2
        },
        {
            coordinateSystem: 'polar',
            type: 'line',
            polarIndex: 1,
            symbol: 'emptyCircle',
            symbolSize: 6,
            data: data3
        }
    ],
    animationDuration: 2000
};