var name1 = '广西医科大学'
var name2 = '其他大学'

var data1 = [{
        name: '学院',
        value: 3079
    },
    {
        name: '专业',
        value: 100079
    }, {
        name: '附属医院',
        value: 1879
    }, {
        name: 'ESI前1%学科',
        value: 50000000079
    }, {
        name: '国家重点学科',
        value: 79
    }, {
        name: '广西一流学科',
        value: 8879
    },
    {
        name: '第四轮评估A/B/C',
        value: 6079
    },
    {
        name: '总在校人数',
        value: 400079
    },
    {
        name: '本科生',
        value: 300079
    },
    {
        name: '硕士研究生',
        value: 12079
    },
    {
        name: '博士生',
        value: 5079
    },
    {
        name: '留学生',
        value: 20079
    }, {
        name: '高职生',
        value: 20079
    },
    {
        name: '教工',
        value: 30079
    },
    {
        name: '专任教师',
        value: 10079
    },
    {
        name: '高层次人才',
        value: 1579
    }, {
        name: '国家实验室含重点',
        value: 3079

    }, {
        name: '国家重大科研项目',
        value: 2079

    }, {
        name: '生师比',
        value: 15079
    }

];



var data2 = [{
        name: '学院',
        value: 4000

    }, {
        name: '专业',
        value: 12000

    }, {
        name: '附属医院',
        value: 3000

    }, {
        name: 'ESI前1%学科',
        value: 3500

    }, {
        name: '国家重点学科',
        value: 5000

    }, {
        name: '广西一流学科',
        value: 7000

    }, {
        name: '第四轮评估A/B/C',
        value: 5000

    }, {
        name: '总在校人数',
        value: 450000

    }, {
        name: '本科生',
        value: 350000

    }, {
        name: '硕士研究生',
        value: 10000

    }, {
        name: '博士生',
        value: 2000

    }, {
        name: '留学生',
        value: 40000

    }, {
        name: '高职生',
        value: 10000

    }, {
        name: '教工',
        value: 80

    }, {
        name: '专任教师',
        value: 40000

    }, {
        name: '高层次人才',
        value: 10000000

    }, {
        name: '国家实验室含重点',
        value: 5000

    }, {
        name: '国家重大科研项目',
        value: 50000

    }, {
        name: '生师比',
        value: 20000

    }

];

let data1New = []
let data2New = []
let largeColorRight = {
    type: 'linear',
    x: 1,

    y: 0,

    x2: 0,

    y2: 0,

    colorStops: [{

        offset: 0,

        color: 'rgba(0, 204, 255, 1)'

    }, {

        offset: 1,

        color: 'rgba(101, 105, 255, 1)'

    }]

}

let largeColorLeft = {

    type: 'linear',

    x: 0,

    y: 0,

    x2: 1,

    y2: 0,

    colorStops: [{

        offset: 0,

        color: 'rgba(0, 204, 255, 1)'

    }, {

        offset: 1,

        color: 'rgba(101, 105, 255, 1)'

    }]

}

let normalColor = {

    type: 'linear',

    x: 0,

    y: 0,

    x2: 0,

    y2: 1,

    colorStops: [{

        offset: 0,

        color: 'rgba(0, 204, 255, 0.3)'

    }, {

        offset: 1,

        color: 'rgba(101, 105, 255, 0.3)'

    }]

}



data1.map((item, index) => {

    let isLarge = data1[index].value > data2[index].value

    data1New.push({
        name: data1[index].name,
        value: data1[index].value,

        itemStyle: {

            normal: {

                color: isLarge ? largeColorRight : normalColor

            }

        }

    })

    data2New.push({
        name: data2[index].name,
        value: data2[index].value,

        itemStyle: {

            normal: {

                color: isLarge ? normalColor : largeColorLeft

            }

        }

    })

})

getArrByKey = (data, k) => {

    let key = k || "value";

    let res = [];

    if (data) {

        data.forEach(function(t) {

            res.push(t[key]);

        });

    }

    return res;

};

option = {
    backgroundColor: '#fff',
    grid: [{
            show: true,
            left: '2%',
            top: '0%',
            bottom: '8%',
            width: '39%',
        },
        {
            show: true,
            left: '50%',
            top: '0%',
            bottom: '8%',
            width: '0%',
        }, {
            show: true,
            right: '2%',
            top: '0%',
            bottom: '8%',
            width: '40%',
        }
    ],
    tooltip: {
        show: true,
        formatter: function(params) {
            return params.seriesName + '<br>' + params.name + '：' + params.value.toFixed(2) / 100
        }
    },
    xAxis: [{
            type: 'log',
            inverse: true,
            axisLine: {
                show: true
            },
            axisTick: {
                show: true
            },
            position: 'bottom',
            axisLabel: {
                formatter: function(value) {
                    return value / 100;
                }
            },
            splitLine: {
                show: true
            }
        },

        {
            gridIndex: 1,
            show: true,
        },
        {
            gridIndex: 2,
            show: true,
            type: 'log',
            inverse: false,
            axisLine: {
                show: true
            },
            axisTick: {
                show: true
            },
            position: 'bottom',
            axisLabel: {
                formatter: function(value) {
                    return value / 100;
                }
            },
            splitLine: {
                show: true
            }
        }
    ],
    yAxis: [{
            gridIndex: 0,
            triggerEvent: true,
            show: true,
            inverse: true,
            data: data1,
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            }
        },
        {
            gridIndex: 1,
            type: 'category',
            inverse: true,
            position: 'center',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                interval: 0,
                align: 'auto',
                verticalAlign: 'middle',
                textStyle: {
                    color: 'rgba(195, 240, 255, 1)',
                    fontSize: 16,
                    align: 'center',
                },
                // 坐标轴刻度标签换行处理
                formatter: function(params) {
                    var newParamsName = '' // 最终拼接成的字符串
                    var paramsNameNumber = params.length // 实际标签的个数
                    var provideNumber = 16 // 每行能显示的字的个数
                    var rowNumber = Math.ceil(paramsNameNumber / provideNumber) // 换行的话，需要显示几行，向上取整
                    if (paramsNameNumber > provideNumber) {
                        /** 循环每一行,p表示行 */
                        for (var p = 0; p < rowNumber; p++) {
                            var tempStr = '' // 表示每一次截取的字符串
                            var start = p * provideNumber // 开始截取的位置
                            var end = start + provideNumber // 结束截取的位置
                            // 此处特殊处理最后一行的索引值
                            if (p === rowNumber - 1) {
                                // 最后一次不换行
                                tempStr = params.substring(start, paramsNameNumber)
                            } else {
                                // 每一次拼接字符串并换行
                                tempStr = params.substring(start, end) + '\n'
                            }
                            newParamsName += tempStr // 最终拼成的字符串
                        }
                    } else {
                        //将旧标签的值赋给新标签
                        newParamsName = params
                    }
                    return newParamsName
                }

            },
            data: getArrByKey(data1, 'name'),
        },
        {
            gridIndex: 2,
            triggerEvent: true,
            show: true,
            inverse: true,
            data: data1,
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
            }
        }
    ],

    series: [{
            name: name1,
            type: 'bar',
            gridIndex: 0,
            showBackground: false,
            backgroundStyle: {
                barBorderRadius: 4,
            },
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: data1New,
            barWidth: 20,
            itemStyle: {
                normal: {
                    show: true,
                    color: 'rgba(59, 126, 170, 1)',
                    barBorderRadius: 4
                },
            },
            label: {
                show: false,
            }

        },

        {
            name: name2,
            type: 'bar',
            xAxisIndex: 2,
            yAxisIndex: 2,
            gridIndex: 2,
            showBackground: false,
            backgroundStyle: {

                barBorderRadius: 4,

            },
            data: data2New,
            barWidth: 20,
            itemStyle: {
                normal: {
                    show: true,
                    color: 'rgba(59, 126, 170, 1)',
                    barBorderRadius: 4

                },
            },
            label: {
                show: false
            }

        }
    ]

};