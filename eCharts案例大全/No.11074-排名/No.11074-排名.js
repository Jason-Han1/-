var data = [{
    name: '第一产业',
    value: 111
}, {
    name: '第二产业',
    value: 121
}, {
    name: '第三产业',
    value: 131
}, {
    name: '第四产业',
    value: 141
}, {
    name: '第五产业',
    value: 151
}];
var backGroundData = [],
    nameData = [],
    valueData = [],
    maxValue = 0,
    len = data.length;
for (var i = 0; i < len; i++) {
    if (data[i].value > maxValue) {
        maxValue = data[i].value;
    }
}
for (var i = 0; i < len; i++) {
    backGroundData.push(maxValue * 1.1);
    nameData.push(data[i].name);
    valueData.push(data[i].value);
}

var option = {
    width: '90%',
    grid: {
        left: '5%',
        top: '5%',
        bottom: '1%',
    },
    tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        formatter: '{b}：{c}',
        textStyle: {
            fontSize: "20"
        }
    },
    xAxis: {
        type: 'value',
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        data: nameData
    },
    series: [{
            barWidth: 15,
            z: 10,
            itemStyle: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 1, 0,
                    [{
                        offset: 0,
                        color: '#f05f1c' /*#0085FA*/
                    }, {
                        offset: 0.7,
                        color: '#e9ea07' /*#00BBFD*/
                    }]),
                barBorderRadius: 15
            },
            label: {
                show: true,
                fontSize: 20,
                distance: 10,
                position: [0, "-100%"],
                formatter: "{b}",
                offset: [0, -10],
                color: '#FFFFFF'
            },
            type: 'bar',
            data: valueData
        },
        {
            type: 'bar',
            barGap: '-100%',
            barWidth: 15,
            animation: false,
            z: -1,
            itemStyle: {
                color: '#2f3b4e',
                barBorderRadius: 15
            },
            label: {
                show: true,
                position: 'right',
                fontSize: 20,
                color: "#08CDFF",
                formatter: function(param) {
                    for (var i = 0; i < data.length; i++) {
                        if (param.name == data[i].name) {
                            return data[i].value + " 人";
                        }
                    }
                }
            },
            data: backGroundData
        }
    ]
};