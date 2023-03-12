let list = [
    {
        name: '2018',
        value: 20.88,
    },
    {
        name: '2019',
        value: 17.22,
    },
    {
        name: '2020',
        value: 23.23,
    },
    {
        name: '2021',
        value: 25.92,
        predict: true,
    },
];

let list2 = [
    {
        name: 'Q1',
        value: 4,
    },
    {
        name: 'Q2',
        value: 5,
    },
    {
        name: 'Q3',
        value: 6,
    },
];

const colors = ['red', 'orange', 'yellow'];

let labels = list.map((m) => m.name);
let barData1 = list
    .filter((m) => !m.predict)
    .map((item) => {
        return [item.name, item.value];
    });
let barData2 = list
    .filter((m) => m.predict)
    .map((item) => {
        return [item.name, item.value];
    });

let series = [
    {
        name: '实际收入',
        type: 'bar',
        barWidth: 20,
        data: barData1,
        itemStyle: {
            color: 'rgba(85,113,201,0.4)',
        },
        label: {
            show: true,
            position: 'top',
            fontSize: 20,
            color: 'rgba(85,113,201,1)',
        },
    },
    {
        name: '实际收入',
        type: 'line',
        symbol: 'circle',
        symbolSize: 10,
        data: barData1,
    },
    {
        name: '预测收入',
        type: 'bar',
        barWidth: 20,
        barGap: '-100%',
        data: barData2,
        label: {
            show: true,
            position: 'top',
            fontSize: 20,
            color: '#000',
        },
        itemStyle: {
            color: 'rgba(85,113,201,0.1)',
        },
    },
];

list2.forEach((item, index) => {
    series.push({
        name: 'Q' + (index + 1),
        type: 'bar',
        barWidth: 20,
        barGap: '-100%',
        stack: true,
        data: [['2021', +(Math.random() * 5 + 3).toFixed(2)]],
        label: {
            show: true,
            position: 'right',
            fontSize: 20,
            color: 'rgba(85,113,201,1)',
        },
        itemStyle: {
            color: colors[index],
        },
    });
});
let legends = list2.map((m) => m.name);


option = {
    xAxis: {
        data: labels,
        axisTick: {
            show: false,
        },
    },
    yAxis: {
        show: false,
    },
    legend: {
        data: legends,
    },
    series: series,
};
