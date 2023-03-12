var percent = 1;
var position = 'right';
var option = {
    title: {
        text: "系统更新中，请稍等……",
        left: 'center',
        textStyle: {
            fontFamily: 'Microsoft YaHei',
            fontSize: 36
        }
    },
    animationDuration: 5000,
    grid: {
        left: '8%',
        right: '8%',
        height: '10%',
        bottom: 0,
        containLabel: false
    },
    xAxis: {
        type: 'value',
        axisLabel: {
            show: false,
        },
        max: 100,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
    },
    yAxis: [{
        type: 'category',
        data: [],
        axisLabel: {
            show: false,
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        z: 10
    }, {
        type: 'category',
        axisLabel: {
            show: false,
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        data: [],
    }],
    series: [{
        name: '',
        type: 'bar',
        barWidth: '100%',
        label: {
            normal: {
                show: true,
                position: position,
                formatter: '{c} %',
                textStyle: {
                    fontFamily: 'Microsoft YaHei',
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: '#FFFFFF'
                }
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: '#000',
                color: '#1c84c6'
            }
        },
        data: [percent],
        z: 10
    }, {
        type: 'bar',
        barWidth: '100%',
        yAxisIndex: 1,
        silent: true,
        // barMaxWidth: '100%',
        itemStyle: {
            normal: {
                color: '#42475B'
            }
        },
        data: [100],
    }]
};
// 使用刚指定的配置项和数据显示图表。
setInterval(function() {
    if (percent == 100) {
        percent = 100;
    } else {
        ++percent;
    }
    position = percent >= 50 ? 'inside' : 'right';
    myChart.setOption({
        series: [{
            label: {
                normal: {
                    position: position
                }
            },
            data: [percent]
        }]
    })
}, 1000);