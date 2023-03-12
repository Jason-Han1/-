var chartData = [
    {
        name: '观察期',
        value: 122,
    },
    {
        name: '已行权',
        value: 986,
    },
];
var legends = chartData.map((data, index) => {
    return data.name;
});
option = {
    // color:['#3A71F0', '#e9f1f9'],
    title: {
        text: '{a|986} {b|家}\n{c|企业总数}',
        textStyle: {
            rich: {
                a: {
                    fontSize: 24,
                    color: '#313131',
                    fontWeight: 'bold',
                },
                b: {
                    fontSize: 16,
                    color: '#313131',
                },
                c: {
                    fontSize: 16,
                    color: '#808080',
                },
            },
        },
        left: 'center',
        bottom: 'middle',
    },
    legend: {
        bottom: 10,
        selectedMode: false,
        data: legends,
        icon: 'circle',
        itemStyle: {
            // color:['#3A71F0', '#e9f1f9']
        },
    },
    angleAxis: {
        max: 1200,
        axisLabel: false,
        axisTick: false,
        axisLine: false,
        splitLine: false,
    },
    radiusAxis: {
        type: 'category',
        data: ['1'],
        axisLabel: false,
        axisTick: false,
        axisLine: false,
    },
    polar: {
        center: ['50%', '50%'],
        // radius:['100%','80%']
    },

    series: [
        {
            name: '已行权',
            type: 'bar',
            stack: '已行权',
            coordinateSystem: 'polar',
            barWidth: 40,
            showBackground: true,
            roundCap: true,
            itemStyle: {
                color: '#3A71F0',
                borderRadius: [4, 4, 4, 4],
                backgroundColor: '#333',
                shadowBlur:10,
                shadowColor:'#3A71F0'
            },
            backgroundStyle: {
                color: '#e9f1f9',
            },
            data: [986],
        },
        {
            name: '观察期',
            stack: '已行权',
            type: 'bar',
            coordinateSystem: 'polar',
            itemStyle: {
                color: '#e9f1f9',
            },
        },
    ],
};
