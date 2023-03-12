 let labelData = [];
        let labelData1 = [];
        for (let i = 0; i < 80; ++i) {
            labelData.push({
                value: 1,
                name: i,
                itemStyle: {
                    normal: {
                        color: 'rgba(0,209,228,0)',
                    }
                }
            });
        }
        for (let i = 0; i < labelData.length; ++i) {
            if (labelData[i].name < 15) {
                labelData[i].itemStyle = {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 1, 0, 0,
                            [{
                                offset: 0,
                                color: '#6dfbff'
                            },
                                {
                                    offset: 1,
                                    color: '#02aeff'
                                }
                            ]
                        )
                    },

                }
            }
        }
        for (let i = 0; i < 80; ++i) {
            labelData1.push({
                value: 1,
                name: i,
                itemStyle: {
                    normal: {
                        color: 'rgba(0,209,228,0)',
                    }
                }
            });
        }
        for (let i = 0; i < labelData1.length; ++i) {
            if (labelData1[i].name < 80) {
                labelData1[i].itemStyle = {
                    normal: {
                        color: '#464451',
                    },

                }
            }
        }

        function Pie() {
            let dataArr = [];
            for (var i = 0; i < 100; i++) {
                if (i % 10 === 0) {
                    dataArr.push({
                        name: (i + 1).toString(),
                        value: 30,
                        itemStyle: {
                            normal: {
                                color: "rgba(0,255,255,1)",
                                borderWidth: 0,
                                borderColor: "rgba(0,0,0,0)",
                            }
                        }
                    })
                } else {
                    dataArr.push({
                        name: (i + 1).toString(),
                        value: 100,
                        itemStyle: {
                            normal: {
                                color: "rgba(0,0,0,0)",
                                borderWidth: 0,
                                borderColor: "rgba(0,0,0,0)"
                            }
                        }
                    })
                }
            }
            return dataArr
        }

        function Pie1() {
            let dataArr = [];
            for (var i = 0; i < 100; i++) {
                if (i % 5 === 0) {
                    dataArr.push({
                        name: (i + 1).toString(),
                        value: 20,
                        itemStyle: {
                            normal: {
                                color: "rgba(0,255,255,1)",
                                borderWidth: 0,
                                borderColor: "rgba(0,0,0,0)"
                            }
                        }
                    })
                } else {
                    dataArr.push({
                        name: (i + 1).toString(),
                        value: 100,
                        itemStyle: {
                            normal: {
                                color: "rgba(0,0,0,0)",
                                borderWidth: 0,
                                borderColor: "rgba(0,0,0,0)"
                            }
                        }
                    })
                }
            }
            return dataArr
        }

        function Pie2() {
            let dataArr = [];
            for (var i = 0; i < 100; i++) {
                if (i % 5 === 0) {
                    dataArr.push({
                        name: (i + 1).toString(),
                        value: 20,
                        itemStyle: {
                            normal: {
                                color: "rgba(0,255,255,.3)",
                                borderWidth: 0,
                                borderColor: "rgba(0,0,0,0)"
                            }
                        }
                    })
                } else {
                    dataArr.push({
                        name: (i + 1).toString(),
                        value: 100,
                        itemStyle: {
                            normal: {
                                color: "rgba(0,0,0,0)",
                                borderWidth: 0,
                                borderColor: "rgba(0,0,0,0)"
                            }
                        }
                    })
                }
            }
            return dataArr
        }

     
option ={
            backgroundColor: '#1f1e26',
            title: [
                {
                text: '累计发电天数',
                x: '49%',
                y: '45%',
                textAlign: 'center',
                textStyle: {
                    fontSize: 18,
                    fontWeight: 'normal',
                    color: '#e8f7ff',
                },
            },{
                text: '448',
                x: '49%',
                y: '50%',
                textAlign: 'center',
                textStyle: {
                    fontSize: 24,
                    fontWeight: 800,
                    color: '#3cd1ff',
                },
            }],
            polar: {
                radius: ['40%', '35%'],
                center: ['50%', '50%'],
            },
            angleAxis: {
                max: 100,
                show: false,
                startAngle: 0,
            },
            radiusAxis: {
                type: 'category',
                show: true,
                axisLabel: {
                    show: false,
                },
                axisLine: {
                    show: false,

                },
                axisTick: {
                    show: false
                },
            },
            series: [
                 //最里圈
                {
                    type: 'pie',
                    radius: ['31%', '29%'],
                    center: ['50%', '50%'],
                    data: [{
                        hoverOffset: 1,
                        value: 100,
                        name: '',
                        itemStyle: {
                            color: '#2f748b',
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            normal: {
                                smooth: true,
                                lineStyle: {
                                    width: 0
                                }
                            }
                        },
                        hoverAnimation: false,
                    }]
                },
                //里第二圈
                {
                name: '',
                type: 'bar',
                roundCap: true, //圆角
                barWidth: 60,
                showBackground: true,
                backgroundStyle: {
                    color: '#3d4767',
                },
                data: [75],
                coordinateSystem: 'polar',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                            offset: 0,
                            color: '#0ff'
                        }, {
                            offset: 1,
                            color: '#02aeff'
                        }]),
                    }
                }
            },
            // 齿轮
             {
            name: "大环",
            type: 'gauge',
            splitNumber: 100,
            radius: '50%',
           center: ['50%', '50%'],
            startAngle: 90,
            endAngle: -269.9999,
            axisLine: {
                show: false,
                lineStyle: {
                    color: [[0.3, '#26a7d4'],[1, '#23395a']]
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 22,
                lineStyle: {
                    color: 'auto',
                    width: 2.5
                }
            },
            axisLabel: {
                show: false
            },
            detail: {
                show: false
            }
        },
               //外圈装饰
                {
                    type: 'pie',
                    zlevel: 0,
                    silent: true,
                    radius: ['60%', '58.5%'],
                    center: ['50%', '50%'],
                    z: 1,
                    label: {
                        normal: {
                            show: false
                        },
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: Pie()
                },
                {
                    type: 'pie',
                    zlevel: 0,
                    silent: true,
                    startAngle: -150,
                    radius: ['58.5%', '57%'],
                    center: ['50%', '50%'],
                    z: 1,
                    label: {
                        normal: {
                            show: false
                        },
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: Pie3()
                },
                {
                    type: 'pie',
                    zlevel: 0,
                    silent: true,
                    startAngle: -140,
                    radius: ['60%', '58.5%'],
                    center: ['50%', '50%'],
                    z: 1,
                    label: {
                        normal: {
                            show: false
                        },
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: Pie()
                },
                {
                    type: 'pie',
                    zlevel: 0,
                    silent: true,
                    radius: ['58%', '56.5%'],
                   center: ['50%', '50%'],
                    z: 1,
                    label: {
                        normal: {
                            show: false
                        },
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: Pie1()
                },
                {
                    type: 'pie',
                    zlevel: 0,
                    silent: true,
                    startAngle: -140,
                    radius: ['58%', '56.5%'],
                    center: ['50%', '50%'],
                    z: 1,
                    label: {
                        normal: {
                            show: false
                        },
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: Pie2()
                },
                {
                    type: 'pie',
                    zlevel: 0,
                    silent: true,
                    startAngle: -147.5,
                    radius: ['58%', '56.5%'],
                   center: ['50%', '50%'],
                    z: 1,
                    label: {
                        normal: {
                            show: false
                        },
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: Pie2()
                },
            ]
        };

console.log(option)