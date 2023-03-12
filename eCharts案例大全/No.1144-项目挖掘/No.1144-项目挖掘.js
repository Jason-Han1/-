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
            data: ['项目类型A', '项目类型B', '项目类型C', '项目类型D', '项目类型E', '项目类型F', '项目类型G'],
            axisPointer: {
                type: 'shadow',
            },
            axisLabel: {
                rotate: 30,
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
            data: [300, 350, 550, 280, 720, 580, 400],
        },
        {
            name: '资产数量(个)',
            type: 'line',
            yAxisIndex: 1,
            color: '#F5BA69',
            data: [30, 35, 55, 28, 72, 58, 40],
        },
    ],
};

if (option && typeof option === 'object') {
    myChart.setOption(option, true);
}
