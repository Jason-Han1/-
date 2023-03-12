        var chart_title = '行业';
        //图表X轴数据
        var Xdata = ["行业1", "行业2", "行业3", "行业4", "行业5", "行业6", "行业7", "行业8", "行业9", "行业10"];

        //图表项目
        var fp_key = ['男', '女', '总'];
        var fp_coler = ['#4A65EA','rgba(241, 109, 115, 1)', '#4AC9E9',  '#258df6', '#f5814b', '#6fce7d'];
        //图表项目数据
        var fp_nan = {
            1: [589, 259, 262, 324, 232, 176, 196, 214, 133, 370,],
            2: [511, 315, 139, 375, 204, 352, 163, 258, 385, 209,],
            3: [527, 210, 328, 292, 241, 110, 130, 185, 392, 392,],
            4: [500, 350, 300, 250, 200, 150, 100, 150, 200, 250,],
            5: [580, 128, 255, 254, 313, 143, 360, 343, 338, 163,],
            6: [521, 388, 233, 309, 133, 308, 297, 283, 349, 273,],
            7: [500, 350, 300, 250, 200, 150, 100, 150, 200, 250,],
            8: [580, 129, 173, 101, 310, 393, 386, 296, 366, 268,],
            9: [563, 396, 388, 108, 325, 120, 180, 292, 200, 309,],
            10: [300, 350, 300, 250, 200, 150, 100, 150, 200, 250],
            11: [100, 350, 300, 250, 200, 150, 100, 150, 200, 250],
            12: [280, 128, 255, 254, 313, 143, 360, 343, 338, 163],
        };
        var fp_nv = {
            1: [589, 259, 262, 324, 232, 176, 196, 214, 133, 370,],
            2: [511, 315, 139, 375, 204, 352, 163, 258, 385, 209,],
            3: [527, 210, 328, 292, 241, 110, 130, 185, 392, 392,],
            4: [500, 350, 300, 250, 200, 150, 100, 150, 200, 250,],
            5: [580, 128, 255, 254, 313, 143, 360, 343, 338, 163,],
            6: [521, 388, 233, 309, 133, 308, 297, 283, 349, 273,],
            7: [500, 350, 300, 250, 200, 150, 100, 150, 200, 250,],
            8: [580, 129, 173, 101, 310, 393, 386, 296, 366, 268,],
            9: [563, 396, 388, 108, 325, 120, 180, 292, 200, 309,],
            10: [300, 350, 300, 250, 200, 150, 100, 150, 200, 250],
            11: [100, 350, 300, 250, 200, 150, 100, 150, 200, 250],
            12: [280, 128, 255, 254, 313, 143, 360, 343, 338, 163],
        };
        var fp_val = {
            1: [589, 259, 262, 324, 232, 176, 196, 214, 133, 370,],
            2: [511, 315, 139, 375, 204, 352, 163, 258, 385, 209,],
            3: [527, 210, 328, 292, 241, 110, 130, 185, 392, 392,],
            4: [500, 350, 300, 250, 200, 150, 100, 150, 200, 250,],
            5: [580, 128, 255, 254, 313, 143, 360, 343, 338, 163,],
            6: [521, 388, 233, 309, 133, 308, 297, 283, 349, 273,],
            7: [500, 350, 300, 250, 200, 150, 100, 150, 200, 250,],
            8: [580, 129, 173, 101, 310, 393, 386, 296, 366, 268,],
            9: [563, 396, 388, 108, 325, 120, 180, 292, 200, 309,],
            10: [300, 350, 300, 250, 200, 150, 100, 150, 200, 250],
            11: [100, 350, 300, 250, 200, 150, 100, 150, 200, 250],
            12: [280, 128, 255, 254, 313, 143, 360, 343, 338, 163],
        };
        //图表月份
        var timeLineData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,];
         option = {
            baseOption: {
                backgroundColor:"#061740",
                timeline: {
                    show: true,
                    axisType: 'category',
                    tooltip: {
                        show: true,
                        formatter: function (params) {
                            return params.name + '月份数据统计';
                        }
                    },
                    autoPlay: true,
                    currentIndex: 10,
                    playInterval: 2000,
                    label: {
                        normal: {
                            show: true,
                            color: '#20dbfd',
                            interval: 'auto',
                            formatter: function (params) {
                                return params
                            }
                        },
                    },
                    lineStyle: {
                        show: true,
                        color: '#20dbfd'
                    },
                    itemStyle: {
                        show: true,
                        color: '#20dbfd'
                    },
                    /*                    checkpointStyle: {
                                            show: true,
                                            color: '#20dbfd'
                                        },*/
                    controlStyle: {
                        show: true,
                        color: '#20dbfd',
                        borderColor: '#20dbfd'
                    },
                    left: "0",
                    right: "0",
                    bottom: '0',
                    padding: [15, 0],
                    data: timeLineData,
                },
                title: {
                    textStyle: {
                        color: '#fff',
                        fontSize: 16,
                    },
                },
                legend: {
                    data: fp_key,
                    top: 8,
                    right: '20%',
                    textStyle: {
                        color: '#fff',
                    },
                },
                tooltip: {
                    show: true,
                    trigger: 'axis',
                    //formatter: '{b}<br/>{a}: {c}人',
                    axisPointer: {
                        type: 'shadow',
                    }
                },
                grid: [{
                    show: false,
                    left: "2%",
                    top: 60,
                    bottom: 60,
                    containLabel: true,
                    width: '43%',
                }, {
                    show: false,
                    left: '50.5%',
                    top: 80,
                    bottom: 60,
                    width: '14%',
                }, {
                    show: false,
                    right: "2%",
                    top: 60,
                    bottom: 60,
                    containLabel: true,
                    width: '43%',
                },],

                xAxis: [
                    {
                        type: 'value',
                        triggerEvent: true,
                        inverse: true,
                        axisLine: {
                            show: false,
                        },
                        axisTick: {
                            show: false,
                        },
                        position: 'top',
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#B2B2B2',
                                fontSize: 12,
                            },
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#1F2022',
                                width: 1,
                                type: 'solid',
                            },
                        },
                    },
                    {
                        gridIndex: 1,
                        show: false,
                    },
                    {
                        gridIndex: 2,
                        type: 'value',
                        axisLine: {
                            show: false,
                        },
                        axisTick: {
                            show: false,
                        },
                        position: 'top',
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#B2B2B2',
                                fontSize: 12,
                            },
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#1F2022',
                                width: 1,
                                type: 'solid',
                            },
                        },
                    }
                ],
                yAxis: [{
                    type: 'category',
                    inverse: true,
                    position: 'right',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false,
                        margin: 8,
                        textStyle: {
                            color: '#fff',
                            fontSize: 12,
                        },

                    },
                    data: Xdata,
                }, {
                    gridIndex: 1,
                    type: 'category',
                    inverse: true,
                    position: 'left',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#9D9EA0',
                            fontSize: 12,
                        },

                    },
                    data: Xdata.map(function (value) {
                        return {
                            value: value,
                            textStyle: {
                                align: 'center',
                            }
                        }
                    }),
                }, {
                    gridIndex: 2,
                    type: 'category',
                    inverse: true,
                    position: 'left',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false,
                        textStyle: {
                            color: '#9D9EA0',
                            fontSize: 12,
                        },

                    },
                    data: Xdata,
                },],
                series: [],

            },
            options: [],
        };
        for (var i = 0; i < timeLineData.length; i++) {
            // option.baseOption.timeline.data.push(timeLineData[i]);
            option.options.push({
                title: {
                    text: timeLineData[i] + '月份统计',
                },
                series: [
                    {
                        name: fp_key[0],
                        type: 'bar',
                        stack: 'one',
                        barGap: 15,
                        barWidth: 15,
                        label: {
                            normal: {
                                show: true,
                                position: 'inside',
                                textStyle: {
                                    color: '#fff',

                                    fontSize: 12,
                                },
                            },
                            emphasis: {
                                show: true,
                                position: 'inside',
                                offset: [0, 0],
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 14,
                                },
                            },
                        },
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    return fp_coler[0]
                                },
                                opacity: 1,

                            },
                            emphasis: {
                                opacity: 1,
                            },
                        },
                        data: fp_nan[timeLineData[i]],
                    },
                    {
                        name: fp_key[1],
                        type: 'bar',
                        stack: 'one',
                        barGap: 15,
                        barWidth: 15,
                        label: {
                            normal: {
                                show: true,
                                position: 'inside',
                                textStyle: {
                                    color: '#fff',

                                    fontSize: 12,
                                },
                            },
                            emphasis: {
                                show: true,
                                position: 'inside',
                                offset: [0, 0],
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 14,
                                },
                            },
                        },
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    return fp_coler[1]
                                },
                                opacity: 1,

                            },
                            emphasis: {
                                opacity: 1,
                            },
                        },
                        data: fp_nv[timeLineData[i]],
                    },
                    {
                        name: fp_key[2],
                        stack: 'one',
                        type: 'bar',
                        barGap: 15,
                        barWidth: 15,
                        label: {
                            normal: {
                                show: true,
                                position: 'inside',
                            },
                            emphasis: {
                                show: true,
                                position: 'inside',
                                offset: [0, 0],
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 14,
                                },
                            },
                        },
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    return fp_coler[2]
                                },
                                opacity: 1,

                            },
                            emphasis: {
                                opacity: 1,
                            },
                        },
                        data: fp_val[timeLineData[i]],
                    },
                    {
                        name: fp_key[0],
                        stack: 'right',
                        type: 'bar',
                        barGap: 15,
                        barWidth: 15,
                        xAxisIndex: 2,
                        yAxisIndex: 2,
                        label: {
                            normal: {
                                show: true,
                                position: 'inside',
                            },
                            emphasis: {
                                show: true,
                                position: 'inside',
                                offset: [0, 0],
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 14,
                                },
                            },
                        },
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    return fp_coler[0]
                                },
                                opacity: 1,

                            },
                            emphasis: {
                                opacity: 1,
                            },
                        },

                        data: fp_nan[timeLineData[i]],
                    },
                    {
                        name: fp_key[1],
                        stack: 'right',
                        type: 'bar',
                        barGap: 15,
                        barWidth: 15,
                        xAxisIndex: 2,
                        yAxisIndex: 2,
                        label: {
                            normal: {
                                show: true,
                                position: 'inside',
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 12,
                                },
                            },
                            emphasis: {
                                show: true,
                                position: 'inside',
                                offset: [0, 0],
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 14,
                                },
                            },
                        },
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    return fp_coler[1]
                                },
                                opacity: 1,

                            },
                            emphasis: {
                                opacity: 1,
                            },
                        },
                        data: fp_nv[timeLineData[i]],
                    },
                    {
                        name: fp_key[2],
                        stack: 'right',
                        type: 'bar',
                        barGap: 15,
                        barWidth: 15,
                        xAxisIndex: 2,
                        yAxisIndex: 2,
                        label: {
                            normal: {
                                show: true,
                                position: 'inside',
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 12,
                                },
                            },
                            emphasis: {
                                show: true,
                                position: 'inside',
                                offset: [0, 0],
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 14,
                                },
                            },
                        },
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    return fp_coler[2]
                                },
                                opacity: 1,

                            },
                            emphasis: {
                                opacity: 1,
                            },
                        },
                        data: fp_val[timeLineData[i]],
                    },
                ]
            });
        }