option = {
    title: {
        text: ''
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            },
            lineStyle: {
                color: '#9eb2cb'
            },
        }
    },
    legend: {
        data:["pass", "comb001","机构拒绝", "欺诈风险", "活体类"],
        top: "bottom",
        type: "scroll",
        textStyle: {
            color: "#000"
        }
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        borderWidth: 0.5,
        bottom: 36,
        containLabel: true,
        left: 10,
        right: 34,
        top: 34
    },
    xAxis : [
        {
            type : 'category',
            name: "日期",
            nameGap: 23,
            nameLocation: "middle",
            boundaryGap: true,
            axisLabel: {
                color: '#000'
            },
            axisLine: {
                lineStyle: {
                    color: "#b5b4b4"
                },
                onZero: false,
                show: true
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#b5b4b4'
                }
            },
            data : ["2019-04-01", "2019-04-02", "2019-04-03", "2019-04-04"]
        }
    ],
    yAxis : [
        {
            type : 'value',
            name: "人数/金额",
            // scale: false,    // 这个设置为true会影响图形显示
            axisLabel: {
                color: "#000",
                // formatter: function () {}
            },
            axisLine: {
                lineStyle: {
                    color: "#b5b4b4" 
                },
                show: true
            },
            axisPointer: {
                label: {
                    // formatter: function () {}
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                   color: "#b5b4b4" 
                }
            },
            nameTextStyle: {
                color: "#000",
                fontWeight: "bold"
            }
        }
    ],
    series : [
        {
            barMaxWidth: 100,
            data: [
                {format: "1", globalFormat: "1", name: "2019-04-01",precision: "0",unit: "",value: 76378,y: 76378},
                {format: "1",globalFormat: "1",name: "2019-04-02",precision: "0",unit: "",value: 67238,y: 67238},
                {format: "1",globalFormat: "1",name: "2019-04-03",precision: "0",unit: "",value: 71007,y: 71007},
                {format: "1",globalFormat: "1",name: "2019-04-04",precision: "0",unit: "",value: 70050,y: 70050}
            ],
            itemStyle: {
                normal: {
                    color: '#53ade9'
                }
            },
            lineStyle: {
                normal: {
                    width: 1.6
                }
            },
            markLine: {
                data: [{name: "平均值", type: "average"}],
                label: {
                    normal: {
                        formatter: '',
                        position: 'start'
                    }
                },
                lineStyle: {
                    emphasis: {
                        color: "#596c83",
                        width: 1
                    },
                    normal: {
                        color: "transparent"
                    }
                },
                symbol: ['none', 'none']
            },
            markPoint: {},
            name: "pass",
            showSymbol: true,
            stack: "1",
            symbol: "emptycircle",
            tooltip: {},
            type: "bar",
            yAxisIndex: 0
        },
        {
            barMaxWidth: 100,
            data: [
                {format: "1",globalFormat: "1",name: "2019-04-01",precision: "0",unit: "",value: 20801,y: 20801},
                {format: "1",globalFormat: "1",name: "2019-04-02",precision: "0",unit: "",value: 19161,y: 19161},
                {format: "1",globalFormat: "1",name: "2019-04-03",precision: "0",unit: "",value: 19700,y: 19700},
                {format: "1",globalFormat: "1",name: "2019-04-04",precision: "0",unit: "",value: 19944,y: 19944}
            ],
            itemStyle: {
                normal: {
                    color: '#3fe0c2'
                }
            },
            lineStyle: {
                normal: {
                    width: 1.6
                }
            },
            markLine: {
                label: {
                    normal: {
                        formatter: '',
                        position: 'start'
                    }
                },
                lineStyle: {
                    emphasis: {
                        color: "#596c83",
                        width: 1
                    },
                    normal: {
                        color: "transparent"
                    }
                },
                symbol: ['none', 'none']
            },
            name: "comb001",
            stack: "1",
            type: "bar",
            yAxisIndex: 0
        },
        {
            barMaxWidth: 100,
            data: [
                {format: "1",globalFormat: "1",name: "2019-04-01",precision: "0",unit: "",value: 6686,y: 6686},
                {format: "1",globalFormat: "1",name: "2019-04-02",precision: "0",unit: "",value: 5882,y: 5882},
                {format: "1",globalFormat: "1",name: "2019-04-03",precision: "0",unit: "",value: 5342,y: 5342},
                {format: "1",globalFormat: "1",name: "2019-04-04",precision: "0",unit: "",value: 4103,y: 4103}
            ],
            itemStyle: {
                normal: {
                    color: "#ff674d"
                }
            },
            lineStyle: {
                normal: {
                    width: 1.6
                }
            },
            markLine: {
                data: [{name: "平均值", type: "average"}],
                label: {
                    normal: {
                        formatter: '',
                        position: 'start'
                    }
                },
                lineStyle: {
                    emphasis: {
                        color: "#596c83",
                        width: 1
                    },
                    normal: {
                        color: "transparent"
                    }
                },
                symbol: ['none', 'none']
            },
            markPoint: {},
            name: "机构拒绝",
            showSymbol: true,
            stack: "1",
            symbol: "emptycircle",
            tooltip: {},
            type: "bar",
            yAxisIndex: 0
        },
        {
            barMaxWidth: 100,
            data: [
                {format: "1",globalFormat: "1",name: "2019-04-01",precision: "0",unit: "",value: 513,y: 513},
                {format: "1",globalFormat: "1",name: "2019-04-02",precision: "0",unit: "",value: 437,y: 437},
                {format: "1",globalFormat: "1",name: "2019-04-03",precision: "0",unit: "",value: 453,y: 453},
                {format: "1",globalFormat: "1",name: "2019-04-04",precision: "0",unit: "",value: 417,y: 417}
            ],
            itemStyle: {
                normal: {
                    color: "#face4d"
                }
            },
            lineStyle: {
                normal: {
                    width: 1.6
                }
            },
            markLine: {
                data: [{name: "平均值", type: "average"}],
                label: {
                    normal: {
                        formatter: '',
                        position: 'start'
                    }
                },
                lineStyle: {
                    emphasis: {
                        color: "#596c83",
                        width: 1
                    },
                    normal: {
                        color: "transparent"
                    }
                },
                symbol: ['none', 'none']
            },
            markPoint: {},
            name: "欺诈风险",
            showSymbol: true,
            stack: "1",
            symbol: "emptycircle",
            tooltip: {},
            type: "bar",
            yAxisIndex: 0
        },
        {
            barMaxWidth: 100,
            data: [
                {format: "1",globalFormat: "1",name: "2019-04-01",precision: "0",unit: "",value: 53,y: 53},
                {format: "1",globalFormat: "1",name: "2019-04-02",precision: "0",unit: "",value: 55,y: 55},
                {format: "1",globalFormat: "1",name: "2019-04-03",precision: "0",unit: "",value: 68,y: 68},
                {format: "1",globalFormat: "1",name: "2019-04-04",precision: "0",unit: "",value: 55,y: 55}
            ],
            itemStyle: {
                normal: {
                    color: "#fba667"
                }
            },
            lineStyle: {
                normal: {
                    width: 1.6
                }
            },
            markLine: {
                label: {
                    normal: {
                        formatter: '',
                        position: 'start'
                    }
                },
                lineStyle: {
                    emphasis: {
                        color: "#596c83",
                        width: 1
                    },
                    normal: {
                        color: "transparent"
                    }
                },
                symbol: ['none', 'none']
            },
            name: "活体类",
            stack: "1",
            type: "bar",
            yAxisIndex: 0
        },
       
    ]
};
