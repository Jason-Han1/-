let listN = '温度';
let unit = '°C';
let xAxisData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
let AseriesData = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 29, 28, 27, 26, 25, 24, 23, 23, 21, 21, 22, 23, 24];
let BseriesData = [19, 18, 17, 16, 15, 24, 25, 26, 24, 25, 26, 27, 28, 29, 28, 27, 26, 25, 24, 23, 22, 24, 21, 26];
let CseriesData = [];

$.each(xAxisData, (index, val) => {
    CseriesData.push(AseriesData[index] - BseriesData[index]);
})

let ymax = Math.max.apply(null, AseriesData);

option = {
    tooltip: {
        trigger: 'axis'
    },
    dataZoom: [{
        bottom: '20%',
        // end: 50,
    }, {
        type: 'inside'
    }],
    grid: {
        left: '10%',
        top: '30%',
        right: '10%',
        bottom: '30%'
    },
    xAxis: {
        // boundaryGap: false,
        axisLabel: {
            textStyle: {
                color: '#333333',
                fontSize: 12
            }
        },
        axisLine: {
            lineStyle: {
                color: '#707070'
            }
        },
        data: xAxisData
    },
    yAxis: {
        type: 'value',
        name: `${listN}${unit}`,
        nameGap: 35,
        nameTextStyle: {
            color: '#333333'
        },
        max: (parseInt(ymax) + 10),
        axisLabel: {
            textStyle: {
                color: '#333333',
                fontSize: 12
            }
        },
        splitLine: {
            lineStyle: {
                color: '#DBDBDB',
                type: 'dashed'
            }
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
    },
    series: [{
            name: '实况',
            type: 'line',
            color: '#2FC25B',
            smooth: true,
            symbolSize: 10,
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(47, 194, 91, 0.2)'
                    }, {
                        offset: 1,
                        color: 'rgba(47, 194, 91,0)'
                    }],
                    globalCoord: false
                }
            },
            data: AseriesData
        },
        {
            name: '预报',
            type: 'line',
            color: '#EC5176',
            smooth: true,
            symbolSize: 10,
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(235, 81, 118, 0.3)'
                    }, {
                        offset: 1,
                        color: 'rgba(235, 81, 118,0)'
                    }],
                    globalCoord: false
                }
            },
            data: BseriesData
        },

        {
            name: '差值',
            type: 'bar',
            barWidth: '50%',
            itemStyle: {
                color: {
                    type: 'line',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#FFAA6C'
                    }, {
                        offset: 1,
                        color: '#FFCC33'
                    }],
                    globalCoord: false
                }
            },
            data: CseriesData
        }
    ]
};