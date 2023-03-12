
 //legend数据
    let data = [
        {
            dDeviceCategory: '温度',
            dRecordData: ['100', '200', '160', '192', '160', '200', '240'],
        }, {
            dDeviceCategory: '湿度',
            dRecordData: ['200', '180', '150', '120', '160', '200', '200'],
        },
        {
            dDeviceCategory: '在线',
            dRecordData: ['100', '114', '118', '122', '126', '230', '224'],
        }, {
            dDeviceCategory: '离线',
            dRecordData: ['200', '143', '118', '112', '164', '120', '130'],
        }
    ];
    let titleArr = [], seriesArr = [], xValue = ['100', '400', '238', '192', '160', '200', '240'];
    let color = [['rgba(31, 255, 255, 1)', 'rgba(31, 255, 255, 0.7)', 'rgba(255,255,255, 1)'], ['rgba(143,154,255,1)', 'rgba(143,154,255,0.7)', 'rgba(255,255,255, 1)'], ['rgba(53,255,59, 1)', 'rgba(53,255,59, 0.7)', 'rgba(255,255,255, 1)'], ['rgba(227, 59, 7, 1)', 'rgba(227, 59, 7, 0.7)', 'rgba(255,255,255, 1)'], ['rgba(227, 201, 98, 1)', 'rgba(227, 201, 98, 0.7)', 'rgba(255,255,255, 1)']]

    if(data!=null){
                    data.forEach(function (item, index) {
                        titleArr.push(item.dDeviceCategory);
                        if (index <= 5) {
                            seriesArr.push(
                                {
                                    name: item.dDeviceCategory,
                                    type: 'line',
                                    smooth: true,
                                    symbol: 'circle',
                                    symbolSize: 5,
                                    showSymbol: false,
                                    lineStyle: {
                                        normal: {
                                            width: 3
                                        }
                                    },
                                    areaStyle: {
                                        normal: {
                                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                                offset: 0,
                                                color: 'rgba(16,97,204, 0.3)'
                                            }, {
                                                offset: 0.8,
                                                color: 'rgba(17,235,210, 0)'
                                            }], false),
                                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                                            shadowBlur: 10
                                        }
                                    },
                                    itemStyle: {
                                        normal: {
                                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                                offset: 0,
                                                color: color[index][0],
                                            },  {
                                                offset: 0.4,
                                                color: color[index][1],
                                            }, {
                                                offset: 0.6,
                                                color: color[index][2],
                                            }, {
                                                offset: 0.8,
                                                color: color[index][1],
                                            }, {
                                                offset: 1,
                                                color: color[index][0],
                                            }])
                                        },
                                        emphasis: {
                                            color: 'rgb(31, 255, 255)',
                                            borderColor: 'rgba(31, 255, 255, 0.2)',
                                            // extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1)',
                                            borderWidth: 10
                                        }
                                    },
                                    data: item.dRecordData
                                }
                            );
                        } else if (index > 5) {
                            seriesArr.push(
                                {
                                    name: item.dDeviceCategory,
                                    type: 'line',
                                    smooth: true,
                                    symbol: 'circle',
                                    symbolSize: 5,
                                    showSymbol: false,
                                    lineStyle: {
                                        normal: {
                                            width: 3
                                        }
                                    },
                                    areaStyle: {
                                        normal: {
                                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                                offset: 0,
                                                color: 'rgba(16,97,204, 0.3)'
                                            }, {
                                                offset: 0.8,
                                                color: 'rgba(17,235,210, 0)'
                                            }], false),
                                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                                            shadowBlur: 10
                                        }
                                    },
                                    itemStyle: {
                                        normal: {
                                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                                offset: 0,
                                                color: color[index % 5][0],
                                            },  {
                                                offset: 0.4,
                                                color: color[index % 5][1],
                                            }, {
                                                offset: 0.6,
                                                color: color[index % 5][2],
                                            }, {
                                                offset: 0.8,
                                                color: color[index % 5][1],
                                            }, {
                                                offset: 1,
                                                color: color[index % 5][0],
                                            }])
                                        },
                                        emphasis: {
                                            color: 'rgb(31, 255, 255)',
                                            borderColor: 'rgba(31, 255, 255, 0.2)',
                                            // extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1)',
                                            borderWidth: 10
                                        }
                                    },
                                    data: item.dRecordData
                                }
                            );
                        }


                    });
                }
    option = {
        backgroundColor: '#000',
        grid: {
            left: 20,
            right: 10,
            top: 30,
            bottom: 10,
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        },
        legend: {
            icon: 'rect',
            itemWidth: 14,
            itemHeight: 5,
            itemGap: 13,
            data: titleArr,
            right: '4%',
            textStyle: {
                fontSize: 12,
                color: '#fff'
            }
        },
        xAxis: {
            type: 'category',
            triggerEvent: true,
            boundaryGap: false,
            data: xValue,
            splitLine: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1.5,
                    color: 'rgba(255,255,255,.6)'
                }
            },
            axisTick: {
                show: true,
                inside: true,
                alignWithLabel: true
            },
            axisLabel: {
                color: '#DADADA',
                fontSize: 12
            }
        },
        yAxis: {
            // splitNumber: '8',
            nameLocation: 'end',
            // min: 5,
            nameTextStyle: {
                color: '#DADADA',
                fontSize: 12
            },
            type: 'value',
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: 'rgba(255,255,255,.2)'
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1.5,
                    color: 'rgba(255,255,255,.6)'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#DADADA',
                fontSize: 12
            }
        },
        series: seriesArr
    };