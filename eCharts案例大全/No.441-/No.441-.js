let chartData = [
    {
        name: '正常运行',
        value: 50,
        color: '#51FFB2',
    },
    {
        name: '预警点位',
        value: 30,
        color: '#FFF5A0',
    },
    {
        name: '告警点位',
        value: 20,
        color: '#F54646',
    },
];
let sum = chartData.reduce((pre, cur) => pre + cur.value, 0);
let pieSeries = [];
// 图表option整理
chartData.forEach((v, i) => {
    pieSeries.push({
        name: chartData[i].name,
        type: 'pie',
        clockWise: false,
        hoverAnimation: false,
        radius: [80 - i * 16 + '%', 92 - i * 16 + '%'],
        center: ['50%', '50%'],
        label: {
            show: false,
        },
        itemStyle: {
            color: chartData[i].color,
        },
        data: [
            {
                value: v.value,
                name: v.name,
            },
            {
                value: sum - v.value,
                name: '',
                itemStyle: {
                    color: 'rgba(49, 120, 189, 0.3)',
                },
            },
        ],
    });
    pieSeries.push({
        name: '',
        type: 'pie',
        silent: true,
        z: 1,
        clockWise: false, //顺时加载
        radius: [80 - i * 16 + '%', 92 - i * 16 + '%'],
        center: ['50%', '50%'],
        label: {
            show: false,
        },
        data: [
            {
                value: 7.5,
                itemStyle: {
                    color: 'rgba(155, 155, 155, 0.15)',
                },
            },
            {
                value: 0,
                name: '',
                itemStyle: {
                    color: 'rgba(49, 120, 189, 0.3)',
                },
            },
        ],
    });
});

option = {
    title: {
        text: sum,
        top: '47%',
        textAlign: 'center',
        left: '50%',
        textStyle: {
            color: '#5fb3ff',
            fontSize: 32,
            fontWeight: '600',
        },
    },
    series: pieSeries,
};
