var xData = ['1', '2', '3'],
    yData1 = ['91', '51', '29'],
    yData2 = ['83', '81', '20'],
    barWidth = 40,
    color1 = {
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        type: 'linear',
        global: false,
        colorStops: [
            {
                //第一节下面
                offset: 0,
                color: 'rgba(32, 170, 146,0.8)',
            },
            {
                offset: 1,
                color: 'rgba(20, 76, 41,1)',
            },
        ],
    },
    color2 = {
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        type: 'linear',
        global: false,
        colorStops: [
            {
                //第一节下面
                offset: 0,
                color: 'rgba(5, 164, 224,0.8)',
            },
            {
                offset: 1,
                color: 'rgba(16, 57, 89,1)',
            },
        ],
    },
    maxData=yData1.map(() => 100),
    circleData=yData1.map(() => ({ name: '', value: 100, symbolPosition: 'end' }));

option = {
    backgroundColor: 'rgb(6, 29, 43)', //背景色
    legend: {
        data: ['A', 'B'],
        icon: 'rect',
        top: 5,
        right: 10,
        textStyle: {
            color: '#fff',
            fontWeight: 'normal',
            fontSize: 12,
        },
    },
    //提示框
    tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    grid: {
        top: '25%',
        left: '5%',
        bottom: '10%',
        right: '5%',
        containLabel: true,
    },
    animation: false,
    xAxis: [
        {
            type: 'category',
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(0,228,255,1)',
                },
            },
            axisLabel: {
                inside: false,
                textStyle: {
                    color: '#fff',
                    fontWeight: 'normal',
                    fontSize: 12,
                },
                margin: 20, //刻度标签与轴线之间的距离。
            },
            data: xData,
        },
        {
            type: 'category',
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
            },
            splitLine: {
                show: false,
            },
            data: xData,
        },
    ],
    yAxis: [
        {
            show: true,
            type: 'value',
            axisLabel: {
                textStyle: {
                    color: '#fff',
                },
            },
            splitLine: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(0,228,255,1)',
                },
            },
        },
    ],

    series: [
        {
            name: '内部柱子顶部',
            type: 'pictorialBar',
            tooltip: { show: false },
            symbolSize: [barWidth, 10],
            symbolOffset: ['-81%', -5],
            symbolPosition: 'end',
            z: 15,
            color: 'rgba(45, 206, 177,0.9)',
            zlevel: 2,
            data: yData1,
        },
        {
            name: '内部柱子顶部2',
            type: 'pictorialBar',
            tooltip: { show: false },
            symbolSize: [barWidth, 10],
            symbolOffset: ['81%', -5],
            symbolPosition: 'end',
            z: 15,
            color: 'rgba(2, 175, 249,1)',
            zlevel: 2,
            data: yData2,
        },

        {
            name: '中间柱子1',
            type: 'bar',
            barGap: '60%',
            barWidth: barWidth,
            itemStyle: {
                color: color1,
                borderColor: color1,
                borderWidth: 1,
                borderType: 'solid',
            },
            label: {
                show: false,
                
            },
            zlevel: 2,
            data: yData1,
        },
        {
            name: '中间柱子2',
            type: 'bar',
            barGap: '60%',
            barWidth: barWidth,
            itemStyle: {
                color: color2,
                borderColor: color2,
                borderWidth: 1,
                borderType: 'solid',
            },
            label: {
                show: false,
            },
            zlevel: 2,
            data: yData2,
        },
        {
            name: '背景柱子1',
            type: 'bar',
            tooltip: { show: false },
            xAxisIndex: 1,
            barGap: '60%',
            data: yData1.map(() => 100),
            zlevel: 1,
            barWidth: barWidth,
            itemStyle: {
                normal: {
                    color: 'rgba(16, 56, 70,.8)',
                },
            },
        },
        {
            name: '背景柱子2',
            type: 'bar',
            tooltip: { show: false },
            xAxisIndex: 1,
            barGap: '60%',
            data: yData1.map(() => 100),
            zlevel: 1,
            barWidth: barWidth,
            itemStyle: {
                normal: {
                    color: 'rgba(9, 44, 76,.8)',
                },
            },
        },
        {
            name: '底部圆1',
            type: 'pictorialBar',
            tooltip: { show: false },
            symbolSize: [barWidth, 10],
            symbolOffset: ['-81%', 5],
            z: 12,
            color: 'rgb(19, 74, 35)',
            data: maxData,
        },
        {
            name: '底部圆2',
            type: 'pictorialBar',
            tooltip: { show: false },
            symbolSize: [barWidth, 10],
            symbolOffset: ['81%', 5],
            z: 12,
            color: 'rgb(16, 57, 89)',
            data: maxData,
        },
        // 头
        {
            name: '顶部圆1',
            type: 'pictorialBar',
            tooltip: { show: false },
            z: 20,
            zlevel: 3,
            symbolPosition: 'end',
            symbolSize: [barWidth, 10],
            symbolOffset: [-32, -5],
            itemStyle: {
                normal: {
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 5,
                    shadowOffsetY: 3,
                    shadowOffsetX: 0,
                    color: 'rgba(30, 100, 112,1)',
                },
            },
            data:circleData,
        },
        {
            name: '顶部圆2',
            type: 'pictorialBar',
            tooltip: { show: false },
            z: 20,
            zlevel: 2,
            symbolPosition: 'end',
            symbolSize: [barWidth, 10],
            symbolOffset: ['81%', -5],
            itemStyle: {
                normal: {
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 5,
                    shadowOffsetY: 3,
                    shadowOffsetX: 0,
                    color: 'rgba(15, 69, 133,1)',
                },
            },
            data: circleData,
        },
    ],
};
