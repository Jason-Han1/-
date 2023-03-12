var salvProName = ["安徽省", "贵州省", "江西省", "江苏省"];
var salvProValue = [250, 181, 154, 144];

option = {
    backgroundColor: "#fff",
    grid: {
        left: '5%',
        right: '5%',
        bottom: '10%',
        top: '15%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return params[0].name + ' : ' + params[0].value
        }
    },
    xAxis: {
        type: 'category',
        show: true,
        splitLine: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(0,0,0,0.15)',
                type: 'dashed',
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#606266'
            },
        },
        data: salvProName
    },
    yAxis: {
        type: 'value',
        boundaryGap: true,
        axisLabel: {
            show: true,
            textStyle: {
                color: '#606266'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(0,0,0,0.15)',
                type: 'dashed',
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    series: {
        type: 'bar',
        zlevel: 1,

        itemStyle: {
            normal: {
                barBorderRadius: [10, 10, 0, 0],
                color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                    offset: 0,
                    color: 'rgb(57,89,255,1)'
                }, {
                    offset: 1,
                    color: 'rgb(46,200,207,1)'
                }]),
            },
        },
        barWidth: 20,
        data: salvProValue
    }
};