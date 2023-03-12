var dataa = [1.5, 2.5, 3, 3, 1, 1, 1];

option = {
    backgroundColor: '#0b2848',
    tooltip: {
        formatter: `
        <div style="overflow:hidden;">
            <div style="clear:both;width:100%;>
                <div style="width: '100%'; height: '24px';">
                    <span style="line-height: 24px; font-size: 18px ;color: #ffffff">当前错误数</span>
                    <span style="line-height: 24px; font-size: 24px ;color: #2be1ec">{c1}</span>
                </div>
            </div>
        </div>`,
        trigger: "axis",
        axisPointer: {
            type: "none",
        }, 
        backgroundColor : 'rgba(43, 225, 236, 0.2)',
        borderWidth : 0,
    },
    xAxis: {
        data: ['10月5日', '10月6日', '10月7日', '10月8日', '10月9日', '10月10日', '10月11日'],
        axisLine: {
            show: false, 
        },
        axisTick: {
            show: false, 
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#2be1ec', //X轴文字颜色
                fontSize: 16,
            },
        },
        splitArea: {
            show: false,
        },
    },
    yAxis: [
        {
            type: 'value',
            nameTextStyle: {
                color: '#ebf8ac',
                fontSize: 16,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(43,225,236,0.1)',
                    width: 4,
                },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#2be1ec',
                    fontSize: 16,
                },
            },
        },
        {
            type: 'value',
            nameTextStyle: {
                color: '#ebf8ac',
                fontSize: 16,
            },
            position: 'right',
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
                show: false,
                formatter: '{value} %', //右侧Y轴文字显示
                textStyle: {
                    color: 'rgba(250,250,250,0.6)',
                    fontSize: 16,
                },
            },
        },
    ],
    series: [
        {
            name: '错误数',
            type: 'line',
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: true, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: 'circle', //标记的图形为实心圆
            symbolSize: 12, //标记的大小
            itemStyle: {
                //折线拐点标志的样式
                color: '#08feb6',
                borderColor: '#08feb6',
                width: 2,
                shadowColor: '#3D7EEB',
                shadowBlur: 4,
            },
            lineStyle: {
                color: '#08feb6',
                width: 2,
                shadowColor: '#08feb6',
                shadowBlur: 4,
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgba(61,126,235, 0)',
                    },
                    {
                        offset: 1,
                        color: 'rgba(61,126,235, 0)',
                    },
                ]),
            },
            data: dataa,
        },
        {
            name: '错误数',
            type: 'bar',
            barWidth: 30,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(43,225,236, 1)',
                        },
                        {
                            offset: 0.5,
                            color: 'rgba(43,225,236, 0.2)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(43,225,236, 0)',
                        },
                    ]),
                    borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(43,225,236, 1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(43,225,236, 0)',
                        },
                    ]),
                    borderWidth: 2,
                },
            },
            data: dataa,
        },
    ],
};
