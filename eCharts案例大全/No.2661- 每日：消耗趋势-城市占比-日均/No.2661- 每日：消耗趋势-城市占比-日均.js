option = {
    title: {
        text: ' 每日：消耗趋势-城市占比-日均'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['北京', '上海', '成都','广州','武汉', '杭州', '青岛', '南京' ]
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['7.1', '7.2', '7.3', '7.4', '7.5', '7.6', '7.7','7.8', '7.9', '7.10', '7.11', '7.12', '7.13', '7.14', '7.15', '7.16', '7.17', '7.18','7.19','7.20','7.21','7.22','7.23','7.24','7.25',]
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '北京',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [6341,9470,2756,7148,26395,20143,28282,31607,18673,12005,12974,23762,18447,18837,14093,20344,3549,16859,11230	,15613	,28912	,4777,	5806,	5712,	9585
]
        },
        {
            name: '上海',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [0	,0	,0	,0,	0	,0	,324	,0	,0	,0	,0	,0	,0	,0	,0,	1093,	3343	,2107,625,	1976,	4228,	2156,	1288,	449,	681

]
        },
        {
            name: '成都',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [15194,10912,	2743,	11100	,14095,	11500,	18981	,12694	,18754	,15434	,13397	,10269	,21902	,17736	,14978	,8328	,11006	,10176,7890	,9618,	11883,	17733,	26659,	9447,	8494

]
        },
        {
            name: '广州',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [1232,	1685,	8,	0,	1655	,1402,	1572	,1466	,1069	,6,	1583	,1155	,1088,	1201,	1206,	1225	,1	,1227,1428,	1088,	1670,	1502,	1494,	6,	1079

]
        },
        {
            name: '武汉',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [0,0,0,	0,	0,	0,	0	,0	,0,	0,	0,0,0,	0,	191	,0,	2513,	0,	0,	2561,	2074,	0,	0	,0,	0,	0
]
        },
        {
            name: '杭州',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [0,0,0,	0,	0,	0,	0	,0	,0,	0,	0,	0	,0	,0	,0,	511	,0	,802,431,	501	,0	,0	,0,	0,	0

]
        },
        {
            name: '青岛',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [0,	0	,0	,0	,0	,0,	0,	193,	0	,0	,0	,0	,0	,0	,0	,0,	0,	0,0	,0	,0	,0	,0	,0	,0
]
        },
        {
            name: '南京',
            type: 'line',
            stack: '总量',
            label: {
                show: true,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [0	,0	,0	,0	,0	,0	,0	,0	,0,	0	,0	,0	,0,	0	,0	,1545	,0,	0,1096,	4333,	3895,	4245,	0,	0,	0

]
        },
        {
            name: '日消均值线',
            type: 'line',
            symbol: 'rect',
            smooth: 'true',
            symbolSize: 0,
            showSymbol: 'false',
            lineStyle: {
                normal: {
                    width: 2
                }
            },

            data: [30978,30978,30978,30978,30978,30978,30978,30978,30978,30978,30978,30978,30978,30978,30978,30978,30978,30978,30978,30978,30978,30978,30978,30978,30978,30978]
        }



    ]
};