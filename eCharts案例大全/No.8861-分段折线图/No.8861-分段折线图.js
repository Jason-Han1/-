//根据当前示例修改：https://gallery.echartsjs.com/editor.html?c=x4UwjD34vw

var XName = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
var data1 = [
    [98, 67, 62, 76, 99, 71, 24, 65, "", "", "", ""],
    ["", "", "", "", "", "", "", 65, 76, 57, 81, 41]
]

var Line = ["当日", "预测"];

var color = ['#0696f9', '#00f15a'];
var datas = [];

$.map(Line, function(item, index) {
    datas.push({
        symbolSize: 8,
        // symbol:"none",//标记
        name: item,
        type: "line",
        smooth: true, //平滑曲线
        yAxisIndex: 1,
        lineStyle: {
            type: (index === 1) ? 'dashed' : 'solid'
        },
        data: data1[index],
        areaStyle: {
            color: "#043065"
        },
        itemStyle: {
            normal: {
                borderWidth: 5,
                color: color[index],
            }
        }

    })
});




var option = {
    backgroundColor: '#043065',
    tooltip: {
        trigger: 'item',
        // formatter:'{a}<br />{b}点: {c}'
    },
    grid: {
        left: '5%',
        top: '5%',
        bottom: '12%',
        right: '5%',
    },
    legend: {
        type: "scroll",
        data: Line,
        itemWidth: 18,
        itemHeight: 12,
        textStyle: {
            color: "#fff",
            fontSize: 14
        },
        top: '5',
        right: '50'
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            show: true
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(135,140,147,0.8)',
            }
        },
        axisLabel: {
            inside: false,
            textStyle: {
                color: '#fff',
                fontWeight: 'normal',
                fontSize: '14',
                lineHeight: 22
            }

        },
        data: XName,
    }, {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        },
    }],
    yAxis: [{
            type: 'value',
            position: 'right',
            axisLine: {
                show: false
            },
            splitLine:{
                show:false
            }
        },
        {
            type: 'value',
            position: 'left',
            nameTextStyle: {
                color: '#00FFFF'
            },
            splitLine: {
                show: false,
                lineStyle: {
                    type: 'dashed',
                    color: 'rgba(135,140,147,0.8)'
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(135,140,147,0.8)'
                }
            },
            axisTick: {
                show: true
            },
            axisLabel: {
                formatter: '{value}',
                color: '#fff',
                fontSize: 14
            }
        }
    ],
    series: datas
};