//职称结构取数
var getsjjg = ['教授', '副教授', '其他正高', '其他副高', '其他职称']
var getsjjgrs = [35, 30, 22, 12, 12];
var data = [];
for (var i = 0; i < getsjjg.length; i++) {
    data.push({
        name: getsjjg[i],
        value: getsjjgrs[i]
    })
}
var data2 = [];
for (var i = 0; i < getsjjg.length; i++) {
    data2.push({
        name: getsjjg[i],
        value: 100
    })
}

var rich = {
    name: {
        color: "#656565",
        fontSize: 14,
        padding: [0, 5],
        fontWeight: '400',
        align: 'right'
    },
    value: {
        color: "#333",
        fontSize: 14,
        padding: [5, 5],
        fontWeight: '500',
        align: 'right'
    },
    percent: {
        color: "#333",
        align: 'right',
        fontSize: 14,
        fontWeight: '500',
        padding: [0, 5]
    },
    hr: {
        borderColor: '#DFDFDF',
        width: '100%',
        borderWidth: 1,
        height: 0,
    }
}
//职称结构图表
var colorList = [{
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 1,
        colorStops: [{
                offset: 0,
                color: '#178FFF' // 0% 处的颜色
            },
            {
                offset: 1,
                color: '#53ABFF' // 100% 处的颜色
            }
        ],
        globalCoord: false // 缺省为 false
    },
    {
        type: 'linear',
        x: 1,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
                offset: 0,
                color: '#7D7CFF' // 0% 处的颜色
            },
            {
                offset: 1,
                color: '#9D9CFF' // 100% 处的颜色
            }
        ],
        globalCoord: false // 缺省为 false
    },
    {
        type: 'linear',
        x: 1,
        y: 0,
        x2: 0,
        y2: 0,
        colorStops: [{
                offset: 0,
                color: '#5BD5F9' // 0% 处的颜色
            },
            {
                offset: 1,
                color: '#8BE5FF' // 100% 处的颜色
            }
        ],
        globalCoord: false // 缺省为 false
    },
    {
        type: 'linear',
        x: 0,
        y: 1,
        x2: 0,
        y2: 0,
        colorStops: [{
                offset: 0,
                color: '#04C47A' // 0% 处的颜色
            },
            {
                offset: 1,
                color: '#53D39F' // 100% 处的颜色
            }
        ],
        globalCoord: false // 缺省为 false
    },
    {
        type: 'linear',
        x: 1,
        y: 1,
        x2: 1,
        y2: 0,
        colorStops: [{
                offset: 0,
                color: '#FFB065' // 0% 处的颜色
            },
            {
                offset: 1,
                color: '#EDAD51' // 100% 处的颜色
            }
        ],
        globalCoord: false // 缺省为 false
    },
]
option = {
    series: [{
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
        type: 'pie',
        //clockWise: false ,
        //roseType: 'radius',
        radius: ['40%', '60%'],
        center: ["50%", "50%"],

        label: {
            normal: {
                show: false
            }
        },

        data: data
    }, {
        itemStyle: {
            normal: {
                color: 'transparent',
            }
        },
        type: 'pie',
        hoverAnimation: false,
        radius: ['40%', '63%'],
        center: ["50%", "50%"],
        labelLine: {
            normal: {
                lineStyle: {
                    color: '#DFDFDF'
                }
            }
        },
        label: {
            normal: {
                formatter: params => {
                    return (
                        '{name|' + params.name + '}{percent|' + params.percent.toFixed(0) + '%}'
                    );
                },
                rich: rich,
                padding: [0, -5, 0, -5],
            }
        },
        data: data,
        z: -1
    }]
};