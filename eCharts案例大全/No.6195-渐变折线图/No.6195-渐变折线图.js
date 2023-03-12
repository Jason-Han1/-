let data = [{
    dDeviceCategory: '',
    dRecordData: ['3', '7', '6', '4', '4', '5', '8'],
}];
let titleArr = [],
    seriesArr = [],
    xValue = ['19.08', '19.10', '19.12', '20.02', '20.04', '20.06', '20.08'];
let color = [
    ['#f9d739', '#00ff9c', '#fad739']
]


data.forEach(function(item, index) {
    titleArr.push(item.dDeviceCategory);
    seriesArr.push({
        name: item.dDeviceCategory,
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 3
            }
        },
        areaStyle: {
            normal: {

                color: 'transparent',
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: color[index][0],
                }, {
                    offset: 0.4,
                    color: color[index][1],
                }, {
                    offset: 0.6,
                    color: color[index][2],
                }, {
                    offset: 0.8,
                    color: color[index][1],
                }, {
                    offset: 1,
                    color: color[index][0],
                }])
            },
            emphasis: {
                color: '#08fe99',
                borderColor: 'rgba(255, 255, 255, 1)',
                borderWidth: 2
            }
        },
        data: item.dRecordData
    });
});

option = {
    backgroundColor: "#030b2a", //背景色
    grid: {
        left: '20%',
        right: '20%',
        top: "20%",
        bottom: '20%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(0, 255, 233,0)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(255, 255, 255,1)',
                    }, {
                        offset: 1,
                        color: 'rgba(0, 255, 233,0)'
                    }],
                    global: false
                }
            },
        },
    },
    xAxis: {
        type: 'category',
        triggerEvent: true,
        boundaryGap: false,
        data: xValue,
        splitLine: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                width: 1.5,
                color: '#597faa'
            }
        },
        axisTick: {
            show: false,
            inside: true,
            alignWithLabel: true
        },
        axisLabel: {
            color: '#597faa',
            fontSize: 12
        }
    },
    yAxis: {
        // splitNumber: '8',
        nameLocation: 'end',
        // min: 5,
        nameTextStyle: {
            color: '#597faa',
            fontSize: 12
        },
        type: 'value',
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: 'rgba(255,255,255,.2)'
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                width: 1.5,
                color: '#597faa'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#597faa',
            fontSize: 12
        }
    },
    series: seriesArr
};