// 如何让折线图的点在柱子里头？
option = {
    legend: {
        data: ['2020', '2021']
    },
    xAxis: {
        data: ['01', '02', '03', '04', '05', '06']
    },
    yAxis: {},
    series: [
        {
            name: '2020',
            type: 'bar',
            data: [60, 68, 70, 66, 76, 86]
        },
        {
            name: '2021',
            type: 'bar',
            data: [80, 90, 78, 84, 86, 82]
        },
        {
            name: '2020',
            type: 'line',
            data: [30, 34, 35, 33, 38, 43]
        },
        {
            name: '2021',
            type: 'line',
            data: [40, 45, 39, 42, 43, 41]
        }
    ]
};
