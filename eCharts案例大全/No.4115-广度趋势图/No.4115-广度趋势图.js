app.title = '双轴对等分、顶部预留一等份空间';
data1 = [2.6, 5.2, 9.0, 1.4, 1.7, 1.7, 1.6, 186.2, 48.7, 18.8, 6.0, 2.3];
data2 = [2.0, 2.2, 3.3, 4.5, 6.3, 1.2, 1.3, 23.4, 23.0, 16.5, 12.0, 6.2];

//取出最大值
maxD1 = Math.max.apply(Math, data1);
maxD2 = Math.max.apply(Math, data2);

//双轴对等分
part = 6;
partA = part - 1;

option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['广度', '行业涨跌幅']
    },
    xAxis: [{
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    }],
    yAxis: [{
            type: 'value',
            name: '广度',
            axisLabel: {
                formatter: '{value} %'
            },
            splitNumber: part,
            max: function(value) {
                return (Math.ceil(value.max / partA) * partA) + Math.ceil(value.max / partA);
            },
            interval: Math.ceil(maxD1 / partA)
        },
        {
            type: 'value',
            name: '幅度',
            axisLabel: {
                formatter: '{value} %'
            },
            splitNumber: part,
            max: function(value) {
                return (Math.ceil(value.max / partA) * partA) + Math.ceil(value.max / partA);
            },
            interval: Math.ceil(maxD2 / partA)
        }
    ],
    series: [{
            name: '广度',
            type: 'line',
            data: data1
        },
        {
            name: '行业涨跌幅',
            type: 'line',
            yAxisIndex: 1,
            data: data2
        }
    ]
};