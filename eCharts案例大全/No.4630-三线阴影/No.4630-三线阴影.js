var uploadedDataURL = "/asset/get/s/data-1600484669369-9Phqr8RSQ.png";

var xData = ["2020-11-15", "2020-11-16", "2020-11-17", "2020-11-18", "2020-11-19", "2020-11-20", "2020-11-21", "2020-11-22", "2020-11-23", "2020-11-24", "2020-11-25", "2020-11-26", "2020-11-27", "2020-11-28", "2020-11-29", "2020-11-30", "2020-12-01", "2020-12-02", "2020-12-03", "2020-12-04", "2020-12-05", "2020-12-06", "2020-12-07", "2020-12-08", "2020-12-09", "2020-12-10", "2020-12-11", "2020-12-12", "2020-12-13", "2020-12-14", "2020-12-15"];
var seriesData = [
    ["0.31", "21.40", "27.33", "25.54", "22.28", "115.00", "50.25", "37.03", "191.66", "177.75", "349.60", "115.81", "208.13", "83.41", "208.50", "124.67", "207.12", "55.00", "54.47", "55.31", "51.85", "154.82", "155.78", "33.82", "260.07", "262.02", "262.02", "92.01", "92.01", "92.01", "90.26"],
    ["1.00", "26.08", "49.50", "52.07", "62.62", "113.75", "0.00", "67.96", "22.73", "213.72", "61.52", "214.44", "155.01", "94.87", "1.50", "479.95", "296.83", "255.11", "124.82", "188.02", "65.02", "24.24", "11.09", "95.67", "480.23", "107.46", "107.46", "56.39", "36.39", "86.39", "95.04"],
    ["17088.80", "17084.12", "17061.94", "17035.40", "16995.06", "16996.31", "17046.57", "17015.64", "17184.57", "17148.60", "17436.68", "17338.05", "17391.18", "17379.72", "17378.23", "17022.94", "16933.24", "16733.12", "16662.77", "16530.06", "16516.89", "16647.47", "16792.15", "16730.30", "16510.14", "16664.71", "17058.35", "17058.25", "17058.25", "17058.25", "17056.50"]
];
var attrs=[
    {"name":"放款"},{"name":"还款"},{"name":"余额"}
    ]

var legendData1 = ["大白", "长大", "杜洛克", "约克猪"]
var colorList = ['#0166FF', '#9BBF30', '#2E2EE6', '#4400CC', '#92368D', '#E60000', '#92368D', '#BF9926'];
var color = ["rgba(229, 91, 97", "rgba(119,61,190", "rgba(223,153,89", "#6b2db2", "#962cb0", "#dd4171", "#e45e69"]

var option = {
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'none',
        padding: 5,
        formatter: function(param) {
            var resultTooltip = "";
            resultTooltip =
                "<div style='background:rgba(13,5,30,.6);border:1px solid rgba(255,255,255,.2);padding:10px;border-radius:3px;'>" +
                "<div>" + param[0].name + "</div>" +
                "<div style='padding-top:5px;'>" +
                "<span style='display: inline-block; width: 4px; height:10px; background-color: " + color[1] + "); border-radius: 5px;'></span>" +
                "<span style=''> " + param[0].seriesName + ": </span>" +
                "<span style='color:#00ccff;font-weight: bold;'>" + param[0].value + "</span>" +
                "<span style=''>万元</span>" +
                "<div style='padding-top:5px;'>" +
                "<span style='display: inline-block; width: 4px; height:10px; background-color: " + color[2] + "); border-radius: 5px;'></span>" +
                "<span style=''> " + param[1].seriesName + ": </span>" +
                "<span style='color:#00ccff;font-weight: bold;'>" + param[1].value + "</span>" +
                "<span style=''>万元</span>" +
                "<div style='padding-top:5px;'>" +
                "<span style='display: inline-block; width: 4px; height:10px; background-color: " + color[0] + "); border-radius: 5px;'></span>" +
                "<span style=''> " + param[2].seriesName + ": </span>" +
                "<span style='color:#00ccff;font-weight: bold;'>" + param[2].value + "</span>" +
                "<span style=''>万元</span>" +
                "</div>";
            return resultTooltip
        }
    },
    // color:['',''],
    // legend: {
    //     show:true,
    //     data: [{name:'猪消费价',
    //            textStyle:{
    //             color:'#fff'
    //            }
    //            },
    //            {name:'猪消费数量',
    //                textStyle:{
    //                    color:'#fff'
    //                }
    //            }
    //           ]
    // },
    legend: {
        show: true,
        right: 10,
        top: 10,
        textStyle: {
            color: '#AAAAAA',
            fontSize: 10
        }
    },
    grid: {
        top: '10%',
        left: '3%',
        right: '3%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: xData,
            axisTick: {
                show: true //隐藏X轴刻度
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#aaaaaa" //X轴文字颜色
                }
            },
            position: 'bottom'
        },

    ],
    yAxis: [{
            type: 'value',
            // name:'猪消费价(元/公斤)',
            scale: true,
            position: "left",
            // boundaryGap: ['5%', '5%'],
            axisLabel: {
                formatter: '{value}',
                show: true,
                textStyle: {
                    color: "#fff"
                }
            },
            nameTextStyle: {
                color: "#fff"
            },
            splitLine: {
                show: false
                // lineStyle: {
                //     color: "#949696"
                // }
            },
        },
        {
            min: 550,
            type: 'value',
            // name:'猪消费数量(万公斤)',
            scale: true,
            position: "right",
            boundaryGap: ['5%', '5%'],
            axisLabel: {
                formatter: '{value}',
                show: true,
                textStyle: {
                    color: "#fff"
                }
            },
            nameTextStyle: {
                color: "#fff"
            },
            splitLine: {
                show: false
                // lineStyle: {
                //     color: "#949696"
                // }
            }
        }
    ],
    series: [{
            name: attrs[0].name,
            type: 'line',
            color: color[0] + ')',
            smooth: true, //曲线
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: color[0] + ', 0.3)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            symbol: 'circle',
            symbolSize: 5,
            itemStyle: {
                normal: {
                    color: color[0]+ ')', //折点颜色
                    lineStyle: {
                        color: color[0]+ ')' //折线颜色
                    }
                },
                emphasis: {
                    color: color[0]+ ')', //折点颜色
                    lineStyle: {
                        color: color[0]+ ')' //折线颜色
                    }
                }
            },
            data: seriesData[0],
            // markLine : {
            //     silent: true,
            //     data: markLine
            // }
        },
        {
            name: attrs[1].name,
            type: 'line',
            color: color[1] + ')',
            smooth: true, //曲线
            // yAxisIndex: 1,
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: color[1] + ', 0.3)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            symbol: 'circle',
            symbolSize: 5,
            //必须放在data 上方
            itemStyle: {
                normal: {
                    color: color[1]+ ')', //折点颜色
                    lineStyle: {
                        color: color[1]+ ')' //折线颜色
                    }
                },
                emphasis: {
                    color: color[1]+ ')', //折点颜色
                    lineStyle: {
                        color: color[1]+ ')' //折线颜色
                    }
                    
                }
            },
            data: seriesData[1],
            // markLine : {
            //     silent: true,
            //     data: markLine
            // }

        },
        {
            name: attrs[2].name,
            type: 'line',
            color: color[2] + ')',
            smooth: true, //曲线
            yAxisIndex: 1,
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: color[2] + ', 0.3)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            symbol: 'circle',
            symbolSize: 5,
            //必须放在data 上方
            itemStyle: {
                normal: {
                    color: color[2]+ ')', //折点颜色
                    lineStyle: {
                        color: color[2]+ ')' //折线颜色
                    }
                },
                emphasis: {
                    color: color[2]+ ')', //折点颜色
                    lineStyle: {
                        color: color[2]+ ')' //折线颜色
                    }
                }
            },
            data: seriesData[2],
            // markLine : {
            //     silent: true,
            //     data: markLine
            // }

        }
    ]
};