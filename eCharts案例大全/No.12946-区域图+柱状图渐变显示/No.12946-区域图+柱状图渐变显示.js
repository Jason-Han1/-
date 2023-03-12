var data = [1000, 1112, 2583, 1225, 2000, 1562, 1584, 1225, 8520, 1149, 6542, 5489];
var xdata = ['06时', '07时', '08时', '09时', '10时', '11时', '12时', '13时', '14时', '15时', '16时', '17时'];
var option = {
    grid: {
        left: '1%',
        top: '0%',
        right: '1%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
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
            color: '#535353',
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
            show: false,
            lineStyle: {
                color: 'rgba(255,255,255,.2)'
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                width: 2,
                color: 'rgba(255,255,255,.6)'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false,
            color: '#fff',
        }
    },
    dataZoom: [{
        type: 'inside',
        start: 30,
        end: 100,
    }, {
        start: 30,
        end: 100,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        }
    }],
    series: [{
        data: data,
        type: 'line',
        symbol: 'image://data:image/png;base64,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',
        symbolSize: 30,
        color: '#fff',
        smooth: true,
        lineStyle: {
            color: "#91C8FE"
        },
        label: {
            show: true,
            position: 'top',
            textStyle: {
                color: '#7B86F9',
            }
        },
        areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#7B86F9'
            }, {
                offset: 1,
                color: '#fff'
            }])
        }
    }, {
        type: 'bar',
        animation: false,
        barWidth: 2,
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
                        color: '#7B86F9' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#fff' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                label: {
                    show: false
                }
            }
        }
    }]
};