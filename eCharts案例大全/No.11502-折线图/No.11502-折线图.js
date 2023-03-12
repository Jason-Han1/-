option = {
    title: {
        text: '单位/个',
        textStyle: {
            fontSize: 12,
            fontWeight: 'normal',
            color: '#65aaf1' //标题颜色
        },
        left: '2%',
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['无线1', '无线2', '无线3'],
        textStyle: {
            fontSize: 12, //字体大小
            color: '#65aaf1', //字体颜色
        },
        right: '3%' //距离右侧
    },
    grid: {
        left: '3%',
        top: '25%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        // feature: {
        //     saveAsImage: {}
        // }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['区域A', '区域B', '区域C', '区域D', '区域E', '区域F', '区域G', '区域H', '区域I'],
        axisLabel: {
            show: true,
            textStyle: {
                color: '#65aaf1'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#0a2b52',
                width: 1, //这里是为了突出显示加上的
            }
        }

    },
    yAxis: {
        type: 'value',
        axisLine: {
            onZero: false,
            lineStyle: {
                color: '#0a2b52',
                width: 1, //这里是为了突出显示加上的
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#65aaf1' //字体颜色
            }
        },
        splitLine: { //保留网格线
            show: true,
            lineStyle: { //y轴网格线设置
                color: '#0a2b52',
                width: 1,
                type: 'solid'
            }
        },
    },
    series: [{
            name: '无线1',
            type: 'line',
            smooth: true,
            stack: 100,
            data: [25, 32, 30, 34, 40, 35, 30, 35, 40],
            symbol: 'circle', //设定为实心点
            symbolSize: 7, //设定实心点的大小
            itemStyle: {
                normal: {
                    color: '#2ddcec', //折现点颜色
                    lineStyle: {
                        color: '#2ddcec' //折线颜色
                    }
                }
            },
        },
        {
            name: '无线2',
            type: 'line',
            smooth: true,
            stack: 100,
            data: [20, 25, 15, 20, 30, 20, 25, 30, 25],
            symbol: 'circle',
            symbolSize: 7,
            itemStyle: {
                normal: {
                    color: '#01a3d8',
                    lineStyle: {
                        color: '#01a3d8'
                    }
                }
            },
        },
        {
            name: '无线3',
            type: 'line',
            smooth: true,
            stack: 100,
            data: [15, 12, 10, 14, 20, 15, 30, 25, 30],
            symbol: 'circle',
            symbolSize: 7,
            itemStyle: {
                normal: {
                    color: '#ef9049',
                    lineStyle: {
                        color: '#ef9049'
                    }
                }
            },
        },

    ]
};