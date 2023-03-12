var data = [-38.17, -47.66, -40.76, -28.81, -9.36, 32.07, 113.08, 84.30, 35.14, 17.32, 10.49, 1.79, 1.15, 1.70, -1.62, 1.81, -1.04, -2.34, -0.30, 7.13, 6.39, 3.07, -5.02, -21.09];
option = {
    title: {
        text: '基于时间段的UV环比',
    },
    tooltip: {
        trigger: 'axis',
        formatter: '{b0} : {c0}%'
    },
    toolbox: {
        show: true,
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    xAxis: [{
        type: 'category',
        color: '#59588D',
        data: ['环比 23点', '环比 0点', '环比 1点', '环比 2点', '环比 3点', '环比 4点', '环比 5点', '环比 6点', '环比 7点', '环比 8点', '环比 9点', '环比 10点', '环比 11点', '环比 12点', '环比 13点', '环比 14点', '环比 15点', '环比 16点', '环比 17点', '环比 18点', '环比 19点', '环比 20点', '环比 21点', '环比 22点'],
        axisLabel: {
            margin: 20,
            interval: 0,
            formatter: function(value) {
                return value.split(" ").join("\n");
            }
        },
        boundaryGap: true,
    }],
    yAxis: [{
        axisLabel: {
            formatter: '{value}%',
        }
    }],
    series: [{
        type: 'bar',
        data: data,
        label: {
            show: true,
            position: 'top',
        },
    }, {
        type: 'bar',
        data: data,
        barGap: '-100%',
        itemStyle: {
            normal: {
                color: function(params) { //展示负值的柱子，正数设为透明
                    let colorArr = params.value > 0 ? 'rgba(0,0,0,0)' : '#4d4d4d'
                    return colorArr
                },
            },
        }
    }]
};