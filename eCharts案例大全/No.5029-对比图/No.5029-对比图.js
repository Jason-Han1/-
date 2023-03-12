var name1= '广西医科大学'
var name2 = '其他大学'
var data1 = [{
        name: '学院',
        value: 30
    },
    {
        name: '专业',
        value: 100
    },{
        name: '附属医院',
        value: 18
    },{
        name: 'ESI前1%学科',
        value: 50
    },{
        name: '国家重点学科',
        value: 70
    },{
        name: '广西一流学科',
        value: 88
    },
    {
        name: '第四轮评估A/B/C',
        value: 60
    },
    {
        name: '总在校人数',
        value: 4000
    },
    {
        name: '本科生',
        value: 3000
    },
    {
        name: '硕士研究生',
        value: 120
    },
    {
        name: '博士生',
        value: 50
    },
    {
        name: '留学生',
        value: 200
    },
    {
        name: '高职生',
        value: 200
    },
    {
        name: '教工',
        value: 300
    },
    {
        name: '专任教师',
        value: 100
    },
    {
        name: '高层次人才',
        value: 15
    },
    {
        name: '国家实验室含重点',
        value: 30
    },
    {
        name: '国家重大科研项目',
        value: 20
    },
    {
        name: '生师比',
        value: 150
    }
];

var data2 = [{
        name: '学院',
        value: 40
    },
    {
        name: '专业',
        value: 120
    },{
        name: '附属医院',
        value: 30
    },{
        name: 'ESI前1%学科',
        value: 35
    },{
        name: '国家重点学科',
        value: 50
    },{
        name: '广西一流学科',
        value: 70
    },
    {
        name: '第四轮评估A/B/C',
        value: 50
    },
    {
        name: '总在校人数',
        value: 4500
    },
    {
        name: '本科生',
        value: 3500
    },
    {
        name: '硕士研究生',
        value: 100
    },
    {
        name: '博士生',
        value: 20
    },
    {
        name: '留学生',
        value: 400
    },
    {
        name: '高职生',
        value: 100
    },
    {
        name: '教工',
        value: 100
    },
    {
        name: '专任教师',
        value: 400
    },
    {
        name: '高层次人才',
        value: 100
    },
    {
        name: '国家实验室含重点',
        value: 50
    },
    {
        name: '国家重大科研项目',
        value: 50
    },
    {
        name: '生师比',
        value: 200
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
    backgroundColor:'#051523',
    grid: [{
            show: false,
            left: '2%',
            top: '0%',
            bottom: '8%',
            width: '39%',

        },
        {
            show: false,
            left: '50%',
            top: '0%',
            bottom: '8%',
            width: '0%',

        }, {
            show: false,
            right: '2%',
            top: '0%',
            bottom: '8%',
            width: '40%',
        }
    ],
    tooltip: {
        show: true,
        formatter: '{a} </br> {b} : {c}'
    },
    xAxis: [{
            type: 'log',
            inverse: true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            position: 'bottom',
            axisLabel: {
                show: false,
            },
            splitLine: {
                show: false
            }
        },
        {
            gridIndex: 1,
            show: false,
        },
        {
            gridIndex: 2,
            show: true,
            type: 'log',
            inverse: false,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            position: 'bottom',
            axisLabel: {
                show: false,
            },
            splitLine: {
                show: false
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
    series: [
        {
            name:name1,
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
                    barBorderRadius:4
                },
            },

            label: {
                show: false,
            }
        },
        {
            name:name2,
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
                    barBorderRadius:4

                },
            },
            label: {
                show: false
            }
        }
    ]
};