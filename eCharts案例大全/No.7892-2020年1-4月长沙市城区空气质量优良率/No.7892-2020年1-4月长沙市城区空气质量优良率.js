option = {
                title: {
                    top: 2,
                    left: 'center',
                    text: '2020年1-4月长沙市城区空气质量优良率',
                    textStyle: { color: '#000', fontSize: 13 }
                },
                tooltip: { formatter: '{b} : {c}%' },
                toolbox: {
                    feature: {
                        dataView: { show: false, readOnly: false },
                        restore: { show: true },
                        saveAsImage: { show: true }
                    },
                    left: 'right'
                },
                max: 100,
                axisTick: { show: false, splitNumber: 10 },
                pointer: { show: true, length: '75%', width: 4 },
                series: [
                    {
                        name: '优良率',
                        type: 'gauge',
                        axisTick: { show: false, splitNumber: 10 },
                        detail: {
                            show: true,
                            offsetCenter: [0, '22%'],
                            width: 56,
                            height: 20,
                            textStyle: {
                                fontSize: 13,
                                color: '#000',
                                fontWeight: 'bolder'
                            },
                            backgroundColor: '#A9DAFF',
                            borderWidth: 2,
                            borderColor: '#45E4D0',
                            shadowColor: '#fff',
                            shadowBlur: 5
                        },
                        axisLine: {
                            lineStyle: {
                                length: 18,
                                color: [
                                    [0.3, '#DD3F36'],
                                    [0.7, '#FAE521'],
                                    [1, '#37B70C']
                                ]
                            }
                        },
                        axisLabel: {
                            distance: 5,
                            textStyle: { color: '#000', fontSize: 10 }
                        },
                        data: [{ value: 90.7, name: '优良率' }]
                    }
                ]
            }