option = {
    title: {
        text: '监控'
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
        //boundaryGap: ['5%', '5%'],     
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
   /* visualMap: { //区间内控制显示颜色
        show: true,
        dimension: 1,
        pieces: [{
            gte: 20,
            color: 'red'
        }],
        outOfRange: {
            color: 'green'
        }
    },*/
    series: [{
        name: 'CPU 使用率',
        type: 'line',
        data: ["15.10", "17.52", "30.77", "37.87", "29.66", "41.30", "24.55", "26.08", "22.30", "23.90", "41.77"],
        label: {
            normal: {
                show: true,
                position: 'top',
                textStyle: {
                    color: 'white'
                }
            }
        },
        /*temStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: 'white'
                    }
                },
                color: function(parmas) {
                    if (parmas.value > 20) {
                        return '#000000';
                    } else {
                        return '#db5a6b';
                    }
                }
            }
        },
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: 'white'
                    }
                }
            }
        },
        smooth: true,
        lineStyle: {
            color: 'rgb(164, 68, 68)'
        },
        markPoint: {},*/
        //对于超上限的数据用默认样式展示
        markPoint: {
            itemStyle: {
                normal: {
                    borderColor: '#fab60c',
                    borderWidth: 5, // 标注边线线宽，单位px，默认为1
                    label: {
                        show: true
                    }
                },
                emphasis: {
                    borderColor: '#fab60c',
                    borderWidth: 5,
                    label: {
                        show: true
                    }
                }
            },
            data: 20
        },
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
    }]
};