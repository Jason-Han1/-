option = {
    title: {},
    tooltip: {
        // show: true,
        trigger:'axis',
        formatter: function(params){
            let str=params[0].name+'</br>';
            params.forEach(item=>{
                str+=item.marker + item.seriesName + ' : ' + item.value + '</br>';
            })
            return str;
        }
    },
    axisPointer: {
        link: {
            xAxisIndex: 'all'
        }
    },
    xAxis: [{
            type: 'category',
            data: ['11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
            axisLine: {
                onZero: true
            }
        },
        {
            gridIndex: 1,
            type: 'category',
            data: ['11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
            axisLine: {
                onZero: true
            }
        }
    ],
    yAxis: [{
            name: '降雨量',
            type: 'value',
            nameTextStyle: {
                padding: [0, 0, 6, 180] // 文字自交多的时候设置距离容器左侧的距离
            }
        },
        {
            name: '流量',
            type: 'value',
            gridIndex: 1,
            nameTextStyle: {
                padding: [0, 0, 6, 110]
            }
        }
    ],
    grid: [{
            left: 50,
            right: 50,
            top: '8%',
            height: '33%'
        },
        {
            left: 50,
            right: 50,
            top: '55%',
            height: '35%'
        }
    ],
    dataZoom: [{
            show: true,
            realtime: true,
            start: 20,
            end: 100,
            top: '96%',
            bottom: '00%',
            xAxisIndex: [0, 1]
        },
        {
            type: 'inside',
            realtime: true,
            start: 20, // dataZoom百分比
            end: 100,
            top: '95%',
            bottom: '00%',
            xAxisIndex: [0, 1]
        }
    ],
    series: [{
            name: '降雨量',
            data: [1, 2, 3, 4, 5, 6, 7, 8],
            type: 'line',
            smooth: true,
            lineStyle: {
                normal: {
                    color: '#4194fc'
                }
            },
            itemStyle: {
                normal: {
                    color: '#4194fc',
                    borderColor: '#4194fc'
                }
            }
        },
        {
            name: '降雨量',
            data: [2, 3, 6, 7, 5, 8, 17, 18],
            type: 'line',
            smooth: true,
            lineStyle: {
                normal: {
                    color: '#3bbc86'
                }
            },
            itemStyle: {
                normal: {
                    color: '#3bbc86',
                    borderColor: '#3bbc86'
                }
            }
        },
        {
            name: '流量',
            data: [1, 2, 3, 4, 5, 6, 7, 8],
            type: 'bar',
            smooth: true,
            xAxisIndex: 1, // 指定x轴
            yAxisIndex: 1, // 指定y轴
            lineStyle: {
                normal: {
                    color: '#ffb25f'
                }
            },
            itemStyle: {
                normal: {
                    color: '#ffb25f',
                    borderColor: '#ffb25f'
                }
            }
        }
    ]
};