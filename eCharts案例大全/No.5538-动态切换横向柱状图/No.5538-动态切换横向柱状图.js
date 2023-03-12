var tarr = [
    "左涉207",
    "吕梁209",
    "隰吉高速",
    "昔榆高速",
    "离隰高速",
    "黎霍高速"
];
var arr = [{
        name: '报告总数',
        data: ['12', '23', '34', '4', '15', '76']
    }

];

var colorArray = [{
        top: "#D1D579", //黄
        bottom: "#07151E",
    },
    {
        top: "#57CC73", //绿
        bottom: "#02141E",
    },
    {
        top: "#D1D479", //黄
        bottom: "#07151E",
    },
    {
        top: "#57CC73", //绿
        bottom: "#02141E",
    },
    {
        top: "#D1D479", //黄
        bottom: "#07151E",
    },
    {
        top: "#57CC73", //绿
        bottom: "#02141E",
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
                yAxis: {
                    'data': [tarr[tarr.length - 1], tarr[Number(key)], tarr[Number(key) + 1], tarr[Number(key) + 2]]
                },
                name: tarr[key],
                series: [{
                        'data': [100, 100, 100, 100]
                    },
                    {
                        data: pj(arr[0].data.slice(arr[0].data.length - 1), arr[0].data.slice(0, 3)), //0 军委首长 数据3条 第一天线 1月份 2y月份 月份数据3y
                    },


                ],
            })
        } else if (key == tarr.length - 1) {
            dataArrs.push({
                name: tarr[key],
                yAxis: {
                    'data': [tarr[tarr.length - 2], tarr[tarr.length - 1], tarr[0], tarr[1]]
                },
                series: [{
                        'data': [100, 100, 100, 100]
                    },
                    {
                        data: pj(arr[0].data.slice(arr[0].data.length - 2), arr[0].data.slice(0, 2)),
                    },

                ],
            })
        } else if (key == tarr.length - 2) {
            dataArrs.push({
                name: tarr[key],
                yAxis: {
                    // 'data': [tarr[Number(key) - 1], tarr[Number(key)], tarr[Number(key) + 1],tarr[Number(key) + 2]]
                    'data': [tarr[tarr.length - 4], tarr[Number(key) - 1], tarr[Number(key)], tarr[Number(key) + 1]]

                },
                series: [{
                        'data': [100, 100, 100, 100]
                    },
                    {
                        data: arr[0].data.slice(key - 2, Number(key) + 2),
                    },

                ],
            })
        } else {

            dataArrs.push({
                name: tarr[key],
                yAxis: {
                    'data': [tarr[Number(key) - 1], tarr[Number(key)], tarr[Number(key) + 1], tarr[Number(key) + 2]]
                },
                series: [{
                        'data': [100, 100, 100, 100]
                    },
                    {
                        data: arr[0].data.slice(key - 1, Number(key) + 3),
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
            show: false,
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

        calculable: true,

        grid: {
            top: "30%",
            'y': 10,
            'y2': 80
        },


        xAxis: {
            'type': 'value',
            show: false,
            axisLabel: {
                show: false,
                interval: 0,
                color: "#a5a8a8",
                fontSize: "12",
            },

            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
                interval: 0,
                color: "#a5a8a8",
                fontSize: "12",
            },

            splitLine: {
                show: false,

            },

        },
        yAxis: [{
                type: "category",
                // name: "数量",
                nameTextStyle: {
                    color: "#a5a8a8",
                    align: "right",
                    lineHeight: 10,
                },
                axisLine: {
                    show: false,
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
                    show: false,
                    lineStyle: {
                        type: "dotted",
                        color: ["#212E37"],
                    },
                },
                // data:attr
            },
            {
                'type': 'category',

                'show': false
            }
        ],
        series: [{
                type: 'line',
                barWidth: 50,
                symbol: 'circle',
                symbolSize: 25,
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
                'name': '能耗值',
                'yAxisIndex': 1,
                'type': 'bar',
                type: "bar",
                barWidth: "20px",

                lineStyle: {
                    normal: {
                        color: "#4D67D6",

                    },
                },
                label: {
                    normal: {
                        show: true,
                        position: "right",
                        formatter: "{c}%",
                        textStyle: {
                            color: "#fff", //color of value
                        },
                    },
                },
                itemStyle: {
                    normal: {
                        show: true,
                        color: function(params) {
                            let num = colorArray.length;
                            return {
                                type: "linear",
                                colorStops: [{
                                        offset: 0,
                                        color: colorArray[params.dataIndex % num].bottom,
                                    },
                                    {
                                        offset: 1,
                                        color: colorArray[params.dataIndex % num].top,
                                    },
                                    {
                                        offset: 0,
                                        color: colorArray[params.dataIndex % num].bottom,
                                    },
                                    {
                                        offset: 1,
                                        color: colorArray[params.dataIndex % num].top,
                                    },
                                    {
                                        offset: 0,
                                        color: colorArray[params.dataIndex % num].bottom,
                                    },
                                    {
                                        offset: 1,
                                        color: colorArray[params.dataIndex % num].top,
                                    },
                                    {
                                        offset: 0,
                                        color: colorArray[params.dataIndex % num].bottom,
                                    },
                                    {
                                        offset: 1,
                                        color: colorArray[params.dataIndex % num].top,
                                    },
                                    {
                                        offset: 0,
                                        color: colorArray[params.dataIndex % num].bottom,
                                    },
                                    {
                                        offset: 1,
                                        color: colorArray[params.dataIndex % num].top,
                                    },
                                    {
                                        offset: 0,
                                        color: colorArray[params.dataIndex % num].bottom,
                                    },
                                    {
                                        offset: 1,
                                        color: colorArray[params.dataIndex % num].top,
                                    },
                                ],

                            };
                        },
                        barBorderRadius: 50,
                        borderWidth: 1,
                        borderColor: "transparent",
                    },
                },
                barGap: "0%",
                barCategoryGap: "50%",

                'data': [10, 10, 10],


            },


        ],
    },
    options: dataArrs,
};

setDataObj();