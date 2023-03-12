var option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: '',
        textStyle: {
            fontSize: 12,
            color: 'rgb(0,253,255,0.6)'
        },
        right: '4%'
    },
    grid: {
        top: '14%',
        left: '4%',
        right: '4%',
        bottom: '12%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data:  ['11-09','11-10','11-11','11-12','12-01','12-02','12-03'],
        axisLabel: {
            textStyle: {
                color: 'rgb(0,253,255,0.6)'
            },
            formatter: function(params) {
                return params.split(' ')[0] 
            }
        }
    },
    yAxis: {
        name: '万元',
        type: 'value',
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                color: 'rgb(0,253,255,0.6)'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgb(23,255,243,0.3)'
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgb(0,253,255,0.6)'
            }
        }
    },
    series: {
        name:'交易场所融资',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        color: 'rgba(23, 255, 243)',
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(23, 255, 243' + ', 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(23, 255, 243' + ', 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        data:[451, 352, 303, 534, 95, 236, 217, 328, 159, 151, 231, 192, 453, 524, 165, 236, 527, 328, 129, 530]
    }
}