option = {
    title: {
        left: 20,
        top: '8%',
        text: '单位：万元',
        textStyle: {
            fontSize: 9,
        },
    },
    tooltip: {
        trigger: 'axis',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 11,
        },
    },
    grid: {
        left: '5%',
        right: '5%',
        top: '24%',
        bottom: '10%',
        containLabel: true,
    },
    legend: {
        top: '8%',
        data: ['预计收益', '实际收益'],
        itemWidth: 13,
        itemHeight: 9,
        textStyle: {
            fontSize: 9,
        },
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
        axisLabel: {
            fontSize: 9,
        },
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            fontSize: 9,
        },
    },
    series: [
        {
            name: '预计收益',
            type: 'line',
            lineStyle: {
                type: 'dashed',
            },
            data: [2000.32, 2074.34, 3000.44, 3190.39, 3028.97, 3821.94, 3028.28, 2000.28],
        },
        {
            name: '实际收益',
            type: 'line',
            lineStyle: {
                type: 'dashed',
            },
            data: [1600.83, 1800.39, 2000.18, 3500.34, 3489.43, 3208.51, 3900.45, 1973.43],
        },
    ],
};

if (option && typeof option === 'object') {
    myChart.setOption(option, true);
}
