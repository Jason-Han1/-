var data = [{
        name: "已完成",
        value: 9,
        itemStyle: {
            // color: new echarts.graphic.LinearGradient(
            //     0, 0, 0, 1,
            //     [{
            //             offset: 0,
            //             color: '#23A6FF'
            //         },
            //         {
            //             offset: 1,
            //             color: '#3BC7FF'
            //         }
            //     ]
            // )
        }
    },
    {
        name: "正在进行",
        value: 10,
        itemStyle: {
            color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [{
                        offset: 0,
                        color: '#F97711'
                    },
                    {
                        offset: 1,
                        color: '#F97711'
                    }
                ]
            )
        }
    },
    {
        name: "未完成",
        value: 0,
        itemStyle: {
            color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [{
                        offset: 0,
                        color: '#F0415F'
                    },
                    {
                        offset: 1,
                        color: '#F0415F'
                    }
                ]
            )
        }
    }
];

var colorArr = ['#23A6FF', '#F97810', '#E83D60']; //各饼图颜色

var sumValue = 0;
data.forEach(t => sumValue += t.value);


var seriesData = [];
var index = data.length;
for (let i = 0; i < data.length; i++) {
    index--;
    seriesData.push({
        name: '客户评价',
        type: 'pie',
        clockWise: false,
        hoverAnimation: false,
        radius: [73 - i * 15 + '%', 68 - i * 15 + '%'],
        center: ["50%", "50%"],
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        data: [{
            value: data[i].value,
            name: data[i].name,
        }, {
            value: sumValue - data[i].value,
            name: '背景区',
            itemStyle: {
                color: "#091961",
            },
            tooltip: {
                show: false
            },
            hoverAnimation: false
        }, {
            value: sumValue / 0.75 * 0.25,
            name: '透明区',
            itemStyle: {
                color: "rgba(0,0,0,0)",
            }
        }],
        markLine: {
            data: [
                [{
                        name: (data[i].value / sumValue * 100).toFixed(0) + '%',
                        x: 52 + index * 0 + '%',
                        y: '12%'
                    },
                    {
                        x: 52 + index * 0 + '%',
                        y: 7 * (i + 2) + '%'
                    }
                ]
            ],
            label: {
                color: colorArr[i]
            },
            lineStyle: {
                color: colorArr[i],
                opacity: 0
            }
        },
        markPoint: {
            silent: true,
            label: {
                fontSize: 18
            },
            data: [{
                yAxis: 6,
                x: 52 + index * 0 + '%',
                y: '12%',
                symbolSize: 0.1,
                label: {
                    textStyle: {
                        color: '#fff'
                    },
                    position: 'right',
                    formatter: '已完成'
                }
            }, ]
        }
    });
}

option = {
    backgroundColor: '#000A48',
    color: colorArr,
    tooltip: {
        trigger: 'item',
        formatter: function(res) {

            if (res.componentSubType == 'liquidFill') {
                return ''
            } else {
                return '' + res.name + '：' + res.data.value + '项';
            }
        }
    },
    series: seriesData
};