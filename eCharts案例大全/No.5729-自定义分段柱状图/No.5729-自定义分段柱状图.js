var categories = ['一', '二', '三', '四', '五', '六', '日'];

var step = 14399285;

var data = [{
    name: 'JS Heap',
    value: [0, '2020-09-27 22:05', '2020-09-28 04:55'],
    itemStyle: {
        normal: {
            color: '#5a61bb'
        }
    }
}, {
    name: 'Documents',
    value: [1, '2020-09-27 23:05', '2020-09-28 06:55'],
    itemStyle: {
        normal: {
            color: '#5a61bb'
        }
    }
}, {
    name: 'Nodes',
    value: [2, '2020-09-27 21:05', '2020-09-28 05:55'],
    itemStyle: {
        normal: {
            color: '#5a61bb'
        }
    }
}, {
    name: 'Listeners',
    value: [3, '2020-09-27 21:05', '2020-09-28 05:55'],
    itemStyle: {
        normal: {
            color: '#5a61bb'
        }
    }
}, {
    name: 'GPU Memory',
    value: [4, '2020-09-27 21:05', '2020-09-28 05:55'],
    itemStyle: {
        normal: {
            color: '#5a61bb'
        }
    }
}, {
    name: 'GPU',
    value: [5, '2020-09-27 21:05', '2020-09-28 05:55'],
    itemStyle: {
        normal: {
            color: '#5a61bb'
        }
    }
}, {
    name: 'GPU',
    value: [6, '2020-09-27 23:55', '2020-09-28 07:30'],
    itemStyle: {
        normal: {
            color: '#5a61bb'
        }
    }
}]
console.log(data)

function renderItem(params, api) {
    var categoryIndex = api.value(0);
    var end = api.coord([categoryIndex, api.value(1)]);
    var start = api.coord([categoryIndex, api.value(2)]);
    var width = 50;
    var rectShape = echarts.graphic.clipRectByRect({
        x: start[0] - width / 2,
        y: start[1],
        width: 50,
        height: end[1] - start[1]
    }, {
        x: params.coordSys.x,
        y: params.coordSys.y,
        width: params.coordSys.width,
        height: params.coordSys.height
    });

    return rectShape && {
        type: 'rect',
        shape: rectShape,
        style: api.style()
    };
}


option = {
    // tooltip: {
    //     formatter: function(params) {
    //         return params.marker + params.name + ': ' + params.value[1] + ' ms';
    //     }
    // },
    title: {
        text: '自定义分段柱状图',
        left: 'center'
    },
    grid: {
        height: 300
    },
    yAxis: [{
        min: '2020-09-27 21:05',
        max: '2020-09-28 07:30',
        type: 'time',
        splitNumber: 5,
        axisLabel: {
            formatter: function(value) {
                var date = new Date(value);
                var texts = [date.getHours() < 10 ? '0' + date.getHours() : date.getHours(), date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()];

                return texts.join(':')
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed'
            }
        }

    }],
    xAxis: {
        data: categories,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    series: [{
        type: 'custom',
        renderItem: renderItem,
        itemStyle: {

            opacity: 0.8

        },
        encode: {
            y: [1, 2],
            x: 0
        },
        data: data
    }]
};