
option = {
    legend: {
        data: ['bar', 'bar2', 'bar3', 'bar4'],
        left: '10%'
    },
  
    toolbox: {
        feature: {
            magicType: {
                type: ['stack', 'tiled']
            },
            dataView: {}
        }
    },
    tooltip: {},
    xAxis: {
        data: ['xAxisData','cccc','vvvv'],
        name: 'X Axis',
        axisLine: {onZero: true},
        splitLine: {show: false},
        splitArea: {show: false}
    },
    yAxis: {},
    grid: {
        bottom: 100
    },
    series: [
        {
                        type: 'pictorialBar',
                        stack: "总量",
                        silent: false,
                        label: {
                            normal: {
                                show: false,
                            }
                        },
                        symbolClip: true,
                        symbolSize: [50, "100%"],
                        symbol: 'rect',
                        itemStyle: {//控制每个柱子颜色
                            normal: {
                                color: (params) => {
                                    let colors = ['rgb(7,163,182)', 'rgb(184,143,61)', 'rgb(47,58,65)']
                                    return colors[params.dataIndex]
                                }
                            }
                        },
                        symbolRepeat: true,
                        symbolSize: [60, 6],//宽度
                        symbolMargin: 5,//间隔
                        data: [199,65,32]
                    },//象形柱状图
        {
            name: 'bar4',
            type: 'bar',barWidth: 60,
            stack: 'two',
            // emphasis: ,
            data: [-100,-65,-88,-88]
        }
    ]
};


