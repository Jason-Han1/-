var data = ['近三年审核问题重复发生率', '3.2.1', '6.3.5', '6.3.5', '8.1.3', ]
var data1 = ['3', '2', '4', '5', '3']
var data2 = ['5', '7', '3', '6', '7']
var data3 = ['4', '3', '5', '7', '5']
let num =2
option = {
    backgroundColor: '#031f2d',
    title: {
        text: '近三年审核问题重复发生率',
        x: 'center',
        top: "20",
        textStyle: {
            color: '#E2EEFF',
            fontSize: 16,
            fontWeight: 200
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        right: 5,
        top: '40',
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 15,
        textStyle: {
            color: '#ACCFFF',
            fontSize: 12,
        },
    },
    grid: {
        left: '2%',
        right: '2%',
        bottom: '10%',
        top: '80',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        axisLine: {
            lineStyle: {
                color: '#344B83'
            }
        },
        axisLabel: { //坐标轴刻度标签的相关设置。
            interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
            margin: 15,
            textStyle: {
                color: '#ACCFFF',
                fontStyle: 'normal',
                fontSize: 14,
            },
            formatter: function(value) {
                let valueTxt = '';
                if (value.length > 3) {
                    valueTxt = value.substring(0, num) + '...';
                } else {
                    valueTxt = value;
                }
                return valueTxt;
            }
        },
        data: data
    }],
    yAxis: [{
        type: 'value',
        axisLabel: { //坐标轴刻度标签的相关设置。
            interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
            margin: 15,
            textStyle: {
                color: '#ACCFFF',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 10,
            }
        },
        axisLine: {
            lineStyle: {
                color: '#344B83'
            }
        },
        splitLine: {
            lineStyle: {
                color: "#344B83",
            },
        },
    }],
    series: [{
        name: '2018',
        type: 'bar',
        barWidth: '10',
        itemStyle: {
            normal: {
                show: true,
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: '#2D4075'

                }, {
                    offset: 1,
                    color: '#0379E2'

                }]),
            }
        },
        data: data1
    }, {
        name: '2019',
        type: 'bar',
        barWidth: '10',
        itemStyle: {
            normal: {
                show: true,
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: 'rgba(14, 95, 88, 0.81)'

                }, {
                    offset: 1,
                    color: '#4E9CB9'

                }]),
            }
        },
        data: data2
    }, {
        name: '2020',
        type: 'bar',
        barWidth: '10',
        itemStyle: {
            normal: {
                show: true,
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: '#24376F'

                }, {
                    offset: 1,
                    color: '#6386F8'

                }]),
            }
        },
        data: data2
    }]
};