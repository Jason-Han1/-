var colorDetail = '';

function detectionData(air) {
    var color = new echarts.graphic.LinearGradient(0, 0, 1, 1,
    [{
        offset: 0,
        color: '#79E73C'
    }, {
        offset:1,
        color: '#79E73C'
    }]);
    var level = '优'
    if (air > 50 && air <= 100) {
        color = new echarts.graphic.LinearGradient(0, 0, 1, 1,
        [{
            offset: 0,
            color: '#FFD800'
        }, {
            offset:1,
            color: '#FFD800'
        }]);
        level = '良'
    } else if (air > 100 && air <= 150) {
        color = new echarts.graphic.LinearGradient(0, 0, 1, 1,
        [{
            offset: 0,
            color: '#FF9000'
        }, {
            offset:1,
            color: '#FF9000'
        }]);
        level = '轻度污染'
    } else if (air > 150 && air <= 200) {
        color = new echarts.graphic.LinearGradient(0, 0, 1, 1,
        [{
            offset: 0,
            color: '#FF2A00'
        }, {
            offset:1,
            color: '#FF2A00'
        }]);
         level = '中度污染'
    } else if (air > 200 && air <= 300) {
        color = new echarts.graphic.LinearGradient(0, 0, 1, 1,
        [{
            offset: 0,
            color: '#EB007F'
        }, {
            offset:1,
            color: '#EB007F'
        }]);
        level = '重度污染'
    } else if (air > 300) {
        color = new echarts.graphic.LinearGradient(0, 0, 1, 1,
        [{
            offset: 0,
            color: '#C7021D'
        }, {
            offset:1,
            color: '#C7021D'
        }]);
        level = '严重污染'
    }
    return {
        color: color,
        level: level
    };
}
option = {
    backgroundColor: '#143E69',
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
                    color: [[0, '#eee'], [1, '#4675BD']],
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
                offsetCenter: [0, '-20%'],
                color: '#FFFFFF',
                fontSize: 50,
                fontWeight: 700
            },
            detail: {
                formatter:function(e){
                    var {color, level} = detectionData(e);
                    return level;
                },
                color: '#fff',
                offsetCenter: [0, '30%'],
                backgroundColor : 'orange',
                borderRadius : 8,
                padding: 10,
                lineHeight: 40
            },
            data: [{value: '0', name: 'AQI'}]
        }
    ],
};
update(Math.random() * 500 | 0)
setInterval(function() {
    update(Math.random() * 500 | 0)
}, 1000);
function update(value) {
    var {color, level} = detectionData(value);
    option.series[0].data[0].value = value;
    option.series[0].data[0].name = `AQI\n\n${value}`;
    //这里颜色跟着改变
    option.series[0].detail.backgroundColor = color.colorStops[1].color;
    option.series[0].axisLine.lineStyle.color[0][0] = value / 500;
    option.series[0].axisLine.lineStyle.color[0][1] = color;
    myChart.setOption(option, true);
}

