var scale = 1;
var singleData = [224, 220, 335];
var multipleData = [442, 440, 220];
var judgeData = [110, 220, 115];
var color = "#189cbb";
option = {
    backgroundColor: '#0E2A43',
    tooltip: {
        show:false,
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['单选题', '多选题', '判断题'],
        align: 'left',
        itemGap: 50,
        // x: 'right',
        right:'10%',
        y: '10%',
        icon: 'rect',
        itemWidth: 15*scale, // 图例图形宽度
		itemHeight: 15*scale, // 图例图形高度
        textStyle: {
            color: "#3fdaff",
            fontSize: 16*scale
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['高等教育学', '高等教育心理学', '综合学科'],
        axisLabel: {
            // inside: true,
            padding: [15, 0, 0, 0],
            textStyle: {
                color: "#fff",
                fontSize: 18*scale,
            }
        },
        axisTick: {
            inside:true,
            length:8*scale,
            lineStyle: {
                color: color,
            }
        },
        axisLine: {
            lineStyle: {
                color: color,
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(80,224,255,0.3)',
                type: 'dashed'
            }
        }
    }],
    yAxis: [{
        type: 'value',
        max:600,
        axisLabel: {
            // inside: true,
            padding: [0, 15, 0, 0],
            textStyle: {
                color: color,
                fontSize: 16*scale,
            }
        },
        axisTick: {
            lineStyle: {
                color: color,
            }
        },
        axisLine: {
            lineStyle: {
                color: color,
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(80,224,255,0.3)',
                type: 'dashed'
            },
            show:false,
        },
        name: '题数(答对)',
        nameTextStyle: {
            color: "#fff",
            fontSize: 16*scale,
            padding: [0, 0, 10, 0]
        }
    }],
    series: [{
        name: '单选题',
        type: 'bar',
        stack:'单选题',
        barWidth: '15%',
        barGap:'40%',
        label: {
            normal: {
                show: true,
                position: "top",
                distance:20*scale,
                formatter: function(params) {
                    return params.data.value;
                },
                textStyle: {
                    color: "#ffc72b",
                    fontSize: 20*scale
                }
            }
        },
        itemStyle: {
            normal: {
                color:'rgba(94,218,255,0.4)',
            }
        },
        data: singleData
    },
    {
        name: '单选题',
        type: 'bar',
        stack:'单选题',
        barWidth: '15%',
        barGap:'40%',
        itemStyle: {
            normal: {
                color:'#83e0fc',
            }
        },
        data: [2*scale, 2*scale, 2*scale]
    }, {
        name: '多选题',
        type: 'bar',
        stack:'多选题',
        barWidth: '15%',
        barGap:'40%',
        label: {
            normal: {
                show: true,
                position: "top",
                distance:20*scale,
                formatter: function(params) {
                    return params.data.value;
                },
                textStyle: {
                    color: "#ffc72b",
                    fontSize: 20*scale
                }
            }
        },
        itemStyle: {
            normal: {
                color: 'rgba(20,124,146,0.4)',
            }
        },
        data: multipleData
    },
    {
        name: '多选题',
        type: 'bar',
        stack:'多选题',
        barWidth: '15%',
        barGap:'40%',
        itemStyle: {
            normal: {
                color:'#23aecb',
            }
        },
        data: [2*scale, 2*scale, 2*scale]
    }, {
        name: '判断题',
        type: 'bar',
        stack:'判断题',
        barWidth: '15%',
        barGap:'40%',
        label: {
            normal: {
                show: true,
                position: "top",
                distance:20*scale,
                formatter: function(params) {
                    return params.data.value;
                },
                textStyle: {
                    color: "#ffc72b",
                    fontSize: 20*scale
                }
            }
        },
        itemStyle: {
            normal: {
                color: 'rgba(9,149,124,0.4)',
            }
        },
        data: judgeData
    },
    {
        name: '判断题',
        type: 'bar',
        stack:'判断题',
        barWidth: '15%',
        barGap:'40%',
        itemStyle: {
            normal: {
                color:'#10c8a7',
            }
        },
        data: [2*scale, 2*scale, 2*scale]
    },]
};