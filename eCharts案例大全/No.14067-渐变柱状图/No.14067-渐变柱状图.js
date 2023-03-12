var Color = ['#3b7186', '#2e8d94', '#637b69', '#789b6f',
    '#3b64a6', '#2672cc', '#503e8d', '#5d3ec5',
    '#874f5f', '#b6575c', '#623363', '#962e66'
]
var xData = function() {
        var data = [];
        for (var i = 2011; i < 2017; i++) {
            data.push(i + "年");
        }
        return data;
    }();

option = {
    backgroundColor: '#131e54',
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },

    tooltip: {
        show: "true",
        trigger: 'item',
        formatter: '{b}<br />{a0}: {c0}%',
        backgroundColor: 'rgba(0,0,0,0.7)', // 背景
        padding: [8, 10], //内边距
        extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#32346c',
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#32346c ',
            }
        },
        axisLabel: {
            textStyle: {
                color: '#bac0c0',
                fontWeight: 'normal',
                fontSize: '12',
            },
            formatter: '{value}%',
        },
    },
    yAxis: {
        type: 'category',
        axisLine: {
            lineStyle: {
                color: '#32346c'
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitArea: {
            show: false
        },
        axisLabel: {
            inside: false,
            textStyle: {
                color: '#bac0c0',
                fontWeight: 'normal',
                fontSize: '12',
            },
        },
        data:xData
    },
    series: [{
            name: '民众言论倾向性趋势',
            type: 'bar',
            itemStyle: {
                normal: {
                    show: true,
                    color: function(params) {
                        var colorList = [];
                        for (var i = 6; i > 0; i--) {
                            colorList.push({
                                type: 'bar',
                                colorStops: [{
                                    offset: 0,
                                    color: Color[i*2 - 2] // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: Color[i*2 - 1] // 100% 处的颜色
                                }],
                                globalCoord: false, // 缺省为 false

                            });
                        }

                        return colorList[params.dataIndex]
                    },
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barGap: '0%',
            barCategoryGap: '50%',
            data: [12, 32, 91, 34, 76, 20]
        }

    ]
};