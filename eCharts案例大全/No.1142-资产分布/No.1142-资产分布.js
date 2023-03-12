option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
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
        itemWidth: 13,
        itemHeight: 9,
        textStyle: {
            fontSize: 9,
        },
    },
    xAxis: [
        {
            type: 'category',
            data: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
            axisLabel: {
                fontSize: 9,
            },
        },
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel: {
                formatter: '{value}',
                fontSize: 9,
                margin: 5,
            },
        },
    ],
    series: [
        {
            name: '一般资金户',
            type: 'bar',
            color: '#2661A8',
            barWidth: '50%',
            stack: 'asset',
            emphasis: {
                focus: 'series',
            },
            data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
            name: '特殊资金户',
            type: 'bar',
            color: '#2F88DF',
            barWidth: '50%',
            stack: 'asset',
            emphasis: {
                focus: 'series',
            },
            data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
            name: '不动产',
            type: 'bar',
            color: '#3AA0FF',
            barWidth: '50%',
            stack: 'asset',
            emphasis: {
                focus: 'series',
            },
            data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
            name: '一般动产',
            type: 'bar',
            color: '#7FC9FF',
            barWidth: '50%',
            stack: 'asset',
            emphasis: {
                focus: 'series',
            },
            data: [120, 132, 101, 134, 290, 230, 220],
        },
        {
            name: '无形资产',
            type: 'bar',
            color: '#C4EAFF',
            barWidth: '50%',
            stack: 'asset',
            emphasis: {
                focus: 'series',
            },
            data: [60, 72, 71, 74, 190, 130, 110],
        },
        {
            name: '其他资产',
            type: 'bar',
            color: '#D7F0FF',
            barWidth: '50%',
            stack: 'asset',
            emphasis: {
                focus: 'series',
            },
            data: [62, 82, 91, 84, 109, 110, 120],
        },
    ],
};

if (option && typeof option === 'object') {
    myChart.setOption(option, true);
}
