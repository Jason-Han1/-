function random(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

let xData = ['人员构成'],
    yData = [],
    barData = [];
barData2 = [];
barData3 = [];

for (let i = 0; i < xData.length; i++) {
    let value = random(5, 100);
    yData.push(100);
    // barData.push(10);
    // barData2.push(30);
    // barData3.push(50);
    barData.push(parseInt((value / 3 *2) * (random(1, 100) / 100)));
    barData2.push(parseInt((value / 3 *2) * (random(1, 100) / 100)));
    barData3.push(parseInt((value / 3 *2) * (random(1, 100) / 100)));
}

option = {
    backgroundColor: 'rgba(11,3,1,0.5)',
    tooltip: {
        trigger: 'item',
    },
    animation: false,
    xAxis: [
        {
            type: 'category',
            data: xData,
            axisTick: {
                alignWithLabel: true,
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                textStyle: {
                    color: '#ddd',
                },
                show:false,
            },
            interval: 1,
        },
    ],
    yAxis: [
        {
            show: false,
            type: 'value',
        },
    ],
    series: [
        {
            name: '内层波浪',
            type: 'pictorialBar',
            silent: true,
            symbolSize: [120, 18],
            symbolOffset: [0, 12],
            z: 1,
            itemStyle: {
                normal: {
                    color: '#363A76',
                },
            },
            data: yData,
        },
        {
            name: '非全日制',
            type: 'bar',
            stack: 'person',
            barWidth: 80,
            z: 12,
            itemStyle: {
                //lenged文本
                opacity: 0.7,
                color: function (params) {
                    return new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: '#AF7020', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#AF7020', // 100% 处的颜色
                            },
                        ],
                        false
                    );
                },
            },
            label:{
                show:true,
                position:"inside",
                formatter:"{c}%"
            },
            data: barData,
        },
        {
            name: '协议工',
            type: 'bar',
            barWidth: 80,
            stack: 'person',
            z: 12,
            itemStyle: {
                //lenged文本
                opacity: 0.7,
                color: function (params) {
                    return new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: '#127E78', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#127E78', // 100% 处的颜色
                            },
                        ],
                        false
                    );
                },
            },
            label:{
                show:true,
                position:"inside",
                formatter:"{c}%"
            },
            data: barData2,
        },
        {
            name: '职工',
            type: 'bar',
            barWidth: 80,
            stack: 'person',
            z: 12,
            itemStyle: {
                //lenged文本
                opacity: 0.7,
                color: function (params) {
                    return new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: '#1B4D96', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#1B4D96', // 100% 处的颜色
                            },
                        ],
                        false
                    );
                }
            },
            label:{
                show:true,
                position:"inside",
                formatter:"{c}%"
            },
            data: barData3,
        },
        {
            name: '最底层',
            type: 'pictorialBar',
            silent: true,
            symbolSize: [80, 10],
            symbolOffset: [0, 7],
            symbolPosition: 'start',
            z: 13,
            color: '#D79842',
            data: barData,
        },
        {
            name: '第二层',
            type: 'pictorialBar',
            silent: true,
            symbolSize: [80, 10],
            symbolOffset: [0, -5],
            z: 13,
            color: '#D79842',
            symbolPosition: 'end',
            data: barData,
        },
        {
            name: '第三层',
            type: 'pictorialBar',
            silent: true,
            symbolSize: [80, 10],
            symbolOffset: [0, -5],
            z: 13,
            color: '#53D9C2',
            symbolPosition: 'end',
            data: [barData[0] + barData2[0]],
        },
        {
            name: '最顶层',
            type: 'pictorialBar',
            silent: true,
            symbolSize: [80, 10],
            symbolOffset: [0, -5],
            z: 13,
            color: '#162F81',
            symbolPosition: 'end',
            data: [barData[0] + barData2[0] + barData3[0]],
        },
    ],
};
