var xdata = ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00'];
var dataArr = [2000, 3000, 3000, 3200, 4000, 3500, 2030];
var dataArrLine = [3800, 3800, 3800, 3800, 3800, 3800, 3800];
var legendData = ['a', 'b', 'c', ];
var areaStyle = {
    silent: false,
    itemStyle: {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: 'rgba(26, 53, 56, .8)' // 0% 处的颜色
                },
                {
                    offset: 0.5,
                    color: 'rgba(26, 53, 56, 0)' // 0% 处的颜色
                },
                {
                    offset: 1,
                    color: 'rgba(26, 53, 56, .8)' // 100% 处的颜色
                }
            ])
        }
    },
    data: [
        [{
            // name: '预警区域',
            // xAxis: '产品4',
            yAxis: 2000,
            label: {
                normal: {
                    offset: [500, 500],

                    fontSize: 14
                }
            }
        }, {
            yAxis: 4000,
            // xAxis: '产品9'
        }]
    ]
};
option = {
    backgroundColor: 'rgba(13,12,24,1)',
    title: {
        // text: 'Awesome Chart'
    },
    legend: {
        y: 10,
        right: 120,
        // icon: 'line',
        textStyle: {
            color: '#fff', // 图例文字颜色
            fontSize: 16,
        },
        data: legendData
    },
    tooltip: { // 提示框组件
        trigger: 'axis',
        show: true,
        formatter: function(params) {
            // return params[0].name + "<br>"  + params[0].data ;
        }
    },
    xAxis: {
        boundaryGap: false,
        axisLabel: {
            textStyle: {
                fontSize: 14,
                color: '#fff'
            },
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.1)',
                // width: 2
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.1)'
            }
        },
        data: xdata
    },
    yAxis: {
        max: 6000,
        axisLabel: {
            formatter: '{value}',
            color: '#65F5FD',
            fontSize: 16
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#65F5FD',
                // fontSize:33
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.1)'
            }
        },
        axisTick: {
            show: false
        },
    },
    series: [{
            name: legendData[1],
            type: 'line',
            smooth: true,
            symbol: "circle", //拐点的形状
            symbolSize: 10,
            itemStyle: {
                normal: {
                    lineStyle: {
                        //折点的颜色
                        color: "#00E4FF"
                    },
                    color: "#fff", //拐点的颜色
                    borderColor: "#00E4FF" //拐点边框的颜色
                }
            },
            data: dataArr
        },
        {
            name: legendData[0],
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
            data: dataArrLine
        },
        // 区间
        {
            name: legendData[2],
            type: 'line',
            markArea: areaStyle,
        },

    ]
};