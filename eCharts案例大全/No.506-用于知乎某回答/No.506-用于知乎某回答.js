let nameList = [
    '改扩建',
    '二期工程',
    '改扩建',
    '砂石路',
    '城管段',
    '',
    '重复路段',
    '',
    '收费公路',
    '',
    '提质工程',
    '',
    '提质工程',
];
let valueList = [1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

let dataList = valueList.map(function (item) {
    return [item, '分段信息'];
});
//console.log(data);

let series = [];

for (let i in nameList) {
    series.push({
        name: nameList[i] === '' ? 'empty' : nameList[i],
        type: 'bar',
        stack: 'a',
        label: {
            show: nameList[i] === '' ? false : true,
            formatter: '{a}',
        },
        barWidth:'30%',
        itemStyle: {
            opacity: nameList[i] === '' ? 0 : 1,
        },
        data: [dataList[i]],
        silent: nameList[i] === '' ? true : false,
    });
}

option = {
    title: {
        text: '用于知乎某回答',
    },
    grid: [
        {
            top: '20%',
            bottom: '20%',
        },
    ],
    yAxis: {
        type: 'category',
        data: ['分段信息', 'a', 'b', 'c', 'd'],
    },
    xAxis: {
        axisLine: {
            show: true
        }
        
    },
    legend: {
        show: true,
    },
    series: series,
};
