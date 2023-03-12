var indicator = [];
var Data = [];
var color = ["#FFC2C2", "#FF8C8C", "#FFD4AB", "#FFB46E", "#FFEE99", "#FFE048", "#315efb", "#3296b8", '#40b68e', "#81be7e"];

for (i = 0; i < 24; i++) {
    // 指示器
    indicator.push({
        name: i.toString(),
        max: 1000
    })
    // value值
    var value = [];
    for (j = 0; j < 24; j++) {
        if (j == i) {
            value.push(Math.random() * 1000)
        } else {
            value.push('')
        }
    }
    // 颜色
    if (color[i]) {
        var c = color[i];
    } else {
        var num = i % (color.length);
        c = color[num];
    }

    Data.push({
        value: value,
        name: '',
        symbol: 'circle',
        symbolSize: 10,
        itemStyle: {
            normal: {
                color: c
            }
        }
    })
}
option = {
    radar: {
        shape: '',
        splitNumber: 5,
        scale: true,
        name: {
            textStyle: {
                color: '#999999',
            }
        },
        axisLine: {
            show: false
        },
        splitArea: {
            areaStyle: {
                color: ['#d4d8e0', '#dcdfe5', '#e1e4ea', '#ebedf1', '#f5f6f8']
            }
        },

        splitLine: {
            lineStyle: {
                color: '#fff'
            }
        },

        indicator: indicator
    },
    series: [{
        type: 'radar',
        name: '请求量',
        lineStyle: {
            width: 0,
            color: 'transparent',
            // type: 'dashed'
        },
        areaStyle: {
            normal: {
                color: 'transparent'
            }
        },
        data: Data
    }]
}