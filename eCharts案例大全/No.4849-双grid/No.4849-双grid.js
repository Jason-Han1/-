let yAxisData = [
                "0~5岁",
                "6~10岁",
                "11 ～ 15岁",
                "16 ～ 20 岁",
                "21 ～ 25 岁",
                "26 ～ 30 岁",
                "31 ～ 35 岁",
                "36 ～ 40 岁",
                "41 ～ 45 岁",
                "46 ～ 50 岁",
                "51 ～ 55 岁",
                "56 ～ 60 岁",
                "61 ～ 65 岁",
                "65岁以上"
            ];
            let data1 = [5, 19, 23, 43, 34, 53, 12, 34, 34, 5, 36, 13, 10, 7];
            let data2 = [5, 19, 23, 43, 34, 53, 12, 34, 34, 5, 36, 13, 10, 7];

            option = {
                backgroundColor:"#333",
                tooltip: {
                    show: true,
                    trigger: "axis",
                    axisPointer: {
                        type: "shadow"
                    }
                },
                legend: {
                    left: "5%",
                    top: "2%",
                    textStyle: {
                        color: "#fff"
                    }
                },
                grid: [
                    {
                        show: false,
                        left: "20%",
                        top: "10%",
                        width: "40%",
                        containLabel: true,
                        bottom: "3%"
                    },
                    {
                        show: false,
                        left: "3%",
                        top: "10%",
                        bottom: "3%"
                    },
                    {
                        show: false,
                        left: "60%",
                        top: "10%",
                        bottom: "3%",
                        containLabel: true,
                        width: "40%"
                    }
                ],
                xAxis: [
                    {
                        type: "value",
                        inverse: true,
                        axisLabel: {
                            show: false,
                            color: "#979797",
                            margin: 0
                        },
                        axisLine: {
                            show: true
                        },
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            show: false
                        }
                    },
                    {
                        gridIndex: 1,
                        show: true,
                        axisLabel: {
                            color: "#979797",
                            margin: 0
                        },
                        splitLine: {
                            lineStyle: {
                                color: "#979797",
                                type: "dashed"
                            }
                        }
                    },
                    {
                        gridIndex: 2,
                        type: "value",
                        axisLabel: {
                            show: false,
                            color: "#979797",
                            margin: 0
                        },
                        axisLine: {
                            show: true
                        },
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            show: false
                        }
                    }
                ],
                yAxis: [
                    {
                        type: "category",
                        inverse: false,
                        position: "right",
                        axisLabel: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        data: yAxisData
                    },
                    {
                        type: "category",
                        inverse: false,
                        gridIndex: 1,
                        position: "left",
                        axisLabel: {
                            align: "left",
                            padding: [8, 0, 0, 0],
                            fontSize: 12,
                            fontWeight: 500,
                            color: `#fff`
                        },
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: "#fff"
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        data: yAxisData
                    },
                    {
                        type: "category",
                        inverse: false,
                        gridIndex: 2,
                        position: "left",
                        axisLabel: {
                            show: false
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "#979797"
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        data: yAxisData
                    }
                ],
                series: [
                    {
                        type: "bar",
                        barWidth: "30%",
                        name: "女",
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius: [20, 0, 0, 20], // 圆角（左上、右上、右下、左下）
                                color:'#F99DF9'
                                // color: {
                                //     type: "linear",
                                //     x: 0,
                                //     y: 0,
                                //     x2: 1,
                                //     y2: 0,
                                //     colorStops: [
                                //         {
                                //             offset: 0,
                                //             color: "rgba(216, 255, 168, 0.78)"
                                //         },
                                //         {
                                //             offset: 1,
                                //             color: "rgba(65, 255, 113, 0.78)"
                                //         }
                                //     ],
                                //     globalCoord: false
                                // }
                            }
                        },
                        data: data1
                    },
                    {
                        type: "bar",
                        barWidth: "30%",
                        xAxisIndex: 2,
                        yAxisIndex: 2,
                        name: "男",
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius: [0, 20, 20, 0], // 圆角（左上、右上、右下、左下）
                                color:'#238BF2'
                                // color: {
                                //     type: "linear",
                                //     x: 0,
                                //     y: 0,
                                //     x2: 1,
                                //     y2: 0,
                                //     colorStops: [
                                //         {
                                //             offset: 0,
                                //             color: "rgba(255, 173, 65, 0.78)"
                                //         },
                                //         {
                                //             offset: 1,
                                //             color: "rgba(255, 199, 117, 0.78)"
                                //         }
                                //     ],
                                //     globalCoord: false
                                // }
                            }
                        },
                        data: data2
                    }
                ]
            };