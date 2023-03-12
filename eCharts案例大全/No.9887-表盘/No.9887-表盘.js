  let total=100     //超标标准（不能超过）
                        let count=60   //实时数据
                        option = {
                            backgroundColor: "#082751",
                            title: {
                                text: "{a|" + count + "}{b|" + "db" + "}",
                                x: 'center',
                                y: 'center',
                                textStyle: {
                                    rich: {

                                        a: {
                                            color: "red",
                                            fontSize: 40,
                                            fontWeight: 'normal',
                                            fontFamily: "led"
                                        },
                                        b: {
                                            color: '#fff',
                                            padding: [-20, 0, 0, 8],
                                            fontSize: 15

                                        }
                                    }
                                }
                            },


                            tooltip: {
                                trigger: 'item',
                                formatter: function (params) {
                                    //	debugger
                                    if (params.name == "实时数据") {
                                        var out = `${params.name}:${params.percent}%`
                                        return out
                                    } else {
                                        var ou1 = `${params.name}:${params.data.total / 2}`
                                        return ou1
                                    }
                                }
                            },
                            calculable: true,
                            series: [
                                {
                                    name: '噪音扬尘情况',
                                    type: 'pie',
                                    labelLine: {
                                        show: false
                                    },
                                    radius: [60, 90],
                                    center: ['50%', '50%'],
                                    data: [{
                                        name: '实时数据',
                                        value: count, // 右
                                        label: {
                                            show: false
                                        },
                                        itemStyle: {
                                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                                offset: 0,
                                                color: "#FF575D"
                                            }, {
                                                offset: 1,

                                                color: "#D66AFF"
                                            }])
                                        }
                                    },
                                    {
                                        total: total * 2,
                                        name: '超标标准',
                                        value: total * 2 - count, // 左
                                        itemStyle: {
                                            color: 'transparent'
                                        }
                                    }
                                    ]
                                },
                                {
                                    name: '数据比例',
                                    type: 'pie',
                                    labelLine: {
                                        show: false
                                    },
                                    label: {
                                        show: false
                                    },
                                    radius: [65, 80],
                                    center: ['50%', '50%'],
                                    data: [{
                                        value: count, // 右
                                        name: '实时数据',
                                        itemStyle: {
                                            color: 'transparent'
                                        }
                                    },
                                    {
                                        name: '超标标准',
                                        total: total * 2,
                                        value: total * 2 - count, // 左
                                        itemStyle: {
                                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                                offset: 0,
                                                color: '#1248DB'
                                            }, {
                                                offset: 1,
                                                color: '#0982DC'
                                            }])
                                        }
                                    }
                                    ]
                                }
                            ]
                        }