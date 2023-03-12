    option = {
        title: {
            text: "",
            x: "center",
            textStyle: {
                fontWeight: "normal"
            }
        },
        backgroundColor: '#fff',
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'line', // 默认为直线，可选为：'line' | 'shadow'
                lineStyle:{
                    color:'#999999'
                }
            }
        },
        grid: {
            left: '3%',
            right: '8%',
            top: '16%',
            bottom: '20%',
            containLabel: true
        },
        xAxis: [{
            name: '题型',
            type: 'category',
            data: ["第一周", "第二周", "第三周", "第四周", "第五周", "第六周", "第七周", "第八周", "第九周", "第十周"],
            nameTextStyle: {
                color: '#999'
            },
            axisLabel: {
                margin: 15,
                interval: 0,
                rotate: 45,
                show: true,
                splitNumber: 15,
                textStyle: {
                    fontFamily: "微软雅黑",
                    fontSize: 12,
                    color: '#999999'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#eeeeee'
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'solid',
                    color: '#f2f2f2'
                }
            }
        }],
        yAxis: [{
            name: '答题时长',
            type: 'value',
            nameTextStyle: {
                color: '#999'
            },
            textStyle: {
                color: '#000'
            },
            axisLabel: {
                textStyle: {
                    color: '#999999'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#eeeeee'
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: '#f2f2f2'
                }
            }
        }],
        series: [{
            name: '',
            type: 'bar',
            barWidth: '25%',
            data: [{
                "value": 1,
                "name": "第一周"
            }, {
                "value": 1,
                "name": "第二周"
            }, {
                "value": 5,
                "name": "第三周"
            }, {
                "value": 3,
                "name": "第四周"
            }, {
                "value": 3,
                "name": "第五周"
            }, {
                "value": 3,
                "name": "第六周"
            }, {
                "value": 5,
                "name": "第七周"
            }, {
                "value": 5,
                "name": "第八周"
            }, {
                "value": 1,
                "name": "第九周"
            }, {
                "value": 5,
                "name": "第十周"
            }],
            itemStyle: {
                normal: {
                    barBorderRadius: [4, 4, 0, 0],
                    color: function(params) {
                        return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(31, 121,255, 1)'
                        }, {
                            offset: 1,
                            color: 'rgba(87, 201,255, 1)'
                        }])
                    },
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            }
        }, {
            name: "平均测试系数",
            type: "line",
            symbolSize: 12,
            symbol: 'circle',
            smooth: true, //关键点，为true是不支持虚线的，实线就用true
            color: ['#fff'], //折线条的颜色
            itemStyle: {

                borderColor: '#2aba3f',
                borderWidth: '3',


            },
            lineStyle: {
                width: 3,
                type: 'solid', //'dotted'虚线 'solid'实线
                color: '#2aba3f',
                shadowBlur: 10,
                shadowColor: 'rgba(62,184,7,0.4)',
                shadowOffsetX: 2,
                shadowOffsetY: 2,
            },
            data: [{
                "value": 1,
                "name": "第一周"
            }, {
                "value": 1,
                "name": "第二周"
            }, {
                "value": 5,
                "name": "第三周"
            }, {
                "value": 3,
                "name": "第四周"
            }, {
                "value": 3,
                "name": "第五周"
            }, {
                "value": 3,
                "name": "第六周"
            }, {
                "value": 5,
                "name": "第七周"
            }, {
                "value": 5,
                "name": "第八周"
            }, {
                "value": 1,
                "name": "第九周"
            }, {
                "value": 5,
                "name": "第十周"
            }],
        }],
        dataZoom: [{
            type: 'inside',
            xAxisIndex: 0,
            filterMode: 'filter',
            startValue: 0,
            endValue: 6,
            zoomLock: true,
            zoomOnMouseWheel: false,
        }]
    };