/*中间显示的数据*/
option = {
    backgroundColor: '#fff',
    legend: {
        data: ['左边数据', '右边数据'],
        bottom: 10,
        center: true,
        textStyle: {
            color: '#fff',
            textAlign: 'center'
        },
        itemGap: 80,
        itemWidth: 0
    },
    grid: [{
        show: false,
        left: '4%',
        top: 60,
        bottom: 60,
        containLabel: true,
        width: '48%'
    }, {
        show: false,
        left: '50.5%',
        top: 60,
        bottom: 80,
        width: '0%'
    }, {
        show: false,
        right: '4%',
        top: 60,
        bottom: 60,
        containLabel: true,
        width: '48%'
    }],
    xAxis: [{
        splitNumber: 2,
        type: 'value',
        inverse: true,
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        position: 'bottom',
        axisLabel: {
            show: true,
            textStyle: {
                color: '#ccc',
                fontSize: 12
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#57617f',
                width: 1,
                type: 'solid'
            }
        }
    }, {
        gridIndex: 1,
        show: false,
    }, {
        gridIndex: 2,
        splitNumber: 2,
        type: 'value',
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        position: 'bottom',
        axisLabel: {
            show: true,
            textStyle: {
                color: '#ccc',
                fontSize: 12,
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#57617f',
                width: 1,
                type: 'solid',
            },
        },
    }, ],
    yAxis: [{
        type: 'category',
        inverse: true,
        position: 'right',
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false,
        },
        data: [],

    }, {
        gridIndex: 1,
        type: 'category',
        inverse: true,
        position: 'left',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            align: 'center'
        },
        data: ['彝族', '德昂族', '哈尼族', '傣族', '壮族', '苗族', '傈僳族', '拉祜族', '佤族', '纳西族', '瑶族', '景颇族', '布依族', '布朗族', '阿昌族', '独龙族'],
    }, {
        gridIndex: 2,
        type: 'category',
        inverse: true,
        position: 'left',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false,
        },
        data: [],
    }, ],
    series: [{
        name: '引进',
        type: 'bar',
        barGap: 20,
        barWidth: '20',
        stack: '入',
        itemStyle: {
            normal: {
                color: '#73B7FF'
            }
        },
        data: ['6666', '5700', '5600', '4000', '2500', '2400', '2100', '1700', '1500', '1000']
    }, {
        name: '调入',
        type: 'bar',
        barGap: 20,
        barWidth: '20',
        stack: '入',
        itemStyle: {
            normal: {
                color: '#2B81FE'
            }
        },
        data: ['6666', '5700', '5600', '4000', '2500', '2400', '2100', '1700', '1500', '1000']
    }, {
        name: '离职',
        type: 'bar',
        barGap: 20,
        barWidth: '20',
        stack: '出',
        itemStyle: {
            normal: {
                color: '#FFA300'
            }
        },
        xAxisIndex: 2,
        yAxisIndex: 2,
        data: ['6000', '5700', '5600', '4000', '2500', '2400', '2100', '1700', '1500', '1000'],
    }, {
        name: '调出',
        type: 'bar',
        barGap: 20,
        barWidth: '20',
        stack: '出',
        itemStyle: {
            normal: {
                color: '#05D37E'
            }
        },
        xAxisIndex: 2,
        yAxisIndex: 2,
        data: ['6000', '5700', '5600', '4000', '2500', '2400', '2100', '1700', '1500', '1000'],
    }]
}