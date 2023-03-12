    option = {
        backgroundColor: '#fff', //rgba设置透明度0.1
        title: {},
        tooltip: {
            // show: true,
            trigger: 'axis',
            formatter: function(params) {
                let str = params[0].name + '</br>';
                params.forEach(item => {
                    str += item.marker + item.seriesName + ' : ' + item.value + '</br>';
                })
                return str;
            }
        },
        axisPointer: {
            link: {
                xAxisIndex: 'all'
            }
        },
        xAxis: [{
                gridIndex: 0,
                type: 'category',
                data: ['2020-12-12', '2020-12-13', '2020-12-14', '2020-12-15', '2020-12-16', '2020-12-17', '2020-12-18'],
                "axisLine": {
                    lineStyle: {
                        color: 'rgba(151,151,151,0.5)',
                        type: 'dashed'
                    }
                },
                "axisTick": {
                    "show": false
                },
                axisLabel: {
                    margin: 10,
                    color: '#666',
                    textStyle: {
                        fontSize: 14,
                        //fontWeight: 'bold', // 加粗
                    },
                },
            },
            {
                gridIndex: 1,
                type: 'category',
                data: ['2020-12-12', '2020-12-13', '2020-12-14', '2020-12-15', '2020-12-16', '2020-12-17', '2020-12-18'],
                "axisLine": {
                    lineStyle: {
                        color: 'rgba(151,151,151,0.5)',
                        type: 'dashed'
                    }
                },
                "axisTick": {
                    "show": false
                },
                axisLabel: {
                    margin: 10,
                    color: '#666',
                    textStyle: {
                        fontSize: 14,
                        //fontWeight: 'bold', // 加粗
                    },
                },
            },
            {
                gridIndex: 2,
                type: 'category',
                data: ['2020-12-12', '2020-12-13', '2020-12-14', '2020-12-15', '2020-12-16', '2020-12-17', '2020-12-18'],
                "axisLine": {
                    lineStyle: {
                        color: 'rgba(151,151,151,0.5)',
                        type: 'dashed'
                    }
                },
                "axisTick": {
                    "show": false
                },
                axisLabel: {
                    margin: 10,
                    color: '#666',
                    textStyle: {
                        fontSize: 14,
                    },
                },
            }
        ],
        yAxis: [{
                name: '',
                type: 'value',
                gridIndex: 0,
                nameTextStyle: {
                    padding: [0, 0, 0, 0] // 文字自交多的时候设置距离容器左侧的距离
                },
                "axisLine": {
                    lineStyle: {
                        color: 'rgba(151,151,151,0.5)',
                        type: 'dashed'
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(151,151,151,0.5)',
                        type: 'dashed'
                    }
                },
                "axisTick": {
                    "show": false
                },
                axisLabel: {
                    margin: 15,
                    color: '#666',
                    textStyle: {
                        fontSize: 14,
                    },
                }
            },
            {
                name: '',
                type: 'value',
                gridIndex: 1,
                nameTextStyle: {
                    padding: [0, 0, 0, 0]
                },
                "axisLine": {
                    lineStyle: {
                        color: 'rgba(151,151,151,0.5)',
                        type: 'dashed'
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(151,151,151,0.5)',
                        type: 'dashed'
                    }
                },
                "axisTick": {
                    "show": false
                },
                axisLabel: {
                    margin: 15,
                    color: '#666',
                    textStyle: {
                        fontSize: 14,
                    },
                }
            },
            {
                name: '',
                type: 'value',
                gridIndex: 2,
                nameTextStyle: {
                    padding: [0, 0, 0, 0]
                },
                "axisLine": {
                    lineStyle: {
                        color: 'rgba(151,151,151,0.5)',
                        type: 'dashed'
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(151,151,151,0.5)',
                        type: 'dashed'
                    }
                },
                "axisTick": {
                    "show": false
                },
                axisLabel: {
                    margin: 15,
                    color: '#666',
                    textStyle: {
                        fontSize: 14,
                    },
                }
            }
        ],
        grid: [{
                left: '8%',
                right: '8%',
                top: '10%',
                height: '20%'
            },
            {
                left: '8%',
                right: '8%',
                top: '40%',
                height: '20%'
            },
            {
                left: '8%',
                right: '8%',
                top: '70%',
                height: '20%'
            }
        ],
        legend: {
            icon: 'circle',
            top: '5%',
            left: '20%',
            itemWidth: 6,
            itemGap: 20,
            textStyle: {
                color: '#556677'
            }
        },
        series: [{
                name: '销量',
                data: [150, 120, 170, 140, 500, 160, 110],
                type: 'line',
                smooth: true,
                xAxisIndex: 0, // 指定x轴
                yAxisIndex: 0, // 指定y轴
                lineStyle: {
                    normal: {
                        color: '#4194fc'
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#4194fc',
                        borderColor: '#4194fc'
                    }
                }
            },
            {
                name: '订单量',
                data: [52, 72, 81, 64, 75, 66, 89],
                type: 'line',
                smooth: true,
                xAxisIndex: 0, // 指定x轴
                yAxisIndex: 0, // 指定y轴
                lineStyle: {
                    normal: {
                        color: '#3bbc86'
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#3bbc86',
                        borderColor: '#3bbc86'
                    }
                }
            },
            {
                name: '毛利润($)',
                data: [99.00, 168.00, 88.01, 154.00, 210.00, 68.00, 165.01],
                type: 'line',
                smooth: true,
                xAxisIndex: 1, // 指定x轴
                yAxisIndex: 1, // 指定y轴
                lineStyle: {
                    normal: {
                        color: '#ffb25f'
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ffb25f',
                        borderColor: '#ffb25f'
                    }
                }
            },
            {
                name: '毛利率(%)',
                data: [40.00, 63.00, 25.01, 58.00, 65.00, 68.00, 65.01],
                type: 'line',
                smooth: true,
                xAxisIndex: 2, // 指定x轴
                yAxisIndex: 2, // 指定y轴
                lineStyle: {
                    normal: {
                        color: '#929fff'
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#929fff',
                        borderColor: '#929fff'
                    }
                }
            }
        ]
    };