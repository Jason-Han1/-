var xdata = ['内保', '治安', '网监', '人管', '公交', '禁毒', '反恐', '水警'];
var data = [180, 145, 165, 180, 150, 165, 145, 125];
var maxArr = [];
let max = parseInt(data[0].value)
for (let i = 0; i < data.length - 1; i++) {
    max = max < parseInt(data[i+1].value) ? parseInt(data[i+1].value) : max
}
for (let i = 0; i < data.length - 1; i++) {
    maxArr.push(max)
}
option = {
    tooltip: {
        trigger: "axis",
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(params) { // params[0].data.nameCode
            let dot = '<span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background-color:#02C4DD"></span>';
            return (
              params[0].name +
              "<br>" +
              "实有单位总数 ：" +
              params[0].value
            );
        }
    },
    grid: {
        left: "4%",
        right: "4%",
        bottom: "3%",
        top: "15%",
        containLabel: true
    },
    xAxis: {
        data: xdata,
        triggerEvent: true,
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(193, 207, 220, 1)'
            }
        },
        axisLabel: {
            show: true,
            rotate: 0,
            interval: 0,
            textStyle: {
                padding: [14,0,0,0],
                fontSize: 14,
                color: "rgba(0, 0, 0, 1)"
            }
        }
    },
    yAxis: {
        triggerEvent: true,
        nameTextStyle: {
            color: "rgba(255,255,255,1)",
            fontSize: 16,
            padding: [0,0,10,-20]
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(193, 207, 220, 1)'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "rgba(0, 0, 0, 0.72)",
                fontSize: 16
            }
        }
    },
    series: [{
            name: "实有单位总数",
            barMinHeight: 10,
            type: "pictorialBar",
            barCategoryGap: "60%",
            symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
            // symbol: "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
            itemStyle: {
                normal: {
                    //barBorderRadius: 5,
                    //渐变色
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "RGBA(198, 166, 255, 1)"
                        },
                        {
                            offset: 0.5,
                            color: "RGBA(231, 221, 255, 1)"
                        },
                        {
                            offset: 1,
                            color: "RGBA(249, 248, 255, 1)"
                        }
                    ])
                }
            },
            label: {
                normal: {
                    show: true,
                    position: "top",
                    textStyle: {
                        color: "rgba(29, 145, 245, 1)",
                        fontSize:20
                    }
                }
            },
            data: data,
            z: 10
        },
        {
            name: "hill",
            type: "bar",
            barWidth: '20%',
            symbol: "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
            itemStyle: {
                normal: {
                    color: "rgba(11,47,68,.8)"
                }
            },
            data: maxArr,
            z: 9
        }
    ]
}