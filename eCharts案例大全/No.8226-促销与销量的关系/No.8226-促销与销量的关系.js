const set1 =[
    ['日期', '可折价促销', '实物赠品促销', '其他促销', '日销量（消息数）'],
    ['2019/10/2', 7, 3, 5, 988],
    ['2019/10/3', 6, 3, 10, 871],
    ['2019/10/4', 4, 0, 10, 872],
    ['2019/10/5', 8, 1, 7, 549],
    ['2019/10/6', 4, 3, 12, 793],
    ['2019/10/7', 5, 5, 5, 1089],
    ['2019/10/8', 8, 5, 12, 671],
    ['2019/10/9', 2, 0, 6, 704],
    ['2019/10/10', 3, 3, 4, 632],
    ['2019/10/11', 6, 2, 4, 651],
    ['2019/10/12', 6, 1, 9, 607],
    ['2019/10/13', 8, 0, 10, 584],
    ['2019/10/14', 4, 4, 12, 648]
];

option = {
    dataset: {
        source: set1
    },
    grid: {
        right: 48,
        left: 160,
        bottom:24,
        top:32
    },
    // backgroundColor:'#fff',
    legend: {
        left:0,
        top:'middle',
        orient:'vitical'
    },
    tooltip: {
        show: true
    },
    xAxis: {
        type: 'category',
        name: ''
    },
    yAxis: [
        {name:'促销数量'},
        {name:'日销量(消息数)'}
    ],
    series: [{
            type: 'bar',
            barWidth: '60%',
            stack: true
        },
        {
            type: 'bar',
            barWidth: '60%',
            stack: true
        },
        {
            type: 'bar',
            barWidth: '60%',
            stack: true
        },
        
        {
            type: 'line',
            barWidth: '60%',
        yAxisIndex:1
        }
    ]
};
myChart.resize({
    width: 744,
    height: 320
})