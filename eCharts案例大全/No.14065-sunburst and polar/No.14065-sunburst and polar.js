var dataL1 = [];
var dataL2 = [];
var data1 = [];
for (var i = 0; i <= 60; i++) {
    dataL1.push([Math.cos(i * Math.PI / 2), i]);
    dataL2.push([Math.cos(i * Math.PI / 2 - 3) + 2, i]);
}
for (var i = 0; i < 15; ++i) {
    data1.push({
        value: 2,
        label: {
            position: 'inside',
            rotate: 'tangential'
        },
        children: [{
            name: '♪',
            value: 1,
            label: {
                position: 'inside',
                rotate: 'tangential'
            },
            children: [{
                value: 2,
                label: {
                    position: 'inside',
                    rotate: 'tangential'
                }
            }]
        }, {
            name: '♫',
            value: 1,
            label: {
                position: 'intside',
                rotate: 'tangential'
            }
        }]
    });
}

option = {
    title: {
        text: 'sunburst and polar',
        link: ''
    },
    tooltip: {
        show: false
    },
    polar: {
        radius: '35%'
    },
    angleAxis: {
        boundaryGap: false,
        splitLine: {
            show: false,
            lineStyle: {
                color: '#999',
                type: 'dashed'
            }
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },

    },
    radiusAxis: {
        //type: 'category',
        axisLine: {
            show: false
        },
        splitLine: {
            show: false,
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    series: [{
        type: 'line',
        coordinateSystem: 'polar',
        zlevel: 2,
        showSymbol: false,
        itemStyle: {
            color: '#f47920'
        },
        data: dataL1,

    }, {
        type: 'line',
        coordinateSystem: 'polar',
        zlevel: 2,
        showSymbol: false,
        itemStyle: {
            color: '#f47920'
        },
        data: dataL2,

    }, {
        type: 'sunburst',
        nodeClick: false,
        levels: [{}, {
            r0: '54%',
            r: '60%',
            label: {},
            itemStyle: {
                //shadowBlur: 2,
                borderWidth: 6,
                borderColor: '#42ced1',

            }
        }, {
            r0: '60%',
            r: '70%',
            label: {},
            highlight: {
                label: {
                    show: false
                }
            },
            itemStyle: {
                borderWidth: 6,
                borderColor: '#42b0d1',
                opacity: 0.8
            }
        }, {
            r0: '70%',
            r: '76%',

            itemStyle: {
                borderWidth: 6,
                borderColor: '#22bfb1',
                opacity: 0.6
            }
        }],
        data: data1,

    }]
};