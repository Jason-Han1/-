option = {
    backgroundColor:'#152776',
    tooltip: {
        trigger: 'axis', //按x轴显示
        show: true,
        axisPointer: {
            type: 'shadow',
            lineStyle: {
                color: '#ececec', //不显示线条
            },
        },
        formatter: '{b}</br>{a0}初婚平均年龄:{c0}岁</br>初婚{a2}年龄:{c2}岁</br>{a1}初婚平均年龄:{c1}岁',
        backgroundColor: 'rgba(22, 17, 98, 0.6)',
        textStyle: {
            align: 'left',
            fontSize: 12,
            color: '#fff',
        },
    },
    color: ['#0580f2', '#faa732', '#e1575d'],
    grid: {
        left: '4%',
        right: '4%',
        top: '12%',
        bottom: '10%',
        containLabel: true
    },
    legend: {
        show: true,
        icon: 'circle',
        right: '10%',
        bottom: '4%',
        textStyle: {
            fontSize: 12,
            color: '#fff'
        },
        data: ['男士', '女士', '平均']
    },
    xAxis: {
        show: true,
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#2ca8cf',
            }
        },
        axisLabel: {
            textStyle: {
                fontSize: 12,
                color: '#fff'
            }
        },
        data: ['2014年', '2015年', '2016年', '2017年', '2018年']
    },
    yAxis: {
        show: true,
        type: 'value',
        max: 35,
        min: 20,
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#2ca8cf',
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#2c3d89',
                type: 'dotted',
            }
        },
        axisLabel: {
            textStyle: {
                fontSize: 12,
                color: '#fff'
            }
        }
    },
    series: [{
        name: '男士',
        type: 'line',
        symbol: 'circle',
        itemStyle: {
            emphasis: {
                symbol: 'circle',
            }
        },
        symbolSize: [8, 8],
        data: [23, 24, 27, 29, 30]
    }, {
        name: '女士',
        type: 'line',
        symbol: 'circle',
        symbolSize: [8, 8],
        data: [21, 22, 25, 27, 28]
    }, {
        name: '平均',
        type: 'line',
        symbol: 'circle',
        symbolSize: [8, 8],
        data: [22, 23, 26, 28, 29]
    }]
};