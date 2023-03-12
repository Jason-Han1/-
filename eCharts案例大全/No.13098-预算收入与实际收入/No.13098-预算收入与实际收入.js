let arr1 = [1000000, 630000, 900000, 1250000, 1954000, 2192000, 1835000, 1789000, 2393000, 1750000, 2400000, 2500000];
let arr2 = [1123180.15, 655552.2, 1347675.87, 1481906.4, 3866326.82, 3147657.91, 2432494.66, 1782080.1, 969800];

let budget = [0];
let realIncome = [0];

for (let i = 0; i < 12; i++) {
    let tmp = arr1[i] || NaN;
    tmp = parseFloat((tmp / 10000).toFixed(1));
    budget.push(tmp + budget[i]);
}
for (let i = 0; i < 12; i++) {
    let tmp = arr2[i] || NaN;
    tmp = parseFloat((tmp / 10000).toFixed(1));
    realIncome.push(tmp + realIncome[i]);
}
budget = budget.slice(1);
realIncome = realIncome.slice(1);
console.log(budget)
console.log(realIncome)
option = {
    title: {
        text: '预算与实际',
        subtext: '有点牛集团'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['预算收入', '实际收入']
    },
    toolbox: {
        show: true,
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        splitLine: {
            show: false
        },
        data: function() {
            var list = [];
            for (var i = 1; i <= 12; i++) {
                list.push(i + '月');
            }
            return list;
        }()
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
            name: '预算收入',
            type: 'line',
            data: budget,
            markLine: {
                data: [{
                    type: 'average',
                    name: '平均值'
                }]
            }
        },
        {
            name: '实际收入',
            type: 'line',
            data: realIncome,
            markLine: {
                data: [{
                    type: 'average',
                    name: '平均值'
                }]
            }
        }
    ]
};