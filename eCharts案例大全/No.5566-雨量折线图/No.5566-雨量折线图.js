let myicon = 'image://data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTg2NDg1MzkzMjI2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ3MzUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDBDMjI2Ljc0Mjg1NyAwIDAgMjI2Ljc0Mjg1NyAwIDUxMnMyMjYuNzQyODU3IDUxMiA1MTIgNTEyIDUxMi0yMjYuNzQyODU3IDUxMi01MTItMjI2Ljc0Mjg1Ny01MTItNTEyLTUxMnogbTAgODc3LjcxNDI4NmMtMjA0LjggMC0zNjUuNzE0Mjg2LTE2MC45MTQyODYtMzY1LjcxNDI4Ni0zNjUuNzE0Mjg2czE2MC45MTQyODYtMzY1LjcxNDI4NiAzNjUuNzE0Mjg2LTM2NS43MTQyODYgMzY1LjcxNDI4NiAxNjAuOTE0Mjg2IDM2NS43MTQyODYgMzY1LjcxNDI4Ni0xNjAuOTE0Mjg2IDM2NS43MTQyODYtMzY1LjcxNDI4NiAzNjUuNzE0Mjg2eiIgZmlsbD0iIzRBQkRDRiIgcC1pZD0iNDczNiI+PC9wYXRoPjxwYXRoIGQ9Ik01MTIgNTEybS0zNjUuNzE0Mjg2IDBhMzY1LjcxNDI4NiAzNjUuNzE0Mjg2IDAgMSAwIDczMS40Mjg1NzIgMCAzNjUuNzE0Mjg2IDM2NS43MTQyODYgMCAxIDAtNzMxLjQyODU3MiAwWiIgZmlsbD0iI0ZGRkZGRiIgcC1pZD0iNDczNyI+PC9wYXRoPjwvc3ZnPg==';
let startValue = '';
let endValue = '';
let start = ''; //起始X轴
let end = ''; //结束X轴
option = {
    backgroundColor: '#fff',
    legend: {
        data: ['雨量'],
        itemHeight: 2,
        itemWidth: 15,
        borderRadius: 5,
        textStyle: { //图例文字的样式
            color: '#3C4353',
            fontSize: 12
        },
    },
    graphic: [{ //图形中间文字
        type: "text",
        left: 81,
        bottom: 9,
        style: {
            text: "2020-09-15 00:00:00",
            textAlign: "center",
            fill: "#838A9D",
            fontSize: 12
        }
    }, { //图形中间文字
        type: "text",
        right: 53,
        bottom: 9,
        style: {
            text: "2020-09-15 00:00:00",
            textAlign: "center",
            fill: "#838A9D",
            fontSize: 12
        }
    }],
    dataZoom: [{
            type: 'slider',
            xAxisIndex: 0,
            filterMode: 'filter',
            height: 4,
            bottom: 35,
            handleSize: "400%",
            handleIcon: myicon,
            handleStyle: {
                color: "#46C7DC",
            },
            backgroundColor: "#F0F2F5",
            fillerColor: "#46C7DC",
            borderColor: "transparent",
            textStyle: {
                color: "transparent"
            },
            dataBackground: {
                areaStyle: {
                    opacity: 0
                },
                lineStyle: {
                    opacity: 0
                }
            },
        },
        {
            type: 'slider',
            yAxisIndex: 0,
            filterMode: 'none',
            left: 45,
            handleSize: "400%",
            width: 4,
            handleIcon: myicon,
            handleStyle: {
                color: "#46C7DC",
            },
            backgroundColor: "#F0F2F5",
            fillerColor: "#46C7DC",
            borderColor: "transparent",
            textStyle: {
                color: "transparent"
            },
            dataBackground: {
                areaStyle: {
                    opacity: 0
                },
                lineStyle: {
                    opacity: 0
                }
            },
        },
    ],
    tooltip: {
        position: 'top',
        padding: [13, 16],
        formatter(params) {
            const marker = '<span style="width: 15px;height: 2px;background: #648EED;border-radius: 4px;display:inline-block;margin-bottom:3px;margin-right:7px;"></span>';
            return '2020-09-15 20:00:00' + '<br>' + marker + '雨量：' + params.value
        },
        textStyle: {
            align: 'center',
        }
        // formatter:'{a}/{b}/{c}',
    },
    xAxis: [{
        // name: start,
        boundaryGap: false,
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine: {
            lineStyle: {
                color: 'rgba(221, 226, 238, 0.5)',
            }
        },
        axisTick: {
            "show": false
        },
        axisLabel: {
            show: false,
            // formatter: function(value, index) {
            //     if (value == start || value == end) {
            //         console.log(value, index)
            //         return value
            //     } else {
            //         return ''
            //     }
            // }
        },
    }],
    yAxis: [{
        name: '雨量mm',
        nameTextStyle: {
            color: "#3C4353",
            fontSize: 12,
        },
        type: 'value',
        // interval: 0.2,
        minInterval: 0.2,
        splitNumber:6,
        axisTick: {
            "show": false
        },
        splitLine: {
            "show": true,
            lineStyle: {
                color: "rgba(221, 226, 238, 0.5)",
            },

        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#838A9D',
                fontSize: 12,
            }
        },
        axisLine: {
            lineStyle: {
                color: '#DDE2EE',
            }
        },

    }],
    series: [{
        name: '雨量',
        data: [1, 3.2, 2.2, 0.6, 1, 3.3, 0.2],
        type: 'line',
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "rgba(100, 142, 237, 0.5)"
                    },
                    // {
                    //     offset: 0.5,
                    //     color: "#e1e9fa"
                    // },
                    {
                        offset: 1,
                        color: "rgba(110, 139, 204, 0)"
                    }
                ])
            }
        },
        smooth: false,
        symbol: "circle",
        symbolSize: 6,
        itemStyle: {
            normal: {
                color: '#648EED', //拐点颜色
                opacity: 0,
            },
            emphasis: {
                color: '#16324F',
                opacity: 0.8,
            }
        },

    }],

};

myChart.setOption(option);
let option2 = myChart.getModel().option;
startValue = option2.dataZoom[0].startValue;
endValue = option2.dataZoom[0].endValue;
start = option2.xAxis[0].data[startValue]; //起始X轴
end = option2.xAxis[0].data[endValue]; //结束X轴
console.log("开始值=" + start);
console.log("结束值=" + end);


myChart.on('dataZoom', function(params) {
    let option3 = myChart.getModel().option;
    startValue = option3.dataZoom[0].startValue;
    endValue = option3.dataZoom[0].endValue;
    start = option3.xAxis[0].data[startValue]; //起始X轴
    end = option3.xAxis[0].data[endValue]; //结束X轴
    console.log("开始值=" + start);
    console.log("结束值=" + end);
    option.graphic[0].style.text = start
    option.graphic[1].style.text = end
    myChart.setOption(option)
})