var data = [];

for (var i = 0; i <= 180; i++) {
    var t = i / 180 * Math.PI;
    var r = 10;
    data.push([r, i]);
}

option = {
    title: {
        text: '交通指数3.5',
        subtext: '交通指数是指在当前时间内同行系数',
        left: 'center',
        top: 'center',
        textStyle: {
            fontSize: 30
        }
    },
    polar: {
        //center: ['50%', '54%']
    },
    visualMap: {
        show: false,
        seriesIndex: 1,
        dimension: 1,
        type: 'continuous',
        min: 0,
        max: 180,
        text: ['High', 'Low'],
        realtime: false,
        calculable: true,
        color: ['orangered', 'yellow', 'lightskyblue']
    },
    angleAxis: {
        type: 'value',
        max: 360,
        startAngle: 180,
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    radiusAxis: {
        min: 0,
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    series: [{
        name: 'line',
        type: 'line',
        coordinateSystem: 'polar',
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 30,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: 'lightskyblue' // 0% 处的颜色
                    }, {
                        offset: 0.5,
                        color: 'yellow' // 100% 处的颜色
                    }, {
                        offset: 1,
                        color: 'orangered' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                }
            }
        },
        data: data
    }, {
        name: 'point',
        type: 'scatter',
        coordinateSystem: 'polar',
        symbolSize: 25,
        hoverAnimation: false,
        cursor: 'default',
        itemStyle: {
            normal: {
                borderColor: '#fff',
                borderWidth: 3
            }
        },
        data: [
            [9.8, 120]
        ]
    }],
    animationDuration: 2000
};