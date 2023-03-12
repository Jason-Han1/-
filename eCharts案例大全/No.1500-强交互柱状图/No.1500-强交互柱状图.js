option = {
    title: {
        text: '强交互柱状图',
        subtext: '强交互性',
        right: 50,
    },
    tooltip: {},
    grid: { bottom: 100 },
    dataZoom: { show: true },
    toolbox: {
        feature: {
            dataZoom: { yAxisIndex: 'none' },
            dataView: { readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: {},
        },
        top: 0,
        left: 50,
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', ],
        axisLabel: { interval: 0 },
    },
    yAxis: {
        type: 'value',
    },
    visualMap: {
        inRange: {
            color: ['#9a60b4', '#5470c6', '#73c0de', '#91cc75', '#e9ef3b', '#fac858', '#ee6666'],
            symbolSize: [5, 40],
        },
        max: 270,
        calculable: true,
        hoverLink: true,
        itemHeight: 202,
        top: '8%',
        left: 0,
    },
    series: [
        {
            data:[1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270],
            emphasis: { focus: 'self' },
            type: 'bar',
            showBackground: true,
        },
    ],
};
