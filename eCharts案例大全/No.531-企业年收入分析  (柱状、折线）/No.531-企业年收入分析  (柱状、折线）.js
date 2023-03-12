let type= ['企业注册数量','营业收入增长趋势'];

option = {
    title: {
        show: true,
        text: '企业年收入分析',
        textStyle: {
    	    align: 'center',
            color: '#fff',
            fontSize: 20,
        },
        top: '3%',
        left: '5%',
    },
    backgroundColor: 'rgba(0, 8, 50, 1)',
    grid: {
        top: "25%",
        bottom: "10%"//也可设置left和right设置距离来控制图表的大小
    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
            label: {
                show: false
            }
        },
        formatter: (pa) => {
            let oneDotHtml = '<span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background:rgba(0,255,198,1);"></span>'
            let twoDotHtml = '<span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background:rgba(252,199,58,1);"></span>'
            // return pa[0].name + pa[0].value
            return (
              pa[0].name + '<br/>'
              + oneDotHtml +pa[1].seriesName+ '：' + pa[1].value + "<br>"
              + twoDotHtml +pa[0].seriesName+ '：' + pa[0].value
            );
          }
    },
    legend: {
        top: "15%",
        left: 'center',
        // icon: 'rect',
        textStyle: {
            padding: [0,0,0,12],
            color: "#ffffff",
            fontSize: 14,
            lineHeight: 16
        },
        formatter: (pa) => {
            return '该产业区域\n' + `${pa}`
        },
        itemGap: 50,
        itemHeight: 10,
        data: type,
    },
    xAxis: {
        data: [
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
        ],
        axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
                color: 'rgba(21,51,162,1)'
            }
        },
        axisTick: {
            show: false //隐藏X轴刻度
        },
        axisLabel: {
            show: true,
            textStyle: {
                padding: [10,0,0,0],
                color: "rgba(71,83,171,1)" //X轴文字颜色
            }
        },
    },
    yAxis: [{
            type: "value",
            // name: "个",
            // nameTextStyle: {
            //     color: "#ebf8ac"
            // },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(33,35,98,1)'
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#FFFFFF'
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    fontSize: 12,
                    color: "rgba(2,167,228,1)"
                }
            },
        },
        {
            type: "value",
            // name: "同比",
            // nameTextStyle: {
            //     show: false,
            //     color: "#ebf8ac"
            // },
            position: "right",
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "rgba(252,199,58,1)"
                }
            }
        },
        // {
        //     type: "value",
        //     // gridIndex: 1,
        //     min: 50,
        //     max: 100,
        //     splitNumber: 8,
        //     splitLine: {
        //         show: false
        //     },
        //     axisLine: {
        //         show: false
        //     },
        //     axisTick: {
        //         show: false
        //     },
        //     axisLabel: {
        //         show: false
        //     },
        //     splitArea: {
        //         show: true,
        //         areaStyle: {
        //             color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"]
        //         }
        //     }
        // }
    ],
    series: [{
            name: "营业收入增长趋势",
            type: "line",
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: true, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 10, //标记的大小
            itemStyle: {
                //折线拐点标志的样式
                color: "rgba(252,199,58,1)"
            },
            lineStyle: {
                color: "rgba(252,199,58,1)"
            },
            // areaStyle:{
            //     color: 'transparent'
            //     // color: "rgba(5,140,255, 0.2)"
            // },
            data: [122, 208, 348, 450, 580]
        },
        {
            name: "企业注册数量",
            type: "bar",
            barWidth: '30%',
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(21,51,162,.5)'
            },
            itemStyle: {
                normal: {
                    barBorderRadius: [4,4,0,0],
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: "rgba(0,101,241,1)"
                        },{
                            offset: 0,
                            color: "rgba(18,20,91,1)"
                        },{
                            offset: 1,
                            color: "rgba(0,255,198,1)"
                        }
                    ])
                }
            },
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#FFF'
                    },
                    position: 'outside'
                }
            },
            data: [142, 248, 368, 470, 500]
        }
    ]
};