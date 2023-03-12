var xData = ["2019-03-01", "2019-03-02", "2019-03-03", "2019-03-04", "2019-03-05", "2019-03-06", "2019-03-07", "2019-03-08", "2019-03-09", "2019-03-10", "2019-03-11", "2019-03-12", "2019-03-13", "2019-03-14", "2019-03-15", "2019-03-16", "2019-03-17", "2019-03-18", "2019-03-19", "2019-03-20"];
var yData1 = [12, 5, 12, 46, 22, 24, 15, 5, 54, 18, 24, 18, 31, 25, 27, 14, 15, 21, 20, 17];
var yData2 = [13, 7, 10, 38, 17, 28, 22, 12, 28, 19, 14, 19, 19, 31, 22, 11, 14, 19, 22, 16];
var yData3 = [60, 7, 0, 8, 7, 18, 12, 22, 38, 9, 24, 9, 5, 14, 50, 50, 1, 1, 0, 1];
var yData4 = [10, 9, 1, 8, 7, 8, 2, 12, 28, 9, 14, 0, 19, 31, 40, 11, 14, 15, 22, 16];
option = {
        backgroundColor: '#ffffff',
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        legend: {
            x: '5.8%',
            y: '4%',
            itemWidth: fontSize(0.5),
            itemHeight: fontSize(0.55),
            textStyle: {
                color: '#aaaaaa',
                fontSize: fontSize(0.65)
            },
            icon: 'rect',
            data: ['浏览量', '访问量','IP','微信']
        },
        dataZoom: [{
                type: 'slider',
                show: true,
                height: 20,
                left: '10%',
                right: '10%',
                bottom: '2%',
                start: 50,
                end: 100,
                textStyle: {
                    color: '#aaaaaa',
                    fontSize: fontSize(0.4),
                },
            }, {
                type: 'inside'
            }
    
        ],
        grid: {
            right: '5%',
            bottom: '8%',
            left: '5%',
            top: '18%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: xData,
            // name: '时间',
            // nameTextStyle: {
            //     color: '#d4ffff'
            // },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#fff',
                    type: 'solid',
                    width: 1
                }
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#aaaaaa",
                    fontSize: fontSize(0.45),
                },
                //interval:0,
                //rotate:30
            },
        }],
        yAxis: [{
            type: 'value',
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: '#0B4CA9'
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#fff',
                    type: 'solid',
                    width: 1
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#e6e6e6'],
                    type: 'dashed',
                    width: 1
                }
            },
            axisLabel: {
                color: '#aaaaaa',
                fontSize: fontSize(0.45),
            }
        }, ],
        series: [{
                name: '浏览量',
                type: 'line',
                yAxisIndex: 0,
                itemStyle: {
                    normal: {
                        color: '#f1539b',
                    }
                },
                lineStyle: {
                    color: '#f1539b',
                    width: 3,
                    type: 'solid'
                },
                symbol: "circle", // 标记的图形为实心圆
                symbolSize: 5,
                smooth: true,
                data: yData1
            },
            {
                name: '访问量',
                type: 'line',
                yAxisIndex: 0,
                itemStyle: {
                    normal: {
                        color: '#e7ab60',
                    }
                },
                lineStyle: {
                    color: '#e7ab60',
                    width: 3,
                    type: 'solid'
                },
                symbol: "circle", // 标记的图形为实心圆
                symbolSize: 5,
                smooth: true,
                data: yData2
            },
            {
                name: 'IP',
                type: 'line',
                yAxisIndex: 0,
                itemStyle: {
                    normal: {
                        color: '#5edde4',
                    }
                },
                lineStyle: {
                    color: '#5edde4',
                    width: 3,
                    type: 'solid'
                },
                symbol: "circle", // 标记的图形为实心圆
                symbolSize: 5,
                smooth: true,
                data: yData3
            },
            {
                name: '微信',
                type: 'line',
                yAxisIndex: 0,
                itemStyle: {
                    normal: {
                        color: '#965fe8',
                    }
                },
                lineStyle: {
                    color: '#965fe8',
                    width: 3,
                    type: 'solid'
                },
                symbol: "circle", // 标记的图形为实心圆
                symbolSize: 5,
                smooth: true,
                data: yData4
            }
    
        ]
    }
// 字体大小自适应
function fontSize(res) {
    var clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (!clientWidth) return;
    var fontSize = 100 * (clientWidth / 1920);
    return res * fontSize;
}