const name = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
const data = [100, 125, 117, 95, 123, 140, 137]
option = {
    title: {
        text: '突出某天数值',
        textStyle: {
            color: '#fff'
        }
    },
    xAxis: {
        data: name,
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            show: false
        }
    },
    backgroundColor: '#151934',
    tooltip: {},
    yAxis: {
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.1)'
            }
        },
        axisTick: {
            show: false
        }
    },
    series: [{
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 6,
        color: '#09ffff',
        label: {
            show: true,
            color: '#fff',
            fontSize: 10,
            rich: {
                a: {
                    lineHeight: 20
                },
                c: {
                    align: 'center',
                    fontSize: 11
                }
            }
        },

        data: data.map((item, index) => {
            const arr = JSON.parse(JSON.stringify(data))
            arr.sort((a, b) => {
                return b - a
            })
            const obj = {
                value: item,
                name: name[index]
            }
            if (obj.name === '周三') { // 特定某一天
                obj.symbolSize = 8
                obj.label = {
                    fontSize: 14,
                    fontWeight: 'bold',
                    formatter: [
                        '{a|{b}}',
                        '{c|{c}}'
                    ].join('\n'),
                    rich: {
                        a: {
                            color: '#f0f'
                        },
                        c: {
                            color: '#a0a'
                        }
                    }
                }
            }
            if (item === arr[0]) {
                obj.symbolSize = 10,
                    obj.label = {
                        fontSize: 14,
                        fontWeight: 'bold',
                        formatter: [
                            '{a|最高值}',
                            '{c|{c}}'
                        ].join('\n'),
                        rich: {
                            a: {
                                color: 'red'
                            },
                            c: {
                                color: '#f39'
                            }
                        }
                    }
            }
            if (item === arr[data.length - 1]) {
                obj.symbolSize = 10,
                    obj.label = {
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: '#0f0',
                        formatter: [
                            '{a|最低值}',
                            '{c|{c}}'
                        ].join('\n'),
                        rich: {
                            a: {
                                color: '#0f0'
                            },
                            c: {
                                color: '#ada'
                            }
                        }
                    }
            }
            return obj
        })
    }]
};