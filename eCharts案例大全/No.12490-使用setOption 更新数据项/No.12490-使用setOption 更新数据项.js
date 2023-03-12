var dataset = {
    source: [
        ['Mon', 820, 1212, 345],
        ['Tue', 932, 34, 342],
        ['Wed', 901, 34, 234],
        ['Thu', 934, 234, 342],
        ['Fri', 1290, 234, 212],
        ['Sat', 1330, 565, 456],
        ['Sun', 1320, 1233, 565]
    ],
    dimensions: ['time', 'aaa', 'bbb', 'ccc'],
    sourceHeader: false
}
var series = [{
    type: 'line',
    id: '1',
    name: 'aaa'
}, {
    type: 'line',
    id: '2',
    name: 'bbb'
}, {
    type: 'line',
    id: '3',
    name: 'ccc'
}]
option = {
    title: {
        text: 'Awesome Chart'
    },
    dataset: dataset,
    xAxis: {
        type: 'category'
    },
    yAxis: {},
    series: series
};

setTimeout(function() {
    dataset.source = dataset.source.map(function (s) {
        s.pop()
        return s
    })
    
    myChart.setOption({
        dataset: dataset,
        series: (series.pop(), series)
    })
}, 2000);