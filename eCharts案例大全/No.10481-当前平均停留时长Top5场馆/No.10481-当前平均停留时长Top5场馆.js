var myColor = ["#0C318C"];
var ydata = ["D1馆", "B4馆", "D2馆", "C1馆", "E2馆"];
var dataArr = [50, 66, 33, 25, 15];//蓝色数值
var outerData = [100, 100, 100, 100];//外框
var whiteOuterData = [99.8, 99.9, 99.9, 99.9, 99.8];//白框数值

option = {
    backgroundColor: 'rgba(0,0,0,1)',
    title:{
        text:'当前平均停留时长Top5场馆',
        x:'center',
        y:30,
        textStyle:{
            fontSize:35,
            color:'#fff',
            fontWeight:'normal'
        }
    },
    tooltip:{
        show:true
    },
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
                color: ["#163C60"],
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
            offset: "27",
            // boundaryGap: false,
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
            data:ydata
        },
        {
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
                    color: "#135184"
                }
            },
            tooltip: {
                show: false
            },
        },
        {
            // name: "条",
            type: "bar",
            stack: "b",
            yAxisIndex: 0,
            data:dataArr,
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
                    barBorderRadius: [0, 10, 10, 0],
                    borderColor:'#148DE8',
                    borderWidth:2,
                    shadowBlur:5,
                    shadowColor:'#148DE8'
                }
            },
            z: 2
        },
        {
            // name: "白框",
            type: "bar",
            yAxisIndex: 0,
            barGap: "-100%",
            data:whiteOuterData,
            barWidth: 21,
            itemStyle: {
                normal: {
                    color: "rgba(24,37,53,1)",
                    barBorderRadius: 2
                }
            },
            tooltip: {
                show: false
            },
            z: 1
        },
        {
            // name: "外框",
            type: "bar",
            yAxisIndex: 2,
            barGap: "-100%",
            data:outerData,
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
                    color: "transparent",
                    barBorderRadius: 0
                }
            },
            tooltip: {
                show: false
            },
            z: 0
        }
    ]
};