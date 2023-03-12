var dataName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Mon', 'Tue', 'Wed', 'Thu', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Mon', 'Tue', 'Wed', 'Thu', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Mon', 'Tue', 'Wed', 'Thu'];
// var dataNumber = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var dataNumber = [220, 323, 191, 234, 182, 280, 191, 234, 182, 310, 310, 183, 191, 234, 182, 280, 191, 234, 182, 310, 310, 183, 191, 234, 182, 280, 191, 234, 182, 310, 310];
var option = {
    minInterval: 1, //Y轴间隙最少是+1
    max: 100,
    min: 0,
    dataZoom: [{ //滑动初始值
            type: 'slider',
            show: dataNumber.length > 12 ? true : false,
            startValue:dataNumber.length > 12 ? dataNumber.length - 12 : null,
            endValue: dataNumber.length > 12 ? dataNumber.length : null
        }
    ],
    title: {
        text: '供应商统计图',
        textStyle: {
            color: 'red'
        }
    },
    backgroundColor: '#23243a',
    tooltip: { //提示框组件
        trigger: 'axis',
        formatter: '{b}{a0}: {c0}',
        color: '#000000',
        axisPointer: {
            type: 'line'
        },

    },
    grid: {
        left: '0',
        right: '0',
        bottom: '50',
        top: 30,
        padding: '0 0 10 0',
        containLabel: true,
    },

    xAxis: [{
        type: 'category',
        boundaryGap: true, //坐标轴两边留白
        data: dataName,
        axisLabel: { //坐标轴刻度标签的相关设置。
            interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
            margin: 15,
            textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12

            }
        },
        axisTick: { //坐标轴刻度相关设置。
            show: false,
        },
        axisLine: { //坐标轴轴线相关设置
            lineStyle: {
                color: '#fff',
                opacity: 0.2
            }
        },
        splitLine: { //坐标轴在 grid 区域中的分隔线。
            show: false,
        }
    }],
    yAxis: [{
        type: 'value',
        splitNumber: 3,
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12

            }
        },
        axisLine: {
            show: true
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#fff'],
                opacity: 0.06
            }
        }

    }],

    series: [{
            name: '',
            type: 'line',
            data: dataNumber,
            smooth: true,
            symbolSize: 10,
            symbol: 'circle',
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 136, 212, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(0, 136, 212, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1,
                        color: 'rgba(127, 128, 225, 0.7)'
                    }, {
                        offset: 0.9,
                        color: 'rgba(72, 73, 181, 0.7)'
                    }, {
                        offset: 0.25,
                        color: 'rgba(226, 99, 74, 0.7)'
                    }, {
                        offset: 0,
                        color: 'rgba(253, 200, 106, 0.7)'
                    }], false),
                    barBorderRadius: 0,
                    label: {
                        show: false,
                        position: 'top',
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            markPoint: {
                data: [{
                    type: 'max',
                    name: '最大值'
                }, {
                    type: 'min',
                    name: '最小值'
                }]
            }
        }

    ]
};