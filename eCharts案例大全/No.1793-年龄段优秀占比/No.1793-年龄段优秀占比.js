var barData1 = []; //柱状图数据
var barData2 = []; //柱状图数据
var lineData = []; //折线图数据
for (var i = 0; i < 8; i++) {
    var barNumber1 = Math.floor(Math.random() * 1000);
    var barNumber2 = Math.floor(Math.random() * 1000);
    var lineNumber = Math.floor(Math.random() * 1000);
    barData1.push(barNumber1);
    barData2.push(barNumber2);
    lineData.push(lineNumber);
}

var option = {
    backgroundColor: '#200069',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none',
            label: {
                show: true,
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
        data: [
            {
                name: '优秀人数',
                textStyle: { color: '#ffffff' },
            },
            {
                name: '称职人数',
                textStyle: { color: '#ffffff' },
            },
            {
                name: '其它数据',
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
            '20~25岁',
            '26~30岁',
            '31~35岁',
            '36~40岁',
            '41~45岁',
            '46~50岁',
            '51~55岁',
            '56~60岁'
        ],
        axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
                color: '#502297',
                width: 1,
                type: 'dashed',
            },
        },
        splitLine: {
            show: true,
            interval: 'auto',
            lineStyle: {
                color: ['#502297'],
                type: 'dashed',
            },
        },
        axisTick: {
            show: false, //隐藏X轴刻度
            alignWithLabel: true,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#FFFFFF', //X轴文字颜色
                fontSize: 12,
            },
            margin: 12,
            interval: 0
        },
    },
    yAxis: [
        {
            type: 'value',
            name: '',
            splitNumber: 8,
            nameTextStyle: {
                color: '#396A87',
                fontSize: 14,
            },
            splitLine: {
                show: true,
                interval: 'auto',
                lineStyle: {
                    color: ['#502297'],
                    type: 'dashed',
                },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: '#502297',
                    width: 1,
                    type: 'dashed',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#FFFFFF',
                    fontSize: 12,
                },
            },
        },
        {
            type: 'value',
            name: '',
            nameTextStyle: {
                color: '#396A87',
                fontSize: 14,
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
                lineStyle: {
                    color: '#396A87',
                    width: 2,
                },
            },
            axisLabel: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: '优秀人数',
            type: 'bar',
            barWidth: 18,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#FFC900',
                        },
                        {
                            offset: 1,
                            color: '#FE7B00',
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
            name: '称职人数',
            type: 'bar',
            barWidth: 18,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#0094FF',
                        },
                        {
                            offset: 1,
                            color: '#6002D9',
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
            name: '其它数据',
            type: 'line',
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            showAllSymbol: true, //显示所有图形。
            symbol: 'circle', //标记的图形为实心圆
            symbolSize: 8, //标记的大小
            itemStyle: {
                //折线拐点标志的样式
                color: '#ffffff',
                borderColor: '#0E9CFF',
                width: 2,
                shadowColor: '#0E9CFF',
                shadowBlur: 2,
            },
            lineStyle: {
                color: '#0E9CFF',
                width: 2,
                shadowBlur: 2,
            },
                areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(14, 156, 255, 0.6)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(14, 156, 255, 0.2)'
                        }
                    ], false),
                }
            },
            data: lineData,
        },
    ],
};
