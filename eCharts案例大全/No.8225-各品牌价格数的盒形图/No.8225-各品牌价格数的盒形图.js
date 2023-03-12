const set1 = [
    ['海尔', 655, 700, 850, 890, 1200],
    ['格力', 824, 908, 1238, 1698, 2361],
    ['美的', 1083, 1235, 1310, 2943, 4169],
    ['华帝', 121, 148, 390, 490, 700],
    ['小狗电器', 682, 765, 854, 1353, 1451]
];

option = {
    // backgroundColor: '#fff',
    grid:{
        left:64,
        right:24,
        top:8,
        bottom:40
    },
    tooltip: {
        show: true
    },
    dataset: {
        source: set1
    },
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'category'
    },
    series: [{
        type: 'boxplot',
    }]
};
myChart.resize({
    width: 536,
    height: 320
})