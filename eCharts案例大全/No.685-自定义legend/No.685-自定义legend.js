const data = [{
        name: '数据1',
        value: 36,
        rate: 12
    },
    {
        name: '数据2',
        value: 20,
        rate: 20
    },
    {
        name: '数据3',
        value: 16,
        rate: -40
    },
    {
        name: '数据4',
        value: 10,
        rate: -15
    },
    {
        name: '数据5',
        value: 9,
        rate: 12
    },
    {
        name: '数据6',
        value: 9,
        rate: -6
    }
]
option = {
    title: {
        text: '{header1| 名称与占比}' +
            '{header2| 数量}' +
            '{header3| 比例}',
        textAlign: 'left',
        left: '49%',
        top: '30%',
        textStyle: {
            color: '#ccc',
            rich: {
                header1: {
                    width: 130,
                    fontSize: 15
                },
                header2: {
                    width: 85,
                    fontSize: 15
                },
                header3: {
                    fontSize: 15
                }
            }
        }
    },
    legend: {
        // selectedMode: false, // 取消图例上的点击事件
        type: 'plain',
        icon: 'circle',
        orient: 'vertical',
        left: '50%',
        top: '35%',
        align: 'left',
        itemGap: 15,
        itemWidth: 10, // 设置宽度
        itemHeight: 10, // 设置高度
        symbolKeepAspect: false,
        textStyle: {
            color: '#000',
            rich: {
                name: {
                    verticalAlign: 'right',
                    align: 'left',
                    width: 35,
                    fontSize: 12
                },
                value: {
                    align: 'left',
                    width: 60,
                    fontSize: 12
                },
                count: {
                    align: 'left',
                    width: 80,
                    fontSize: 12
                },
                upRate: {
                    align: 'left',
                    fontSize: 12,
                    color: '#00cf90'
                },
                downRate: {
                    align: 'left',
                    fontSize: 12,
                    color: '#ff5722'
                }
            }
        },
        data: data.map(item => item.name),
        formatter: function(name) {
            let className = 'upRate'
            let rateIcon = '▲'
            if (data && data.length) {
                for (var i = 0; i < data.length; i++) {
                    if (name === data[i].name) {
                        if (data[i].rate < 0) {
                            className = 'downRate'
                            rateIcon = '▼'
                        }
                        return (
                            '{name| ' +
                            name +
                            '}  | ' +
                            '{value| ' +
                            data[i].value +
                            '%}' +
                            '{count| ' +
                            Number(4544).toLocaleString() +
                            '} ' +
                            '{' + className + '| ' + rateIcon +
                            Math.abs(data[i].rate) +
                            '%}'
                        )
                    }
                }
            }
        }
    },
    series: [{
        name: '数量',
        type: 'pie',
        radius: ['40%', '55%'],
        center: ['25%', '50%'],
        data: data,
        label: {
            normal: {
                show: false,
                position: 'center',
                formatter: '{text|{c}}\n{b}',
                rich: {
                    text: {
                        align: 'center',
                        verticalAlign: 'middle',
                        padding: 8,
                        fontSize: 30
                    },
                    value: {
                        align: 'center',
                        verticalAlign: 'middle',
                        fontSize: 20
                    }
                }
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '12'
                }
            }
        },
        labelLine: {
            normal: {
                show: true
            }
        }
    }]
};