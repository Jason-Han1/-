var yName = ['昂科能源12', '华能国际', '龙源', '三峡', '神华集团', '中电投', '江苏国信'];
var value = ['21.23', '22', '1.12', '2.5', '4.8', '12', '27'];
var valueMax = ['27', '27', '27', '27', '27', '27', '27'];

option = {
    tooltip: {
        trigger: 'axis',
        show: true,
        formatter: (params) => {
            // console.log('params', params)
            return params[0].name + `<br/> ` + `装机容量：` + params[0].value + `万千瓦`;
        },
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '3%',
        bottom: '2%',
        width: '92%',
        height: '100%',
        top: "2%",
        containLabel: true
    },
    xAxis: {
        show: false,
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: [{
            type: 'category',
            // data: ['昂科能源','华能国际','龙源','三峡','神华集团','中电投','江苏国信'],
            data: yName,
            axisLabel: {
                show: true,

                // 强制显示所有标签
                interval: 0,
                textStyle: {
                    color: "#fff",
                    fontSize: 14
                },
                formatter: function(value) {
                    var res = value;
                    if (res.length > 5) {
                        res = res.substring(0, 4) + "..";
                    }
                    return res;
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'red',
                    width: 0, //这里是为了突出显示加上的
                }
            },
            // 隐藏x轴刻度
            axisTick: {
                show: false
            }
        },
        {
            type: 'category',
            // data: ['昂科能源','华能国际','龙源','三峡','神华集团','中电投','江苏国信'],
            data: value,
            axisLabel: {
                show: true,
                margin: -80,
                // 强制显示所有标签
                interval: 0,
                textStyle: {
                    color: "#fff",
                    fontSize: 14
                }
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#2F798e',
                    width: 2, //这里是为了突出显示加上的
                }
            },
            // 隐藏x轴刻度
            axisTick: {
                show: false
            }
        }
    ],
    series: [{
            name: '',
            type: 'bar',
            barGap: '-100%',
            zlevel: 10,
            // data: [1000,2344,2566,2890,3000,3500,4000],
            data: value,
            barWidth: '20%',//宽度
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                            offset: 0,
                            color: 'rgb(0,150,255)'
                        },
                        {
                            offset: 1,
                            color: '#0000ff'
                        }
                    ]),
                    // 设置柱状图的圆角  上右下左
                    barBorderRadius: [100, 100, 100, 100]
                }
            },
        },
        {
            name: '',
            type: 'bar',
            // data: [20, 20, 20, 20, 20, 20, 20],
            data: valueMax,
            barWidth: '20%', //宽度
            itemStyle: {
                normal: {
                    color: "#000",
                    barBorderRadius: [100, 100, 100, 100]
                }
            },
        }
    ]
};