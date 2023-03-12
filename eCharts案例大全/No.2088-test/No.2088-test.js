var xdata = ['1', '2'];
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
        bottom: "5%",
        top: "5%",
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
            lineStyle:{
                color:'#31C2FF'
            }
        },
        axisLabel: {
            show: true,
            interval: 0,
            textStyle: {
                color: "#CAEEFF",
                fontSize:12,
            }
        }
    },
    yAxis: {
        triggerEvent: true,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(46,182,255,0.2)'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
             lineStyle: {
                color: '#31C2FF'
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#CAEEFF",
                fontSize: 12
            }
        }
    },
    // color: ["#e54035"],
    series: [
        {
            name: "hill",
            barMinHeight: 10,
            type: "pictorialBar",
            barCategoryGap: "60%",
            // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
            symbol: "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
            itemStyle: {
                normal: {
                    //barBorderRadius: 5,
                    //渐变色
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "#06CA70"
                        },
                        {
                            offset: 1,
                            color: "#43F2B6"
                        }
                    ])
                }
            },
            label: {
                normal: {
                    show: true,
                    position: "top",
                    textStyle: {
                        color: "#42F1B4",
                        fontSize:12
                    }
                }
            },
            data: data,
            z: 10
        },
        // {
        //     name: "hill",
        //     type: "bar",
        //     barWidth: '20%',
        //     symbol: "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
        //     itemStyle: {
        //         normal: {
        //             color: "rgba(11,47,68,.8)"
        //         }
        //     },
        //     data: maxArr,
        //     z: 9
        // }
    ]
}