option = {
    backgroundColor: 'black',
    title: {
        text: '',
        left: '5%',
        top: '6%'
    },
    grid: {
        bottom: 0,
        left: '20%',
        right: '0',
        top: '5%',
    },
    legend: {
        textStyle: {
            color: '#fff',
            fontSize: '10'
        },
        // top: '25%',
        // itemHeight: 10,
        // itemWidth: 25
    },
    xAxis: [{
        type: 'value',
        min: 0,
        max: 100,
        name: '',
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#d1cfcf',
            formatter: '{value}%'
        },
        splitLine: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#1d5eae'
            }
        }
    }],
    yAxis: [{
        type: 'category',
        axisLabel: {
            fontSize: '12',
            color: '#d1cfcf',
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#1d5eae'
            }
        },
        data: ['251万元+', '151-250万元', '51-150万元', '0-50万元']
    }],
    series: [{
        type: 'bar',
        itemStyle: {
            normal: {
                color: {
                    type: 'linear',
                    colorStops: [
                        // !! 在此添加渐变过程色 !!
                        {
                            offset: 0,
                            color: '#006fff'
                        },
                        {
                            offset: 1,
                            color: '#9e4ee9'
                        }
                    ]
                },
                label: {
                    show: true, //开启显示
                    position: 'right', //在上方显示
                    formatter: function(a) {
                        return a.value + '%'
                    },
                    textStyle: { //数值样式
                        color: '#d1cfcf',
                        fontSize: 12
                    },
                }
            }
        },
        data: [20, 30, 13, 25],
        barWidth: '14'
    }]
};