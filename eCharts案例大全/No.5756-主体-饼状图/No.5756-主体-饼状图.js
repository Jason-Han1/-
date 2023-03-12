//历史监管
var color_data = [
    '#33cccc',
    '#9966ff',
    '#0066ff',
    '#ff3366',
    '#ff6666'
];
var colorList_data = [{
        c1: '#33cccc', //管理
        c2: '#66ff99'
    },
    {
        c1: ' #9966ff', //实践
        c2: '#ff66ff'
    },
    {
        c1: '#0066ff', //操作
        c2: '#33ccff'
    },
    {
        c1: '#ff3366', //操作
        c2: '#ff6699'
    },
    {
        c1: '#ff6666', //操作
        c2: '#ffcc66'
    }
]
var colorList_data_2 = [{
        c1: ' #9966ff', //实践
        c2: '#ff66ff'
    },
    {
        c1: '#ff3366', //操作
        c2: '#ff6699'
    },
    {
        c1: '#ff6666', //操作
        c2: '#ffcc66'
    }
]

series_data = [{
    value: 45,
    name: '生产'
}, {
    value: 25,
    name: '流通'
}, {
    value: 15,
    name: '医疗机构'
}];
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series: [{
        name: '药械企业类型',
        type: 'pie',
        radius: '68%',
        center: ['50%', '50%'],
        clockwise: false,
        data: series_data,
        label: {
            normal: {
                textStyle: {
                    color: '#07c9fe',
                    fontSize: 14,
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                borderWidth: 4,
                borderColor: '#06076b',
                color: function(params) {
                    var colorList = colorList_data
                    return new echarts.graphic.LinearGradient(1, 0, 0, 0, [{ //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上

                        offset: 0,
                        color: colorList[params.dataIndex].c1
                    }, {
                        offset: 1,
                        color: colorList[params.dataIndex].c2
                    }])
                    /*  return colorList[params.dataIndex]*/
                }

            },
            emphasis: {
                borderWidth: 0,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }],
    color: color_data,
    //		backgroundColor: '#06076b'
};