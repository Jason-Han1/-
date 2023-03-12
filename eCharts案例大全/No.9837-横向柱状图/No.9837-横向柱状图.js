var totalNum = 10;
option = {
    backgroundColor: '#fff',
    color: ['#d0e3fe', '#639afe'],
    title: {
        x: 'center',
        y: '0',
        text: '{b|总转化率}{a|' + totalNum + '}{b|%}',
        textStyle: {
            fontSize: 0,
            rich: {
                a: {
                    color: '#ff9f0e',
                    fontSize: 18,
                    padding: [0, 10, 0, 10]
                },
                b: {
                    color: '#999',
                    fontSize: 16,
                }
            }
        },
        textAlign: 'center',
        vetextVerticalAlign: 'bottom'
    },
    legend: {
        data: ['推送量', '订购量'],
        icon: 'circle',
        x: 'right'
    },
    grid: {
        left: 0,
        right: 10,
        top: 40,
        bottom: 0,
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        data: ['CBSS', 'ESS', '微信', '外呼', '短信'],
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#e0e0e0'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#666'
            }
        }
    },
    series: [{
            name: '推送量',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744],
           
            label: {
                show: true,
                position: 'right',
                textStyle: {
                    color: '#666'
                }
            }
        },
        {
            name: '订购量',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141],

            label: {
                show: true,
                position: 'right',
                textStyle: {
                    color: '#666'
                }
            }
        }
    ]
}