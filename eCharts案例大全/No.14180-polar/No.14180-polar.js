var dataL1 = [];
var dataL2 = [];
var dataL3 = [];
var dataL4 = [];
var dataL5 = [];
var dataL6 = [];
var dataL7 = [];
var dataL8 = [];
var dataL9 = [];
var dataL10 = [];
var dataL11 = [];
var dataL12 = [];

for (var i = 0; i <= 20; i++) {
    dataL1.push([Math.cos(i * Math.PI / 2), i]);
    dataL2.push([Math.cos(i * Math.PI / 2) + 1, i]);
}
for (var i = 0; i <= 12; i++) {
    dataL3.push([Math.cos(i * Math.PI / 2), i]);
    dataL4.push([Math.cos(i * Math.PI / 2) + 1, i]);
}
for (var i = 0; i < 4; i++) {
    dataL5.push([Math.sin(Math.PI) + 2, i]);
}
for (var i = 0; i <= 10; i++) {
    dataL6.push([Math.cos(i * Math.PI) + 2, i]);
}
for (var i = 0; i <= 60; i++) {
    dataL7.push([Math.cos(i * Math.PI / 2), i]);
    dataL8.push([Math.cos(i * Math.PI / 2 - 3) + 2, i]);
}
for (var i = 0; i <= 60; i++) {
    dataL9.push([Math.cos(i * Math.PI / 10) + 1, i]);
    dataL10.push([Math.sin(Math.PI) + 2, i]);
}
for (var i = 0; i < 9; i++) {
    if (i % 2 == 0) {
        dataL11.push([Math.sin(Math.PI) + 1, i]);
    }
}
for (var i = 0; i < 9; i++) {
    if (i != 0 && i != 2 && i != 4 && i != 6 && i != 8) {
        dataL12.push([Math.sin(Math.PI) + 1, i]);
    }
}
dataL12.push([Math.sin(Math.PI) + 1, 1]);

var angleAxis = function(i) {
    return {
        polarIndex: i,
        boundaryGap: false,
        splitLine: {
            show: false,
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }
    }
}
var radiusAxis = function(i) {
    return {
        polarIndex: i,
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
    }
}
var polarSeries = function(i, data) {
    return {
        type: 'line',
        polarIndex: i,
        coordinateSystem: 'polar',
        zlevel: 2,
        showSymbol: false,
        data: data,
    }
}

option = {
    title: {
        text: 'polar',
        link: ''
    },
    tooltip: {
        show: true
    },
    polar: [{
            center: [150, 150],
            radius: '30%'
        }, {
            center: [400, 350],
            radius: '30%'
        },
        {
            center: [150, 350],
            radius: '30%'
        },
        {
            center: [400, 150],
            radius: '30%'
        },
        {
            center: [650, 150],
            radius: '30%'
        },
        {
            center: [650, 350],
            radius: '30%'
        },
        {
            center: [150, 500],
            radius: '30%'
        }
    ],
    angleAxis: [
        angleAxis(0),
        angleAxis(1),
        angleAxis(2),
        angleAxis(3),
        angleAxis(4),
        angleAxis(5),
        angleAxis(6)
    ],
    radiusAxis: [
        radiusAxis(0),
        radiusAxis(1),
        radiusAxis(2),
        radiusAxis(3),
        radiusAxis(4),
        radiusAxis(5),
        radiusAxis(6)

    ],
    series: [
        polarSeries(0, dataL1), //【0，0】
        polarSeries(0, dataL2), //【0，0】
        polarSeries(1, dataL3), //【1，1】
        polarSeries(1, dataL4), //【1，1】
        polarSeries(2, dataL5), //【1，0】
        polarSeries(3, dataL6), //【0，1】
        polarSeries(4, dataL7), //【0，2】
        polarSeries(4, dataL8), //【0，2】
        polarSeries(5, dataL9), //【1，2】
        polarSeries(5, dataL10), //【1，2】圆
        polarSeries(6, dataL11), //【2，0】
        polarSeries(6, dataL12), //【2，0】
    ]
};