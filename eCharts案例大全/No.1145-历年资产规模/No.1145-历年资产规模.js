option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999',
            },
        },
        textStyle: {
            fontWeight: 'normal',
            fontSize: 11,
        },
    },
    grid: {
        left: '14%',
        right: '14%',
        top: '24%',
        bottom: '20%',
    },
    legend: {
        data: ['资产数量(个)', '资产规模(亿)'],
        top: '8%',
        itemWidth: 13,
        itemHeight: 9,
        textStyle: {
            fontSize: 9,
        },
    },
    xAxis: [
        {
            type: 'category',
            data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
            axisPointer: {
                type: 'shadow',
            },
            axisLabel: {
                fontSize: 9,
            },
        },
    ],
    yAxis: [
        {
            type: 'value',
            name: '资产规模(亿)',
            position: 'right',
            nameLocation: 'middle',
            nameTextStyle: {
                color: '#5C92F7',
                fontSize: 9,
            },
            nameGap: 25,
            min: 0,
            max: 900,
            interval: 300,
            axisLabel: {
                formatter: '{value}',
                color: '#5C92F7',
                fontSize: 9,
                margin: 5,
            },
        },
        {
            type: 'value',
            name: '资产数量(个)',
            position: 'left',
            nameLocation: 'middle',
            nameTextStyle: {
                color: '#F5BA69',
                fontSize: 9,
            },
            nameGap: 25,
            min: 0,
            max: 120,
            interval: 40,
            axisLabel: {
                formatter: '{value}',
                color: '#F5BA69',
                fontSize: 9,
                margin: 5,
            },
        },
    ],
    series: [
        {
            name: '资产规模(亿)',
            type: 'bar',
            color: '#5C92F7',
            barWidth: '50%',
            data: [300, 350, 550, 280, 720, 580, 400, 420, 200, 280],
        },
        {
            name: '资产数量(个)',
            type: 'line',
            yAxisIndex: 1,
            color: '#F5BA69',
            data: [30, 35, 55, 28, 72, 58, 40, 42, 20, 28],
        },
    ],
};

if (option && typeof option === 'object') {
    myChart.setOption(option, true);
}
