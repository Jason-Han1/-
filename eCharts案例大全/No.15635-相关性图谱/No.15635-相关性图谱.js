var markLineOpt = {};

var bg = {
    name: '相关背景',
    type: 'pie',
    avoidLabelOverlap: false,
    labelLine: {
        normal: {
            show: false
        }
    },
    data: [{
        value: 1
    }],
    animation: false
};

var dot = {
    name: '强相关',
    type: 'scatter',
    xAxisIndex: 0,
    yAxisIndex: 0,
    symbol: 'circle',
    symbolSize: 40,
    label: {
        normal: {
            show: true,
            textStyle: {
                color: '#555'
            },
            position: 'bottom',
            formatter: function(param) {
                return param.data[2];
            },
        },
    },
    itemStyle: {
        normal: {
            color: '#9bca63'
        },
    },

    data: [],
}

var datalist = [
    /**
     * x坐标 
     * y坐标 
     * name 标签名称
     * symbolSize 点大小
     * 趋势，1:上升 0:下降
     */
    [14, 16, '苹果', 50, 1],
    [70, 50, '华为', 30, 1],
    [90, 50, '助手', 20, 1],
    [85, 90, '小米', 47, 1],
    [52, 83, '360', 10, 0],
    [72, 83, '定位', 20, 0],
    [47, 110, '下载', 30, 0]
]

var dataMap = datalist.map((item) => {
    return Object.assign({}, dot, {
        symbolSize: item[3],
        itemStyle: {
            normal: {
                color: item[4]==1? '#fe8463':'#9bca63'
            },
        },
        data: [
            item
        ]
    })
});


var option = {
    backgroundColor: '#f5f5f5',
    title: {
        text: '',
        x: '35%',
        y: 0
    },
    tooltip: {
        trigger: 'item',
        backgroundColor: '#fff',
        textStyle: {
            color: '#999'
        },
        formatter: (item) => {
            if (item.data[2]) {
                return `${item.data[2]}<br/>  坐标: x ${item.data[0]}  y ${item.data[1]}`;
            }
        }
    },
    xAxis: [{
        gridIndex: 0,
        type: 'value',
        show: false,
        min: 0,
        max: 100,
        nameLocation: 'middle',
        nameGap: 30


    }],
    yAxis: [{
        gridIndex: 0,
        min: 0,
        show: false,
        max: 100,
        nameLocation: 'middle',
        nameGap: 30,
    }],
    series: [
        ...dataMap, {
            name: '弱相关',
            type: 'scatter',
            xAxisIndex: 0,
            yAxisIndex: 0,
            symbol: 'circle',
            symbolSize: 120,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: '20'
                    },
                    formatter: function(param) {
                        return param.data[2];
                    },
                },

            },

            itemStyle: {
                normal: {
                    color: '#8570b0'
                }
            },
            data: [
                [50, 50, '手机', '#8570b0']
            ],
            markLine: markLineOpt
        },
        Object.assign({}, bg, {
            radius: ['0%', '100%'],
            itemStyle: {
                normal: {
                    color: '#ddd',
                },
                emphasis: {
                    color: '#ddd',
                }
            }
        }),
        Object.assign({}, bg, {
            radius: ['100%', '200%'],
            itemStyle: {
                normal: {
                    color: '#eee',
                },
                emphasis: {
                    color: '#eee',
                }
            }
        })

    ]
};