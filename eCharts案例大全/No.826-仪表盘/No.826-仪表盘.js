var demoData = [{
    name: '',
    value: 48,
}, ];
option = {
    backgroundColor: '#02041B',
    series: [ { 
                    name: '背景圈',
                    type: 'gauge',
                    radius: '50%',
                    startAngle: 220,
                    endAngle: -40,
                    axisLine: { // 坐标轴线
                        roundCap: false,
                        lineStyle: { // 属性lineStyle控制线条样式
                            color: [
                                [
                                    1, '#1B2B37'
                                ],
                            ],
                            width: 20
                        }

                    },
                    splitLine: { //分隔线样式
                        show: false,
                    },
                    axisLabel: { //刻度标签
                        show: false,
                    },
                    pointer: {
                        show: false,
                    },
                    axisTick: { //刻度样式
                        show: false,
                    },
                    detail: {
                        show: false,
                    },
                    zlevel:1,
                },

                {
                    name: '背景圈',
                    type: 'gauge',
                    radius: '40%',
                    startAngle: 220,
                    endAngle: -40,
                    axisLine: { // 坐标轴线
                        roundCap: true,
                        lineStyle: { // 属性lineStyle控制线条样式
                            color: [
                                [
                                    1, '#25AFF4'
                                ],
                            ],
                            width: 2
                        }

                    },
                    splitLine: { //分隔线样式
                        show: false,
                    },
                    axisLabel: { //刻度标签
                        show: false,
                    },
                    pointer: {
                        show: false,
                    },
                    axisTick: { //刻度样式
                        show: false,
                    },
                    detail: {
                        show: false,
                    },
                    zlevel:1,
                },
                // 数据
                {
                    name: '',
                    type: 'gauge',
                    radius: '50%',
                    startAngle: 220,
                    endAngle: -45,
                    zlevel:3,
                    min: 0,
                    max: 100,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 20,
                            color: [
                                [
                                    4 / 100, '#25AFF4'  // 数值变量
                                ],
                                [
                                    1, 'rgba(255,255,255,.0)'
                                ]
                            ]
                        }
                    },
                    axisTick: {
                        show: 0,
                    },
                    splitLine: {
                        show: 0,
                    },
                    axisLabel: {
                        show: 0
                    },
                    pointer: {
                        show: false,
                    },
                    detail: {
                        show: true,
                        offsetCenter: [0, 0],
                        textStyle: {
                            fontSize: 32,
                            color: '#ffffff'
                        },
                        formatter:function(value){
                            return `${value}%`;
                        }
                    },
                    itemStyle: {
                        // color: 'rgba(255, 36, 74,.3)',
                    },
                    data: [{
                        value: 4
                    }]
                },]
};