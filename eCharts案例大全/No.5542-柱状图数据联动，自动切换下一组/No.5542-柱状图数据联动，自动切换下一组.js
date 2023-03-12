var tarr = ["左涉207",
    "吕梁209",
    "隰吉高速",
    "昔榆高速",
    "离隰高速",
    "黎霍高速"
];
var arr = [{
        name: '报告总数',
        data: ['12', '23', '34', '4', '15', '76']
    }, {
        name: '合格数量',
        data: ['15', '26', '37', '54', '57', '36']
    },

];


var attrs = [{
        name: "报告总数",
        unit: "份数",
    },
    {
        name: "合格数量",
        unit: "份数",
    },
];


var pj = function(v, x) {
    return v.concat(x);
}

var dataArrs = []
var setDataObj = function() {
    for (let key in tarr) {

        if (key == 0) {
            dataArrs.push({
                xAxis: {
                    'data': [tarr[tarr.length - 1], tarr[Number(key)], tarr[Number(key) + 1]]
                },
                name: tarr[key],
                series: [{
                        'data': [100, 100, 100]
                    },
                    {
                        data: pj(arr[0].data.slice(arr[0].data.length - 1), arr[0].data.slice(0, 2)), //0 军委首长 数据3条 第一天线 1月份 2y月份 月份数据3y
                    },
                    {
                        data: pj(arr[1].data.slice(arr[1].data.length - 1), arr[1].data.slice(0, 2)), //第二条线 1军委机关及院领导
                    },

                ],
            })
        } else if (key == tarr.length - 1) {
            dataArrs.push({
                name: tarr[key],
                xAxis: {
                    'data': [tarr[tarr.length - 2], tarr[tarr.length - 1], tarr[0]]
                },
                series: [{
                        'data': [100, 100, 100]
                    },
                    {
                        data: pj(arr[0].data.slice(arr[0].data.length - 2), arr[0].data.slice(0, 1)),
                    },
                    {
                        data: pj(arr[1].data.slice(arr[1].data.length - 2), arr[1].data.slice(0, 1)),
                    },

                ],
            })
        } else {

            dataArrs.push({
                name: tarr[key],
                xAxis: {
                    'data': [tarr[Number(key) - 1], tarr[Number(key)], tarr[Number(key) + 1]]
                },
                series: [{
                        'data': [100, 100, 100]
                    },
                    {
                        data: arr[0].data.slice(key - 1, Number(key) + 2),
                    },
                    {
                        data: arr[1].data.slice(key - 1, Number(key) + 2),
                    },

                ],
            })
        }
    }
};


console.log(dataArrs)
option = {
    baseOption: {
        timeline: {
            data: ["左涉207",
                "吕梁209",
                "隰吉高速",
                "昔榆高速",
                "离隰高速",
                "黎霍高速"
            ],
            axisType: 'category',
            show: true,
            autoPlay: true,
            currentIndex: 0,
            loop: true,
            playInterval: 3000,

            lineStyle: {
                color: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.5,
                    colorStops: [{
                        offset: 0,
                        color: '#F8E240' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#1A8AD8' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                shadowBlur: "",
                type: "dashed",
                width: 1
            },
            controlStyle: {
                showNextBtn: true,
                showPrevBtn: true,
                showPlayBtn: true
            },

        },

        backgroundColor: "#000f1c",
        tooltip: {
            'trigger': 'axis',
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
            },

        },

        calculable: true,

        grid: {
            top: "30%",
            'y': 10,
            'y2': 80
        },

        "legend": {

            x: "50%",
            top: "5%",
            itemWidth: 15,
            itemHeight: 10,
            itemGap: 30,
            textStyle: {
                color: "#a6a6a6",
                fontSize: 12,
            },
            "data": ['报告总数', '合格数量'],

        },
        xAxis: {
            'type': 'category',
            axisLabel: {
                interval: 0,
                color: "#a5a8a8",
                fontSize: "12",
            },

        },
        yAxis: [{
                type: "value",
                name: "数量",
                nameTextStyle: {
                    color: "#a5a8a8",
                    align: "right",
                    lineHeight: 10,
                },
                axisLine: {
                    lineStyle: {
                        color: "#858B8E",
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    interval: 0,
                    color: "#a5a8a8",
                    fontSize: "12",
                },

                splitLine: {
                    show: true,
                    lineStyle: {
                        type: "dotted",
                        color: ["#212E37"],
                    },
                },
            },
            {
                'type': 'value',

                'show': false
            }
        ],
        series: [{
                type: 'line',
                barWidth: 50,
                animation: false,
                data: [100, 100, 100],
                itemStyle: {
                    normal: {
                        color: 'transparent',
                        opacity: 0.8
                    },
                },
                tooltip: {
                    show: false
                }

            },
            {
                'name': '报告总数',
                'yAxisIndex': 1,
                'type': 'bar',
                barWidth: "30%",

                lineStyle: {
                    normal: {
                        color: "#4D67D6",

                    },
                },
                label: {
                    // show: true,
                    position: 'top',
                    textStyle: {
                        color: '#4D67D6',
                    }
                },
                itemStyle: {
                    color: "#4D67D6",

                },

                'data': [10, 10, 10],


            },
            {

                'name': '合格数量',
                'yAxisIndex': 1,
                'type': 'bar',
                barWidth: "30%",

                lineStyle: {
                    normal: {
                        color: "#66FF66",

                    },
                },
                label: {
                    // show: true,
                    position: 'top',
                    textStyle: {
                        color: '#66FF66',
                    }
                },

                itemStyle: {
                    color: "#66FF66",

                },

                'data': [20, 20, 20], //第二条线


            },

        ],
    },
    options: dataArrs,
};

setDataObj();