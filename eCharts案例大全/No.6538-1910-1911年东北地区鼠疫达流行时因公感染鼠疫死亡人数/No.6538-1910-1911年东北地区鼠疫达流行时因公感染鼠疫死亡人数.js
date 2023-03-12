option = {
    backgroundColor: "#363636",
    color: ['#ffd285', '#ff733f'],

    title: [{
        text: '1910-1911年东北地区鼠疫达流行时因公感染鼠疫死亡人数',
        subtext: '资料来源：Wu Lien-Teh: Plague fighter, the autobiography of a modern Chinese physician, Cambridge, England, 1959, p.37.',
        left: '2%',
        top: '3%',
        textStyle: {
            color: '#fff',
            fontSize: 22
        }
    }, {
        text: '各工种的死亡率(%)',
        left: '77%',
        top: '20%',
        textAlign: 'center',
        textStyle: {
            color: '#fff',
            fontSize: 22
        }
    }],
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        left: '25%',
        bottom: '1%',
        textStyle: {
            color: '#fff',
            fontSize: 15,
            fontWeight: 'bold'
        },
        data: ['人数', '死于鼠疫人数']
    },
    grid: {
        left: '2.5%',
        right: '40%',
        top: '16%',
        bottom: '8%',
        containLabel: true
    },
    toolbox: {
        "show": false,
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        "axisLine": {
            lineStyle: {
                color: '#fff'
            }
        },
        "axisTick": {
            "show": false
        },
        axisLabel: {
            textStyle: {
                color: '#fff'
            },
            interval: 0,
            rotate: -30,
            margin: 15
        },
        boundaryGap: false,
        data: ['正式医师', '医学生', '当地开业医生', '警方检查人员', '卫生警察', '警察', '骑马的警察', '司炉工', '临时工人', '厨工', '救护人员', '士兵']
    },
    yAxis: {
        "axisLine": {
            symbol: ['none', 'arrow'],
            lineStyle: {
                type: 'dashed',
                color: '#fff'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: '#6E7783'
            }
        },
        "axisTick": {
            "show": false
        },
        axisLabel: {
            textStyle: {
                color: '#fff'
            }
        },
        type: 'value'
    },
    series: [{
            name: '人数',
            smooth: true,
            type: 'line',
            symbolSize: 8,
            symbol: 'circle',
            data: [20, 29, 9, 31, 206, 688, 80, 20, 550, 60, 150, 1100]
        }, {
            name: '死于鼠疫人数',
            smooth: true,
            type: 'line',
            symbolSize: 8,
            symbol: 'circle',
            data: [1, 1, 4, 2, 11, 30, 5, 5, 102, 4, 69, 63]
        },
        {
            type: 'pie',
            center: ['78%', '60%'],
            radius: ['38%', '48%'],
            label: {
                normal: {
                    show: true,
                    // position: 'center',
                    formatter: '{text|{b}}',
                    rich: {
                        text: {
                            color: "#fff",
                            fontSize: 18,
                            align: 'center',
                            verticalAlign: 'middle',
                            padding: 8
                        },
                    },
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: 24,
                    }

                }
            },
            labelLine: {
                show: true,
                smooth: true,
                length:30,
                //length2:10,
                lineStyle:{
                    type:'dashed'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{b}：{c}%"
            },
            data: [{
                name: '当地开业医生',
                value: 44.4,
                itemStyle: {
                    color: '#c7e9c0',
                    borderColor: "#363636",
                    borderWidth: 5
                }

            }, {
                name: '正式医师',
                value: 5,
                itemStyle: {
                    color: '#74c476',
                    borderColor: "#363636",
                    borderWidth: 5
                }
            }, {
                name: '医学生',
                value: 3.5,
                itemStyle: {
                    color: '#a1d99b',
                    borderColor: "#363636",
                    borderWidth: 5
                }
            }, {
                name: '警方检查人员',
                value: 6.5,
                itemStyle: {
                    color: '#6baed6',
                    borderColor: "#363636",
                    borderWidth: 5
                }
            }, {
                name: '卫生警察',
                value: 5.3,
                itemStyle: {
                    color: '#9ecae1',
                    borderColor: "#363636",
                    borderWidth: 5
                }
            }, {
                name: '警察',
                value: 4.4,
                itemStyle: {
                    color: '#c6dbef',
                    borderColor: "#363636",
                    borderWidth: 5
                }
            }, {
                name: '骑马的警察',
                value: 6.2,
                itemStyle: {
                    color: '#deebf7',
                    borderColor: "#363636",
                    borderWidth: 5
                }
            }, {
                name: '司炉工',
                value: 25,
                itemStyle: {
                    color: '#fe9929',
                    borderColor: "#363636",
                    borderWidth: 5
                }
            }, {
                name: '临时工人',
                value: 18.5,
                itemStyle: {
                    color: '#fec44f',
                    borderColor: "#363636",
                    borderWidth: 5
                }
            }, {
                name: '厨工',
                value: 6.7,
                itemStyle: {
                    color: '#fee391',
                    borderColor: "#363636",
                    borderWidth: 5
                }
            }, {
                name: '救护人员',
                value: 46,
                itemStyle: {
                    color: '#fff7bc',
                    borderColor: "#363636",
                    borderWidth: 5
                }
            }, {
                name: '士兵',
                value: 5.7,
                itemStyle: {
                    color: '#ffffe5',
                    borderColor: "#363636",
                    borderWidth: 5
                }
            }]
        }
    ]
}