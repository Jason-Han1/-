option = {
    xAxis: [{
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        onZero: false,
        show: true,

        axisLabel: { //坐标轴刻度标签的相关设置
            margin: -180, //刻度标签与轴线之间的距离

        },

    }, ],
    yAxis: [{
        type: 'value',
    }, {

    }],
    series: [{
        data: [3, 10, -9, 3, -3, 19, 15],
        type: 'line'
    }]
};