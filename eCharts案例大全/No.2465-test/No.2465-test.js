option = {
    backgroundColor: '#fff',
    color: ['#73A0FA', '#73DEB3', '#FFB761'],
    tooltip: {
        trigger: 'axis',
    },
    grid: {
        left: '25',
        right: '25',
        top: '75',
        containLabel: true,
    },
    dataZoom: [
        {
            type: 'inside',
            start: 0,
            end: 100,
        },
        {
            start: 0,
            end: 100,
        },
    ],
    legend: {
        orient: 'horizontal',
        icon: 'circle',
        show: true,
        right: 20,
        top: 25,
        itemWidth: 12.5,
        itemHeight: 7,
    },
    xAxis: {
        type: 'category',
        data: ['01-01', '01-02', '01-03', '01-04', '01-05', '01-06', '01-07'],
        boundaryGap: false,
        axisTick: {
            lineStyle: {
                color: '#d9d9d9',
            },
        },
        axisLine: {
            lineStyle: {
                color: '#d9d9d9',
            },
        },
        axisLabel: {
            color: '#aeaeae'
        }
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            color: '#999',
            textStyle: {
                fontSize: 12,
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#F3F4F4',
                width: 2,
                type: 'dashed',
            },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
    },
    series: [
        {
            name: '用户数',
            type: 'line',
            smooth: true,
            showSymbol: false,
            data: [13, 1, 4, 44, 45, 322, 76],
        },
        {
            name: '点击数',
            type: 'line',
            smooth: true,
            showSymbol: false,
            data: [13, 54, 34, 344, 35, 53, 35],
        },
    ],
};
