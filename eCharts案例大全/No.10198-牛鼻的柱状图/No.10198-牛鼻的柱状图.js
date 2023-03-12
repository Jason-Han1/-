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
    dataset: data,
    backgroundColor: '#0c244cf0',
    title: {
        text: '牛鼻的柱状图',
        left: 'center',
        top: 10,
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
    },
    grid: [
        {
            top:100
        },  
    ],
    legend: {
        show:true,
        textStyle: {
            color: '#fff'
        },
        icon: 'circle',
        top: 50,
    },
    xAxis: [
        {
            type: 'category',
            gridIndex:0,
            axisLabel: {
                color: '#9fceff'
            },
            axisLine: {
                lineStyle: {
                    color: '#666'
                }
            },
            axisTick:{
                alignWithLabel:true
            },
            boundaryGap: true,
        },
    ],
    yAxis:[
        {
            type: 'value',
            gridIndex:0,
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
        {
            type: 'value',
            gridIndex:0,
            axisLabel: {
                show:false,
                color: '#9fceff'
            },
            axisTick:{
                show:false,
            },
            axisLine: {
                show:false,
                lineStyle: {
                    color: '#666'
                }
            },
            splitLine: {
                show:false,
                lineStyle: {
                    color: '#666'
                }
            },
        },
    ], 
    series: [
        {
            type: 'bar',
            xAxisIndex:0,
            yAxisIndex:1,
            itemStyle: {
                color: '#083b5e',
            },
            silent:true,
            barMaxWidth:25,
            data:[100,100,100,100,100,100,100,100,100],
        },
        {
            type: 'bar',
            xAxisIndex:0,
            yAxisIndex:0,
            itemStyle: {
                color: '#00e4ec',
            },
            silent:false,
            label:{
                show:true,
                position:'top'
            },
            barMaxWidth:25,
            barGap:'-100%',
        },
    ]
};