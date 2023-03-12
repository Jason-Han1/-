option = {
            backgroundColor: '#222',
            color: new echarts.graphic.LinearGradient(
                0, 1, 0, 0,
                [
                    { offset: 0, color: '#41a8ff' },
                    { offset: 1, color: '#1070ff' }
                ]
            ),
            grid: {
                top: '30%',
                bottom: '20%',
                left: '10%',
                right: '10%'
            },
            xAxis: {
                data: ['类目1', '类目2', '类目3', '类目4', '类目5'],
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#408eff'
                    }
                },
                axisLabel: {
                    interval: 0,
                    margin: 21,
                    color: '#fff',
                    fontSize: 14,
                    fontFamily: 'Microsoft YaHei',
                    formatter: function (value, index) {
                        if (value.length > 2) {
                            value = value.substring(0, 2) + '\n' + value.substring(2);
                        }
                        return value;
                    }
                }
            },
            yAxis: {
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                }
            },
            series: [{
                type: 'pictorialBar',
                symbolSize: [22, 7],
                symbolOffset: [0, -5],
                z: 12,
                data: [{
                    value: 100,
                    symbolPosition: 'end'
                }, {
                    value: 90,
                    symbolPosition: 'end'
                }, {
                    value: 80,
                    symbolPosition: 'end'
                }, {
                    value: 70,
                    symbolPosition: 'end'
                }, {
                    value: 60,
                    symbolPosition: 'end'
                }]
            }, {
                type: 'pictorialBar',
                symbolSize: [22, 7],
                symbolOffset: [0, 5],
                z: 12,
                itemStyle: {
                    normal: {
                        color: '#41a8ff'
                    }
                },
                data: [100, 90, 80, 70, 60]
            },
            {
                type: 'bar',
                offset: [0, 20],
                label: {
                    show: true,
                    position: 'top',
                    color: '#fff',
                    fontSize: 14,
                    fontFamily: 'Microsoft YaHei',
                    formatter: '{c}%'
                },
                silent: true,
                barWidth: 22,
                data: [100, 90, 80, 70, 60]
            }]
        };