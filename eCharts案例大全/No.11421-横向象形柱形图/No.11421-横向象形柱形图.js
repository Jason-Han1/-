var multiple = document.documentElement.clientWidth / 1920;
//横向象形柱形图
var data = {
    seriesData: [20, 80, 50, 30],
    legendData: [],
    XData: [],
    YData: ['小学', '初中', '高中', '大学'],
    titleText: {
        name: "TP01(横向象形柱形图)"
    }
};

var TP01Svg = {
    book: 'path://M19.825,22.847 L15.945,22.847 L9.803,22.847 L3.726,22.847 C2.481,22.847 1.472,21.815 1.472,20.542 C1.472,19.269 2.481,18.237 3.726,18.237 L3.726,18.238 L19.824,18.238 C20.135,18.238 20.387,17.980 20.387,17.662 L20.387,2.881 C20.387,1.290 19.126,-0.000 17.569,-0.000 L3.163,-0.000 C1.607,-0.000 0.345,1.290 0.345,2.881 L0.345,20.542 C0.347,22.451 1.860,23.998 3.726,24.000 L9.803,24.000 L15.945,23.999 L19.825,23.999 C20.137,23.999 20.389,23.741 20.389,23.423 C20.389,23.105 20.137,22.847 19.825,22.847 ZM19.825,19.965 L15.380,19.965 L10.363,19.966 L3.574,19.966 C3.263,19.966 3.011,20.224 3.011,20.542 C3.011,20.861 3.263,21.119 3.574,21.119 L9.803,21.119 L15.945,21.118 L19.825,21.118 C20.137,21.118 20.389,20.860 20.389,20.541 C20.389,20.223 20.137,19.965 19.825,19.965 Z',
    bookColor: [{
        linear: [{
            offset: 0,
            color: '#00A2FF'
        }, {
            offset: 1,
            color: '#2CE2F5'
        }],
        color: '#00CCFF'
    }, {
        linear: [{
            offset: 0,
            color: '#09ae66'
        }, {
            offset: 1,
            color: '#9bffba'
        }],
        color: '#9bffba'
    }, {
        linear: [{
            offset: 0,
            color: '#FFA81E'
        }, {
            offset: 1,
            color: '#FFFF66'
        }],
        color: '#F3E04D'
    }, {
        linear: [{
            offset: 0,
            color: '#ED6C36'
        }, {
            offset: 1,
            color: '#FFAB65'
        }],
        color: '#FFAB65'
    }]
}
//横向象形柱形图
var TP01Opt = {
    backgroundColor: 'deepblue',
    title: {
        text: '横向象形柱形图',
        textStyle: {
            color: '#fff',
            fontSize: 28 * multiple
        }
    },
    tooltip: {
        extraCssText: 'font-size:18px;'
    },
    grid: {
        left: '15%',
        top: '10%',
        right: '2%',
        bottom: '10%'
    },
    xAxis: [{
        splitLine: {
            show: false
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
        splitNumber: 1,
    }],
    yAxis: [{
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            margin: 80 * multiple,
            textStyle: {
                fontSize: 30 * multiple,
                color: '#fff',
                align: 'left'
            },

        },

        axisPointer: {
            label: {
                show: true,
                margin: 30 * multiple
            }
        },
        data: []
    }],
    series: [{
        name: '',
        type: 'pictorialBar',
        animationEasing: 'elasticOut',
        animationDuration: 3000,
        symbolRepeat: true,
        symbolSize: [45 * multiple, 45 * multiple],
        label: {
            show: true,
            position: 'right',
            fontSize: 35 * multiple,
            fontWeight: 'bold',
            interval: 0
        },
        symbol: TP01Svg.book,
        data: []
    }]
}

var TP01Option;

function OptionFilterTP01() {
    if (TP01Opt.series[0].data != undefined && TP01Opt.series != undefined && data.seriesData != undefined) {
        TP01Series(data.seriesData);
    }

    if (TP01Opt.legend != undefined && TP01Opt.legend[0].data != undefined && data.legendData != undefined) {
        TP01Lgend(data.legendData);
    }

    if (TP01Opt.xAxis != undefined && TP01Opt.xAxis[0].data != undefined && data.XData != undefined) {
        TP01X(data.XData);
    }
    if (TP01Opt.title.text != undefined && data.titleText != undefined) {
        TP01Opt.title.text = data.titleText.name
    }
    if (TP01Opt.yAxis != undefined && TP01Opt.yAxis[0].data != undefined && data.YData != undefined) {
        TP01Y(data.YData);
    }
    TP01Option = TP01Opt;
}

function TP01Lgend(data) {
    for (var i = 0; i < data.length; i++) {
        TP01Opt.legend[i].data = data[i];
    }
}

function TP01X(data) {
    TP01Opt.xAxis[0].data = data;
}

function TP01Y(data) {
    TP01Opt.yAxis[0].data = data;
}

function TP01Series(data) {
    // console.log(data)
    for (var i = 0; i < data.length; i++) {
        var obj = {
            value: 0,
            itemStyle: {
                color: {
                    colorStops: []
                }
            },
            label: {
                color: {}
            }
        }
        TP01Opt.series[0].data.push(obj);
    }

    for (var i = 0; i < data.length; i++) {
        TP01Opt.series[0].data[i].itemStyle.color.colorStops = TP01Svg.bookColor[i].linear;
        TP01Opt.series[0].data[i].label.color = TP01Svg.bookColor[i].color;
        TP01Opt.series[0].data[i].value = data[i];
    }
}
if (Object.prototype.toString.call(data) === "[object Object]" && data != undefined && data != null) {
    //根据传入的图表类型做数据过滤
    if (TP01Opt != undefined && TP01Opt != null) {
        OptionFilterTP01(TP01Opt);
    } else {
        console.error("TP01Opt is not defined");
    }

} else {
    console.error("data type is wrong!");
}
myChart.setOption(TP01Option)