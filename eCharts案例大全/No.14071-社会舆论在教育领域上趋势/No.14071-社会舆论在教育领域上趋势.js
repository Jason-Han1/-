var xData = function() {
    var data = [];
    for (var i = 2011; i < 2017; i++) {
        data.push(i + "年");
    }
    return data;
}();

var data =  [13.7, 13.4, 13.5, 16.1, 17.4, 15.2]

option = {
    backgroundColor: "#141f56",
    title: {
        text: "社会舆论在教育领域上趋势",
        textStyle: {
            color: '#fff',
            fontSize: '22'
        },
        subtextStyle: {
            color: '#90979c',
            fontSize: '16',

        },
    },
    tooltip: {
        trigger: "axis",
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'line', // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: '{b} : {c0}%',
        backgroundColor: 'rgba(0,0,0,0.7)', // 背景
        padding: [8, 10], //内边距
        extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
    },
    grid: {
        borderWidth: 0,
        top: 110,
        bottom: 95,
        textStyle: {
            color: "#fff"
        }
    },
    xAxis: [{
        type: "category",
        axisLine: {
            lineStyle: {
                color: '#32346c'
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitArea: {
            show: false
        },
        axisLabel: {
            inside: false,
            textStyle: {
                color: '#bac0c0',
                fontWeight: 'normal',
                fontSize: '12',
            },
        },
        data: xData,
    }],
    yAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#32346c',
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#32346c ',
            }
        },
        axisLabel: {
            textStyle: {
                color: '#bac0c0',
                fontWeight: 'normal',
                fontSize: '12',
            },
            formatter: '{value}%',
        },
    },
    series: [{
        type: 'bar',
        barWidth: 18,
        itemStyle:{
            normal:{
                color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#00b0ff'
                }, {
                    offset: 0.8,
                    color: '#7049f0'
                }], false)
            }
        },
        data: data
    },
     {
            name: "总数",
            type: "line",
            stack: "总量",
            symbolSize:10,
            symbol:'circle',
            itemStyle: {
                normal: {
                    color: "#ebb307",
                    borderColor: '#fff',
                    borderWidth: 2,
                    barBorderRadius: 0,
                    label: {
                        show: false,
                    }
                }
            },
        data: [data[0]+0.2,data[1]+0.2,data[2]+0.2,data[3]+0.2,data[4]+0.2,data[5]+0.2,]
        },
    ]
}