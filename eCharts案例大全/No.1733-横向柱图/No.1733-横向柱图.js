let nameArray = []; // 名称
let numArray = []; // 值
let totalArray = []; // 合计
let symbolArray = []; // 条形图尾部标志
let max = 0;
let chartData = [
                    {
                        name: '樟树',
                        value: 67
                    },
                    {
                        name: '银杏',
                        value: 57
                    },
                    {
                        name: '白皮松',
                        value: 42
                    },
                    {
                        name: '玉兰',
                        value: 35
                    },
                    {
                        name: '胡杨',
                        value: 32
                    }
                ];
// 只取前五条
chartData.forEach(ele => {
    nameArray.push(ele.name);
    numArray.push(ele.value);
    max = ele.value > max ? Math.ceil(ele.value / 100) * 100 : max;
    symbolArray.push({
        value: ele.value,
        symbolPosition: 'end'
    });
});

// 如果返回了total数量
totalArray = new Array(5).fill(max);
option = {
    backgroundColor: '#313131',
    grid: {
        top: 10,
        bottom: 0,
        left: 20,
        right: 20
    },
    tooltip: {
        // 格式化提示内容
        formatter: function (params) {
            return params.name + '<br/>' +
                "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#FDC131'></span>" +
                '数量 : ' + numArray[params.dataIndex] + '<br/>'
        }
    },
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: [{
        type: 'category',
        show: true,
        inverse: true,
        axisLabel: {
            show: false,
            textStyle: {
                color: 'rgba(255,255,255,.6)'
            },
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: nameArray
    }, {
        type: 'category',
        inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        axisLabel: {
            textStyle: {
                color: '#ffffff',
                fontSize: '14'
            },
            align: 'right',
            padding: [0, 8, 0, 0],
            verticalAlign: 'bottom',
            lineHeight: 36,
            // 空闲车位、占比
            formatter: function (value, index) {
                return `{a|${value}}`;
            },
            rich: {
                a: {
                    fontSize: 18,
                    fontFamily: 'OPPOSans',
                    padding: [0, 3, 0, 0]
                }
            }
        },
        data: numArray
    }],
    series: [
        // 条形图
        {
            name: '数量',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#1FBF75'
                    }, {
                        offset: 1,
                        color: '#3CDC92'
                    }])
                }
            },
            barWidth: 4,
            data: numArray,
            label: {
                normal: {
                    color: '#fff',
                    show: true,
                    position: [0, '-23px'],
                    textStyle: {
                        fontSize: '14',
                        fontFamily: 'customFont',
                        color: '#FFFFFF'
                    },
                    // 序号、停车场名称
                    formatter: function (value) {
                        return `{a|${value.dataIndex + 1}}{b|${value.name}}`;
                    },
                    rich: {
                        a: {
                            fontSize: 14,
                            fontFamily: 'OPPOSans',
                            color: '#1FBF75',
                            width: 22,
                            height: 14,
                            align: 'center',
                            verticalAlign: 'middle',
                            backgroundColor: 'rgba(60, 220, 146, .1)',
                            // padding: [0, 0, 3, 0]
                        },
                        b: {
                            fontSize: '14',
                            fontFamily: 'customFont',
                            color: '#FFFFFF',
                            padding: [0, 0, 0, 12]
                        }
                    }
                }
            }
        },
        // 背景条形图
        {
            name: '背景',
            type: 'bar',
            barWidth: 4,
            barGap: '-100%',
            data: totalArray,
            itemStyle: {
                normal: {
                    color: '#47515C'
                }
            },
        },
        // 条形图尾部方块
        {
            type: 'pictorialBar',
            symbol: 'rect',
            symbolSize: [4, 16],
            symbolOffset: [3, 0],
            zlevel: 2,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: '#FBDD9E'
                    }, {
                        offset: 1,
                        color: '#FFFFFF'
                    }]),
                    shadowBlur: 5,
                    shadowOffsetY: 2,
                    shadowColor: 'rgba(0, 0, 0, 0.72)'
                }
            },
            data: symbolArray
        }
    ]
};