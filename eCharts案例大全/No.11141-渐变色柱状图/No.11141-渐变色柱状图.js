 /**
     * ********************************************
     * ***********涨跌幅排名 ajax 交互*********
     * ********************************************
     */
    // echarts 图表初始化开始，无关后台数据交互
    // var rank1 = echarts.init(document.getElementById('rank1'));
    // var rank2 = echarts.init(document.getElementById('rank2'));
    var option = {
        tooltip: {
            trigger: 'axis',
            textStyle: {
                align: 'left',
                color: '#5cc1ff',
                // color: '#fff',
                fontSize: '16'
            },
            backgroundColor: 'rgba(15, 52, 135, 0.5)',
            borderWidth: '1',
            borderColor: '#5cc1ff',
            extraCssText: 'box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);',
            formatter: function(params) {
                return "<span>" + params[0].name + "</span>" + "<br />" + "<span>苹果批发价格涨跌幅: </span>" + "<span>" + params[0].value + "%</span>";
            }
        },
        label: {
            normal: {
                textStyle: {
                    color: "#ff3b00"
                }
            },
            emphasis: {
                textStyle: {
                    color: "#ff3b00"
                }
            }
        },
        grid: {
            left: '1%',
            right: '7%',
            bottom: '1%',
            top: '30',
            containLabel: true
        },
        yAxis: {
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: '#8ac7ff'
                }
            },
            axisTick: {
                show: false,
                interval: 0,
                alignWithLabel: true
            },
            axisLabel: {
                interval: 0,
                rotate: '0',
                textStyle: {
                    fontSize: 10,
                    color: '#cee8ff'
                }
            },
            data: ['宁夏', '四川', "内蒙古", '新疆', "江苏", "山西", "陜西", "河南", "河北", "山东"],
            splitLine: {
                show: false
            }
        },
        xAxis: {
            type: 'value',
            name: '',
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['rgba(138, 199, 255, .2)']
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#01c2db'
                }
            }
        },
        series: [{
            name: '数量',
            type: 'bar',
            stack: '总量',
            barWidth: 20,
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: "{c}%"
                }
            },
            itemStyle: {
                normal: {
                    barBorderWidth: '0',
                    barBorderRadius: [10, 10, 10, 10],
                    barBorderColor: '#f97b00',
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgba(255, 82, 22, 0.4)'
                    }, {
                        offset: 1,
                        color: 'rgb(255, 152, 52)'
                    }])
                },
                emphasis: {
                    barBorderColor: '#644424',
                    barBorderWidth: '1'
                    // color: 'rgba(26,177,98,.8)'
                }
            },
            // 顺序 从下向上 传入
            data: [370, 1250, 1600, 2335, 1278, 550, 700, 1820, 450, 790]
        }]
    };
    var option = {
        tooltip: {
            trigger: 'axis',
            textStyle: {
                align: 'left',
                color: '#5cc1ff',
                // color: '#fff',
                fontSize: '16'
            },
            backgroundColor: 'rgba(15, 52, 135, 0.5)',
            borderWidth: '1',
            borderColor: '#5cc1ff',
            extraCssText: 'box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);',
            formatter: function(params) {
                return params[0].name + "<br />" + "<span>苹果批发价格涨跌幅: </span>" + "<span>" + params[0].value + "%</span>";
            }
        },
        label: {
            normal: {
                textStyle: {
                    color: "rgb(0,255,132)"
                }
            },
            emphasis: {
                textStyle: {
                    color: "rgb(0,255,132)"
                }
            }
        },
        grid: {
            left: '1%',
            right: '7%',
            bottom: '1%',
            top: '30',
            containLabel: true
        },
        yAxis: {
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: '#8ac7ff'
                }
            },
            axisTick: {
                show: false,
                interval: 0,
                alignWithLabel: true
            },
            axisLabel: {
                interval: 0,
                rotate: '0',
                textStyle: {
                    fontSize: 10,
                    color: '#cee8ff'
                }
            },
            data: ['宁夏', '四川', "内蒙古", '新疆', "江苏", "山西", "陜西", "河南", "河北", "山东"],
            splitLine: {
                show: false
            }
        },
        xAxis: {
            type: 'value',
            name: '',
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['rgba(138, 199, 255, .2)']
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#01c2db'
                }
            }
        },
        series: [{
            name: '数量',
            type: 'bar',
            stack: '总量',
            barWidth: 20,
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: "{c}%"
                }
            },
            itemStyle: {
                normal: {
                    barBorderWidth: '0',
                    barBorderRadius: [10, 10, 10, 10],
                    barBorderColor: 'rgb(0,255,132)',
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgba(0,255,132, .4)'
                    }, {
                        offset: 1,
                        color: 'rgb(0,255,132)'
                    }])
                },
                emphasis: {
                    barBorderWidth: '1',
                    barBorderColor: 'rgb(0,255,132)'
                    // color: 'rgba(26,177,98,.8)'
                }
            },
            // 顺序 从下向上 传入
            data: [370, 1250, 1600, 2335, 1278, 550, 700, 1820, 450, 790]
        }]
    };
    // rank1.setOption(rankOption1);
    // rank2.setOption(rankOption2);
    // // echarts 图表初始化完成，无关后台数据交互
    // function rankInit(upData, DownData) {
    //     rank1.setOption({
    //         yAxis: {
    //             data: ['宁夏', '四川', "内蒙古", '新疆', "江苏", "山西", "陜西", "河南", "河北", "山东"],
    //         },
    //         series: [{
    //             // 顺序 从下向上 传入
    //             data: upData
    //         }]
    //     });
    //     rank2.setOption({
    //         yAxis: {
    //             data: ['西藏', '黑龙江', "河北", '陜西', "山东", "武汉", "天津", "内蒙", "河南", "云南"],
    //         },
    //         series: [{
    //             // 顺序 从下向上 传入
    //             data: DownData
    //         }]
    //     });
    // }

    // // 页面初始化
    // rankInit(fakeData(10, 100), fakeData(10, 100));