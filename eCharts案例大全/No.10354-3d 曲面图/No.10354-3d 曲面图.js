var data = [
    [0, 1565854031000, 38],
    [0, 1565855031000, 46],
    [0, 1565856031000, 49],
    [0, 1565857031000, 52],
    [0, 1565858031000, 30],
    [0, 1565859031000, 46],
    [0, 1565860031000, 27],
    [0, 1565861031000, 30],
    [0, 1565862031000, 49],
    [1, 1565854031000, 30],
    [1, 1565855031000, 46],
    [1, 1565856031000, 38],
    [1, 1565857031000, 30],
    [1, 1565858031000, 46],
    [1, 1565859031000, 13],
    [1, 1565860031000, 55],
    [1, 1565861031000, 30],
    [1, 1565862031000, 38],
    [2, 1565854031000, 52],
    [2, 1565855031000, 46],
    [2, 1565856031000, 49],
    [2, 1565857031000, 27],
    [2, 1565858031000, 38],
    [2, 1565859031000, 52],
    [2, 1565860031000, 55],
    [2, 1565861031000, 55],
    [2, 1565862031000, 75],
    [3, 1565854031000, 52],
    [3, 1565855031000, 46],
    [3, 1565856031000, 49],
    [3, 1565857031000, 27],
    [3, 1565858031000, 38],
    [3, 1565859031000, 52],
    [3, 1565860031000, 55],
    [3, 1565861031000, 55],
    [3, 1565862031000, 75],
    [4, 1565854031000, 52],
    [4, 1565855031000, 46],
    [4, 1565856031000, 49],
    [4, 1565857031000, 27],
    [4, 1565858031000, 38],
    [4, 1565859031000, 27],
    [4, 1565860031000, 55],
    [4, 1565861031000, 49],
    [4, 1565862031000, 13],
    [5, 1565854031000, 16],
    [5, 1565855031000, 55],
    [5, 1565856031000, 14],
    [5, 1565857031000, 14],
    [5, 1565858031000, 16],
    [5, 1565859031000, 38],
    [5, 1565860031000, 55],
    [5, 1565861031000, 55],
    [5, 1565862031000, 75]
];

option = {
    backgroundColor: '#222',
    tooltip: {
        formatter: function(params) {
            var location = parseFloat(params.value['1']);
            var showLocation = location;
            var name = params.seriesName;
            var time = params.value['0']; //单位为秒
            var temp = params.value['2'];
            var showTime = moment(time).format("YYYY-MM-DD HH:mm:ss");
            return "时间: " + showTime + "<br/>位置: " + showLocation + "米<br/>温度: " + temp + "℃";
        },
        axisPointer: {
            type: 'shadow',
        },
    },
    visualMap: {
        show: false,
        min: 20,
        max: 70,
        inRange: {
            color: ['#00BFFF', 'yellow', 'red'],
            opacity: [0.5, 1]
        }
    },

    xAxis3D: {
        axisPointer: {
            show: false
        },
        type: 'value',
        name: '时间',
        min: 'dataMin',
        max: 'dataMax',
        axisLabel: {
            show: true,
            fontFamily: '微软雅黑',
            formatter: function(value, index) {
                let showTime = moment(value).format("MM-DD HH:mm")
                return showTime;
            },
            margin: 10
        },
    },
    yAxis3D: {
        axisPointer: {
            show: false
        },
        type: 'value',
        name: '位置(米)',
        min: 'dataMin',
        max: 'dataMax',
        axisLabel: {
            show: true,
            fontFamily: '微软雅黑',
            margin: 10
        },
    },
    zAxis3D: {
        axisPointer: {
            show: false
        },
        type: 'value',
        name: '温度(℃)',
        min: 'dataMin',
        max: 'dataMax',
        axisLabel: {
            show: true,
            fontFamily: '微软雅黑',
            margin: 10
        },
    },
    grid3D: {
        axisPointer: {
            show: true,
        },
        light: {
            main: {
                intensity: 1.2,
            },
            ambient: {
                intensity: 0.3,
            },
        },
        axisLabel: {
            textStyle: {
                margin: 10,
                color: '#cbcbcb',
                fontSize: 14,
                fontFamily: '微软雅黑',
            },
        },
        axisLine: {
            lineStyle: {
                color: '#cbcbcb',
                width: 1,
            },
        },
        splitLine: {
            lineStyle: {
                color: '#777',
            },
        },
    },
    series: [{
        type: 'surface',
        wireframe: {
            show: false
        },
        data: data.map(function(item) {
            return {
                value: [item[1], item[0], item[2]],
            }
        }),
        shading: 'lambert',

        label: {
            textStyle: {
                fontSize: 16,
                borderWidth: 1
            }
        },

        emphasis: {
            label: {
                textStyle: {
                    fontSize: 20,
                    color: '#900'
                }
            },
            itemStyle: {
                color: '#900'
            }
        }
    }]
}