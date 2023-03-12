const barData1 = [30, 30, 21, 35, 19, 17, 30, 33]; //柱状图数据
const barData2 = [22, 35, 23, 40, 15, 24, 40, 21]; //柱状图数据
const lineData = [39, 50, 54, 49, 50, 46, 56, 54]; //折线图数据

option = {
    backgroundColor: '#000',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none',
            label: {
                show: false,
            },
        },
    },
    grid: {
        left: '4%',
        top: '10%',
        right: '5%',
        bottom: '12%', 
    },
    legend: {
        padding: [0, 100],
        data: [
            {
                name: '未完成',
                icon: 'circle',
                textStyle: { color: '#ffffff' },
            },
            {
                name: '已完成',
                icon: 'circle',
                textStyle: { color: '#ffffff' },
            },
            {
                name: '成功率',
                icon: 'circle',
                textStyle: { color: '#ffffff' },
            },
        ],
        top: '4%',
        right: '3%',
        textStyle: {
            color: '#1FC3CE',
            fontSize: 16,
        },
    },
    xAxis: {
        data: [
            '06-01',
            '06-02',
            '06-03',
            '06-04',
            '06-05',
            '06-06',
            '06-07',
            '06-08'
        ],
        axisLine: {
            show: false, //隐藏X轴轴线
        },
        axisTick: {
            show: false, //隐藏X轴刻度
            alignWithLabel: true,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#0b78d5', //X轴文字颜色
                fontSize: 12,
            },
            margin: 12,
            interval: 0
        },
    },
    yAxis: [
        {
            type: 'value',
            name: '单位：%',
            max: 100,
            splitNumber: 8,
            nameTextStyle: {
                color: '#0b78d5',
                fontSize: 14,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(21, 78, 129, 0.5 )',
                    type: 'solid',
                },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#0b78d5',
                    fontSize: 12,
                },
            },
        },
        {
            type: 'value',
            name: '单位：件', 
            max: 100,
            splitNumber: 8,
            nameTextStyle: {
                color: '#0b78d5',
                fontSize: 14,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(92, 229, 192, 0.2)',
                    type: 'solid',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#0b78d5',
                    fontSize: 12,
                },
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false
            },
        },
    ],
    series: [
         {
            name: '已完成',
            type: 'bar',
            barWidth: 12,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(60, 211, 158, 1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(60, 211, 158, 0.1)',
                        },
                    ]),
                },
            },
            data: barData2,
            label: {
                show: true,
                position: 'top',
                distance: 5,
                fontSize: 12,
                color: '#FFFFFF',
            },
        },
        {
            name: '未完成',
            type: 'bar',
            barWidth: 12,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(218, 227, 108, 1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(218, 227, 108, 0.1)',
                        },
                    ]),
                },
            },
            data: barData1,
            label: {
                show: true,
                position: 'top',
                distance: 5,
                fontSize: 12,
                color: '#FFFFFF',
            },
        },
       
        {
            name: '成功率',
            type: 'line',
            smooth: true,
            yAxisIndex: 1,
            showAllSymbol: true, //显示所有图形。
            symbol: 'circle', //标记的图形为实心圆
            symbolSize: 8, //标记的大小
            itemStyle: {
                //折线拐点标志的样式
                color: 'rgba(88, 222, 196, 1)',
            },
            lineStyle: {
                color: 'rgba(55, 168, 192, 1)',
                width: 2,
                shadowBlur: 2,
            },
                areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(92, 106, 142, 0.4)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(92, 106, 142, 0.4)'
                        }
                    ], false),
                }
            },
            data: lineData,
        },
    ],
};
