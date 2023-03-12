const data = getData();
function getData() {
    const largeData = [];
    let category = [];
    let categoryCnt = 100;
    for (let i = 0; i < categoryCnt; i++) {
        category.push(i);
    }
    for (let i = 0; i < 499 * 1000; i++) {
        let a = Math.floor(Math.random() * 500000 + i * 0.9);
        let b = Math.floor(Math.random() * 500000 + i * 0.9);
        let c = category[Math.floor(Math.random() * categoryCnt)];
        largeData.push([a, b, c]);
    }
    for (let i = 0; i < 1000; i++) {
        let a = Math.floor(Math.random() * 1000 * 1000);
        let b = Math.floor(Math.random() * 1000 * 1000);
        let c = category[Math.floor(Math.random() * categoryCnt)];
        largeData.push([a, b, c]);
    }
    return largeData;
}
option = {
    xAxis: {
        scale: true
    },
    yAxis: {
        scale: true
    },
    brush: {
        toolbox: ['rect', 'clear'],
        throttleType: 'debounce',
        throttleDelay: '2000',
        xAxisIndex: [0],
        yAxisIndex: [0]
    },
    series: [{
        type: 'scatter',
        symbolSize: 1,
        large: true,
        data: data,
    }]
};

myChart.on('brushselected', function(obj) {
    console.log(obj)
})