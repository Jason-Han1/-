/** powered by 进度条：http://gallery.echartsjs.com/editor.html?c=xrkKetC27e */
/**
可以设置多个 target value
简单配置一下就可以变成横向
*/
//config
var config = {
    min: 0,
    max: 100,
    targetValue: {
        color: '#5aaf2e',
        value: 60
    }
}

//根据target value ，生成相应位置的 graphic
function _settingVerticalGraphic(config) {
    var graphic = [];
    var left = myChart.convertToPixel({
        xAxisIndex: 0
    }, 0);
    left = parseFloat(left, 10).toFixed(2);
    left -= 26;
    var targetValue = config.targetValue.value;
    var min = config.min || 0;
    var max = config.max || 100;
    if (targetValue > max || targetValue < min) {
        return;
    }
    var top = _getyAxisValueTop(targetValue);
    graphic.push({
        z: 10,
        type: 'line',
        left: left,
        shape: {
            x1: 0,
            x2: 35
        },
        style: {
            stroke: 'red',
            lineWidth: 1
        },
        silent: true,
        top: top
    });
    return {
        graphic: graphic
    };
}

function _getyAxisValueTop(value) {
    var top = myChart.convertToPixel({
        yAxisIndex: 0
    }, value);
    return parseFloat(top, 10).toFixed(2) - 2;
}

//防止自动 setOption
var option1 = {
    "tooltip": {
        "axisPointer": {
            "type": ""
        }
    },
    "grid": {
        "left": 'middle',
        "width": 60
    },
    "yAxis": {
        "show": true,
        "offset": -5,
        "type": "value",
        "interval": 1,
        "axisTick": {
            "show": false
        },
        "axisLine": {
            "show": false
        },
        "axisLabel": {
            "show": true,
            "showMinLabel": true,
            "showMaxLabel": true,
            formatter: function(val) {
                if (val === config.min || val === config.max || val === config.targetValue.value) {
                    return val;
                }
            }
        },
        "splitLine": {
            "show": false
        },
        "max": config.max,
        "min": config.min
    },
    "xAxis": {
        "show": false,
        "type": "category"
    },
    "series": [{
        "name": "",
        "type": "bar",
        "barWidth": 30,
        "silent": true,
        "animation": false,
        "itemStyle": {
            "normal": {
                "color": "#444"
            }
        },
        "barGap": "-100%",
        "data": [100]
    }, {
        "name": "成绩",
        "type": "bar",
        "barWidth": 30,
        "label": {
            "normal": {
                "show": true,
                "position": "insideTopRight",
                "offset": [30, 0],
                "textStyle": {
                    "color": "#63869e"
                }
            }
        },
        "data": [{
            "value": "50",
            "itemStyle": {
                "normal": {
                    "color": "red"
                }
            },
            "name": "分数"
        }]

    }],
};

function handleColor(option, config) {
    if (option.series[1].data[0].value >= config.targetValue.value) {
        option.series[1].data[0].itemStyle.normal.color = config.targetValue.color;
        option.series[1].label.normal.textStyle.color = config.targetValue.color;
    }
    return option;
}
//分数 50 不及格
myChart.setOption(handleColor(option1, config));
setTimeout(function() {
    //分数 80 及格
    option1.series[1].data[0].value = 80;
    myChart.setOption(handleColor(option1, config));
}, 1000);
//标记红线
myChart.setOption(_settingVerticalGraphic(config), false);