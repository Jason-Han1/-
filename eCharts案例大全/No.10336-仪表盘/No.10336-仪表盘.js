option = {
    backgroundColor: '#060e2b',
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    series: [
        {
            name: 'PUE',
            type: 'gauge',
            radius: "80%",
            center: ["50%", "75%"],
            splitNumber: 5|| 100,
            min: 1,
            max: 2,
            startAngle: 180,
            endAngle: 0,
            detail: {formatter:'PUE= {value}'},
            data: [{value: 1.5, name: ' '}],
            splitLine: {
                    length: 50,//刻度节点线长度
                    lineStyle: {width: 2, color: ['#02e3f0']}//刻度节点线
                },
            axisLine: { // 坐标轴线
                    lineStyle: {
                    width: 15,
                    shadowBlur: 0,
                    color: [
                            [0,'#1aadd8'],
                            [0.3, '#1798c1'],
                            [0.5, '#d4701b'],
                            [0.7, '#bf3032'],
                            [1, '#b7203e']
                        ]
                    }
                },
        },
         {
                    type: 'gauge',
                    center: ["50%", "75%"],
                    radius: '85%',  // 1行3个
                    splitNumber: 5|| 100,
                    min: 1,
                    max: 2,
                    startAngle: 180,//刻度起始
                    endAngle: 0,//刻度结束
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 2,
                            shadowBlur: 0,
                            color: [
                                [1, '#02e3f0']
                            ]
                        }
                    },
                    axisTick: {
                        show: true,
                        lineStyle: {
                            color: '#02e3f0',
                            width: 1
                        },
                        length: -5,
                        splitNumber: 10
                    },
                    splitLine: {
                        show: true,
                        length: -14,
                        lineStyle: {
                            color: '#02e3f0',
                        }
                    },
                    axisLabel: {
                        distance: -20,
                        textStyle: {
                            color: '#02e3f0',
                            fontSize: '14',
                            fontWeight: 'bold'
                        }
                    },
                    pointer: {
                        show: 0
                    },
                    detail: {
                        show: 0
                    }
                }
    ]
};
myChart.setOption(option, true);


