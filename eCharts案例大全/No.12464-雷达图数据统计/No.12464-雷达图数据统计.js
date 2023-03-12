var list = [
    [85, 65, 55, 90, 82, 43], 100, [{
        "name": "输出",
        "max": 100
    }, {
        "name": "生存",
        "max": 100
    }, {
        "name": "移动",
        "max": 100
    }, {
        "name": "救助",
        "max": 100
    }, {
        "name": "助攻",
        "max": 100
    }, {
        "name": "经济",
        "max": 100
    }]
];

var dataList = list[0];
var maxValue = list[1];

var background = "#001C32"; //背景 

//字体基数
var scale = 0.7;

var rich = {
    total: {
        color: "#ffc72b",
        fontSize: 18 * scale,
        align: 'center',
        padding: [1, 0],
    },
    total_text: {
        fontSize: 15 * scale,
        align: 'center'
    },
};

var holeTypeData = list[2];


//option
var option = {

    backgroundColor: background,

    grid: {
        top: "1%",
        left: "1%",
        right: "1%",
        bottom: "1%"
    },
    tooltip: {
        trigger: 'axis'
    },
    radar: [{
        nameGap: 5,
        indicator: holeTypeData,
        center: ['50%', '50%'],
        radius: '40%',
        name: {
            textStyle: {
                fontSize: 15 * scale,
                color: '#ffffff'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#696969',
                width: 1
            },
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: '#001A29',
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#696969'
            }
        }
    }],
    legend: {
        selectedMode: false,
        top: '0', // 图例组件离容器顶部的距离
        right: '0%',
        icon: 'none',
        textStyle: {
            fontSize: 15 * scale,
            rich: rich
        }
    },
    series: [{
        type: 'radar',
        animation: false, // 是否开启动画。
        tooltip: {
            trigger: 'item'
        },
        data: [{
            value: dataList,
            name: '游戏数据统计'
        }],
        symbolSize: 2,
        itemStyle: {
            normal: {
                borderColor: '#ffc000',
            }
        },
        lineStyle: {
            normal: {
                color: "#ffc000",
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255,246,0, 0.9)'
                }, {
                    offset: 0.5,
                    color: 'rgba(255,246,0,0)'
                }, {
                    offset: 1,
                    color: 'rgba(255,246,0, 0.9)'
                }], false)
            }
        }
    }, ]
};