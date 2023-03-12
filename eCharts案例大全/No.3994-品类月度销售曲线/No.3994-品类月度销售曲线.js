option = {
    title: {
        text: '品类月度销售曲线',
        textStyle: {
            color: '#fff',
            fontSize: 18,
        },
        x: 'center',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    grid: [{
            x: '7%',
            y: '7%',
            height: '20%',
            left: '16%',
            top: '20%',
            right: '8%',
        },
        {
            x: '7%',
            y2: '7%',
            height: '40%',
            left: '16%',
            right: '8%',
            bottom: '8%',
        },
    ],
    xAxis: [{
            show: false,
            type: 'category',
            gridIndex: 0,
            axisLabel: {
                color: '#fff',
            },
            axisLine: {
                lineStyle: {
                    color: '#fff',
                },
            },
            axisTick: {
                alignWithLabel: true,
            },
            data: [
                '2020年2月',
                '2020年3月',
                '2020年4月',
                '2020年5月',
                '2020年6月',
                '2020年7月',
                '2020年8月',
                '2020年9月',
                '2020年10月',
                '2020年11月',
                '2020年12月',
                '2021年1月',
            ],
        },
        {
            type: 'category',
            gridIndex: 1,
            axisLabel: {
                color: '#fff',
            },
            axisLine: {
                lineStyle: {
                    color: '#fff',
                },
            },
            axisTick: {
                show: false,
                alignWithLabel: true,
            },
            data: [
                '2020年2月',
                '2020年3月',
                '2020年4月',
                '2020年5月',
                '2020年6月',
                '2020年7月',
                '2020年8月',
                '2020年9月',
                '2020年10月',
                '2020年11月',
                '2020年12月',
                '2021年1月',
            ],
        },
    ],
    yAxis: [{
            type: 'value',
            gridIndex: 1,
            name: '销售规模(亿)',
            nameLocation: 'center',
            nameRotate: 0,
            nameGap: 0,
            nameTextStyle: {
                color: '#fff',
                padding: [0, 0, 0, 0], // 四个数字分别为上右下左与原位置距离
            },
            axisLabel: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
        },
        {
            type: 'value',
            gridIndex: 0,
            name: '销售额环比增速(%)',
            nameLocation: 'center',
            nameRotate: 0,
            nameGap: 0,
            nameTextStyle: {
                color: '#fff',
                padding: [0, 0, 0, 0], // 四个数字分别为上右下左与原位置距离
            },
            axisLabel: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
        },
    ],
    series: [{
            name: '销售额环比增速',
            xAxisIndex: 0,
            yAxisIndex: 1,
            type: 'line',
            barWidth: '60%',
            smooth: true,
            showSymbol: true,
            symbol: 'circle', //设定为实心点
            symbolSize: 15, //设定实心点的大小
            itemStyle: {
                normal: {
                    color: "#00b8ee", //改变折线点的颜色
                    lineStyle: {
                        color: "#0887ed", //改变折线颜色
                    },
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#fff',
                        },
                        formatter: function(p) {
                            return `${p.value}%`;
                        },
                    },
                },
            },
            data: ['-', 64.9, -5.9, 19.6, 1.9, -19.8, 14.2, -18.7, -23.3, 86.1, -26.7, 6.6],
        },
        {
            name: '销售规模',
            xAxisIndex: 1,
            yAxisIndex: 0,
            type: 'bar',
            barWidth: '60%',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#fff'
                        },
                        formatter: function(p) {
                            return `${p.value.toFixed(1)}`;
                        },
                    }
                }
            },
            data: [14.0, 23.1, 21.7, 26.0, 26.5, 21.2, 24.2, 19.7, 15.1, 28.1, 20.6, 22.0],
        },
    ],
};