var hideStyle = {
    normal: {
        color: '#fff', //未完成的圆环的颜色
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        show: false
    }
};
var option = {
    backgroundColor: '#fff',
    legend: {
        data: ['A', 'B', 'C', 'D']
    },
    series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: true, //顺时针
        radius: [180, 200],
        label: {
            normal: {
                show: false,
                position: 'inside'
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        hoverAnimation: false,
        data: [{
            value: 75,
            name: 'A'
        }, {
            value: 25,
            name: 'hide',
            itemStyle: hideStyle
        }]
    }, {
        name: 'Line 2',
        type: 'pie',
        clockWise: true, //顺时针
        radius: [150, 170],
        label: {
            normal: {
                show: false,
                position: 'inside'
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        hoverAnimation: false,
        data: [{
            value: 65,
            name: 'B'
        }, {
            value: 35,
            name: 'hide',
            itemStyle: hideStyle
        }]
    }, {
        name: 'Line 3',
        type: 'pie',
        clockWise: true, //顺时针
        radius: [120, 140],
        label: {
            normal: {
                show: false,
                position: 'inside'
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        hoverAnimation: false,
        data: [{
            value: 55,
            name: 'C'
        }, {
            value: 45,
            name: 'hide',
            itemStyle: hideStyle
        }]
    }, {
        name: 'Line 4',
        type: 'pie',
        clockWise: true, //顺时针
        radius: [90, 110],
        label: {
            normal: {
                show: false,
                position: 'inside'
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        hoverAnimation: false,
        data: [{
            value: 45,
            name: 'D'
        }, {
            value: 55,
            name: 'hide',
            itemStyle: hideStyle
        }]
    }]
};
myChart.setOption(option);