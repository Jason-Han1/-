var securityData = [6.5, 5.2, 5.3, 4.5, 5.8, 4.7];
var securityMax = 8; //当天累计人数
var securityMin = 0.1;

option = {
    backgroundColor: '#1d2239',
    tooltip: { //提示框组件
        trigger: 'axis',
        formatter: '{b}: {c}',
        axisPointer: {
            type: 'shadow',
            label: {
                backgroundColor: '#6a7985'
            }
        },
        textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 12,
        }
    },
    legend: {
        show: true,
        left: '10',
        top: '10',
        data: ['安全排名', '安全'],
    },
    textStyle: {
        color: '#a8aab0',
        fontStyle: 'normal',
        fontFamily: '微软雅黑',
        fontSize: 12,
    },
    grid: {
        left: 15,
        right: 35,
        bottom: 15,
        top: 10,
        containLabel: true,
    },
    xAxis: [{
        type: 'value',
        boundaryGap: true,

        axisLabel: { //坐标轴刻度标签的相关设置。
            show: false,
            interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
            margin: 10,
        },
        axisTick: { //坐标轴刻度相关设置。
            show: false,
        },
        axisLine: { //坐标轴轴线相关设置
            lineStyle: {
                color: '#fff',
                opacity: 0.3
            }
        },
        splitLine: { //坐标轴在 grid 区域中的分隔线。
            show: false
        }
    }],
    yAxis: [{
        type: 'category',
        splitNumber: 4,
        data: [' 新福利', '二汽增城', '花都恒通'],
        axisLine: {
            lineStyle: {
                color: '#fff',
                opacity: 0.2
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#fff'],
                opacity: 0.1
            }
        }

    }],
    series: [{
        name: '安全排名',
        type: 'bar',
        barWidth: '20',
        zlevel: 3,
        stack: true,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#6fd600'
                }, {
                    offset: 0.6,
                    color: '#bcff2d'
                }, {
                    offset: 0.8,
                    color: '#ff8f45'
                }, {
                    offset: 1,
                    color: '#fed57c'
                }], false),
                opacity: 0.56,
            },
        },
        label: {
            normal: {
                show: true,
                position: 'top',
                offset: [0, -5],
                fontSize:30,
                textStyle: {
                    color: '#fff',
                },
            }
        },
				markLine: { //预警线
					label: { normal: {show: true,fontSize:20,color:'#9e9e9e',position: 'start',padding: [0, 0, 0, 0]}},
					lineStyle: {normal: {opacity: 0}},
					data: [
						{xAxis: 0,label: {normal: {formatter: '2018-01-26 00:00'}}},
						{xAxis: 2,label: {normal: {formatter: '2018-01-26 02:00'}}},
						{xAxis: 4,label: {normal: {formatter: '2018-01-26 04:00'}}},
						{xAxis: 6,label: {normal: {formatter: '2018-01-26 06:00'}}},
						{xAxis: 8,label: {normal: {formatter: '2018-01-26 08:00'}}},
						{xAxis:10,label: {normal: {formatter: '2018-01-26 10:00'}}}
					]
				},
        data: securityData
    }, {
        name: '安全', //发光
        type: 'bar',
        zlevel: 4,
        barWidth: '20',
        stack: true,
        itemStyle: {
            normal: {
                color: 'rgba(198, 255, 163, 0.8)',
                barBorderRadius: 0,
                shadowBlur: 5,
                shadowColor: '#c6ffa3',
            },
        },
        data: securityData.map(function(d) {
            return securityMin
        }),

    }, {
        name: '最大值',
        type: 'bar',
        zlevel: 2,
        barWidth: '20',
        barGap: '-100%',
        barCategoryGap: '50%',
        itemStyle: {
            normal: {
                color: '#364473',
                borderColor: '#52597a',
                borderWidth: 1,
                barBorderRadius: [0, 2, 2, 0],
                opacity: 0.7,
            },
        },
        data: securityData.map(function(d) {
            return securityMax
        }),
    }]
};