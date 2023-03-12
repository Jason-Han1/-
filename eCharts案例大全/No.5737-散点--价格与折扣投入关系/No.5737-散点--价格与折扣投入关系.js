var data = [
    [
    [-890,0.31,222,],
    [-900,0.27,372,],
    [-470,0.17,1820,],
    [-621,0.12,172,],
    [-888,0.31,272,],
    [-890,0.25,322,],
    [-770,0.12,322,],
    [-690,0.25,322,],
    [-490,0.25,1222,],
    [-610,0.25,122,],
    [-190,0.25,1322,],
    [-120,0.35,122,],
    [-390,0.35,222,],
    [-290,0.25,322,],
    [890,0.25,3322,],
    [590,0.15,222,],
    [190,0.31,422,],
    [380,0.31,422,],
    [290,0.11,422,],
    [590,0.31,422,],
    [790,0.41,422,],
    [790,0.31,2422,],
    [490,0.21,1422,],
    [390,0.25,1422,],
    [690,0.29,422,],
    [990,0.33,4422,],
    [790,0.21,422,],
    [590,0.23,422,],
    [650,0.37,4422,],
    [590,0.13,422,],
    [590,0.29,4422,],
    [690,0.23,522,],
    [490,0.26,1422,],
    [390,0.20,722,],
    [190,0.19,2422,],
    [222,0.26,622,],
    [790,0.41,2422,],
    ]
];

option = {
    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#f7f8fa'
    }, {
        offset: 1,
        color: '#cdd0d5'
    }]),
    xAxis: {
        min:-1500,
        max:1500,
        name:'价格弹性',
        nameTextStyle: {
            padding: [200, 0, 0, -400]    // 四个数字分别为上右下左与原位置距离
        },
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    yAxis: {
        min:-0.10,
        max:0.70,
        name: '单位折扣投入',
        nameLocation:'middle',
        nameTextStyle: {
            padding: [0, 0,30, 0]// 四个数字分别为上右下左与原位置距离
        },
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        scale: true
    },
    series: [{
        data: data[0],
        type: 'scatter',
        symbolSize: function (data) {
            return Math.sqrt(data[2]) ;
        },
        emphasis: {
            label: {
                show: true,
                formatter: function (param) {
                    return param.data[2];
                },
                position: 'top'
            }
        },
        itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(120, 36, 50, 0.5)',
            shadowOffsetY: 5,
            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                offset: 0,
                color: '#7193D1'
            }, {
                offset: 1,
                color: '#7193D1'
            }])
        }
    }]
};	