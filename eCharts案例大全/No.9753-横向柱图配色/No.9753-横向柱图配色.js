option = {
    backgroundColor: '#00265f',
   
    grid: {
        left:10,
        top:10,
        bottom:20,
        right:20,
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
        data: ["14.40.146.7 ","14.40.146.7 ", "14.40.146.7 ", "14.40.146.7 ", "14.40.146.7 ", "14.40.146.7 ", "14.40.146.7 ", "14.40.146.7 ", "14.40.146.7 ", "14.40.146.7 "],
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
        name: '入侵',
        type: 'bar',
        barWidth: 9,
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#00fff6'},
                        {offset: 1, color: '#1c84ff'}
                    ]
                ),
                 shadowColor: '#1685ff',
                    shadowBlur: 15,
                    shadowOffsetY: 0
            }
        },
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
        data: [8, 10, 20, 30, 40, 50, 60, 70, 80,90]
    }]
};