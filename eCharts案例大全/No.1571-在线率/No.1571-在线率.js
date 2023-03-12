var xData2 = ['监控', '门禁', '停车场', '安防', '电梯', '道闸'];
var data1 = [30, 35, 60, 55, 38, 70];
var barWidth = 30;
option = {
    backgroundColor: '#021132',
    tooltip: {
        trigger: 'item',
    },
    grid: {
        left: 100,
        bottom: 100,
    },
    xAxis: {
        data: xData2,
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#fff',
                fontSize: 16,
            },
            margin: 26, //刻度标签与轴线之间的距离。
        },
    },
    yAxis: {
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 16,
            },
        },
    },
    series: [
        {
            // 上半截柱子
            type: 'bar',
            barWidth: barWidth,
            barGap: '-100%',
            z: 0,
            itemStyle: {
                color: '#163F7A',
                opacity: 0.3,
            },
            tooltip: {
              trigger: 'none'  
            },
            emphasis: {
                itemStyle: {
                    color: '#163F7A'
                }
            },
            data: new Array(xData2.length).fill(100),
        },
        {
            //下半截柱子
            name: '2020',
            type: 'bar',
            barWidth: barWidth,
            barGap: '-100%',
            itemStyle: {
                //lenged文本
                opacity: 1,
                color: function (params) {
                    return new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgb(25, 106, 221)', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgb(32, 189, 244)', // 100% 处的颜色
                            },
                        ],
                        false
                    );
                },
            },
            data: data1,
        },
        {
            // 替代柱状图 默认不显示颜色，是最下方柱图（邮件营销）的value值 - 20
            type: 'bar',
            barWidth: barWidth,
            barGap: '-100%',
            stack: '广告',
            itemStyle: {
                color: 'transparent',
            },
            data: data1,
        },
        {
            //上半截柱子顶部圆片
            name: '',
            type: 'pictorialBar',
            symbolSize: [barWidth, 16],
            symbolOffset: [0, -8],
            z: 12,
            symbolPosition: 'end',
            itemStyle: {
                color: '#163F7A',
                opacity: 1,
            },
            tooltip: {
              trigger: 'none'  
            },
            emphasis: {
                itemStyle: {
                    color: '#163F7A'
                }
            },
            data: new Array(xData2.length).fill(100),
        },
        {
            //下半截柱子顶部圆片
            name: '',
            type: 'pictorialBar',
            symbolSize: [barWidth, 16],
            symbolOffset: [0, -8],
            z: 12,
            itemStyle: {
                opacity: 1,
                color: 'rgb(26, 158, 230)',
            },
            symbolPosition: 'end',
            data: data1,
        },
        {
            //下半截柱子底部圆片
            name: '',
            type: 'pictorialBar',
            symbolSize: [barWidth, 16],
            symbolOffset: [0, 8],
            z: 12,
            itemStyle: {
                opacity: 1,
                color: 'rgb(23, 97, 222)',
            },
            data: new Array(xData2.length).fill(1),
        },
    ],
};
