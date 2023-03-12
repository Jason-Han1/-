var xdata = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00'];
var dashedData = [10, 20, 10, 30, 40, 50]; //虚线
var lineData = [10, 20, 10, 30, 40]; //实线
option = {
    backgroundColor: '#000',
    title: {
        text: '预计一小时后客流量',
        x: 50,
        y: 20,
        textStyle: {
            fontSize: 16,
            color: '#00B9FF',
            fontWeight: 'normal'
        }
    },
    tooltip: {
        trigger: 'axis',
        formatter: '{a} <br/>{b} : {c}'
    },
    legend: {
        left: '10'
    },
    xAxis: {
        type: 'category',
        name: 'x',
        axisLine: {
            show: false,
            lineStyle: {
                // color: 'rgba(255,255,255,0)',
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        data: xdata
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: {
        type: 'log',
        name: 'y',
        axisLine: {
            show: false,
            lineStyle: {
                color: 'rgba(255,255,255,0)',

            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
    },
    series: [{
            // name: '测试数据',
            type: 'line',
            smooth: true,
            showSymbol: false,
            data: dashedData,
            itemStyle: {
                normal: {
                    lineStyle: {
                        type: 'dashed',
                        color: '#595A5C'
                    }
                }
            }
        },
        {
            // name: '测试数据',
            type: 'line',
            smooth: true,
            // showSymbol: false,
            data: lineData,
            itemStyle: {
                normal: {
                    lineStyle: {
                        // color: 'brushStyle'
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: 'rgba(84,91,255,1)'
                        }, {
                            offset: 1,
                            color: 'rgba(8,210,255,1)'
                        }])
                    }
                }
            }
        },
    ]
};