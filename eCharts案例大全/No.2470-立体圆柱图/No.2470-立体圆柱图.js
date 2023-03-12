function random(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}


let xData = ['A', 'B', 'C', 'D', 'E', 'F'],
    yData = [],
    barData = [],maxData=[100,100,100,100,100,100];

for (let i = 0; i < xData.length; i++) {
    let value = random(5, 100);
    yData.push(value);
    barData.push(parseInt((value / 3 *2) * (random(1, 100) / 100)));
}

option = {
    backgroundColor: 'rgb(9, 43, 62)',
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
           
            color: '#226777',
            data: maxData,
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
             name: '背景圆柱',
            type: 'bar',
            barWidth: '40',
            barGap: '10%', // Make series be overlap
            barCateGoryGap: '10%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 0.7, [
                        {
                            offset: 0,
                            color: 'rgba(210,210,210,0.1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(210,210,210,0.1)',
                        },
                    ]),
                    opacity: 0.8,
                },
            },
            data: maxData,
        },
        {
            name: '内部柱子',
            type: 'bar',
            barWidth: 40,
            z: 12,
            barGap: '-100%',
             label: {
                normal: {
                    show: true,
                    position: 'top',
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#fff',
                },
            },
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
                                color: '#26d1ae', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#226e81', // 100% 处的颜色
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
            color: '#26d1ae',
            data: barData,
        },
         {
            name: '底部圆',
            type: 'pictorialBar',
            silent: true,
            symbolSize: [40, 10],
            symbolOffset: [0, 7],
            z: 12,
            color: '#215c74',
            data: barData,
        },
    ],
};
