var data = [
    {
        name: '正常占比',
        value: 12,
        percent: '58',
    },
    {
        name: '故障占比',
        value: 5,
        percent: '58',
    },
];

var titleArr = [],
    seriesArr = [];
colors = [
    'rgba(6, 254, 188, 1)',
    'rgba(255, 164, 3, 1)',
    'rgba(6, 254, 188, 0.1)',
    'rgba(255, 164, 3, 0.1)',
    'rgba(255, 255, 255, 0.38)',
    'rgba(255, 255, 255, 1)',
];
data.forEach(function (item, index) {
    let i = index;
    if (i % 2 === 1) {
        i = i + 1;
    }
    titleArr.push({
        text: '{b|正常个数}' + '   ' + '{a|' + item.value + '}' + '   ' + '{a|' + item.percent + '%}',
        left: '50%',
        top: (i + 1) * 25 + '%',
        textAlign: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: '16',
            color: colors[4],
            textAlign: 'center',
            rich: {
                a: {
                    color: colors[5],
                    fontSize: '14',
                    fontWeight: 'bold',
                },
                b: {
                    colors: colors[4],
                    fontSize: '14',
                    fontWeight: 'bold',
                },
            },
        },
    });
    seriesArr.push({
        name: item.name,
        type: 'pie',
        clockWise: false,
        radius: ['25%', '30%'],
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: colors[index + 2] },
                    { offset: 1, color: colors[index] },
                ]),
                shadowColor: colors[index],
                shadowBlur: 0,
                label: {
                    show: false,
                },
                labelLine: {
                    show: false,
                },
            },
        },
        hoverAnimation: false,
        center: ['25%', (i + 1) * 25 + '%'],
        data: [
            {
                value: item.percent,
                label: {
                    normal: {
                        formatter: function (params) {
                            return params.seriesName;
                        },
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '20',
                            color: colors[4],
                        },
                    },
                },
            },
            {
                value: 100 - item.percent,
                name: 'invisible',
                itemStyle: {
                    normal: {
                        color: 'rgba(104, 104, 104, 0.3)',
                    },
                    emphasis: {
                        color: 'rgba(104, 104, 104, 0.3)',
                    },
                },
            },
        ],
    });
});

option = {
    backgroundColor: '#111111',
    title: titleArr,
    series: seriesArr,
};
