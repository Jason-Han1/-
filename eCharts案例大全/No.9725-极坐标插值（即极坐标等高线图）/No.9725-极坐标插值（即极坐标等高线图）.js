let XData = [];
let data1 = [{
        windDirection: '0',
        windSpeedAvg: '0.2',
    },
    {
        windDirection: '10',
        windSpeedAvg: '0.9',
    },
    {
        windDirection: '20',
        windSpeedAvg: '1.3',
    },
    {
        windDirection: '30',
        windSpeedAvg: '0.9',
    },
    {
        windDirection: '40',
        windSpeedAvg: '0.4',
    },
    {
        windDirection: '50',
        windSpeedAvg: '2',
    },
    {
        windDirection: '60',
        windSpeedAvg: '1.1',
    },
    {
        windDirection: '70',
        windSpeedAvg: '1.1',
    },
    {
        windDirection: '80',
        windSpeedAvg: '2',
    },
    {
        windDirection: '90',
        windSpeedAvg: '1.8',
    },
    {
        windDirection: '100',
        windSpeedAvg: '1.6',
    },
    {
        windDirection: '110',
        windSpeedAvg: '0.1',
    },
    {
        windDirection: '120',
        windSpeedAvg: '0.2',
    }, {
        windDirection: '130',
        windSpeedAvg: '0.9',
    }, {
        windDirection: '140',
        windSpeedAvg: '0.5',
    },
    {
        windDirection: '150',
        windSpeedAvg: '0.7',
    },
    {
        windDirection: '160',
        windSpeedAvg: '1.2',
    },
    {
        windDirection: '170',
        windSpeedAvg: '1.5',
    },
    {
        windDirection: '180',
        windSpeedAvg: '1.1',
    },
    {
        windDirection: '190',
        windSpeedAvg: '1.3',
    },
    {
        windDirection: '200',
        windSpeedAvg: '1',
    },
    {
        windDirection: '210',
        windSpeedAvg: '2.4',
    },
    {
        windDirection: '220',
        windSpeedAvg: '0.7',
    },
    {
        windDirection: '230',
        windSpeedAvg: '1.3',
    },
    {
        windDirection: '240',
        windSpeedAvg: '1.4',
    },
    {
        windDirection: '250',
        windSpeedAvg: '0.1',
    },
    {
        windDirection: '260',
        windSpeedAvg: '0.9',
    },
    {
        windDirection: '270',
        windSpeedAvg: '0.7',
    },
    {
        windDirection: '280',
        windSpeedAvg: '0.4',
    },
    {
        windDirection: '290',
        windSpeedAvg: '0.2',
    },
    {
        windDirection: '300',
        windSpeedAvg: '0.8',
    },
    {
        windDirection: '310',
        windSpeedAvg: '0.5',
    },
    {
        windDirection: '320',
        windSpeedAvg: '0.7',
    },
    {
        windDirection: '330',
        windSpeedAvg: '0.4',
    },
    {
        windDirection: '340',
        windSpeedAvg: '0.7',
    },
    {
        windDirection: '350',
        windSpeedAvg: '1',
    },
    {
        windDirection: '360',
        windSpeedAvg: '0.8',
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
            center: ['50%', '50%']
        },
        {
            center: ['50%', '50%']
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
                            color: '#fff',
                        }, {
                            offset: 0.2,
                            color: '#0f0' // 100% 处的颜色
                        } , {
                            offset: 0.4,
                            color: '#00f' // 100% 处的颜色
                        }, {
                            offset: 0.6,
                            color: '#0ff' // 100% 处的颜色
                        }, {
                            offset: 0.8,
                            color: '#ff0' // 100% 处的颜色
                        }, {
                            offset: 1,
                            color: '#f00' // 100% 处的颜色
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