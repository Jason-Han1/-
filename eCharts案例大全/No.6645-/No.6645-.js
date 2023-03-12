var myColor = [ '#d0a00e', '#34da62', '#00e9db', '#00c0e9', '#0096f3', '#33CCFF', '#33FFCC'];
option = {
    backgroundColor: '#0e2147',
    grid: {
        left: '11%',
        top: '12%',
        right: '0%',
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
        data: ['六班', '三班', '五班', '二班',  '四班', '一班']
    }, {
        axisTick: 'none',
        axisLine: 'none',
        axisLabel: {
            textStyle: {
                color: '#ffffff',
                fontSize: '16',
            }
        },
        data: [  '6', '5', '4', '3', '2', '1']
    }, {
        name: '2020年高考各班排名分析',
        nameGap: '50',
        nameTextStyle: {
            color: '#ffffff',
            fontSize: '16',
        },
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
            data: [ 85, 88, 90, 90, 92, 95],
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: '#ffffff',
                        fontSize: '16',
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
        }, {
            name: '白框',
            type: 'bar',
            yAxisIndex: 1,
            barGap: '-100%',
            data: [ 99.5, 99.5, 99.5, 99.5, 99.5, 99.5],
            barWidth: 20,
            itemStyle: {
                normal: {
                    color: '#0e2147',
                    barBorderRadius: 5,
                }
            },
            z: 1
        }, {
            name: '外框',
            type: 'bar',
            yAxisIndex: 2,
            barGap: '-100%',
            data: [ 100, 100, 100, 100, 100, 100],
            barWidth: 24,
            itemStyle: {
                normal: {
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                    barBorderRadius: 5,
                }
            },
            z: 0
        },
        {
            name: '外圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [ 0, 0, 0, 0, 0, 0],
            yAxisIndex: 2,
            symbolSize: 35,
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