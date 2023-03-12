var colorSet = new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
    offset: 0,
    color: '#8AFF34'
}, {
    offset: 1,
    color: '#D5FF53'
}]);
var labelRight = {
    normal: {
        label: {
            position: 'right'
        },
        color: colorSet
    }
};
var ydata = ['服务满意度', '人员到岗率', '巡检完成率'];
var dataArr = [
    0.44,
    {
        value: -0.23,
        itemStyle: labelRight
    },
    0.08,
];
option = {
    backgroundColor: 'rgba(0,0,0,.5)',
    title: {
        text: '周同比',
        textStyle: {
            color: '#fff',
            fontSize: 20
        },
        x: 'center',
        y: 20
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        top: 80,
        bottom: 30
    },
    xAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#10365B'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0)'
            }
        },
        axisLabel: {
            textStyle: {
                fontSize: 16,
                color: "#02E3FF",
            },
            formatter: '{value}%',
        },
    },
    yAxis: {
        type: 'category',
        axisLine: {
            show: true,
            lineStyle: {
                width: 3,
                color: '#194BD0'
            }
        },
        axisLabel: {
            show: false,

        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                width: 2,
                color: 'rgba(8,25,51,.3)'
            }
        },
        data: ydata
    },
    series: [{
        name: '周同比',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: false,
                formatter: '{b}%'
            }
        },
        itemStyle: {
            normal: {
                show: false,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#4CE1FF'
                }, {
                    offset: 1,
                    color: '#3394FF'
                }]),
            }
        },
        data: dataArr
    }]
};