var data1 = [{
        name: '司局级/一巡',
        value: 4,
        sum: 30,
    },
    {
        name: '副司局级/二巡',
        value: 9,
        sum: 20
    },
    {
        name: '正处级/一调',
        value: 20,
        sum: 20
    },
    {
        name: '正处级/二调',
        value: 32,
        sum: 20
    },
    {
        name: '副处级/三调',
        value: 13,
        sum: 100
    },
    {
        name: '副处级/四调',
        value: 43,
        sum: 100
    },
    {
        name: '一级主任科员',
        value: 62,
        sum: 100
    },
    {
        name: '二级主任科员',
        value: 4,
        sum: 100
    },
    {
        name: '见习',
        value: 13,
        sum: 100
    },
    {
        name: '其他',
        value: 70,
        sum: 100
    }
];

var data2 = [{
        name: '司局级/一巡',
        value: 0,
        sum: 30,
    },
    {
        name: '副司局级/二巡',
        value: 0,
        sum: 20
    },
    {
        name: '正处级/一调',
        value: 1,
        sum: 20
    },
    {
        name: '正处级/二调',
        value: 6,
        sum: 20
    },
    {
        name: '副处级/三调',
        value: 5,
        sum: 100
    },
    {
        name: '副处级/四调',
        value: 17,
        sum: 100
    },
    {
        name: '一级主任科员',
        value: 16,
        sum: 100
    },
    {
        name: '二级主任科员',
        value: 0,
        sum: 100
    },
    {
        name: '见习',
        value: 0,
        sum: 100
    },
    {
        name: '其他',
        value: 2,
        sum: 100
    }
];
// data = data.sort((a, b) => {
//     return b.value - a.value
// });
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
opt = {
    index: 0
}
// [起始最深颜色,结束的浅颜色]
// colorLeft = ['#0CEBEA', '#368BFF'];
colorLeft = ['#1f83ff', '#1f83ff']
colorRight = ['rgba(255,144,128,1)', 'rgba(255,144,128,1)']

option = {
    backgroundColor:'#fff',
    title: {
                text: '空勤公务员职级分布(分工种）',
                left:'center',
                top:'14%',
                textStyle:{
                    color:'rgba(0,0,0,0.65)',
                    fontSize:24,
                }
            },
    legend : {
                top : '20%',
                right : '16%',
                itemWidth : 70,
                itemHeight : 22,
                itemGap: 40,
                orient: 'horizontal',
                icon : 'circle',
                textStyle : {
                    color : '#000',
                    fontSize : 16,
                },
                data: ['飞行员', '乘务员']
            },
    grid: [{
        show: false,
        left: '15%',
        top: '20%',
        bottom: '30%',
        width: '28%',

    }, {
        show: false,
        left: '50%',
        top: '20%',
        bottom: '30%',
        width: '10%',

    }, {
        show: false,
        right: '15%',
        top: '20%',
        bottom: '30%',
        width: '28%',
    }],
    tooltip: {
        show: true,
        // 设置  是否百分比
        formatter: '{b} : {c}'
    },
    xAxis: [{
            type: 'value',
            inverse: true,
            axisLine: {
                show: true
            },
            axisTick: {
                show: true
            },
            position: 'bottom',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#000'
                }    
            },
            splitLine: {
                show: false
            }
        },
        {
            gridIndex: 1,
            show: true,
            type: 'value',
            inverse: false,
            axisLine: {
                show: true
            },
            axisTick: {
                show: true
            },
            position: 'bottom',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#000'
                }
            },
            splitLine: {
                show: false
            }
        },
        {
            gridIndex: 2,
            show: true,
            type: 'value',
            inverse: false,
            axisLine: {
                show: true
            },
            axisTick: {
                show: true
            },
            position: 'bottom',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#000'
                }
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
            data: getArrByKey(data1, 'name'),
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
            position: 'left',
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
                    color: '#000',
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
            data: getArrByKey(data2, 'name'),
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
            name: '飞行员',
            type: 'bar',
            gridIndex: 0,
            showBackground: false,
            backgroundStyle: {
                barBorderRadius: 30,
            },
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: data1,
            barWidth: 20,
            // barCategoryGap: '40%',
            itemStyle: {
                normal: {
                    show: true,
                    // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，分别表示右,下,左,上。例如（0，0，0，1）表示从正上开始向下渐变；如果是（1，0，0，0），则是从正右开始向左渐变。
                    // 相当于在图形包围盒中的百分比，如果4最后一个参数传 true，则该四个值是绝对的像素位置
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: colorLeft[0] //指0%处的颜色
                    }, {
                        offset: 1,
                        color: colorLeft[1] //指100%处的颜色
                    }], false),
                    barBorderRadius: [5,0,0,5],

                },
            },

            label: {
                normal: {
                    show: true,
                    position: 'insideLeft',
                    textStyle: {
                        color: '#fff',
                        fontSize: '14'
                    }
                }
            }
        },
        {
            name: '乘务员',
            type: 'bar',
            xAxisIndex: 2,
            yAxisIndex: 2,
            gridIndex: 2,
            showBackground: false,
            backgroundStyle: {
                barBorderRadius: 30,
            },
            data: data2,
            barWidth: 20,
            // barCategoryGap: '40%',
            itemStyle: {
                normal: {
                    show: true,
                    // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，分别表示右,下,左,上。例如（0，0，0，1）表示从正上开始向下渐变；如果是（1，0，0，0），则是从正右开始向左渐变。
                    // 相当于在图形包围盒中的百分比，如果最后一个参数传 true，则该四个值是绝对的像素位置
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: colorRight[0] //指0%处的颜色
                    }, {
                        offset: 1,
                        color: colorRight[1] //指100%处的颜色
                    }], false),
                    barBorderRadius: [0,5,5,0],

                },
            },
            label: {
                normal: {
                    show: true,
                    position: 'insideRight',
                    textStyle: {
                        color: '#ffffff',
                        fontSize: '14'
                    }
                }
            }
        }
    ]
};