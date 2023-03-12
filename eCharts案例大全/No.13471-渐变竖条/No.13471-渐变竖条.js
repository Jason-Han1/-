var data = [2220, 1682, 2791, 3000, 4090, 3230, 2910];
var xdata = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var option = {
    grid: {
        left: 30,
        right: 50,
        top: 50,
        bottom: 30,
        containLabel: true
    },
    xAxis: {
        type: 'category',
        // boundaryGap: false,
        data: xdata,
        triggerEvent: true,
        splitLine: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                width: 2,
                color: 'rgba(255,255,255,.6)'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#fff',
            fontSize: 16,
            fontWeight: 'bold',
            textShadowColor: '#000',
            textShadowOffsetY: 2
        }
    },
    yAxis: {
        name: '单位（千）',
        nameTextStyle: {
            color: '#fff',
            fontSize: 16,
            textShadowColor: '#000',
            textShadowOffsetY: 2
        },
        type: 'value',
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,.2)'
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                width: 2,
                color: 'rgba(255,255,255,.6)'
            }
        },
        axisTick: {
            show: true
        },
        axisLabel: {
            color: '#fff',
            fontSize: 16,
            textShadowColor: '#000',
            textShadowOffsetY: 2
        }
    },
    series: [{
        data: data,
        type: 'line',
        symbol: 'circle',
        symbolSize: 12,
        color: '#FEC201',
        lineStyle: {
            color: "#03E0F2"
        },
        label: {
            show: true,
            position: 'top',
            textStyle: {
                color: '#FEC201',
                fontSize: 18,
                fontWeight: 'bold'
            }
        },
        areaStyle: {
            color: 'rgba(1,98,133,0.6)'
        }
    }, {
        type: 'bar',
        animation: false,
        barWidth: 3,
        hoverAnimation: false,
        data: data,
        tooltip: {
            show: false
        },
        itemStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#91EAF2' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#074863' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                label: {
                    show: false
                }
            }
        }
    }]
}