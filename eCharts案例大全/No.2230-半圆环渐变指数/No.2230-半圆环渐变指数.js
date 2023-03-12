
// 运行版本：4.8.0
let value = 55.33;
let title = '超期率';
let int = value.toFixed(2).split('.')[0];
let float = '℃';
let color1 = new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: '#FEB918'
                    }, {
                        offset: 1,
                        color: '#F7F5DF'
                    }]);
let color = new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
        offset: 0,
        color: '#FEB918' // 0% 处的颜色
    },
    {
        offset: 0.1,
        color: '#FCCB54' // 100% 处的颜色
    },
    {
        offset: 0.8,
        color: '#F9E09B' // 100% 处的颜色
    },
    {
        offset: 1,
        color: '#F7F5DF' // 100% 处的颜色
    }
]);

option = {
    backgroundColor: '#051F54',
    title: {
        text: '{a|'+ int +'}{b|.'+ float +'}\n{c|'+ title +'}',
        left: '30%',
        top: "46%",
        textStyle: {
            rich:{
                a: {
                    fontSize: 60,
                    color: '#29EEF3'
                },
                b: {
                    fontSize: 20,
                    color: '#29EEF3',
                    padding: [0,0,14,0]
                },
                c: {
                    fontSize: 20,
                    color: '#ffffff',
                    padding: [5,0]
                }
            }
        }
    },
    series: [
        {
            type: 'gauge',
            radius: '50%',
            clockwise: false,
            startAngle: '-145',
            endAngle: '145',
            splitNumber: 3,
            detail: {
                offsetCenter: [0, -20],
                formatter: ' '
            },
            pointer: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [0, '#2CFAFC'],
                        [1, color]
                    ],
                    width: 30
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 32,
                lineStyle: {
                    color: '#051F54',
                    width: 6
                }
            },
            axisLabel: {
                show: false
            }
        }
    ]
};