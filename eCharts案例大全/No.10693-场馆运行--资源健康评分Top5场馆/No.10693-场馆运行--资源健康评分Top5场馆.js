var myColor = ["#3B8BFA"];
//  let positionLeft = 0.3,
//  max = 100 + 2 * positionLeft
option = {
    backgroundColor: 'rgba(0,0,0,.5)',
    grid: [{
            left: "8%",
            top: "12%",
            right: "5%",
            bottom: "8%",
            containLabel: true
        },
        {
            left: "10%",
            top: "12%",
            right: "5%",
            bottom: "8%",
            containLabel: true
        }
    ],
    xAxis: [{
        //  max: max,
        splitLine: {
            show: true,
            lineStyle: {
                color: ["#010413"],
                width: 1,
                type: "dotted"
            }
        },
        axisLabel: {
            textStyle: {
                // color: "#fff",
                color: "#02E3FF",
                fontSize: "16"
            },
            margin: 20
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
    }],
    yAxis: [{
            // axisTick: "none",
            // axisLine: "none",
            offset: "27",
            boundaryGap: false,
            axisLabel: {
                textStyle: {
                    color: "#fff",
                    fontSize: "16"
                },
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: "#135184",
                    width: 8,
                },
            },
            data: ["D1馆", "B4馆", "D2馆", "C1馆", "E2馆"]
        },
        {
            // axisTick: "none",
            // axisLine: "none",
            show: false,
            axisLabel: {
                textStyle: {
                    color: "#ffffff",
                    fontSize: "16"
                }
            },
            data: [1, 1, 1, 1]
        },
        {
            axisLine: {
                show: false
            },
            data: []
        }
    ],
    series: [{
            //间距
            type: "bar",
            barWidth: 22,
            stack: "b",
            legendHoverLink: false,
            itemStyle: {
                normal: {
                    // color: 'rgba(0,0,0,0)'
                    color: "#135184"
                }
            }
            // data: [positionLeft,positionLeft,positionLeft,positionLeft]
        },
        {
            name: "条",
            type: "bar",
            stack: "b",
            yAxisIndex: 0,
            data: [50, 66, 33, 25, 15],
            label: {
                normal: {
                    show: false,
                    position: "right",
                    distance: 10,
                    formatter: function(param) {
                        return param.value + "%";
                    },
                    textStyle: {
                        color: "#ffffff",
                        fontSize: "16"
                    }
                }
            },
            barWidth: 30,
            itemStyle: {
                normal: {
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num];
                    },
                    barBorderRadius: [0,10,10,0]
                }
            },
            z: 2
        },
        {
            name: "白框",
            type: "bar",
            yAxisIndex: 0,
            barGap: "-100%",
            data: [99.8, 99.9, 99.9, 99.9, 99.8],
            barWidth: 21,
            itemStyle: {
                normal: {
                    color: "#0e2147",
                    barBorderRadius: 2
                }
            },
            z: 1
        },
        {
            name: "外框",
            type: "bar",
            yAxisIndex: 2,
            barGap: "-100%",
            data: [100, 100, 100, 100],
            barWidth: 23,
            label: {
                normal: {
                    show: false,
                    position: "right",
                    distance: 10,
                    formatter: function(data) {
                        return dataLine[data.dataIndex] + "%";
                    },
                    textStyle: {
                        color: "#ffffff",
                        fontSize: "16"
                    }
                }
            },
            itemStyle: {
                normal: {
                    //  color:'#1D4384',
                    color: "transparent",
                    //  color: function(params) {
                    //      var num = myColor.length
                    //      return myColor[params.dataIndex % num]
                    //  },
                    barBorderRadius: 0
                }
            },
            z: 0
        }
        /*     {
               name: '白框',
               type: 'bar',
               yAxisIndex: 1,
               barGap: '-100%',
               data: [0, 0, 0, 0],
               barWidth: 20,
               itemStyle: {
                   normal: {
                       color: '#0e2147',
                       barBorderRadius: 0
                   }
               },
               z: 1
           },
           {
               name: '外框',
               type: 'bar',
               yAxisIndex: 2,
               barGap: '-100%',
               data: [2, 3, 4, 5],
               barWidth: 22,
               itemStyle: {
                   normal: {
                       color: function(params) {
                           var num = myColor.length
                           return myColor[params.dataIndex % num]
                       },
                       barBorderRadius: 0
                   }
               },
               z: 0
           }*/
    ]
};