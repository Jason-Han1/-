/**
 *
 * 作者: missMa
 * 描述: 柱状图
 *
 */
let xLabel = ['市区', '市南', '市北', '万州', '城口', '秀山', '川东', '綦南', '武隆'];
option = {
    tooltip: {},
    backgroundColor: '#0f375f',
    animation: false,
    grid: {
        top: '25%',
        bottom: '10%', //也可设置left和right设置距离来控制图表的大小
    },
    xAxis: {
        data: xLabel,
        axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
                color: '#11417a',
            },
        },
        axisTick: {
            show: false, //隐藏X轴刻度
        },
        axisLabel: {
            show: true,
            margin: 14,
            fontSize: 14,
            textStyle: {
                color: '#A3C0DF', //X轴文字颜色
            },
        },
    },
    yAxis: [
        {
            type: 'value',
            gridIndex: 0,
            min: 0,
            max: 100,
            interval: 25,
            // splitNumber: 4,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#113763',
                    width: 1,
                },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#11417a',
                },
            },
            axisLabel: {
                show: true,
                margin: 14,
                fontSize: 14,
                textStyle: {
                    color: '#A3C0DF', //X轴文字颜色
                },
            },
        },
    ],
    series: [
        {
            // 值
            name: '采集覆盖率情况',
            type: 'bar',
            barWidth: 30,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(249,255,59,1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(15,38,35,0.2)',
                        },
                    ]),
                },
            },
            data: [88.6, 88.9, 89, 88.8, 88.8, 20, 20, 20, 20],
            z: 10,
            zlevel: 2,
            label: {
                show: true,
                position: 'top',
                distance: 10,
                fontSize: 16,
                fontFamily:'DIN',
                color: '#ffffff',
                zlevel: 4,
                z: 10,
                formatter:'{c}%'
            },
        },
        {
            // 值分隔
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: '#0F375F',
                },
            },
            symbolRepeat: 'fixed',
            symbolMargin: 3,
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [30, 3],
            symbolPosition: 'start',
            symbolOffset: [0, -1],
            // symbolBoundingData: this.total,
            data: [88.6, 88.9, 89, 88.8, 88.8, 20, 20, 20, 20],
            width: 25,
            z: 0,
            zlevel: 3,
        },
        {
            //辅助背景图形
            name: '背景条',
            type: 'bar', //pictorialBar
            barWidth: '30',
            barGap: '-100%',
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    color: 'rgba(146,158,48,0.2)',
                },
                barBorderRadius: 10,
            },
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100],
            z: 0,
            zlevel: 0,
        },
        {
            // 背景分隔
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: '#0F375F',
                },
            },
            symbolRepeat: 'fixed',
            symbolMargin: 3,
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [30, 3],
            symbolPosition: 'start',
            symbolOffset: [0, -1],
            // symbolBoundingData: this.total,
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100],
            width: 25,
            z: 0,
            zlevel: 1,
        },
    ],
};
