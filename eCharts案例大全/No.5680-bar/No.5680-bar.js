 var xData = function() {
    var data = [];
    for (var i = 1; i < 7; i++) {
        data.push(i + "月");
    }
    return data;
}();

option = {
    backgroundColor: "#344b58",
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            textStyle: {
                color: '#fff',
            },
        },
    },
    legend: {
        show: true,
        right: 100,
        y: '5%',
        itemWidth: 35,
        itemHeight: 15,
        textStyle: {
            color: '#fff',
            fontSize: 12
        },
        data: ['已处理', '未处理']
    },
    grid: {
        borderWidth: 0,
        top: 110,
        bottom: 95,
        textStyle: {
            color: '#fff',
        },
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.5)',
            },
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        splitArea: {
            show: false,
        },
        axisLabel: {
            interval: 0,
            color: 'rgba(255,255,255,0.7)',
            fontSize: 18,
        },
        data: xData,
    }, ],
    yAxis: [{
        type: 'value',
        splitLine: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            interval: 0,
            color: 'rgba(255,255,255,0.5)',
            fontSize: 20,
        },
        splitArea: {
            show: false,
        },
    }, ],
    series: [{
            name: '已处理',
            type: 'bar',
            stack: '总量',
            barMaxWidth: 35,
            barGap: '10%',
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                                offset: 0,
                                color: 'rgba(35, 157, 250, 1)', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(35, 157, 250, 0)', // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                },
            },
            data: [709, 1917, 2455, 2610, 1719, 1433],
        },

        {
            name: '未处理',
            type: 'bar',
            stack: '总量',
            barMaxWidth: 35,
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                                offset: 0,
                                color: 'rgba(35, 250, 187, 1)', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(35, 250, 187, 0)', // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                    barBorderRadius: 0,
                },
            },
            data: [327, 1776, 507, 1200, 800, 482],
        },
    ],
}