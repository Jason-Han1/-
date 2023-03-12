option = {
    title: {
        text: '某地区数据带滚动条',
        left: 40,
        textStyle: {
            color:'#fff'
        }
    },
    color: ['#3398DB'],
    backgroundColor: '#000',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            z: 0
        },
        showContent: false
    },
    dataZoom: {
        show: true,
        type: 'slider',
        realtime: true,
        height: 10,
        start: 0,
        end: 80,
        textStyle:false,
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            show: false,
            alignWithLabel: true
        },
        axisLabel: {
            color: '#fff',
            interval: 0
        },
        axisLine: {
            lineStyle: {
                color: '#2b386a',
                fontSize: 16
            }
        },
        data: ['区域一', '区域三', '区域四', '区域五', '区域六', '区域七', '区域八']
    }],
    yAxis: [{
        type: 'value',
        boundaryGap: ['0%', '10%'],
        splitLine: {
            show: false
        },
        axisLabel: {
            color: '#fff',
            fontSize: 16
        },
        axisLine: {
            lineStyle: {
                color: '#2b386a'
            }
        }
    }],
    series: [{
        name: '直接访问',
        type: 'bar',
        barWidth: 26,
        emphasis: {
            label: {
                show: true,
                position: 'top',
                distance: 8,
                textStyle: {
                    color: '#fff',
                    fontSize: 18
                }
            }
        },
        itemStyle: {
            normal: {
                show: true,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#07fb96'
                    },
                    {
                        offset: 1,
                        color: '#3149fc'
                    }
                ])
            }
        },
        data: [{
                name: '区域一',
                value: 3
            },
            {
                name: '区域二',
                value: 4
            },
            {
                name: '区域三',
                value: 2
            },
            {
                name: '区域四',
                value: 1
            },
            {
                name: '区域五',
                value: 1
            }, {
                name: '区域六',
                value: 1
            },
            {
                name: '区域七',
                value: 1
            },
            {
                name: '区域八',
                value: 1
            }
        ]
    }]
}