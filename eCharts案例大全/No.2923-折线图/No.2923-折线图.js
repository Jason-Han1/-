                let color = [
                    "#E82541",
                ];
                let xAxisData = ["1.10", "1.11", "1.12", "1.13", "1.14", "1.15", "1.16", "1.17"];
                let yAxisData1 = [100, 138, 150, 173, 180, 150, 180, 230];
                const hexToRgba = (hex, opacity) => {
                    let rgbaColor = "";
                    let reg = /^#[\da-f]{6}$/i;
                    if (reg.test(hex)) {
                        rgbaColor = `rgba(${parseInt("0x" + hex.slice(1, 3))},${parseInt(
                            "0x" + hex.slice(3, 5)
                        )},${parseInt("0x" + hex.slice(5, 7))},${opacity})`;
                    }
                    return rgbaColor;
                }
                var data = [
                    ['1.10', 100],
                    ['1.11', 138],
                    ['1.12', 150],
                    ['1.13', 173],
                    ['1.14', 180],
                    ['1.15', 150],
                    ['1.16', 180],
                    ['1.17', 230],

                ];
                let type = [] //1蓝色拐点，0红色拐点
                let symbolArr = [];
                var dataa = [];
                for (var i = 0; i < data.length; i++) {
                    dataa.push(data[i][1])
                    type.push(data[i][1])
                }
                type.forEach(function (v, i) {
                    symbolArr[i] = {
                        value: dataa[i],
                        symbolSize: v == 230 ? 13 : 0,
                        itemStyle: {
                            normal: {
                                color: v == 230 ? '#E82541' : '#1572E9',
                                shadowBlur: 70,
                                shadowColor: '#333'
                            }
                        }
                    };
                });
                var sum = 0;
                data.push(['', avg])
                var avg = sum / data.length;
                option = {
                    color: color,
                    grid: {
                        top: 50,
                        left: 20,
                        right: 20,
                        bottom: 40,
                    },
                    xAxis: [{
                        type: "category",
                        boundaryGap: false,
                        axisLabel: {
                            formatter: '{value}',
                            textStyle: {
                                color: "rgba(255, 255, 255, 0.6)"
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#D9D9D9"
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        data: xAxisData,
                    }],
                    yAxis: [
                        {
                            type: "value",
                            axisLabel: {
                                show: false,
                                textStyle: {
                                    color: "#666"
                                }
                            },

                            nameTextStyle: {
                                color: "#666",
                                fontSize: 12,
                                lineHeight: 40
                            },
                            // 分割线
                            splitLine: {
                                lineStyle: {
                                    type: "solid",
                                    color: "rgba(29, 34, 54, 1.00)"
                                }
                            },
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            }
                        },
                        {
                            type: 'value',
                            show: false,
                            axisTick: {
                                show: false,
                            },
                            splitLine: {
                                show: false,
                            }
                        }
                    ],
                    series: [
                        {
                            name: "超标数",
                            type: "line",
                            symbolSize: 8,
                            zlevel: 3,
                            label: {
                                normal: {
                                    show: true,
                                    position: "top",
                                    color: '#fff'
                                }
                            },
                            symbol: 'circle',
                            areaStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0,
                                        0,
                                        0,
                                        1,
                                        [{
                                            offset: 0,
                                            color: hexToRgba(color[0], 0.8)
                                        },
                                            {
                                                offset: 1,
                                                color: hexToRgba(color[0], 0.1)
                                            }
                                        ],
                                        false
                                    ),
                                    shadowColor: hexToRgba(color[0], 0.1),
                                    shadowBlur: 10
                                }
                            },
                            data: yAxisData1,
                            animationEasingUpdate: 'linear',
                            animationDurationUpdate: 1500,
                        },
                        {
                            label: {
                                show: false,
                            },
                            type: 'effectScatter',
                            coordinateSystem: 'cartesian2d',
                            data: symbolArr,
                            yAxisIndex: 1,
                            symbolSize: 0,
                            showEffectOn: 'render',
                            rippleEffect: {
                                brushType: 'stroke'
                            },
                            hoverAnimation: true
                        }
                    ],

                };