function detectionData(air) {
    var color = new echarts.graphic.LinearGradient(0, 0, 1, 1,
    [{
        offset: 0,
        color: '#ffc000'
    }, {
        offset:1,
        color: '#0aca3f'
    }]);
    var level = '优'
    if (air > 50 && air <= 100) {
        color = new echarts.graphic.LinearGradient(0, 0, 1, 1,
        [{
            offset: 0,
            color: '#ff8a00'
        }, {
            offset:1,
            color: '#ffc000'
        }]);
        level = '良'
    } else if (air > 100 && air <= 150) {
        color = new echarts.graphic.LinearGradient(0, 0, 1, 1,
        [{
            offset: 0,
            color: '#ed4500'
        }, {
            offset:1,
            color: '#ff8a00'
        }]);
        level = '轻度污染'
    } else if (air > 150 && air <= 200) {
        color = new echarts.graphic.LinearGradient(0, 0, 1, 1,
        [{
            offset: 0,
            color: '#be19cb'
        }, {
            offset:1,
            color: '#ed4500'
        }]);
    } else if (air > 200 && air <= 300) {
        color = new echarts.graphic.LinearGradient(0, 0, 1, 1,
        [{
            offset: 0,
            color: '#a70213'
        }, {
            offset:1,
            color: '#be19cb'
        }]);
        level = '中度污染'
    } else if (air > 300) {
        color = new echarts.graphic.LinearGradient(0, 0, 1, 1,
        [{
            offset: 0,
            color: '#a70213'
        }, {
            offset:1,
            color: '#a70213'
        }]);
        level = '重度污染'
    }
    return {
        color: color,
        level: level
    };
}
option = {
    backgroundColor: '#fff',
    series: [
        {
            name: '业务',
            type: 'gauge',
            radius: '100%',
            animationDuration: 6000,
            animationThreshold: 8000,
            animationDelay: 10,
            startAngle: 245,
            endAngle: -65,
            axisLine: {
                show: true,
                lineStyle: {
                    color: [[0, '#eee'], [1, '#eee']],
                }
            },
            splitLine: {show: false},
            axisTick: {show: false},
            axisLabel: {show: false},
            splitLabel: {show: false},
            pointer: {show: false},
            itemStyle: {
                borderWidth: 30,
                color: '#000',
            },
            title: {
                offsetCenter: [0, '-6%'],
                color: 'rgba(0, 0, 0, 0.6)',
                fontSize: 26,
            },
            detail: {
                formatter:'{value}',
                color: 'rgba(0, 0, 0, 0.6)',
                offsetCenter: [0, '20%'],
                lineHeight: 26
            },
            data: [{value: '0', name: 'AQI指数'}]
        }
    ],
};
// update(Math.random() * 500 | 0)
setInterval(function() {
    update(Math.random() * 500 | 0)
}, 1000);
function update(value) {
    var {color, level} = detectionData(value);
    option.series[0].data[0].value = value;
    option.series[0].data[0].name = `AQI指数\n\n${level}`;
    option.series[0].axisLine.lineStyle.color[0][0] = value / 500;
    option.series[0].axisLine.lineStyle.color[0][1] = color;
    myChart.setOption(option, true);
}

