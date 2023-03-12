var myData = ['情感词典', '启发式规则', '神经网络模型', '分布式语义', '概率模型', '领域相似性', '事件触发词', '迁移学习', '联合学习', '对偶学习', '句子编码器', '关键词分析', '强化学习', '远程监督学习', '贝叶斯方法', '半监督学习'];
                var databeast = {
                    2015: [389, 259, 262, 324, 232, 176, 196, 214, 133, 370, 268, 360, 185, 392, 392, 153],
                    2016: [111, 315, 139, 375, 204, 352, 163, 258, 385, 209, 209, 243, 204, 352, 163, 258],
                    2017: [227, 210, 328, 292, 241, 110, 130, 185, 392, 392, 153, 187, 150, 200, 250, 300],
                    2018: [100, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250],
                    2019: [280, 128, 255, 254, 313, 143, 360, 343, 338, 163, 333, 317, 263, 302, 372, 163],
                    /*6: [121, 388, 233, 309, 133, 308, 297, 283, 349, 273, 229, 238, 224, 291, 185, 203],
                    7: [200, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250],
                    8: [380, 129, 173, 101, 310, 393, 386, 296, 366, 268, 208, 149, 356, 239, 208, 330],
                    9: [363, 396, 388, 108, 325, 120, 180, 292, 200, 309, 223, 236, 209, 271, 215, 216],
                    10: [300, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250],
                    11: [100, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250],
                    12: [280, 128, 255, 254, 313, 143, 360, 343, 338, 163, 333, 317, 263, 302, 372, 163],*/

                };
                var databeauty = {
                    2015: [121, 388, 233, 309, 133, 308, 297, 283, 349, 273, 229, 238, 224, 291, 185, 203],
                    2016: [200, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250],
                    2017: [380, 129, 173, 101, 310, 393, 386, 296, 366, 268, 208, 149, 356, 239, 208, 330],
                    2018: [363, 396, 388, 108, 325, 120, 180, 292, 200, 309, 223, 236, 209, 271, 215, 216],
                    2019: [300, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250],
                    /*6: [100, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250],
                    7: [280, 128, 255, 254, 313, 143, 360, 343, 338, 163, 333, 317, 263, 302, 372, 163],
                    8: [389, 259, 262, 324, 232, 176, 196, 214, 133, 370, 268, 360, 185, 392, 392, 153],
                    9: [111, 315, 139, 375, 204, 352, 163, 258, 385, 209, 209, 243, 204, 352, 163, 258],
                    10: [227, 210, 328, 292, 241, 110, 130, 185, 392, 392, 153, 187, 150, 200, 250, 300],
                    11: [100, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250],
                    12: [280, 128, 255, 254, 313, 143, 360, 343, 338, 163, 333, 317, 263, 302, 372, 163],*/

                };
                var timeLineData = [2015, 2016, 2017, 2018, 2019];

                var option = {
                    baseOption: {
                        backgroundColor: '#fff',
                        timeline: {
                            show: true,
                            axisType: 'category',
                            tooltip: {
                                show: true,
                                formatter: function(params) {
                                    console.log(params);
                                    return params.name + '月份数据统计';
                                }
                            },
                            autoPlay: true,
                            currentIndex: 6,
                            playInterval: 1000,
                            label: {
                                normal: {
                                    show: true,
                                    interval: 'auto',
                                    formatter: '{value}月',
                                },
                            },
                            data: [],
                        },
                        title: {
                            text:'党员关注热点与课程热点对比分析',
                            left:'15px',
                            top:'20px',
                            textStyle: {
                                fontSize: 16,
                            },
                        },
                        legend: {
                            data: ['党员话题', '中心课题'],
                            top: 20,
                            right: '10%',
                        },
                        tooltip: {
                            show: true,
                            trigger: 'axis',
                            formatter: '{b}<br/>{a}: {c}人',
                            axisPointer: {
                                type: 'shadow',
                            }
                        },

                        /*toolbox:{
                            right:20,
                            feature:{
                                saveAsImage: {},
                                restore: {},
                                dataView: {},
                                dataZoom: {},
                                magicType: {
                                    type:['line','bar']
                                },
                                // brush: {},
                            }
                        },*/

                        grid: [{
                            show: false,
                            left: '1%',
                            top: 60,
                            bottom: 60,
                            containLabel: true,
                            width: '45%',
                        }, {
                            show: false,
                            left: '50%',
                            top: 80,
                            bottom: 60,
                            width: '0%',
                        }, {
                            show: false,
                            right: '1%',
                            top: 60,
                            bottom: 60,
                            containLabel: true,
                            width: '46%',
                        }, ],

                        xAxis: [
                            {
                                type: 'value',
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
                            }, {
                                gridIndex: 1,
                                show: false,
                            }, {
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
                            }, ],
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
                                    color: '#9D9EA0',
                                    fontSize: 12,
                                },

                            },
                            data: myData,
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
                                    color: '#666',
                                    fontSize: 12,
                                },

                            },
                            data: myData.map(function(value) {
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
                            data: myData,
                        }, ],
                        series: [],

                    },

                    options: [],


                };

                for (var i = 0; i < timeLineData.length; i++) {
                    option.baseOption.timeline.data.push(timeLineData[i]);
                    option.options.push({
                        title: {
                            text:  timeLineData[i] + '年党员关注热点与课程热点对比分析',
                        },
                        series: [{
                            name: '党员话题',
                            type: 'bar',
                            barGap: 20,
                            barWidth: 20,
                            label: {
                                normal: {
                                    show: false,
                                },
                                emphasis: {
                                    show: true,
                                    position: 'left',
                                    offset: [0, 0],
                                    textStyle: {
                                        color: '#fff',
                                        fontSize: 14,
                                    },
                                },
                            },
                            itemStyle: {
                                normal: {
                                    color: '#659F83',
                                },
                                emphasis: {
                                    color: '#08C7AE',
                                },
                            },
                            data: databeast[timeLineData[i]],
                        },


                            {
                                name: '中心课题',
                                type: 'bar',
                                barGap: 20,
                                barWidth: 20,
                                xAxisIndex: 2,
                                yAxisIndex: 2,
                                label: {
                                    normal: {
                                        show: false,
                                    },
                                    emphasis: {
                                        show: true,
                                        position: 'right',
                                        offset: [0, 0],
                                        textStyle: {
                                            color: '#fff',
                                            fontSize: 14,
                                        },
                                    },
                                },
                                itemStyle: {
                                    normal: {
                                        color: '#F68989',
                                    },
                                    emphasis: {
                                        color: '#F94646',
                                    },
                                },
                                data: databeauty[timeLineData[i]],
                            }
                        ]
                    });
                }