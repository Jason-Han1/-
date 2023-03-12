const set1 = [
    ['指标', '正面情感'],
    ['指标5', 257],
    ['指标1', 271],
    ['指标7', 380],
    ['指标9', 410],
    ['指标4', 454],
    ['指标8', 593],
    ['指标2', 711],
    ['指标3', 733],
    ['指标6', 991]
];

option = {
    // backgroundColor:'#fff',
    dataset: {
        source: set1
    },
    // legend:{
    //     top:4,
    //     left:16
    // },
    grid: {
        left: 48,
        top: 16,
        right: 16,
        bottom: 32,
    },
    xAxis: {

    },
    yAxis: {
        type: 'category'
    },
    series: [{
        type: 'bar',
        barWidth: '50%'
    }, ]
};
myChart.resize({
    width: 536,
    height: 320
})