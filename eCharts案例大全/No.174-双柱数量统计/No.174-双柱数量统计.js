function random(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

let xData = ['开关电源', '铅酸电池', 'UPS设备', '普通空调', '机房环境', '智能电表'],
    yData = [],
    barData = [];

for (let i = 0; i < xData.length; i++) {
    let value = random(5, 100);
    yData.push(value);
    barData.push(parseInt((value / 3 *2) * (random(1, 100) / 100)));
}

option = {
    backgroundColor: '#062544',
    grid: {
        top: '10%',
        left: '-5%',
        bottom: '5%',
        right: '5%',
        containLabel: true,
    },
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
                margin: 30,
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
            name: '上部圆',
            type: 'pictorialBar',
            silent: true,
            symbolSize: [40, 10],
            symbolOffset: [0, -6],
            symbolPosition: 'end',
            z: 12,
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#5BFCF4',
                },
            },
            color: '#5BFCF4',
            data: yData,
        },
        {
            name: '底部圆',
            type: 'pictorialBar',
            silent: true,
            symbolSize: [40, 10],
            symbolOffset: [0, 7],
            z: 12,
            color: '#5BFCF4',
            data: yData,
        },
        {
            name: '内层波浪',
            type: 'pictorialBar',
            silent: true,
            symbolSize: [50, 15],
            symbolOffset: [0, 12],
            z: 10,
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderColor: '#5BFCF4',
                    borderType: 'solid',
                    borderWidth: 8,
                },
            },
            data: yData,
        },
        {
            name: '外层波浪',
            type: 'pictorialBar',
            silent: true,
            symbolSize: [70, 20],
            symbolOffset: [0, 18],
            z: 10,
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderColor: 'rgba(91,252,244,0.5)',
                    borderType: 'solid',
                    borderWidth: 5,
                },
            },
            data: yData,
        },
        {
             name: '设备数量',
            type: 'bar',
            barWidth: '40',
            barGap: '10%', // Make series be overlap
            barCateGoryGap: '10%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 0.7, [
                        {
                            offset: 0,
                            color: 'rgba(210,210,210,0.3)',
                        },
                        {
                            offset: 1,
                            color: '#5BFCF4',
                        },
                    ]),
                    opacity: 0.8,
                },
            },
            data: yData,
        },
        {
            name: '告警数量',
            type: 'bar',
            barWidth: 40,
            z: 12,
            barGap: '-100%',
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
                                color: '#EB3B5A', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#FE9C5A', // 100% 处的颜色
                            },
                        ],
                        false
                    );
                },
            },

            data: barData,
        },
         {
            name: '上部圆',
            type: 'pictorialBar',
            silent: true,
            symbolSize: [40, 10],
            symbolOffset: [0, -6],
            symbolPosition: 'end',
            z: 12,
            color: '#EB3B5A',
            data: barData,
        },
         {
            name: '底部圆',
            type: 'pictorialBar',
            silent: true,
            symbolSize: [40, 10],
            symbolOffset: [0, 7],
            z: 12,
            color: '#FE9C5A',
            data: barData,
        },
    ],
};
