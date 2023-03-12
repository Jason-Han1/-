option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985',
            },
        },
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    },
    yAxis: {
        type: 'value',
    },
    series: [{
        name: '新建数',
        type: 'line',
        top: 'center',
        left: 'center',
        smooth: true, // 是否平滑曲线显示
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 6,
        lineStyle: {
            normal: {
                color: '#4AADEB', // 线条颜色
            },
        },
        label: {
            show: false,
            position: 'top',
            textStyle: {
                color: '#fff',
            },
        },
        itemStyle: {
            color: '#4AADEB',
            borderColor: '#fff',
            borderWidth: 3,
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#4AADEB',
                    },
                    {
                        offset: 1,
                        color: '#3fbbff0d',
                    },
                ], false),
            },
        },
        data: [80, 93, 91, 94, 100, 110, 120, 91, 94, 100, 91, 94]
    }],
};