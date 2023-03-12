var barData1 = []; //柱状图数据
var barData2 = []; //柱状图数据
for (var i = 0; i < 12; i++) {
    var barNumber1 = Math.floor(Math.random() * 1000);
    var barNumber2 = Math.floor(Math.random() * 1000);
    var lineNumber = Math.floor(Math.random() * 1000);
    barData1.push(barNumber1);
    barData2.push(barNumber2);
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
                name: '历年总成绩',
                textStyle: { color: '#ffffff' },
            },
            {
                name: '今年总成绩',
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
        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
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
            interval: 0,
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
            name: '历年总成绩',
            type: 'bar',
            barWidth: 18,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#FF5C5C',
                        },
                        {
                            offset: 1,
                            color: '#C625FF',
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
            name: '今年总成绩',
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
            data: barData2,
            label: {
                show: true,
                position: 'top',
                distance: 5,
                fontSize: 12,
                color: '#FFFFFF',
            },
        },
    ],
};
