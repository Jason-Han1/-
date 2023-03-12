var scale = 1;
var singleData = [224, 220, 335, 335, 335];
var multipleData = [442, 440, 220, 335, 335];
var judgeData = [110, 220, 115, 335, 335];
var color = "#fff";
var time = ['2014','2015','2016','2017','2018']
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
        data: time,
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
        name:'年',
        data: time,
        axisLabel: {
            // inside: true,
            padding: [15, 0, 0, 0],
            textStyle: {
                color: "#fff",
            }
        },
        axisTick: {inside:false,},
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
            }
        },
        axisTick: {show:false,},
        axisLine: {
            lineStyle: {
                color: color,
            }
        },
        splitLine: {
            lineStyle: {
                color: '#C5C5C5',
            },
            show:true,
        },
        name: 'km²',
        nameTextStyle: {
            color: "#fff",
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
                }
            }
        },
        itemStyle: {
            normal: {
                color: {
                    y2: 1,
                    type: 'bar',
                    colorStops: [{
                      offset: 0,
                      color: '#00F0FF' // 0% 处的颜色
                    }, {
                      offset: 1,
                      color: '#0096FF' // 100% 处的颜色
                    }],
                    globalCoord: false, // 缺省为 false
                  },
            }
        },
        data: singleData
    },{
        name: '多选题',
        type: 'bar',
        stack:'多选题',
        barWidth: '15%',
        barGap:'40%',
        label: {
            normal: {
                show: true,
                position: "top",
                formatter: function(params) {
                    return params.data.value;
                },
                textStyle: {
                    color: "#ffc72b",
                }
            }
        },
        itemStyle: {
            normal: {
                color: {
                    y2: 1,
                    type: 'bar',
                    colorStops: [{
                      offset: 0,
                      color: '#FF8181' // 0% 处的颜色
                    }, {
                      offset: 1,
                      color: '#E83D3D' // 100% 处的颜色
                    }],
                    globalCoord: false, // 缺省为 false
                  },
                 
            }
        },
        data: multipleData
    }]
};