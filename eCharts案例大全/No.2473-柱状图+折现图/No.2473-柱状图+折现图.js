option = {
    grid: {
        top: '25%',
        bottom: '10%', //也可设置left和right设置距离来控制图表的大小
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            label: {
                show: true,
            },
        },
    },
    legend: {
        data: ['净利润', '净资产收益率'],
        top: '15%',
        textStyle: {
            color: '#747474',
        },
    },
    xAxis: {
        data: ['2016', '2017', '2018', '2019', '2020', '2021'],
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#393939', //X轴文字颜色
            },
        },
    },
    yAxis: [
        {
            type: 'value',
            name: '(亿元)',
            nameTextStyle: {
                color: '#393939',
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#eeeeee',
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
                    color: '#393939',
                },
            },
        },
        {
            type: 'value',
            name: '(%)',
            nameTextStyle: {
                color: '#393939',
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
                show: true,
                textStyle: {
                    color: '#393939',
                },
            },
        },
        {
            type: 'value',
            gridIndex: 0,
            min: 50,
            max: 100,
            splitNumber: 8,
            splitLine: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)'],
                },
            },
        },
    ],
    series: [
        {
            name: '净资产收益率',
            type: 'line',
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            showAllSymbol: true, //显示所有图形。
            symbol: 'circle', //标记的图形为实心圆
            symbolSize: 10, //标记的大小
            itemStyle: {
                //折线拐点标志的样式
                color: '#feb64e',
                borderWidth: '2',
                borderColor: '#fff',
            },
            lineStyle: {
                color: '#feb64e',
            },
            data: [50, 60, 65, 80, 90, 100],
        },
        {
            name: '净利润',
            type: 'bar',
            barWidth: 25,
            itemStyle: {
                normal: {
                    color: '#4389f9'
                },
            },
            data: [150, 175, 200, 225, 260, 290],
        },
    ],
};
