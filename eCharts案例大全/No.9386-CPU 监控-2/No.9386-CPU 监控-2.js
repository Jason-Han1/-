option = {
    title: {
        text: 'CPU 监控'
    },
    tooltip: {
        trigger: 'axis',
        itemStyle: {
            normal: {
                label: {
                    show: true
                }
            }
        }
    },
    toolbox: {
        show: true,
        feature: {
            magicType: {
                type: ['line', 'bar']
            }
        }
    },
    xAxis: {
        type: 'category',
        data: ["13:27", "13:28", "13:29", "13:30", "13:31", "13:32", "13:33", "13:34", "13:35", "13:36", "13:37"]
    },
    yAxis: {
        min: 0,
        max: 100,
        type: 'value',
        axisLabel: {
            formatter: ' {value} %'
        }
    },
    series: [{
            name: 'CPU 使用率',
            type: 'line',
            data: ["15.10", "17.52", "30.77", "37.87", "29.66", "41.30", "24.55", "26.08", "22.30", "23.90", "41.77"],
            markLine: {
                symbol: "none", //去掉警戒线最后面的箭头
                label: {
                    position: "end", //将警示值放在哪个位置，三个值“start”,"middle","end"  开始  中点 结束
                    formatter: "警戒线"
                },
                data: [{
                    silent: false, //鼠标悬停事件  true没有，false有
                    lineStyle: { //警戒线的样式  ，虚实  颜色
                        type: "solid",
                        color: "rgba(238, 99, 99)"
                    },
                    name: '警戒线',
                    yAxis: 20
                }]
            }
        }, //超下限的数据用三角形展示数据
        {
            type: 'scatter',
            data: [, , "30.77", "37.87", "29.66", "41.30", "24.55", "26.08", "22.30", "23.90", "41.77"],
            itemStyle: {
                normal: {
                    label: {
                        position: 'top',
                        show: true,
                        color: 'white',
                        backgroundColor: 'black'
                    }
                }
            },
        }
    ]
};