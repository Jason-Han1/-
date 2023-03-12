const set1 = [
  ['属性', '指标满意度'],
  ['其他（6）', 3.58],
  ['属性4', 4.11],
  ['属性2', 4.5],
  ['属性5', 4.93],
  ['属性3', 4.97],
  ['属性1', 5.9]
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
    xAxis: {
    },
    yAxis: {
        type: 'category',
    },
    
    series: [{
        type: 'bar',
    }]
};

myChart.resize({
    width: 536,
    height: 320
})