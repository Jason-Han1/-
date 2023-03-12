option = {
    backgroundColor: '#ffffff',
    tooltip: {
        show: true
    },
    grid: {
        bottom: '18%',
        top: '10%'
    },
    xAxis: {
        data: ['未标注', '精度不足', '偏移'],
        axisLine: {
            lineStyle: {
                color: 'rgba(177, 177, 177, 1)',
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: 'rgba(51, 51, 51, 1)',
            fontSize: 14
        },
        splitLine: {
            show: false,
        },
    },
    yAxis: {
        name: "",
        nameTextStyle: {
            color: 'rgba(177, 177, 177, 1)',
            fontSize: 16
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            color: 'rgba(177, 177, 177, 1)',
            fontSize: 16
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(177, 177, 177, 1)',
            }
        },

    },
    tooltip: {
        show: true
    },
    series: [{
        type: 'bar',
        barWidth: 48,
        silent: false,
        itemStyle: {
            normal: {
                color: function(params) {
                    // 给出颜色组                  
                    var colorList = ['rgba(255, 159, 0, 1)', 'rgba(255, 116, 0, 1)', 'rgba(255, 79, 0, 1)'];
                    return colorList[params.dataIndex]
                }
            }
        },
        data: [25, 67, 16]
    }]
};