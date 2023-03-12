const set1 = [
    ['时间', '好评率'],
    ['2019-10-01', 7.1],
    ['2019-10-02', 2.4],
    ['2019-10-03', 5],
    ['2019-10-04', 0.5],
    ['2019-10-05', 2],
    ['2019-10-06', 5.3],
    ['2019-10-07', 9.3],
    ['2019-10-08', 3.2],
    ['2019-10-09', 8.7],
    ['2019-10-10', 7.1]
];

option = {
    // backgroundColor:'#fff',
    dataset: {
        source: set1
    },
    grid: {
        top: 40,
        left: 48,
        bottom: 48,
        right: 24,
    },
    legend: {
        left: 16,
        top: 8,
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {},
    series: [
        {
            type: 'bar',
            barWidth: '60%',
            stack: true
        }
    ]
};
myChart.resize({
    width: 536,
    height: 320
})