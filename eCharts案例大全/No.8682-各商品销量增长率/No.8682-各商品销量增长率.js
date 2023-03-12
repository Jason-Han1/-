const set1 = [
    ['商品', '销量增长率'],
    ['商品8', 1.3],
    ['商品7', 0.89],
    ['商品13', 0.6],
    ['商品14', 0.59],
    ['商品1', 0.47],
    ['商品4', 0.23],
    ['商品2', 0.22],
    ['商品16', 0.22],
    ['商品10', 0.18],
    ['商品5', -0.21],
    ['商品17', -0.3],
    ['商品18', -0.33],
    ['商品6', -0.34],
    ['商品3', -0.48],
    ['商品12', -0.5],
    ['商品15', -0.65],
    ['商品9', -0.9],
    ['商品11', -0.95]
];

option = {
    // backgroundColor: '#fff',
    dataset: {
        source: set1
    },
    legend:{
        top:8,
        left:8
    },
    grid: {
        top: 40,
        left: 80,
        right: 24,
        bottom: 48,
    },
    yAxis: {
    },
    xAxis: {
        type: 'category',
    },
    
    series: [{
        type: 'line',smooth:true
    }]
};

myChart.resize({
    width: 536,
    height: 320
})