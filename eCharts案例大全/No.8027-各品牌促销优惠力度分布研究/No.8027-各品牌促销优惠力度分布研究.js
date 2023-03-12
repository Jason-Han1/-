const set1 = [
    ['格力', 40.89, 43.7, 53.06, 55.56, 74.91],
    ['海尔', 34.29, 41.48, 51.52, 70.66, 98.27],
    ['小狗', 25.03, 28.56, 30.28, 68.04, 96.38],
    ['华帝', 1.31, 3, 24.34, 24.97, 31.21],
    ['美的', 42.57, 60.22, 65.79, 84.46, 97.82]
];

option = {
    // backgroundColor: '#fff',
    grid:{
        left:64,
        right:32,
        top:40,
        bottom:40
    },
    tooltip: {
        show: true
    },
    dataset: {
        source: set1
    },
    xAxis: {
        type: 'value',
        name:'¥'
    },
    yAxis: {
        type: 'category',
        name:'各品牌的优惠力度'
    },
    series: [{
        type: 'boxplot',
    }]
};
myChart.resize({
    width: 400,
    height: 320
})