chartData = [
    {
        day: '2021-10-01',
        count: 80,
    },
    {
        day: '2021-10-02',
        count: 50,
    },
    {
        day: '2021-10-03',
        count: 40,
    },
    {
        day: '2021-10-04',
        count: 50,
    },
    {
        day: '2021-10-05',
        count: 50,
    },
    {
        day: '2021-10-06',
        count: 20,
    },
    {
        day: '2021-10-07',
        count: 70,
    },
];
var data = [];
for (var i = 0; i < chartData.length; i++) {
    data.push([chartData[i].day, chartData[i].count]);
}
option = {
    backgroundColor: '#313131',
    tooltip: {
        trigger: 'item',
        formatter: '{a}<br/>{c}' + 'min',
    },
    grid: {
        left: '50',
        right: '0',
        top: '0',
        width: '100%',
        height: '100%',
        containLabel: true,
    },
    calendar: [
        {
            top: 300,
            left: 'center',
            range: [data[0][0], data[data.length - 1][0]],
            orient: 'vertical',
            cellSize: 68,
            splitLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(255,255,255,.1)',
                    width: 0,
                    type: 'solid',
                },
            },
            yearLabel: {
                margin: 60,
                show: false,
                color: '#ffffff',
            },
            monthLabel: {
                show: false,
                firstDay: 1,
                nameMap: 'cn',
                margin: 30,
                color: '#ffffff',
            },
            dayLabel: {
                firstDay: 0,
                margin: 20,
                nameMap: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
                textStyle: {
                    color: 'rgba(255,255,255,.8)',
                },
            },
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderWidth: 1,
                    borderColor: 'rgba(255,255,255,.1)',
                },
            },
        },
    ],
    series: [
        {
            name: '',
            type: 'effectScatter',
            coordinateSystem: 'calendar',
            data: data,
            symbolSize: (val) => {
                val = val[1] / 5;
                val = val === 0 ? 0 : val < 5 ? 5 : Math.min(val, 25);
                return val;
            },
            itemStyle: {
                normal: {
                    // color: 'rgba(254,123,123,.86)'
                    color: (params) => {
                        return 'rgba(254,123,123,1)';
                    },
                },
            },
            label: {
                show: true,
                formatter(params) {
                    return params.value[0].split('-')[2];
                },
                offset: [25, -20],
                color: 'rgba(255,255,255,.8)',
            },
        },
    ],
};
