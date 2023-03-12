option = {
    backgroundColor: '#00265f',
    color: [new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
        offset: 0,
        color: "#0167e8"
    }, {
        offset: 1,
        color: "#13ace8"
    }], false)],
    grid: {
        left: '8%',
        right: '10%',
        top: '12%',
        bottom: '18%',
        containLabel: true
    },
    tooltip: {
        show: "true",
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    yAxis: {
        data: ["防护服","手套", "护栏", "标识标牌", "安全帽"],
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: true,
            color: "#fff",
            fontSize: 18
        },

    },
    xAxis: [{
        axisTick: {
            show: false
        },
        type: 'value',
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        }
    }],
    series: [{
        name: '违规',
        type: 'bar',
        barWidth: 37,
        label: {
            normal: {
                show: true,
                position: 'right',
                textStyle: {
                    color: "#9fceff",
                    fontSize: 14
                }
            }
        },
        data: [50, 60, 70, 80,90]
    }]
};