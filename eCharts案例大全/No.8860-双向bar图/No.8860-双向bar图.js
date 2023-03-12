var xAxis = ['第一名', '第二名', '第三名', '第四名', '第五名'];
var data = [10, 52, 200, 334, 390, 330, 220];
option = {
    color: ['#3398DB'],
    tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: [{
            show: false,
            left: '9%',
            top: 0,
            bottom: 0,
            containLabel: true,
            width: '31%'
        },
        {
            show: false,
            left: '52.5%',
            top: 0,
            bottom: 0,
            width: '0%'
        }, {
            show: false,
            right: '9%',
            top: 0,
            bottom: 0,
            containLabel: true,
            width: '31%'
        }
    ],
    xAxis: [{
        type: 'value',
        inverse: true,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }

    }, {
        gridIndex: 1,
        show: false
    }, {
        gridIndex: 2,
        type: 'value',

        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    }],
    yAxis: [{
        type: 'category',
        inverse: true,
        position: 'right',
        data: xAxis,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    }, {
        gridIndex: 1,
        type: 'category',
        inverse: true,
        position: 'center',
        data: xAxis,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    }, {
        gridIndex: 2,
        type: 'category',
        inverse: true,
        position: 'left',
        data: xAxis,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }

    }],
    series: [{
        name: '中国运动员热度',
        type: 'bar',
        barWidth: 12,
        label: {
            show: true,
            position: 'left'
        },
        data: [6085, 5629, 3163, 2146, 1393]
    }, {
        xAxisIndex: 2,
        yAxisIndex: 2,
        name: '国外运动员热度',
        type: 'bar',
        barWidth: 12,
        label: {
            show: true,
            position: 'right'
        },
        data: [1153, 739, 435, 432, 405]

    }]
};