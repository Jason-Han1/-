option = {
    backgroundColor: '#202632',
    legend: {
        icon: 'circle',
        color: '#434857',
        data: ['正常', '异常'],
        itemGap : 24,
    },
    xAxis: {
        show: false,
        data: ['symbolRepeat: true', 'symbolRepeat: false']
    },
    yAxis: {
        show: true,
        max : 100,
        min: 0,
        interval : 10,
        axisLine: {
            lineStyle: { 
                color: '#434857',
            }
        },
        axisTick: {
            length: 10,
        },
        axisLabel: {
            fontSize: '10px',
            color: '#6B717D',
            formatter: '{value} %',
            padding : [0,10 ,0 , 0],
        },
        axisPointer: {
            show: true,
        },
        splitLine: {
            show: false
        }
    },
    animationEasing: 'elasticOut',
    series: [{
        name: '正常',
        type: 'pictorialBar',
        symbol: 'rect',
        symbolRepeat: true,
        symbolSize:[60,8],
        symbolMargin: 4,
        itemStyle: {
            normal: {
                color: {
                    colorStops: [{
                        offset: 0, color: '#43F2A6' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#15CF7E' // 100% 处的颜色
                    }],
                }
            }

        },
        label : {
            show: true,
             position  : 'top',
             color: '#fff',
             formatter : '{c}%',
        },
        data: [{
            value: 2,
            formatter: '{value} %',
        }, {
            value: 19,
        }]
    },
    {
        name: '异常',
        type: 'pictorialBar',
        symbol: 'rect',
        symbolRepeat: true,
        symbolSize:[60,8],
         symbolMargin: 4,
        color:'#12121E',
        barGap : '-100%',
        z: 1,
        data: [{
            value: 100,
        }, {
            value: 100,
        }]
    }]
};