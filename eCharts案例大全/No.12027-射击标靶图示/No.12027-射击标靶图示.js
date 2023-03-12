options = [{
        title: {
            text: '射击标靶图示'
        },
        color: ['#e47c74'],
        legend: [{
            data: ['瞄准'],
            left: '45%',
            top: '10%',
            polarIndex: 0

        }, {
            data: ['靶数'],
            right: '5%',
            top: '10%',
            polarIndex: 1

        }],
        polar: [{
            center: ['30%', '52%']
        }, {
            center: ['75%', '52%']
        }],
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                return params.value[0].toFixed(1) + ' , ' + Math.ceil(params.value[1] / 30) + '点钟方向';
            },
            axisPointer: {
                //type: 'cross',
            },
        },
        angleAxis: [{
            polarIndex: 0,
            type: 'value',
            name: '123',
            min: 1,
            max: 13,
            //type: 'category',
            //data: hours,
            startAngle: 60,

            //inverse:true,
            splitLine: {
                lineStyle: {
                    color: ['#666'],
                },
            },
            axisLine: {
                lineStyle: {
                    //color:['#fff'],
                },
            }
        }, {
            polarIndex: 1,
            type: 'value',
            name: '123',
            min: 1,
            max: 13,
            //type: 'category',
            //data: hours,
            startAngle: 60,

            //inverse:true,
            splitLine: {
                lineStyle: {
                    color: ['#666'],
                },
            },
            axisLine: {
                lineStyle: {
                    //color:['#fff'],
                },
            }
        }],
        radiusAxis: [{
                polarIndex: 0,
                inverse: true,
                name: '瞄准',
                nameLocation: 'start',
                nameRotate: 0,
                nameTextStyle: {
                    padding: [10, 10, 50, -40],
                    rotate: 90,

                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        // 使用深浅的间隔色
                        color: ['#ffffff'],
                        width: 2,
                    }
                },
                splitArea: {
                    show: true,
                    //interval:2,
                    areaStyle: {
                        color: ['rgba(26,48,35,1.0)', 'rgba(26,48,35,0.9)'],
                    },
                    //['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)'],
                    //shadowColor: 'rgba(0, 0, 0, 0.5)',
                    //shadowBlur: 10
                },
                max: 11,
                min: 6,
                axisLabel: {
                    padding: [-0, 15, -45, 0],
                    rotate: 0,
                    color: '#fff',
                    // 使用字符串模板，模板变量为刻度默认标签 {value}
                    //formatter: '{value}环',
                    // 使用函数模板，函数参数分别为刻度数值（类目），刻度的索引
                    //formatter: function (params) {
                    //return params.value[0]+',';
                    //},
                    // formatter: function (value, index) {
                    //     // 最后一个刻度不显示
                    //     if (index === 5) {
                    //         value='';
                    //     }
                    //     return value;
                    // }
                    //show:false
                },
                axisLine: {
                    lineStyle: {
                        color: '#666',
                    },
                },
            },
            {
                polarIndex: 1,
                inverse: true,
                name: '靶数',
                nameLocation: 'start',
                nameRotate: 0,
                nameTextStyle: {
                    padding: [10, 10, 50, -40],
                    rotate: 90,

                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        // 使用深浅的间隔色
                        color: ['#ffffff'],
                        width: 2,
                    }
                },
                splitArea: {
                    show: true,
                    //interval:2,
                    areaStyle: {
                        color: ['rgba(26,48,35,1.0)', 'rgba(26,48,35,0.9)'],
                    },
                    //['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)'],
                    //shadowColor: 'rgba(0, 0, 0, 0.5)',
                    //shadowBlur: 10
                },
                max: 11,
                min: 6,
                axisLabel: {
                    padding: [-0, 15, -45, 0],
                    rotate: 0,
                    color: '#fff',
                    // 使用字符串模板，模板变量为刻度默认标签 {value}
                    //formatter: '{value}环',
                    // 使用函数模板，函数参数分别为刻度数值（类目），刻度的索引
                    //formatter: function (params) {
                    //return params.value[0]+',';
                    //},
                    formatter: function(value, index) {
                        // 最后一个刻度不显示
                        if (index === 5) {
                            value = '';
                        }
                        return value;
                    }
                    //show:false
                },
                axisLine: {
                    lineStyle: {
                        color: '#666',
                    },
                },
            }
        ],
        series: [{
                polarIndex: 0,
                smooth: true,
                coordinateSystem: 'polar',
                name: '瞄准',
                type: 'line',
                showSymbol: false,
                data: [
                    [9.064, 101.188],
                    [9.055, 96.874],
                    [8.953, 92.631],
                    [9.006, 89.795],
                    [8.903, 90.355],
                    [8.863, 93.118],
                    [8.830, 96.662],
                    [8.807, 96.824],
                    [8.762, 98.093],
                    [8.793, 95.309],
                    [8.763, 89.542],
                    [10.708, 72.700],
                    [8.682, 78.173],
                    [8.513, 71.802],
                    [8.459, 69.701],
                    [8.255, 69.449],
                    [8.227, 70.200],
                    [8.084, 72.005],
                    [8.033, 73.163],
                    [7.937, 74.296],
                    [7.924, 72.919],
                    [10.597, 83.333],
                    [7.731, 72.247],
                    [7.705, 70.807],
                    [7.557, 68.828],
                    [7.482, 64.072],
                    [7.532, 64.112],
                    [7.501, 64.536],
                    [7.637, 67.776],
                    [7.713, 71.657],
                    [7.819, 72.660],
                    [7.900, 76.109],
                    [8.018, 79.820],
                    [7.924, 81.002],
                    [7.909, 81.853],
                    [8.249, 70.986],
                    [8.015, 78.088],
                    [9.093, 110.414],
                    [9.252, 87.242],
                    [8.599, 69.586],
                    [8.697, 68.479],
                    [8.547, 69.647],
                    [8.699, 69.316],
                    [8.831, 68.901],
                    [8.896, 68.613],
                    [8.850, 70.919],
                    [8.847, 74.544],
                    [8.986, 76.795]
                ]
            },
            {
                polarIndex: 1,
                coordinateSystem: 'polar',
                name: '靶数',
                type: 'scatter',
                showSymbol: false,
                data: [
                    [9.064, 101.188],
                    [9.055, 96.874],
                    [8.953, 92.631],
                    [9.006, 89.795],
                    [8.903, 90.355],
                    [8.863, 93.118],
                    [8.830, 96.662],
                    [8.807, 96.824],
                    [8.762, 98.093],
                    [8.793, 95.309],
                    [8.763, 89.542],
                    [10.708, 72.700],
                    [8.682, 78.173],
                    [8.513, 71.802],
                    [8.459, 69.701],
                    [8.255, 69.449],
                    [8.227, 70.200],
                    [8.084, 72.005],
                    [8.033, 73.163],
                    [7.937, 74.296],
                    [7.924, 72.919],
                    [10.597, 83.333],
                    [7.731, 72.247],
                    [7.705, 70.807],
                    [7.557, 68.828],
                    [7.482, 64.072],
                    [7.532, 64.112],
                    [7.501, 64.536],
                    [7.637, 67.776],
                    [7.713, 71.657],
                    [7.819, 72.660],
                    [7.900, 76.109],
                    [8.018, 79.820],
                    [7.924, 81.002],
                    [7.909, 81.853],
                    [8.249, 70.986],
                    [8.015, 78.088],
                    [9.093, 110.414],
                    [9.252, 87.242],
                    [8.599, 69.586],
                    [8.697, 68.479],
                    [8.547, 69.647],
                    [8.699, 69.316],
                    [8.831, 68.901],
                    [8.896, 68.613],
                    [8.850, 70.919],
                    [8.847, 74.544],
                    [8.986, 76.795]
                ]
            }
        ],
        animationDuration: 2000
    },
    {
        backgroundColor: 'rgba(255, 255, 255, 0.81)',
        title: {
            //text: '检查企业信息分析'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        toolbox: {
            feature: {
                dataView: {
                    show: true,
                    readOnly: false
                },
                //magicType: {show: true, type: ['stack', 'tiled']},
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        legend: {
            //data: ['检查企业数', '完成整改企业数', '违法违规企业数']
        },

        grid: [{
                x: '3%',
                y: '4%',
                width: '95%',
                height: '65%'
                //containLabel: true
            },
            {
                x: '3%',
                y: '75%',
                width: '95%',
                height: '15%'
            }
        ],

        xAxis: [{
                // type: 'category',
                gridIndex: 0,
                show: false,
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
            },
            {
                gridIndex: 1,
                show: true,
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']

            }
        ],
        yAxis: [{
                type: 'value',
                //name: '投诉举报数',
                gridIndex: 0,
                axisLabel: {
                    formatter: '{value}'
                }
            },
            {
                gridIndex: 1,
                max: 1,
                splitLine: {
                    show: true
                }
            }
        ],
        series: [{
                name: '检查企业数',
                type: 'line',
                itemStyle: {
                    normal: {
                        color: '#01949B'
                    },
                },
                xAxisIndex: 0,
                yAxisIndex: 0,

                data: [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4]
            }, {
                name: '完成整改企业数',
                type: 'line',
                itemStyle: {
                    normal: {
                        color: '#EBA954'
                    },
                },
                xAxisIndex: 0,
                yAxisIndex: 0,

                data: [2.2, 2.2, 2.1, 2.1, 2.1, 2.1, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 2.0, 2.0, 2.0, 2.0, 2.1, 2.1, 2.1, 2.1, 2.1, 2.1, 2.1, 2.1, 2.1, 2.1, 2.1, 2.1, 2.1, 2.1, 2.1, 2.1, 2.1, 2.1, 2.0, 2.0, 2.0, 2.0, 2.0, 2.1]
            }, {
                name: '违法违规企业数',
                type: 'line',
                itemStyle: {
                    normal: {
                        color: '#C23531'
                    },
                },
                xAxisIndex: 0,
                yAxisIndex: 0,
                data: [4.4, 4.4, 4.4, 4.4, 4.4, 4.4, 4.4, 4.4, 4.4, 4.4, 4.4, 4.4, 4.4, 4.4, 4.4, 4.4, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.2, 4.2, 4.2, 4.2, 4.2, 4.2, 4.2, 4.2, 4.2, 4.2, 4.2, 4.2, 4.2, 4.2, 4.1, 4.1, 4.1, 4.1, 4.1, 4.1, 4.1, 4.1, 4.1, 4.1, 4.1, 4.1, 4.1, 4.1]
            },
            {
                name: '违法违规企业数',
                type: 'line',
                itemStyle: {
                    normal: {
                        color: '#C23531'
                    },
                },
                xAxisIndex: 0,
                yAxisIndex: 0,
                data: [1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1]
            },
            {
                name: '激发',
                type: 'line',
                stack: '总量',
                showSymbol: false,
                data: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                xAxisIndex: 1,
                yAxisIndex: 1
            }
        ]
    }
];