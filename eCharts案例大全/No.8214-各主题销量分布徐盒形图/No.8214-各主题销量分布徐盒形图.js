const set1 = [
    ['华帝', 73596, 78652, 95506, 100000, 134831],
    ['海尔', 92573, 111997, 139099, 190774, 265326],
    ['小狗电器', 121658, 138781, 147156, 330683, 468398],
    ['格力', 2365, 5393, 43820, 44944, 56180],
    ['美的', 76623, 108403, 118427, 152034, 176067]
];

option = {
    // backgroundColor: '#fff',
    grid:{
        left:64,
        right:24,
        top:48,
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
        type: 'category',
        name:'各品牌的总销量'
    },
    series: [{
        type: 'boxplot',
        boxWidth:'60%'
    }]
};
myChart.resize({
    width: 400,
    height: 320
})