let innerTopData = (_data) => {
    let arr = []
    let height = (1000 - 100) / 100
    _data.forEach(item => {
        if (item * height > 20) {
            arr.push({
                value: item
            })
        } else {
            arr.push({
                value: item,
                symbolOffset: [0, -25 + item * height]
            })
        }
    })
    return arr
}
let innerShadowData = (_data) => {
    let arr = []
    let height = (1000 - 100) / 100
    _data.forEach(item => {
        if (item < 100) {
            if (item * height > 20) {
                arr.push({
                    value: item
                })
            } else {
                arr.push({
                    value: item,
                    symbolOffset: [0, -47.5 + item * height]
                })
            }
        } else {
            arr.push({
                value: ''
            })
        }
    })
    return arr
}

var option_data = {
    "item0": {
        "unit": "户",
        "min": 19,
        "data": [
            2749,
            2414,
            2933,
            866,
            948,
            5933,
            10000
        ],
        "max": 8500,
        "name": "重点税源企业数量",
        "freq": "年度",
        "axis": []
    },
    "item1": {
        "unit": "亿",
        "min": 19,
        "data": [
            9620.12,
            9474.86,
            7844.95,
            6181.24,
            5670.43,
            14521.34,
            15000
        ],
        "max": 75,
        "name": "本年累计增值税发票销售额",
        "freq": "年度",
        "axis": []
    },
    "item2": {
        "unit": "亿",
        "min": 19,
        "data": [
            9768.15,
            8664.02,
            9982.6,
            6322.15,
            6264.69,
            11834.86,
            12000
        ],
        "max": 75,
        "name": "本年累计税收收入金额",
        "freq": "年度",
        "axis": []
    },
    "legend": [
        "重点税源企业数量",
        "本年累计增值税发票销售额",
        "本年累计税收收入金额"
    ],
    "dates": [
        "京津冀",
        "长三角",
        "粤港澳大湾区",
        "福建自贸试验区",
        "海南自贸港",
        "其他"
    ],
    "title": "分经济圈重点税源情况",
    "multi": []
};

// 初始化option的方法
function initVisualizer(x_value) {
    return {
        title: {
            x: "center",
            y: "3%",
            text: option_data.title,
            textStyle: {
                "color": "#000",
                "fontSize": 24,
                "fontFamily": "微软雅黑",
                "fontWeight": "normal"
            }
        },
        backgroundColor: '#ffffff',
        tooltip: {
            trigger: "item",
            formatter: function(params) {
                var res = params.name + '<br/>' + params.seriesName + ' : ' + params.value;
                if (params.seriesName == option_data.legend[0]) {
                    return res + option_data.item0.unit
                } else if (params.seriesName == option_data.legend[1]) {
                    return res + option_data.item1.unit
                } else if (params.seriesName == option_data.legend[2]) {
                    return res + option_data.item2.unit
                }
            }
        },
        grid: {
            "left": "6%",
            "top": "12%",
            "right": "4%",
            "bottom": "15%"
        },
        legend: {
            "orient": 'horizontal',
            "itemWidth": 18,
            "itemHeight": 18,
            "itemGap": 30,
            "y": "93%",
            "textStyle": { // 图例文字的样式
                "color": "#000",
                "fontSize": 18,
                "padding": [2, 0, 0, 2],
                "fontFamily": "微软雅黑",
                "fontWeight": "normal"
            },
            "data": option_data["legend"],
            "show": true
        },
        yAxis: {
            "type": "value",
            "axisLine": {
                "lineStyle": {
                    "color": "#fff"
                }
            },
            "nameTextStyle": {
                "fontSize": 14
            },
            "axisLabel": {
                "textStyle": {
                    "color": "#000",
                    "fontSize": 14,
                    "fontFamily": "微软雅黑",
                    "fontWeight": "normal"
                }
            },
            "splitLine": {
                "show": false
            }
        },
        xAxis: {
            "type": "category",
            "axisLine": {
                "lineStyle": {
                    "color": "#fff"
                }
            },
            "axisLabel": {
                "interval": 0,
                "textStyle": {
                    "color": "#000",
                    "fontSize": 14
                }
            },
            "splitLine": {
                "show": false
            },
            "interval": 1.0,
            "data": ["京津冀",
        "长三角",
        "粤港澳大湾区",
        "福建自贸试验区",
        "海南自贸港",
        "其他"]
        },
        series: [{ //指标1:柱子左半边
            name: option_data.item0.name,
            type: 'bar',
            z: 1,
            barWidth: 8,
            barGap: "20%",
            barCategoryGap: "20%",
            symbolOffset: [0, -6],
            offset: 0,
            data: option_data.item0.data,
            itemStyle: {
                normal: {
                    color: {
                        x: 1,
                        y: 0,
                        x2: 0,
                        y2: 0,
                        colorStops: [{
                                offset: 0,
                                color: '#00bfff'
                            },
                            {
                                offset: 1,
                                color: '#00bfff'
                            }
                        ]
                    },
                    opacity: 1
                }
            }
        }, { //指标1:柱子右半边
            name: option_data.item0.name,
            type: 'bar',
            barWidth: 8,
            z: 1,
            barGap: '-2%',
            symbolOffset: [0, -6],
            offset: 0,
            data: option_data.item0.data,
            itemStyle: {
                normal: {
                    color: {
                        x: 1,
                        y: 0,
                        x2: 0,
                        y2: 0,
                        colorStops: [{
                                offset: 0,
                                color: '#00bfff'
                            },
                            {
                                offset: 1,
                                color: '#00bfff'
                            }
                        ]
                    },
                    opacity: 1
                }
            }
        }, { //指标1:柱子顶部
            name: option_data.item0.name,
            type: 'pictorialBar',
            z: 1,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: '#e6b800'
                            },
                            {
                                offset: 1,
                                color: '#e6b800'
                            }
                        ]
                    )
                }
            },
            legendHoverLink: false,
            symbolSize: [14.8, 4 * -1.5],
            symbolOffset: [x_value[0], 2.8],
            symbolPosition: 'end',
            symbol: 'triangle',
            animation: false,
            data: innerTopData(option_data.item0.data)
        }, { //指标1:柱子底部
            name: option_data.item0.name,
            type: 'pictorialBar',
            z: 1,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: '#D5F6FB'
                            },
                            {
                                offset: 0.8,
                                color: '#204570'
                            },
                            {
                                offset: 1,
                                color: '#427BB4'
                            }
                        ]
                    )
                }
            },
            legendHoverLink: false,
            symbolSize: [14, 4 * 1.5],
            symbolOffset: [x_value[0], 0],
            symbolPosition: 'start',
            symbol: 'triangle',
            animation: false,
            data: innerTopData(option_data.item0.data)
        }, { //间隔用的柱子
            type: 'bar',
            barWidth: 6,
            symbolOffset: [0, -6],
            offset: 0,
            itemStyle: {
                normal: {
                    color: 'rgba(128, 128, 128, 0.1)'
                }
            }
        }, { //指标2:柱子左半边
            type: 'bar',
            z: 2,
            barWidth: 8,
            barGap: "40%",
            symbolOffset: [0, 6],
            offset: 20,
            name: option_data.item1.name,
            data: option_data.item1.data,
            itemStyle: {
                normal: {
                    color: {
                        x: 1,
                        y: 0,
                        x2: 0,
                        y2: 0,
                        colorStops: [{
                                offset: 0,
                                color: '#EF7272'
                            },
                            {
                                offset: 1,
                                color: '#F90101'
                            }
                        ]
                    },
                    opacity: 0.8
                }
            }
        }, { //指标2:柱子右半边
            type: 'bar',
            z: 2,
            barWidth: 8,
            barGap: '-2%',
            symbolOffset: [0, -6],
            offset: 0,
            name: option_data.item1.name,
            data: option_data.item1.data,
            itemStyle: {
                normal: {
                    color: {
                        x: 1,
                        y: 0,
                        x2: 0,
                        y2: 0,
                        colorStops: [{
                                offset: 0,
                                color: '#F90101'
                            },
                            {
                                offset: 1,
                                color: '#EF7272'
                            }
                        ]
                    },
                    opacity: 0.8
                }
            }
        }, { //指标2:柱子顶部
            name: option_data.item1.name,
            z: 2,
            type: 'pictorialBar',
            barCategoryGap: 22,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: '#EB8686'
                            },
                            {
                                offset: 1,
                                color: '#D95555'
                            }
                        ]
                    )
                }
            },
            legendHoverLink: false,
            //symbolSize: [6, 3],
            //symbolOffset: [0, 0],
            symbolSize: [14.8, 4 * -1.8],
            symbolOffset: [x_value[1], 3],
            symbolPosition: 'end',
            symbol: 'triangle',
            animation: false,
            data: innerTopData(option_data.item1.data)
        }, { //指标2:柱子底部
            z: 2,
            name: option_data.item1.name,
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: '#94D265'
                            },
                            {
                                offset: 0.8,
                                color: '#D66464'
                            },
                            {
                                offset: 1,
                                color: '#C94040'
                            }
                        ]
                    )
                }
            },
            legendHoverLink: false,
            symbolSize: [14, 4 * 1.5],
            symbolOffset: [x_value[1], 0],
            symbolPosition: 'start',
            symbol: 'triangle',
            animation: false,
            data: innerTopData(option_data.item1.data)
        }, { //间隔用的柱子
            type: 'bar',
            barWidth: 6,
            symbolOffset: [0, -6],
            offset: 0,
            itemStyle: {
                normal: {
                    color: 'rgba(128, 128, 128, 0.1)'
                }
            }
        }, { //指标3:柱子左半边
            name: option_data.item2.name,
            type: 'bar',
            z: 3,
            barWidth: 8,
            symbolOffset: [0, -6],
            offset: 0,
            data: option_data.item2.data,
            itemStyle: {
                normal: {
                    color: {
                        x: 1,
                        y: 0,
                        x2: 0,
                        y2: 0,
                        colorStops: [{
                                offset: 0,
                                color: '#ACE482'
                            },
                            {
                                offset: 1,
                                color: '#5D873E'
                            }
                        ]
                    },
                    opacity: 0.8
                }
            }
        }, { //指标3:柱子右半边
            name: option_data.item2.name,
            type: 'bar',
            z: 3,
            barWidth: 8,
            barGap: '-2%',
            symbolOffset: [0, -6],
            offset: 0,
            data: option_data.item2.data,
            itemStyle: {
                normal: {
                    color: {
                        x: 1,
                        y: 0,
                        x2: 0,
                        y2: 0,
                        colorStops: [{
                                offset: 0,
                                color: '#5D873E'
                            },
                            {
                                offset: 1,
                                color: '#ACE482'
                            }
                        ]
                    },
                    opacity: 0.8
                }
            }
        }, { //指标3:柱子顶部
            name: option_data.item2.name,
            z: 3,
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: '#ACE482'
                            },
                            {
                                offset: 1,
                                color: '#5D873E'
                            }
                        ]
                    )
                }
            },
            legendHoverLink: false,
            //symbolSize: [6, 3],
            //symbolOffset: [0, 0],
            symbolSize: [14.8, 4 * -1.5],
            symbolOffset: [x_value[2], 2.5],
            symbolPosition: 'end',
            symbol: 'triangle',
            animation: false,
            data: innerTopData(option_data.item2.data)
        }, { //指标3:柱子底部
            name: option_data.item2.name,
            z: 3,
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: '#ACE482'
                            },
                            {
                                offset: 0.8,
                                color: '#8ED15D'
                            },
                            {
                                offset: 1,
                                color: '#5D873E'
                            }
                        ]
                    )
                }
            },
            legendHoverLink: false,
            symbolSize: [14, 4 * 1.5],
            symbolOffset: [x_value[2], 0],
            symbolPosition: 'start',
            symbol: 'triangle',
            animation: false,
            data: innerTopData(option_data.item2.data)
        }]
    }
}

// 首次初始化option
var chart0 = echarts.init(document.getElementById('chart-panel'));
chart0.setOption(initVisualizer([-21.5, 0, 21.5]));

/*
    图例按钮的点击监听事件
    为了模拟柱子上下两头的浮雕立体效果，使用了两个
    pictorialBar象形柱状图，但是发现使用后，如果
    点击某个图例按钮后，无法跟随它的主人一起位移，
    所以这里自定义了一个图例监听事件，每次点击后
    重新setOption，并动态传入新的位移参数值。
*/
chart0.on('legendselectchanged', function(params) {

    // 如果三个指标都被选中
    if (params.selected[option_data["legend"][0]] &&
        params.selected[option_data["legend"][1]] &&
        params.selected[option_data["legend"][2]]) {
        chart0.setOption(initVisualizer([-21.5, 0, 21.5]));
    }

    //如果第一个图例被取消选中
    else if (!params.selected[option_data["legend"][0]] &&
        params.selected[option_data["legend"][1]] &&
        params.selected[option_data["legend"][2]]) {
        chart0.setOption(initVisualizer([null, -8, 14]));
    }

    //如果第二个图例被取消选中
    else if (params.selected[option_data["legend"][0]] &&
        !params.selected[option_data["legend"][1]] &&
        params.selected[option_data["legend"][2]]) {
        chart0.setOption(initVisualizer([-14, null, 13.5]));

    }

    //如果第三个图例被取消选中
    else if (params.selected[option_data["legend"][0]] &&
        params.selected[option_data["legend"][1]] &&
        !params.selected[option_data["legend"][2]]) {
        chart0.setOption(initVisualizer([-14, 8, null]));
    }

    //如果第一个、第二个图例都被取消选中
    else if (!params.selected[option_data["legend"][0]] &&
        !params.selected[option_data["legend"][1]] &&
        params.selected[option_data["legend"][2]]) {
        chart0.setOption(initVisualizer([null, null, 6]));
    }

    //如果第二个、第三个图例都被取消选中
    else if (params.selected[option_data["legend"][0]] &&
        !params.selected[option_data["legend"][1]] &&
        !params.selected[option_data["legend"][2]]) {
        chart0.setOption(initVisualizer([-6, null, null]));
    }

    //如果第一个、第三个图例都被取消选中
    else if (!params.selected[option_data["legend"][0]] &&
        params.selected[option_data["legend"][1]] &&
        !params.selected[option_data["legend"][2]]) {
        chart0.setOption(initVisualizer([null, 0, null]));
    }
});