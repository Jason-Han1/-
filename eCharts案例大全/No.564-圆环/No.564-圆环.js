option = {
    angleAxis: {
        show: false,
        type: 'category',
        data: [
            '学习1小时以内占比',
            '学习1-2小时占比',
            '学习2-3小时占比',
            '学习3-4小时占比',
            '学习4-5小时占比',
            '学习5小时以上占比',
        ],
    },
    radiusAxis: {
        min: 0,
        max: 100,
        interval: 20,
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: {
            align: 'center',
            formatter: function (value, index) {
                return value + '%';
            },
        },
    },
    polar: {},
    tooltip: {
        confine: true,
        transitionDuration: 0,
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}%',
    },
    series: [
        {
            type: 'bar',
            data: [80, 20, 100, 40, 30, 10],
            coordinateSystem: 'polar',
            name: '学习时间占比',
            stack: 'a',
            emphasis: {
                focus: 'series',
            },
            itemStyle: {
                normal: {
                    color: function (params) {
                        var colorlist = ['#9966cc', '#ffcc00', '#ff3333', '#333366', '#33cc66', '#3399cc'];
                        return colorlist[params.dataIndex];
                    },
                },
            },
        },
    ],
    legend: {
        show: false,
    },
};
