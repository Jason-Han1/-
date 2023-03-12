var colors = ['#5793f3', '#d14a61', '#675bba'];

option = {
    color: colors,
    title: {
        text: ""
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        left: '5%',
        right: '10%',
        bottom: '16%',
        top: '8%',
        containLabel: true
    },
    legend: {
        // data: ['新开户市占率(%)', '新开户数(万)']
    },
    dataZoom: [{
            show: true,
            start: 0,
            end: 60,
            bottom: '8%'
        },

    ],
    xAxis: [{
        type: 'category',

        data: ['10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月', '2017-01-13', '2017-01-14', '2017-01-15', '2017-01-16']
    }],
    yAxis: [{
        type: 'value',
        name: '新开户市占率(%)',
        min: 0,
        max: 100,
        nameRotate: 90,
        nameGap: 50,
        nameLocation: "middle",
        axisLine: {
            lineStyle: {
                color: colors[0]
            }
        },
        axisLabel: {
            formatter: '{value} %'
        },

    }, {
        type: 'value',
        name: '新开户数(万)',
        min: 0,
        max: 25,
        nameRotate: 90,
        nameGap: 50,
        nameLocation: "middle",
        axisLine: {
            lineStyle: {
                color: colors[2]
            }
        },

    }],
    series: [{
        name: '新开户市占率(%)',
        type: 'bar',
        data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 86.6, 62.2, 32.6, 20.0, 6.4, 3.3]
    }, {
        name: '租金(千万)',
        type: 'line',
        yAxisIndex: 1,
        data: [1.0, 1.4, 1.6, 2.0, 2.7, 2.9, 3.1, 3.2, 3.7, 18.8, 6.0, 2.3]
    }]
};