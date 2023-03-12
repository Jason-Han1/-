//参考自  中国2016年年龄结构 By l***s

var age_gap = ['0-10岁', '11-20岁', '21-30岁', '31-40岁', '41-50岁', '51-60岁', '62-70岁', '71-80岁', '81-90岁', '91-100岁', '未详', '合计'];

var data_age = [{
        "year": "承德县",
        "age_data": {
            "male": [94, 272, 661, 317, 210, 182, 155, 67, 21, 0, 191, 2170],
            "female": [0, 21, 14, 54, 54, 42, 39, 12, 10, 1, 154, 401]
        }
    },
    {
        "year": "铁岭县",
        "age_data": {
            "male": [3, 4, 19, 29, 17, 11, 3, 0, 0, 0, 0, 86],
            "female": [0, 0, 6, 2, 0, 0, 0, 3, 0, 0, 0, 11]
        }
    },
    {
        "year": "义州",
        "age_data": {
            "male": [8, 28, 14, 17, 20, 2, 0, 0, 0, 0, 0, 89],
            "female": [3, 6, 4, 19, 15, 20, 14, 3, 0, 0, 0, 84]
        }
    },
    {
        "year": "新民府",
        "age_data": {
            "male": [71, 139, 105, 89, 9, 15, 14, 0, 0, 0, 0, 422],
            "female": [12, 10, 47, 39, 59, 9, 4, 0, 0, 0, 0, 180]
        }
    },
    {
        "year": "广宁县",
        "age_data": {
            "male": [21, 21, 39, 22, 26, 8, 0, 0, 0, 0, 3, 140],
            "female": [2, 12, 18, 18, 10, 10, 10, 5, 0, 0, 0, 85]
        }
    }, {
        "year": "镇安县",
        "age_data": {
            "male": [0, 0, 10, 23, 24, 0, 4, 0, 0, 0, 22, 83],
            "female": [0, 0, 4, 6, 4, 0, 9, 1, 0, 0, 0, 24]
        }
    }, {
        "year": "昌图府",
        "age_data": {
            "male": [20, 4, 80, 92, 94, 54, 21, 6, 1, 0, 143, 515],
            "female": [1, 1, 43, 34, 14, 10, 0, 0, 0, 0, 0, 103]
        }
    },
    {
        "year": "绥中县",
        "age_data": {
            "male": [1, 10, 14, 8, 3, 4, 0, 2, 0, 0, 0, 42],
            "female": [0, 0, 0, 8, 9, 6, 5, 0, 0, 0, 0, 28]
        }
    }, {
        "year": "法库厅",
        "age_data": {
            "male": [13, 31, 63, 71, 41, 35, 9, 3, 0, 0, 6, 272],
            "female": [8, 5, 20, 5, 25, 10, 9, 0, 1, 0, 83]
        }
    }, {
        "year": "兴京府",
        "age_data": {
            "male": [0, 2, 2, 4, 0, 0, 0, 0, 0, 0, 0, 8],
            "female": []
        }
    }, {
        "year": "奉化县",
        "age_data": {
            "male": [23, 36, 57, 35, 38, 28, 10, 4, 0, 0, 23, 254],
            "female": [3, 5, 25, 35, 14, 16, 8, 2, 0, 0, 0, 108]
        }
    }, {
        "year": "抚顺县",
        "age_data": {
            "male": [5, 1, 10, 9, 9, 3, 1, 0, 1, 0, 21, 60],
            "female": [0, 1, 6, 4, 4, 6, 4, 0, 0, 0, 0, 25]
        }
    }, {
        "year": "怀德县",
        "age_data": {
            "male": [20, 64, 161, 87, 84, 98, 0, 0, 0, 0, 20, 534],
            "female": [12, 14, 45, 58, 11, 0, 0, 0, 0, 0, 0, 140]
        }
    }, {
        "year": "本溪县",
        "age_data": {
            "male": [1, 1, 9, 3, 3, 0, 0, 0, 0, 0, 14, 31],
            "female": []
        }
    }, {
        "year": "开源县",
        "age_data": {
            "male": [9, 19, 19, 36, 30, 35, 3, 2, 0, 0, 5, 157],
            "female": [1, 8, 13, 12, 20, 0, 9, 0, 0, 0, 0, 63]
        }
    }, {
        "year": "锦县",
        "age_data": {
            "male": [2, 4, 5, 5, 7, 1, 1, 0, 0, 0, 0, 25],
            "female": [0, 0, 0, 6, 0, 2, 0, 0, 0, 0, 0, 8]
        }
    }, {
        "year": "康平县",
        "age_data": {
            "male": [16, 25, 22, 26, 25, 14, 6, 1, 0, 0, 0, 135],
            "female": [0, 0, 17, 15, 14, 12, 4, 1, 0, 0, 0, 63]
        }
    }, {
        "year": "锦西厅",
        "age_data": {
            "male": [0, 3, 3, 1, 4, 3, 0, 0, 0, 0, 0, 14],
            "female": [1, 0, 2, 1, 3, 1, 1, 1, 1, 0, 0, 11]
        }
    }, {
        "year": "辽中县",
        "age_data": {
            "male": [3, 15, 15, 11, 10, 3, 0, 0, 0, 0, 0, 57],
            "female": [0, 0, 8, 6, 4, 1, 2, 0, 1, 0, 0, 22]
        }
    }, {
        "year": "宁远州",
        "age_data": {
            "male": [2, 3, 5, 9, 2, 7, 3, 1, 0, 0, 0, 34],
            "female": [0, 1, 4, 2, 2, 4, 1, 0, 0, 0, 0, 14]
        }
    }, {
        "year": "辽源州",
        "age_data": {
            "male": [0, 1, 4, 2, 2, 4, 1, 0, 0, 0, 0, 14],
            "female": [0, 1, 2, 2, 1, 1, 3, 1, 1, 0, 0, 12]
        }
    }, {
        "year": "西安县",
        "age_data": {
            "male": [6, 6, 13, 6, 9, 3, 0, 1, 0, 0, 42, 86],
            "female": [3, 4, 5, 5, 4, 4, 0, 0, 0, 0, 0, 27]
        }
    }, {
        "year": "西丰县",
        "age_data": {
            "male": [0, 5, 38, 13, 6, 4, 0, 0, 0, 0, 12, 78],
            "female": [0, 0, 1, 2, 0, 0, 1, 1, 0, 0, 0, 5]
        }
    }, {
        "year": "辽阳州",
        "age_data": {
            "male": [5, 2, 4, 6, 7, 2, 2, 0, 0, 0, 9, 37],
            "female": [2, 2, 2, 1, 3, 2, 3, 1, 0, 0, 0, 16]
        }
    }, {
        "year": "彰武县",
        "age_data": {
            "male": [0, 1, 3, 1, 2, 1, 0, 0, 0, 0, 1, 9],
            "female": [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1]
        }
    }, {
        "year": "海龙府",
        "age_data": {
            "male": [0, 1, 2, 1, 1, 0, 0, 0, 0, 0, 2, 7],
            "female": [0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 4]
        }
    }, {
        "year": "东平县",
        "age_data": {
            "male": [0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 4],
            "female": []
        }
    }, {
        "year": "盘山厅",
        "age_data": {
            "male": [4, 2, 2, 3, 1, 1, 1, 1, 0, 0, 0, 15],
            "female": [1, 0, 3, 2, 0, 4, 0, 0, 0, 0, 2, 12]
        }
    }, {
        "year": "全部统计",
        "age_data": {
            "male": [332, 702, 1388, 628, 685, 516, 233, 87, 23, 0, 515, 5409],
            "female": [51, 93, 290, 346, 272, 166, 128, 32, 14, 1, 156, 1549]
        }
    },

];

option = {
    baseOption: {
        backgroundColor: '#363636',
        timeline: {
            show: true,
            left: '10%',
            right: '10%',
            //bottom: '3%',
            width: '80%',
            axisType: 'category',
            tooltip: {
                show: true,
                formatter: function(params) {
                    console.log(params);
                    return params.name;
                }
            },
            autoPlay: true,
            // currentIndex: 6,
            playInterval: 1200,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    },
                    interval: 'auto',
                    formatter: '{value}',
                },
            },
            symbolSize: 10,
            lineStyle: {
                color: '#555'
            },
            checkpointStyle: {
                borderColor: '#fff',
                borderWidth: 2
            },
            controlStyle: {
                showNextBtn: true,
                showPrevBtn: true,
                normal: {
                    color: '#fff',
                    borderColor: '#aaa'
                },
                emphasis: {
                    color: '#fff',
                    borderColor: '#aaa'
                }
            },
            data: [],
        },
        title: {
            top: '3%',
            left: 'center',
            textStyle: {
                color: '#fff',
                fontSize: 20,
            },
            subtext: '数据来源：《东三省疫事报告书》奉天防疫总局，1911年',
            subtextStyle: {
                fontSize: 15
            }

        },
        legend: {
            data: ['男性', '女性'],
            top: 20,
            right: '5%',
            textStyle: {
                color: '#fff',
                fontSize: 15,
                fontWeight: 'bold'
            },

        },
        tooltip: {
            show: true,
            trigger: 'axis',
            formatter: '{b}<br/>{a}: {c}',
            axisPointer: {
                type: 'shadow',
            }
        },

        grid: [{
            show: false,
            left: '10%',
            top: '15%',
            bottom: 60,
            containLabel: true,
            width: '40%',
        }, {
            show: false,
            left: '6%',
            top: 120,
            bottom: 60,
            width: '0%',
        }, {
            show: false,
            left: '50%',
            top: '15%',
            bottom: 60,
            containLabel: true,
            width: '40%',
        }],

        xAxis: [{
            type: 'value',
            inverse: true,
            //max: 6,
            //min: 0,
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
                    color: '#fff',
                    fontSize: 15,
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#6E7783',
                    // width: 1,
                    type: 'dashed',
                },
            },
        }, {
            gridIndex: 1,
            show: false,

        }, {
            gridIndex: 2,
            // max: 6,
            // min: 0,
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
                    color: '#fff',
                    fontSize: 15,
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#6E7783',
                    // width: 1,
                    type: 'dashed',
                },
            },
        }],
        yAxis: [{
            type: 'category',
            inverse: false,
            position: 'right',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
            },
            data: age_gap
        }, {
            gridIndex: 1,
            type: 'category',
            inverse: false,
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
                    color: '#fff',
                    fontSize: 17,
                },

            },
            data: age_gap.map(function(value) {
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
            inverse: false,
            position: 'left',
            axisLine: {
                show: true
            },
            axisTick: {
                show: true
            },
            axisLabel: {
                show: false,
                textStyle: {
                    color: '#000',
                    fontSize: 12,
                },

            },
            data: age_gap,
        }],
        series: [],

    },

    options: [],


};

for (var i = 0; i < data_age.length; i++) {
    option.baseOption.timeline.data.push(data_age[i].year);


    option.options.push({
        title: {
            text: '奉天省 ' + data_age[i].year + ' 疫毙男女人数、年龄比较',
            textStyle: {

                fontSize: 25
            }
        },
        series: [{
                name: '男性',
                type: 'bar',
                barGap: 5,
                barWidth: 30,
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
                            fontSize: 15,
                        },
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#a6dcef',
                    },
                    emphasis: {
                        //color: '#08C7AE',
                    },
                },
                data: data_age[i].age_data.male,
            },


            {
                name: '女性',
                type: 'bar',
                barGap: 20,
                barWidth: 30,
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
                            fontSize: 15,
                        },
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#ff6363',
                    },
                    emphasis: {
                        // color: '#08C7AE',
                    },
                },
                data: data_age[i].age_data.female,
            }
        ]
    });
}