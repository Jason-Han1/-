var xdata = ['飞机', '火车'];
var data = [20, 50];
var maxArr = [100, 100];
option = {
    backgroundColor: "rgba(5,39,58,1)", //背景色
    tooltip: {
        trigger: "axis",
        borderRadius: 5,
        borderColor: "#6baab2",
        borderWidth: 1,
        formatter: function(params) {
            // return (
            //   params[0].data.nameCode +
            //   "<br>" +
            //   "杆塔数量(基数) :" +
            //   params[0].value
            // );
        }
    },
    grid: {
        left: "3%",
        right: "3%",
        bottom: "10%",
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
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "red"
            }
        }
    },
    yAxis: {
        name: "单位",
        triggerEvent: true,
        nameTextStyle: {
            color: "rgb(95,109,119)",
            fontSize: 18
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,.1)'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
             lineStyle: {
                color: 'rgba(255,255,255,.1)'
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "rgb(148,159,167)",
                fontSize: 16
            }
        }
    },
    // color: ["#e54035"],
    series: [{
            name: "hill",
            barMinHeight: 10,
            type: "pictorialBar",
            barCategoryGap: "80%",
            // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
            symbol: "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
            itemStyle: {
                normal: {
                    //barBorderRadius: 5,
                    //渐变色
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: "gray"
                        },
                         {
                            offset: 0.3,
                            color: "gray"
                        },
                        {
                            offset: 0.5,
                            color: "#fff"
                        },
                         {
                            offset: 0.7,
                            color: "gray"
                        },
                        {
                            offset: 1,
                            color: "gray"
                        }
                    ])
                }
            },
            label: {
                normal: {
                    show: true,
                    position: "top",
                    textStyle: {
                        color: "#fff",
                        fontSize:20
                    }
                }
            },
            data: data,
            z: 10
        },
        {
            name: "hill",
              type: "pictorialBar",
            // type: "bar",
            // barWidth: '%',
            symbol: "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
            itemStyle: {
                normal: {
                    color: "rgba(11,47,68,1)"
                }
            },
            data: maxArr,
            z: 9
        }
    ]
}