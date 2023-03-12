var data = {
    source: [
        ['product', '销售量', '购买量', '预订量'],
        ['07/01', 220, 120, 150],
        ['07/02', 182, 82, 182],
        ['07/03', 191, 91, 191],
        ['07/04', 234, 34, 134],
        ['07/05', 290, 90, 190],
        ['07/06', 330, 30, 130],
        ['07/07', 310, 10, 110],
        ['07/08', 236, 40, 143],
        ['07/09', 321, 56, 167],
    ]
};
//图例:data:['销售量','购买量','预订量'],
//x轴:data: ['07/01', '07/02', '07/03', '07/04', '07/05', '07/06', '07/07','07/08','07/09']
//销售量:data:[220, 182, 191, 234, 290, 330, 310,236,321]
//购买量:data:[120, 82, 91, 34, 90, 30, 10,40,56]
//预订量:data:[150, 182, 191, 134, 190, 130, 110,143,167]
var data2 = {
    // 这里指定了维度名的顺序，从而可以利用默认的维度到坐标轴的映射。
    // 如果不指定 dimensions，也可以通过指定 series.encode 完成映射，参见后文。
    dimensions: ['product', '销售量', '购买量', '预订量'],
    source: [{
            product: '07/01',
            '销售量': 220,
            '购买量': 120,
            '预订量': 150
        },
        {
            product: '07/02',
            '销售量': 182,
            '购买量': 82,
            '预订量': 182
        },
        {
            product: '07/03',
            '销售量': 191,
            '购买量': 91,
            '预订量': 191
        },
        {
            product: '07/04',
            '销售量': 234,
            '购买量': 34,
            '预订量': 134
        },
        {
            product: '07/05',
            '销售量': 290,
            '购买量': 90,
            '预订量': 190
        },
        {
            product: '07/06',
            '销售量': 330,
            '购买量': 30,
            '预订量': 130
        },
        {
            product: '07/07',
            '销售量': 310,
            '购买量': 10,
            '预订量': 110
        },
        {
            product: '07/08',
            '销售量': 236,
            '购买量': 40,
            '预订量': 143
        },
        {
            product: '07/09',
            '销售量': 321,
            '购买量': 56,
            '预订量': 167
        },
    ]
};

var data3 = {
    source: {
        'product': ['07/01', '07/02', '07/03', '07/04', '07/05', '07/06', '07/07', '07/08', '07/09'],
        '销售量': [220, 182, 191, 234, 290, 330, 310, 236, 321],
        '购买量': [120, 82, 91, 34, 90, 30, 10, 40, 56],
        '预订量': [150, 182, 191, 134, 190, 130, 110, 143, 167]
    }
};



option = {
    dataset: data3,
    backgroundColor: '#0c244cf0',
    title: {
        text: '牛鼻的折线图',
        left: 'center',
        top: 10,
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        backgroundColor: '#04356e90',
        borderColor: '#04356e',
        borderWidth: 2
    },
    grid: {
        top: 100,
    },
    legend: {
        textStyle: {
            color: '#fff'
        },
        icon: 'circle',
        top: 50,
        //data:['销售量','购买量','预订量'],
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            color: '#9fceff'
        },
        axisLine: {
            lineStyle: {
                color: '#666'
            }
        },
        boundaryGap: false,
        axisPointer: {
            show: true,
            type: 'line',
            label: {
                show: true
            },
            triggerTooltip: true
        },
        //data: ['07/01', '07/02', '07/03', '07/04', '07/05', '07/06', '07/07','07/08','07/09']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            color: '#9fceff'
        },
        axisLine: {
            lineStyle: {
                color: '#666'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#666'
            }
        },
    },
    series: [{
            type: 'line',
            //name:'销售量',
            lineStyle: {
                color: '#fdc501'
            },
            itemStyle: {
                color: '#fdc501',
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#fdc50180' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#fdc50100' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            },
            stack: 'stack01',
            /*seriesLayoutBy:'column',
            encode:{
                x:'product',
                y:'销售量',
            }*/
            //data:[220, 182, 191, 234, 290, 330, 310,236,321]
        },
        {
            type: 'line',
            //name:'购买量',
            lineStyle: {
                color: '#ff8212'
            },
            itemStyle: {
                color: '#ff8212'
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#ff821280' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#ff821200' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            },
            stack: 'stack01',
            /*seriesLayoutBy:'column',
            encode:{
                x:'product',
                y:'购买量',
            } */
            //data:[120, 82, 91, 34, 90, 30, 10,40,56]
        },
        {
            type: 'line',
            //name:'预订量',
            lineStyle: {
                color: '#f92e30'
            },
            itemStyle: {
                color: '#f92e30'
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#f92e3080' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#f92e3000' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            },
            /*seriesLayoutBy:'column',
            encode:{
                x:'product',
                y:'预订量',
            }, */
            stack: 'stack01',
            //data:[150, 182, 191, 134, 190, 130, 110,143,167]
        },
    ]
};