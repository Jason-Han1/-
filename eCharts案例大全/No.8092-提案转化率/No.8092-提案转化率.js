option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data: ['职工建议数', '代表采纳数', '转化为提案数量', '转化率']
    },
    xAxis: [
        {
            type: 'category',
            data: ['2017年', '2018年', '2019年','2020年'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '数量',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                formatter: '{value} 件'
            }
        },
        {
            type: 'value',
            name: '转化率',
            min: 0,
            max: 50,
            interval: 5,
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {
            name: '职工建议数',
            type: 'bar',
            data: [120, 140, 160, 200]
        },
        {
            name: '代表采纳数',
            type: 'bar',
            data: [100, 120, 140, 180]
        },
        {
            name: '转化为提案数量',
            type: 'bar',
            data: [30, 35, 50, 70]
        },
        {
            name: '转化率',
            type: 'line',
            yAxisIndex: 1,
            data: [30, 29, 36, 39]
        }
    ]
};
