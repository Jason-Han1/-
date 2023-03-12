let list = [
    {id:0,value:50,time:'2021-07-01'},
    {id:1,value:55,time:'2021-07-02'},
    {id:1,value:45,time:'2021-07-03'},
    {id:1,value:40,time:'2021-07-04'},
    {id:1,value:43,time:'2021-07-05'},
    {id:1,value:53,time:'2021-07-06'},
    {id:1,value:48,time:'2021-07-07'},
    {id:1,value:50,time:'2021-07-08'},
    {id:1,value:43,time:'2021-07-09'},
    {id:1,value:46,time:'2021-07-10'},
    {id:1,value:42,time:'2021-07-11'},
    {id:1,value:52,time:'2021-07-12'},
    ];
var ydata = [];
var xdata = [];
list.forEach(function(item){
    ydata.push(item.value);
    xdata.push(item.time);
});
option = {
    backgroundColor: '#fff',
    grid: {
        show: false
    },
    tooltip: {
        formatter: "{b}: {c}",
        trigger: "axis",
        axisPointer: {
            lineStyle: {
                color: "rgba(91, 143, 249, 0.7)",
                type: 'dashed'
            }
        },
        backgroundColor: "rgba(91, 143, 249, 0.7)",
        padding: [5, 10],
        textStyle: {
            color: "#fff",
            fontSize:13
        },

    },
    legend: {
        right: 20,
        orient: "vertical",
        data: ["出勤人数"]
    },
    xAxis: {
        type: "category",
        data: xdata,
        boundaryGap: false,
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            interval: "auto",
            lineStyle: {
                color: 'rgba(0,0,0,0.06)'
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(0,0,0,0.06)'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 12,
                color: '#666'
            }
        }
    },
    yAxis: {
        name:"",
        nameTextStyle:{
            color:'#666'
        },
        type: "value",
        minInterval: 1, // 横坐标值为整数
        splitLine: {
            show: true,
            interval: "auto",
            lineStyle: {
                color: 'rgba(0,0,0,0.06)'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(0,0,0,0.06)'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 13,
                color: '#666'
            }
        }
    },
    series: [{
        name: "单位/人",
        type: "line",
        smooth: true,
        showSymbol: true,
        symbol: "emptyCircle",
        symbolSize: 11,
        data: ydata,
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [{
                            offset: 0,
                            color: "rgba(91, 143, 249, 1)"
                        },
                        {
                            offset: 1,
                            color: "rgba(91, 143, 249, 0.3)"
                        }
                    ],
                    false
                )
            }
        },
        itemStyle: {
            normal: {
                borderWidth: 2,
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [{
                            offset: 0,
                            color: "rgba(91, 143, 249, 0.7)"
                        },
                        {
                            offset: 1,
                            color: "rgba(91, 143, 249, 0.4)"
                        }
                    ],
                    false
                )
            }
        },
        lineStyle: {
            globalCoord: false, // 缺省为 false
            normal: {
                width: 2,
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [{
                            offset: 0,
                            color: "rgba(0, 82, 212,0.7)"
                        },
                        {
                            offset: 1,
                            color: "rgba(0, 82, 212,0.4)"
                        }
                    ],
                    false
                )
            }
        },
        emphasis: {
            symbolSize: 14,
            itemStyle: {
                borderWidth: 2,
                borderColor: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [{
                            offset: 0,
                            color: "rgba(0, 82, 212,0.7)"
                        },
                        {
                            offset: 1,
                            color: "rgba(0, 82, 212,0.6)"
                        }
                    ],
                    false
                )

            }
        }

    }]
}