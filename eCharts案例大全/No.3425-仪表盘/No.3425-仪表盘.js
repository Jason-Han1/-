var dataArr = 84;


option = {
    backgroundColor: '#0E1327',
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%',
    },

    series: [
        {
            name: '内部进度条',
            type: 'gauge',
            center: ['50%', '50%'],
            radius: '50%',
            z: 1,
            startAngle: 225,
            endAngle: -45,
            splitNumber: 5,
            progress: {
                show: true,
                width: 27,
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 1,
                        x2: 0,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgba(17,95,234,0)',
                            },
                            {
                                offset: 0.5,
                                color: 'rgba(17,95,234,0.5)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(17,95,234,1)',
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                },
            },
            axisLine: {
                lineStyle: {
                    color: [[1, 'rgba(240,240,240,0.2)']],

                    width: 27,
                },
            },
            axisLabel: {
                show: true,
                color: 'rgba(240,240,240,0.5)',
                fontSize: 12,
                distance: -45,
            }, 
            axisTick: {
                show: false,
            }, 
            splitLine: {
                show: false,
            }, 
            itemStyle: {
                show: false,
            },
            detail: {
                offsetCenter: [0, 82],
                textStyle: {
                    padding: [0, 0, 0, 0],
                    fontSize: 24,
                   
                    color: 'rgba(240,240,240,1)',
                },
            },
            title: {
                show: true,
                offsetCenter: [0, '80%'], 
                textStyle: {
                    color: 'rgba(240,240,240,1)',
                    fontSize: 12, 
                   
                    fontFamily: 'PingFangSC',
                },
            },
            data: [
                {
                    name: '标题',
                    value: dataArr,
                },
            ],
            pointer: {
                show: true,
                length: '75%',
                width: 5, 
                itemStyle: {
                    color: 'rgba(16,235,227,1)',
                },
            },
        },
        {
            name: '刻度',
            type: 'gauge',
            center: ['50%', '50%'],
            radius: '50%',
            z: 999,
            startAngle: 225,
            endAngle: -45,
            splitNumber: 5,
            progress: {
                show: false,
            },
            axisLine: {
                show: false,
                lineStyle: {
                    width: 27,
                },
            },
            //仪表盘轴线
            axisLabel: {
                show: false,
            }, //刻度标签。
            axisTick: {
                show: true,
                splitNumber: 3,
                lineStyle: {
                    color: 'rgba(16,235,227,0.2)', 
                    width: 2,
                },
                length: 2,
                distance: -15
            },
            splitLine: {
                show: true,
                length: 10,
                lineStyle: {
                    color: 'rgba(16,235,227,1)', 
                    width: 2,
                },
                distance: -17
            }, 
            itemStyle: {
                show: false,
            },
            detail: {
                show: false,
            },
            title: {
                //标题
                show: false,
            },

            pointer: {
                show: false,
            },
        },
        {
            name: '最外边线',
            type: 'gauge',
            center: ['50%', '50%'],
            radius: '51.5%',
            z: 999,
            startAngle: 225,
            endAngle: -45,
            splitNumber: 5,
            progress: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    color: [[1, 'rgba(240,240,240,0.2)']],
                },
            },
            axisLabel: {
                show: false,
            }, 
            axisTick: {
                show: false,
            }, 
            splitLine: {
                show: false,
            }, 
            itemStyle: {
                show: false,
            },
            detail: {
                show: false,
            },
            title: {
                show: false,
            },

            pointer: {
                show: false,
            },
        },
        {
            name: '最外刻度亮线',
            type: 'gauge',
            radius: '50%',
            center: ['50%', '50%'],
            startAngle: 225 - (270 * dataArr) / 100 + 1,
            endAngle: 225 - (270 * dataArr) / 100 - 30,
            splitNumber: 10,
            axisLine: {
                lineStyle: {
                    color: [
                        [3 / 100, 'rgba(0,0,0,0)'],
                    ],
                    width: 29,
                    shadowColor: 'rgba(16,235,227,1)',
                    shadowBlur: 10,
                },
            },
            progress: {
                show: true,
                width: 29,
                itemStyle: {
                    color: '#10EBE3',
                    shadowColor: 'rgba(16,235,227,1)',
                    shadowBlur: 10,
                },
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            detail: {
                show: false,
            },
            pointer: {
                show: false,
            },
            animationDelay: 850,
            animationDuration: 300,
            data: [
                {
                    name: 'title',
                    value: 100,
                },
            ],
            title: {
                show: false,
            },
        },
    ],
};
