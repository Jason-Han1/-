
option = {
    backgroundColor: '#0e2147',
    xAxis: {
        show: false
    },
    yAxis: [{
        show: true,
        data: [683],
        inverse: true,
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: 'rgba(0,0,0,0)'
        },


    }, {
        show: true,
        inverse: true,
        data:  [683],
        axisLabel: {
            
            textStyle: {
              fontSize: 14,
              color:"#16a76f",
              fontWeight:"bold"
            }
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },

    }],
    series: [{
        name: '太原市民政局',
        type: 'bar',
        yAxisIndex: 1,
        data: [10],
        zlevel:9,
        barWidth: 30,
        itemStyle: {
            normal: {
                barBorderRadius: 15,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#1ee585'
                }, {
                    offset: 1,
                    color: '#16a76f'
                }]),
            }
        },
        label: {
            normal: {
                show: true,
                position: 'left',
                formatter: '{a}',
                textStyle: {
                  fontSize: 14,
                  color:"#16a76f",
                  fontWeight:"bold"
                }
            }
        },
    }, {
        name: '框',
        type: 'bar',
        yAxisIndex: 0,
        zlevel:0,
        data: [100],
        barWidth: 30,
        itemStyle: {
            normal: {
                color: '#e3e8f1',
                borderColor: '#e3e8f1',
                borderWidth: 0,
                barBorderRadius: 15,
            }
        }
    }, ]
};