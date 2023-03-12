var xData = function() {
    var data = [];
    for (var i = 2011; i < 2017; i++) {
        data.push(i + "年");
    }
    return data;
}();
var color = ['#1a9bfc', '#99da69', '#e32f46', '#7049f0', '#fa704d', '#01babc', ]
var name = ['学前教育', '义务教育', '高中教育', '高等教育', '教师队伍', '教学条件']
var data = [
    [13.7, 3.4, 13.5, 16.1, 7.4, 15.2],
    [17.4, 13.7, 13.5, 3.4, 15.2, 13.5],
    [13.4, 7.4, 13.7, 13.5, 16.1, 13.7],
    [3.5, 15.2, 16.1, 17.4, 13.4, 6.1],
    [16.1, 13.5, 3.7, 17.4, 15.2, 18.9],
    [17.4, 6.1, 13.4, 15.2, 13.7, 5.2],
]

var series = [];
for (var i = 0; i < 6; i++) {
    series.push({
        name: name[i],
        type: "line",
        symbolSize: 8,
        symbol: 'circle',
        itemStyle: {
            normal: {
                color: color[i],
                lineStyle: {
                    width: 1,
                    type: 'solid' //'dotted'虚线 'solid'实线
                },
                barBorderRadius: 0,
                label: {
                    show: false,
                }
            }
        },
        data: data[i],

    }, )
}
option = {
    backgroundColor: "#fff",
    legend: {
        top: 20,
        textStyle: {
            color: '#333',
            fontSize: '12'
        },
        data: name,
        selected: {
            // 选中'系列1'
            '学前教育': true,
            // 不选中'系列2'
            '义务教育': false
        }
    },
    title: {
        text: "社会舆论分领域趋势",
        textStyle: {
            color: '#fff',
            fontSize: '22',
            fontWeight: 'normal',
        },
        subtextStyle: {
            color: '#90979c',
            fontSize: '16',

        },
    },
    toolbox: {
        itemSize: 10, // icon 的大小
        itemGap: 8, // icon 每项之间的间隔
        feature: {
            saveAsImage: {
                show: true
            },
            dataZoom: {
                show: true
            },
            magicType: {
                type: ['bar']
            },
            restore: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            }
        }
    },
    tooltip: {
        trigger: "axis",
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'line', // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: '{b}<br />{a0}: {c0}%<br />{a1}: {c1}%<br />{a2}: {c2}%<br />{a3}: {c3}%<br />{a4}: {c4}%<br />{a5}: {c5}%',
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
                color: '#eee'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#eee ',
            }
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
                color: '#333',
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
                color: '#eee',
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#eee',
            }
        },
        axisLabel: {
            textStyle: {
                color: '#333',
                fontWeight: 'normal',
                fontSize: '12',
            },
            formatter: '{value}%',
        },
    },
    series: series,
}