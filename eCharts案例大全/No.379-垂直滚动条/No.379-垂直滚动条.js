option = {
    dataZoom: [
        {
            zoomLock: true,
            end: 30, // 30%
            start: 0, // 0
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            handleSize: 0,
            height: 10,
            left: '10%',
            right: '10%',
            bottom: 26,
            borderColor: '#000',
            filterColor: '#269cdb',
            borderRadius: 5,
            backgroundColor: '#33384b',
            showDataShadow: false,
            showDelay: false,
            realtime: true,
            filterMode: 'filter',
        },
        {
            type: 'inside',
            show: true,
            zoomLock: true,
            xAxisIndex: [0],
            end: 30, // 30%
            start: 0, // 0
            height: 20,
        },
    ],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
    },
    yAxis: {
        type: 'category',
        data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World'],
    },
    series: [
        {
            name: '2012',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807],
        },
    ],
};
