var fontColor = '#30eee9';
var xdata = ['06.20', '06.21', '06.22', '06.23', '06.24', '05.25', '06.26']; //x轴
var dataArr = [4000, 4200, 3800, 3500, 4100, 4150, 4800]; //value
var dashedArr = [4000, 4000, 4000, 4000, 4000, 4000, 4000];
var titleName = '预期值';
var titleNames = '当日能耗';
option = {
    backgroundColor: '#11183c',
    grid: {
        left: "5%",
        //   right: "2%",
        bottom: "20%",
        top: "15%",
        containLabel: true
    },
    legend: {
        show: true,
        x: 700,
        y: 50,
        textStyle: {
            color: '#fff', // 图例文字颜色
            fontSize: 16,
        }
    },
    xAxis: {
        type: "category",
        boundaryGap: false,
        data: xdata,
        axisLabel: {
            show: true,
            textStyle: {
                color: "#fff",
                fontSize: 14
            }
        },
        axisLine: {
            lineStyle: {
                color: 'transparent',
                width: 2 //这里是为了突出显示加上的
            }
        }
    },
    tooltip: {
        show: true,
        trigger: 'item'
    },
    yAxis: [{
        type: 'value',
        min: 0,
        max: 6000,
        axisLabel: {
            margin: 30,
            formatter: '{value}',
            textStyle: {
                color: '#2ad1d2',
                fontSize: 14
            }
        },
        axisLine: {
            lineStyle: {
                color: 'transparent',
                width: 2 //这里是为了突出显示加上的
            }
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,.1)'
            }
        }
    }],
    series: [
        {
            name: titleName,
            type: 'line',
            smooth: true,
            // symbol: "circle", //拐点的形状
            // symbolSize: 10,
            symbol: "none",
            itemStyle: {
                normal: {
                    lineStyle: {
                        type: 'dashed',
                        //折点的颜色
                        // color: "#00a2e6"
                    },
                    color: "#01F699", //拐点的颜色
                    borderColor: "#01F699" //拐点边框的颜色
                }
            },
            data: dashedArr
        },
        {
            name: titleNames,
            type: 'bar',
            barWidth: 30,
            // barGap:false,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(18,93,236,.8)'

                    }, {
                        offset: 1,
                        color: 'rgba(3,191,255,.8)'
                    }]),
                    // areaStyle: {
                    //     //color: '#94C9EC'
                    //     color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    //         offset: 0,
                    //         color: 'rgba(3,191,255,.3)'
                    //     }, {
                    //         offset: 1,
                    //         color: 'rgba(18,93,236,.3)'
                    //     }]),
                    // }
                },
                // emphasis: {
                //     color: 'rgb(0,196,132)',
                //     borderColor: 'rgba(0,196,132,0.2)',
                //     extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                //     // borderWidth: 10
                // }

            },
            // markPoint: {
            //     itemStyle: {
            //         normal: {
            //             color: 'red'
            //         }
            //     }
            // },
            data: dataArr
        },
    ]
};