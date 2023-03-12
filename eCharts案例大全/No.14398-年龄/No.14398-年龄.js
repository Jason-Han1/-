var scale = 1;
var singleData = [224, 220, 335];
var multipleData = [5, 19, 36, 38, 2];
var judgeData = [6, 15, 54, 22, 4];
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
        data: ['香港中文大学', '港独'],
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
        data: ['19岁及以下', '20-29岁', '30-39岁','40岁-49岁', '50岁及以上'],
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
        max:100,
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
        name: '年龄分布百分比',
        nameTextStyle: {
            color: "#fff",
            fontSize: 16*scale,
            padding: [0, 0, 10, 0]
        }
    }],
    series: [{
        name: '香港中文大学',
        type: 'bar',
        stack:'香港中文大学',
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
        name: '香港中文大学',
        type: 'bar',
        stack:'香港中文大学',
        barWidth: '15%',
        barGap:'40%',
        itemStyle: {
            normal: {
                color:'#23aecb',
            }
        },
        data: [2*scale, 2*scale, 2*scale]
    }, {
        name: '港独',
        type: 'bar',
        stack:'港独',
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
        name: '港独',
        type: 'bar',
        stack:'港独',
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