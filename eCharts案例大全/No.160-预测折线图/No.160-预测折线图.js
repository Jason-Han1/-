let list = [
    {
        name: '1月',
        value: 220,
    },
    {
        name: '2月',
        value: 182,
    },
    {
        name: '3月',
        value: 191,
    },
    {
        name: '4月',
        value: 220,
    },
    {
        name: '5月',
        value: 182,
    },
    {
        name: '6月',
        value: 191,
    },
    {
        value: 191,
        name: '7月',
    },
    {
        name: '8月',
        value: 234,
        predict: true,
    },
    {
        name: '9月',
        value: 290,
        predict: true,
    },
    {
        name: '10月',
        value: 330,
        predict: true,
    },
    {
        name: '11月',
        value: 310,
        predict: true,
    },
    {
        name: '12月',
        value: 210,
        predict: true,
    },
];

let data1 = [];
let data2 = [];

list.forEach((item) => {
    if (item.predict) {
        data2.push([item.name, item.value]);
    } else {
        data1.push([item.name, item.value]);
    }
});

// 如果是折线图，此处需要追加实际数据的最后一组数据，如果是柱状图，则不需要。
data2.unshift(data1[data1.length - 1]);

let labels = list.map((m) => {
    return m.name;
});

option = {
    tooltip: {
        trigger: 'axis',
    },
    xAxis: {
        type: 'category',
        data: labels,
    },
    yAxis: {
        type: 'value',
    },
    legend: {
        show: true,
        data: ['实际支出', '预测支出'],
    },
    series: [
        {
            name: '实际支出',
            type: 'line',
            data: data1,
        },
        {
            name: '预测支出',
            type: 'line',
            lineStyle: {
                type: 'dashed',
            },
            symbol: 'none',
            data: data2,
        },
    ],
};
