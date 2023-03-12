/*中间显示的数据*/

option = {
    backgroundColor: '#000',
    title: {
        text: '左右两边柱状对比图',
        x: 'center',
        textStyle: {
            color: '#ffffff'
        }
    },
    legend: {
        show: false
    },
    tooltip: {
        show: true
    },
    grid: [{
        show: false,
        left: '5%',
        top: 60,
        bottom: 60,
        containLabel: true,
        width: '50%'
    }, {
        show: false,
        left: '5%',
        top: 60,
        bottom: 80,
        width: '0%'
    }, {
        show: false,
        right: '5%',
        top: 60,
        bottom: 60,
        containLabel: true,
        width: '52%'
    }, ],
    xAxis: [{
        name: '本地流入人口数（人）',
        nameTextStyle: {
            color: 'rgba(97,190,255,0.7)',
            padding: [60, -120, 0, 0]
        },
        splitNumber: 2,
        type: 'value',
        inverse: true,
        axisLine: {
            show: true,
        },
        axisTick: {
            show: true,
        },
        position: 'bottom',
        axisLabel: {
            show: true,
            showMinLabel: false,
            textStyle: {
                color: 'rgba(97,190,255,0.7)',
                fontSize: 12
            }
        },
        splitLine: {
            show: false,
        }
    }, {
        gridIndex: 1,
        show: false,
    }, {
        name: '外部流入人口数（人）',
        nameTextStyle: {
            color: 'rgba(97,190,255,0.7)',
            padding: [60, 0, 0, -120]
        },
        gridIndex: 2,
        type: 'value',
        axisLine: {
            show: true,
        },
        axisTick: {
            show: true,
        },
        position: 'bottom',
        axisLabel: {
            show: true,
            textStyle: {
                color: 'rgba(97,190,255,0.7)',
                fontSize: 12,
            },
        },
        splitLine: {
            show: false
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
            show: true
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            color: 'rgba(97,190,255,0.7)',
            fontSize: 12,
        },
        data: ['2013年', '2014年', '2015年', '2016年', '2017年']
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
        name: '本地流入人口数（人）',
        type: 'bar',
        barGap: 10,
         stack: '出',
        barWidth: '20%',
        itemStyle: {
            normal: {
                color: '#36c5e7',
            }
        },
        data: ['6666', '5700', '5600', '4000', '2500']
    },
    {
        name: '本地流入人口数',
         stack: '出',
        type: 'bar',
        barGap: 10,
        barWidth: '20%',
        itemStyle: {
            normal: {
                color: 'red',
            }
        },
        data: ['666', '570', '600', '4000', '500']
    },
    {
        name: '外部流入人口数（人）',
        type: 'bar',
        barGap: 10,
        barWidth: '20%',
        xAxisIndex: 2,
        yAxisIndex: 2,
        itemStyle: {
            normal: {
                color: '#e68b55',

            },
        },
        data: ['6000', '5700', '5600', '4000', '2500'],
    }]
};