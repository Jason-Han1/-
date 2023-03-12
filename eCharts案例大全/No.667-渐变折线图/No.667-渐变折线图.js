 var dataDay = [];
    for (var i = 0; i < 32; i++) {
        dataDay.push(i.toString());
    }

    var option = {
        title: {
            text: '我是标题',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 15,
                color: '#000'
            },
            top: 15,
            left: 'center'
        },
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(255,255,255,0.9)',
            axisPointer: {
                lineStyle: {
                    color: '#999'
                }
            },
            formatter: function(arg) {
                    var dateTxt = arg[1].name+'日'+  "<br/>";
                    var data1 = '  9月： ' + arg[0].data +  "<br/>";
                    var data2 = '  10月： ' + arg[1].data +  "<br/>";
                    var data3 = '  11月： ' + arg[2].data;
                    return  dateTxt +data1+data2+data3
            }
        },
        legend: {
            icon: 'rect',
            itemWidth: 14,
            itemHeight: 5,
            itemGap: 13,
            data: ['9月', '10月', '11月'],
            top: 15,
            right: '4%',
            textStyle: {
                fontSize: 12,
                color: '#333'
            }
        },
        grid: {
            top: '30%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    color: '#d9d9d9'
                }
            },
            axisLabel: {
                textStyle: {
                    color: "#999",
                    fontSize: 12
                }
            },
            data: dataDay
        }],
        yAxis: [{
            type: "value",
            axisLabel: {
                textStyle: {
                    color: "#999999"
                }
            },
            splitLine: {
                lineStyle: {
                    type: "dashed",
                    color: "#d9d9d9"
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        }],
        series: [{
            name: '9月',
            type: 'line',
            smooth: false,
            symbol: 'triangle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            // areaStyle: {
            //     normal: {
            //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //             offset: 0,
            //             color: 'rgba(246,197,53, 0.3)'
            //         }, {
            //             offset: 0.8,
            //             color: 'rgba(246,197,53, 0)'
            //         }], false),
            //         shadowColor: 'rgba(0, 0, 0, 0.1)',
            //         shadowBlur: 10
            //     }
            // },
            itemStyle: {
                normal: {
                    color: 'rgb(246,197,53)',
                    borderColor: 'rgba(246,197,53,0.2)',
                    borderWidth: 12
                }
            },
            markPoint: {
                data: [{ name: '最大值', type:'max' }],
                symbol: "arrow",
                itemStyle: {
                    color: "rgb(246,197,53)"
                },
                label: {
                    show: false
                },
                symbolSize: 12, // 容器大小
                symbolOffset: [0, -5], //位置偏移
                symbolRotate: 180
            },
            data: [120, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122, 110, 125, 145, 122, 165, 122]
        }, {
            name: '10月',
            type: 'line',
            smooth: false,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            // areaStyle: {
            //     normal: {
            //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //             offset: 0,
            //             color: 'rgba(90,216,166, 0.3)'
            //         }, {
            //             offset: 0.8,
            //             color: 'rgba(90,216,166, 0)'
            //         }], false),
            //         shadowColor: 'rgba(0, 0, 0, 0.1)',
            //         shadowBlur: 10
            //     }
            // },
            itemStyle: {
                normal: {
                    color: 'rgb(90,216,166)',
                    borderColor: 'rgba(90,216,166,0.2)',
                    borderWidth: 12

                }
            },
            markPoint: {
                data: [{ name: '最大值', type:'max' }],
                symbol: "arrow",
                itemStyle: {
                    color: "rgb(90,216,166)"
                },
                label: {
                    show: false
                },
                symbolSize: 12, // 容器大小
                symbolOffset: [0, -5], //位置偏移
                symbolRotate: 180
            },
            data: [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150, 122, 165, 122, 220, 182, 191, 134, 150]
        }, {
            name: '11月',
            type: 'line',
            smooth: false,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(24,144,255, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(24,144,255, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {

                    color: 'rgb(24,144,255)',
                    borderColor: 'rgba(24,144,255,0.2)',
                    borderWidth: 12
                }
            },
            markPoint: {
                data: [{ name: '最大值', type:'max' }],
                symbol: "arrow",
                itemStyle: {
                    color: "rgb(24,144,255)"
                },
                label: {
                    show: false
                },
                symbolSize: 12, // 容器大小
                symbolOffset: [0, -5], //位置偏移
                symbolRotate: 180
            },            
            data: [110, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122, 122, 191, 134, 150, 120, 110, 165, 122]
        }, ]
    };