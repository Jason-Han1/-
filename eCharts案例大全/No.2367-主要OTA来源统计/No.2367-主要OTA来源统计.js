option = {
    backgroundColor: "#ccc",
    title: {
      text: '主要OTA来源统计',
      top: '5%',
      x: 'center',
      color: '#151E26'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        top: '15%',
        right: '3%',
        left: '5%',
        bottom: '12%'
    },
    xAxis: [{
        type: 'category',
        data: ['携程', '美团', '去哪儿'],
        axisLine: {
            lineStyle: {
                color: 'rgba(241, 241, 241, .7)'
            }
        },
        axisLabel: {
            margin: 10,
           color: 'rgba(21, 30, 38, .7)',
            textStyle: {
                fontSize: 14
            },
        },
        axisTick: {
            show: false
        }
    }],
    yAxis: [{
        name: 'OTA数据总量',
        nameTextStyle: {
            color: 'rgba(21, 30, 38, .7)'
        },
        axisLabel: {
            formatter: '{value}',
            color: 'rgba(21, 30, 38, .7)',
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(241, 241, 241, .7)'
            }
        },
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: 'rgba(255,255,255,0.12)'
            }
        }
    }],
    series: [{
        type: 'bar',
        data: [80, 80, 97, 53, 95, 26, 72],
        barMaxWidth: '40px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#54D2E5' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#32D394' // 100% 处的颜色
                }], false)
            }
        },
        label: {
            normal: {
                show: true,
                lineHeight: 30,
                formatter: '{c}',
                position: 'top',
                textStyle: {
                    color: '#00D6F9',
                    fontSize: 20
                }

            }
        }
    }]
};
