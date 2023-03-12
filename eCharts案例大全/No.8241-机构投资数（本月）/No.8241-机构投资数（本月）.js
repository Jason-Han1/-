var myColor = ['#7AC0BF', '#EFB564', '#D85F59', '#E2D776', '#CF77A7', '#D88A7D', '#7597EB', '#57BD9F'];
option = {
    backgroundColor: "rgba(0,0,0,1)",
    grid: {
        left: '25%',
        top: '10%',
        right: '25%',
        bottom: '8%',
        containLabel: true
    },
    xAxis: [{
        show: false,
    }],
    yAxis: [{
        axisTick: 'none',
        axisLine: 'none',
        offset: '27',
        axisLabel: {
            textStyle: {
                color: '#ffffff',
                fontSize: '16',
            }
        },
        data: ['红杉资本', '红杉资本', '红杉资本', '红杉资本', '红杉资本', '红杉资本', '红杉资本', '红杉资本']
    }, {
        axisTick: 'none',
        axisLine: 'none',
        axisLabel: {
            textStyle: {
                color: '#ffffff',
                fontSize: '0',
            }
        },
        data: [8, 7, 6, 5, 4, 3, 2, 1]
    }, {
        axisLine: {
            lineStyle: {
                color: 'rgba(0,0,0,0)'
            }
        },
        data: [],
    }],
    series: [{
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: [6647, 7473, 8190, 8488, 9491, 11726, 12745, 13170],
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: '#ffffff',
                        fontSize: '14',
                    }
                }
            },
            barWidth: 12,
            itemStyle: {
                normal: {
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                }
            },
            z: 2
        },
        {
            name: '外圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0, 0, 0, 0, 0, 0, 0, 0],
            yAxisIndex: 2,
            symbolSize: 30,
            itemStyle: {
                normal: {
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                    opacity: 1,
                }
            },
            z: 2
        }
    ]
};