function getVirtulData(year) {
    year = year || '2017';
    var date = +echarts.number.parseDate(year + '-01-01');
    var end = +echarts.number.parseDate(+year + 1 + '-01-01');
    var dayTime = 3600 * 24 * 1000;
    var data = [];
    for (var time = date; time < end; time += dayTime) {
        // data.push([
        //     echarts.format.formatTime('yyyy-MM-dd', time),
        //     Math.floor(Math.random() * 10000)
        // ]);
        data.push({
            label: echarts.format.formatTime('yyyy-MM-dd', time),
            value: [Math.floor(Math.random() * 10000)],
        });
    }
    return [
        ['2016-03-01', 3],
        ['2016-03-02', 1],
        {
            value: ['2016-03-03', 0],
            originValue: 30000,
            name: 'brandA',
            tooltip: {
                formatter: (a, b, c) => {
                    console.log(a, b, c);
                    return 'asdada';
                },
            },
            itemStyle: {
                color: 'blue',
            },
        },
        ['2016-03-04', 2],
    ];
}

option = {
    legend: {
        data: [
            {
                name: '系列1',
                // 强制设置图形为圆。
                icon: 'circle',
                // 设置文本为红色
                textStyle: {
                    color: 'red',
                },
            },
        ],
    },
    title: {
        top: 30,
        left: 'center',
        text: '2016年某人每天的步数',
    },
    tooltip: {},
    visualMap: {
        type: 'piecewise',
        orient: 'horizontal',
        left: 'center',
        top: 65,
        textStyle: {
            color: '#000',
        },
        pieces: [
            {
                value: 0,
                label: '模拟费率0',
                color: '#c1232b',
            },
            {
                value: 1,
                label: '模拟费率1',
                color: '#27727b',
            },
            {
                value: 2,
                label: '模拟费率2',
                color: '#e87c25',
            },
            {
                value: 3,
                label: '模拟费率3',
                color: '#b5c334',
            },
            {
                value: 4,
                label: '模拟费率4',
                color: '#fe8463',
            },
        ],
    },
    calendar: {
        top: 120,
        left: 30,
        right: 30,
        cellSize: ['auto', 13],
        range: '2016',
        itemStyle: {
            borderWidth: 0.5,
        },
        yearLabel: { show: false },
    },
    series: {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: getVirtulData(2016),
    },
};
