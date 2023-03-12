option = {
    title: {
        show: false,
        text: '',
        textStyle: {
            fontSize: 20,
            color: '#ffffff',
            width: '300',
            height: 40,
            lineHeight: 40,
            overflow: 'truncate',
            ellipsis: '...',
        },
        padding: [10, 15],
        left: 'left',
        // 副标题
        subtext: '',
        subtextStyle: {
            show: false,
            fontSize: 16,
            color: '#ffffff',
            width: '300',
            height: 20,
            lineHeight: 20,
            overflow: 'truncate',
            ellipsis: '...',
            align: 'center',
        },
    },
    legend: {
        show: false,
        data: ['类别1', '类别2', '类别3'],
        textStyle: {
            color: '#fff',
            fontSize: 16,
        },
        itemStyle: {},
        top: 'top',
        left: 'left',
        padding: [15, 15, 0, 15],
        icon: 'circle',
        orient: 'horizontal',
    },
    grid: {
        containLabel: true,
        left: 15,
        right: 15,
        bottom: 15,
        top: 50,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    xAxis: {
        nameTextStyle: {
            color: '#ffffff',
            fontSize: 14,
        },
        axisLabel: {
            show: true,
            color: '#ffffff',
            fontSize: 16,
            fontFamily: 'Microsoft YaHei',
        },
        axisTick: {
            show: true,
            lineStyle: {
                color: '#dadada',
                width: 1,
            },
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,1)',
            },
            show: false,
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: 'rgba(255,255,255,0.12)',
                type: 'dashed',
            },
        },
        axisTick: {
            show: false,
        },
        data: ['系列1', '系列2', '系列3', '系列4', '系列5', '系列6'],
        type: 'category',
    },
    yAxis: {
        axisLabel: {
            show: true,
            color: '#ffffff',
            fontSize: 14,
            fontFamily: 'Microsoft YaHei',
        },
        axisTick: {
            lineStyle: {
                color: 'rgba(255,255,255,0.12)',
                width: 1,
            },
            show: false,
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.12)',
                type: 'dashed',
            },
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,1)',
                width: 1,
                // "type": "dashed"
            },
            show: false,
        },
        name: '',
    },
    series: [
        {
            name: '类别1',
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
                        colorStops: [
                            {
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
            name: '类别2',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
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
        {
            name: '类别3',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgba(206, 71, 255, 1)', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(187, 0, 255, 0)', // 100% 处的颜色
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
};
