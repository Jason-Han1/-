option = {
    backgroundColor: 'rgba(0,0,0, .9)',
    title: {
        text: '水质(mg/L)',
        textStyle: {
            color: '#fff',
            fontSize: 12,
        },
        left: '20px',
        top: '10px',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgba(0, 255, 233,0)',
                        },
                        {
                            offset: 0.5,
                            color: 'rgba(255, 255, 255,1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(0, 255, 233,0)',
                        },
                    ],
                    global: false,
                },
            },
        },
        renderMode: 'html',
        backgroundColor: 'rgba(15, 45, 83, 0.9)',
        borderWidth: 0,
        borderColor: 'rgba(15, 45, 83, 0.9)',
        textStyle: {
            color: '#fff',
        },
        formatter: (val) => {
            const style = 'display: inline-block;width: 10px;height: 10px;background: #fff;border-radius: 50%;';
            const tooltip = val
                .map((i) => {
                    const { seriesName, color, value } = i;
                    return `<span class="border" style='${style} border:2px solid ${color}'></span> ${seriesName}: ${value} mg/L`;
                })
                .join('<br />');
            return tooltip;
        },
    },
    grid: {
        top: '15%',
        left: '16%',
        right: '5%',
        bottom: '10%',
        containLabel: false,
    },
    xAxis: [
        {
            type: 'category',
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#39608F',
                },
            },
            splitArea: {
                color: '#f00',
                lineStyle: {
                    color: '#f00',
                },
            },
            axisLabel: {
                color: '#fff',
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            boundaryGap: true,
            data: ['1日', '2日', '3日', '4日', '5日', '6日', '7日'],
        },
    ],

    yAxis: [
        {
            type: 'value',
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#39608F',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#d1e6eb',
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#39608F',
                },
            },
        },
    ],
    series: [
        {
            name: '氨氮',
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 10,
            lineStyle: {
                normal: {
                    color: '#2A74FF',
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 0,
                    shadowOffsetY: 5,
                    shadowOffsetX: 5,
                },
            },
            label: {
                show: false,
            },

            itemStyle: {
                color: '#2A74FF',
                borderColor: '#fff',
                borderWidth: 2,
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 6,
                shadowOffsetX: 2,
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(42, 116, 255, 0.2)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(42, 116, 255, 0)',
                            },
                        ],
                        false
                    ),
                    shadowColor: 'rgba(0,179,244, 0.9)',
                    shadowBlur: 20,
                },
            },
            data: [45, 55, 63, 45, 32, 47, 31],
        },
        {
            name: 'COD',
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 10,
            lineStyle: {
                normal: {
                    color: '#FFE867',
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 0,
                    shadowOffsetY: 5,
                    shadowOffsetX: 5,
                },
            },
            label: {
                show: false,
            },

            itemStyle: {
                color: '#FFE867',
                borderColor: '#fff',
                borderWidth: 2,
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 1,
                shadowOffsetX: 1,
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(254, 205, 54, 0.2)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(254, 205, 54, 0)',
                            },
                        ],
                        false
                    ),
                    shadowColor: 'rgba(0,179,244, 0.9)',
                    shadowBlur: 20,
                },
            },
            data: [35, 31, 45, 22, 14, 24, 14],
        },
    ],
};
