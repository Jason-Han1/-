var xData =['济南','济宁','临沂','淄博','潍坊','烟台','临沂',
'淄博','泰安','日照','威海','莱芜','聊城','德州','东营','潍坊']
var tq=[800,-200,300,499,188,900,488,399,277,490,580,280,380,199,600,300];
var tq1=[0,290,300,600,499,188,900,488,399,300,277,490,580,280,380,199];
var tq2=[-120,-50,500,277,490,580,280,380,199,600,300,300,188,900,488,399];
option = {
     backgroundColor:'#232d36',
 tooltip: {
          show:true,
          trigger: "axis",
          backgroundColor: "rgba(0,0,0,0.6)",
         borderColor:'rgba(0,0,0,0)',
          textStyle: {
            color: "#fff",
          },
          axisPointer: {
              lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(0, 255, 233,0)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(255, 255, 255,1)',
                    }, {
                        offset: 1,
                        color: 'rgba(0, 255, 233,0)'
                    }],
                    global: false
                }
            },
          },
        },
    xAxis: [{
        type: 'category',
        axisLine: {
            show: false,
            color:'#A582EA'
        },axisTick: {
            show: false,
        },
        axisLabel: {
            color: '#A582EA',
            width:100
        },
        splitLine: {
            show: false
        },
        boundaryGap: false,
        data: xData
    }],

    yAxis: [{
        type: 'value',
        splitLine: {
            show: true,
            lineStyle: {
                type:'dashed',//虚线
                color: '#00BFF3',
                opacity:0.23
            }
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: true,
            margin: 20,
            textStyle: {
                color: '#fff',
            },
        },
        axisTick: {
            show: false,
        },
    }],
    series: [{
            name: "同期",
            type: "bar",
            stack: "总量",
            barMaxWidth: 15,
            // barGap: "10%",
               data: tq.map((item) => {
              return {
                value: item,
                itemStyle: {
                  normal: {
                    barBorderRadius: item > 0 ? [15, 15, 0, 0] : [0, 0, 15, 15], //左上角参数1, 右上角参数2, 右下角参数3, 左下角参数4
                    color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                          {
                            offset: 0,
                            color:item>0? "#956FD4":"#3EACE5",
                          },
                          {
                            offset: 1,
                            color:item>0? "#3EACE5":"#956FD4",
                          },
                        ])
                  },
                },
              };
            }),
            // itemStyle: {
            //     normal: {
            //          barBorderRadius:  [30, 30, 0, 0],
            //     // borderRadius: [30, 30, 0, 0],
            //     color: 
            //         {
            //             type: 'linear',
            //             x: 0,
            //             y: 0,
            //             x2: 0,
            //             y2: 1,
            //             colorStops: [{
            //                 offset: 0,
            //                 color: 'rgba(35, 157, 250, 1)' // 0% 处的颜色
            //             }, {
            //                 offset: 1,
            //                 color: 'rgba(35, 157, 250, 0)' // 100% 处的颜色
            //             }],
            //             global: false // 缺省为 false
            //         }
            //     },

            // },
            // "data":tq,
        },  {
            name:'液压异常报警',
            type: 'line',
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 5,
            lineStyle: {
                normal: {
                    color: "#A582EA",
                },
            },
            label: {
                show: false,
                position: 'top',
                textStyle: {
                    color: '#A582EA',
                }
            },
            itemStyle: {
                color: "#fff",
                borderColor: "#A582EA",
                borderWidth: 2,
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(43,193,145,0.5)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(43,193,145,0.2)'
                        }
                    ], false),
                }
            },
            data:tq1//data.values
        },
        {
            name:'液位异常报警',
            type: 'line',
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 5,
            lineStyle: {
                normal: {
                    color: "#2CABE3",
                },
            },
            label: {
                show: false,
                position: 'top',
                textStyle: {
                    color: '#2CABE3',
                }
            },
            itemStyle: {
                color: "#fff",
                borderColor: "#2CABE3",
                borderWidth: 2,
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(81,150,164,0.5)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(81,150,164,0.2)'
                        }
                    ], false),
                }
            },
            data:tq2//data.values
        },
    ]
}