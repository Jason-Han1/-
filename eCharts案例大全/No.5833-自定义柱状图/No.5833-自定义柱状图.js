var data = [
    ['2020-09-20 22:50', '2020-09-20 23:55', 100, '浅睡'],
    ['2020-09-20 23:55', '2020-09-21 01:55', 80, '深睡'],
    ['2020-09-21 01:55', '2020-09-21 02:00', 100, '清醒'],
    ['2020-09-21 02:00', '2020-09-21 06:55', 100, '浅睡'],
];
var colorList = {
    '浅睡': '#976ced',
    '深睡': '#6055d8',
    '清醒': '#ecd4ae',
};

data = echarts.util.map(data, function(item, index) {
    return {
        value: item,
        itemStyle: {
            color: colorList[item[3]]
        }
    };
});

function renderItem(params, api) {
    var yValue = api.value(2);
    var start = api.coord([api.value(0), yValue]);
    var size = api.size([api.value(1) - api.value(0), yValue]);
    var style = api.style();

    return {
        type: 'rect',
        shape: {
            x: start[0],
            y: start[1],
            width: size[0],
            height: size[1]
        },
        style: style
    };
}

option = {
    title: {
        left: 'center',
        bottom: '5%',
        subtext: "{x|} 深睡 {y|} 浅睡 {z|} 清醒 ",
        subtextStyle: {
            fontSize: 14,
            color: "#333",
            rich: {
                x: {
                    width:5,height:5,
                    borderRadius:2.5,
                    backgroundColor:"#6055d8"
                },y: {
                    width:5,height:5,
                    borderRadius:2.5,
                    backgroundColor:"#976ced"
                },z: {
                    width:5,height:5,
                    borderRadius:2.5,
                    backgroundColor:"#ecd4ae"
                },
            }
        }
    },
    tooltip: {},
    legend: {
        show: true,
        data: ['深睡，浅睡，清醒'],
        formatter: function(name) {
            console.log(name)
            return 'Legend ' + name;
        }
    },
    xAxis: {
        type: 'time',
        scale: true,
        min: '2020-09-20 22:50',
        max: '2020-09-21 06:55',
        axisLabel: {
            show: true,
            interval: 1,
            formatter: function(value, index) {
                // 格式化成月/日，只在第一个刻度显示年份
                var date = new Date(value);
                var texts = [date.getHours() < 10 ? '0' + date.getHours() : date.getHours(), date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()];
                if (texts.join(':') == data[0].value[0].substring(data[0].value[0].length - 5) || texts.join(':') == data[data.length - 1].value[1].substring(data[data.length - 1].value[1].length - 5)) {
                    return texts.join(':')
                } else {
                    return ''
                }
            }

        },
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
    yAxis: {
        axisLabel: {
            show: false
        },
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
        label: {
            show: false,
            position: 'top'
        },
        dimensions: ['from', 'to', 'profit'],
        encode: {
            x: [0, 1],
            y: 2,
            tooltip: [0, 1, 2],
            itemName: 3
        },
        data: data
    }]
};