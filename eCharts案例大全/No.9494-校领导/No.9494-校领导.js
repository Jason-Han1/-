var myColor = ['#eb2100', '#eb3600', '#d0570e', '#d0a00e', '#34da62', '#00e9db', '#00c0e9', '#0096f3', '#33CCFF', '#33FFCC'];
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
        data: ['黄达', '张腾霄', '郭影秋', '成仿吾', '吴付来','贺耀敏', '王利明', '吴晓球','刘伟', '靳诺']
    }, {
        axisTick: 'none',
        axisLine: 'none',
        axisLabel: {
            textStyle: {
                color: '#ffffff',
                fontSize: '16',
            }
        },
        data: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']
    }, {
        name: '校领导TOP 10',
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
            data: [1,1,1,2,4,53,71,124,179,185],
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
            data: [200, 200, 200,200,200,200,200,200,200,200],
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
            data: [200,200,200,200,200,200,200,200,200,200],
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
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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