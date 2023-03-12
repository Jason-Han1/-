//百分比数值的位置
var data = 47.2;
var position = '';
if (data >= 50) {
    position = 'inside';
} else if (data < 50) {
    position = 'right';
}

var option = {
    title: {
        text: "进度条",
    },
    animationDuration: 5000,
    grid: {
        top: 'center',
        left: '8%',
        right: '8%',
        height: '20%',
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
        // barMaxWidth: '100%',
        label: {
            normal: {
                show: true,
                position: position,
                formatter: '{c} %',
                textStyle: {
                    color: '#FFFFFF',
                    fontWeight: 'bold',
                    fontFamily: 'Microsoft YaHei',
                    fontSize: 35
                }
            }
        },
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                shadowBlur: 10,
                shadowColor: '#111',
                color: '#2FD04F'
            }
        },
        data: [data],
        z: 10
    }, {
        type: 'bar',
        barWidth: '100%',
        yAxisIndex: 1,
        silent: true,
        // barMaxWidth: '100%',
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: '#42475B'
            }
        },
        data: [100],
    }]
};