const mydata = [
['8-30', 21], 
['8-31', 23],
['9-1', 59],
['9-2', 0],
['9-3', 30],
['9-6', 25],
['9-7', 5],
['9-8', 2],
['9-9', 1],
['9-10', 2],
['9-13', 8],
['9-14', 6],
['9-15', 1],
['9-16', 28],
['9-17', 11],
];

option = {
    xAxis: {
        type: 'category',
    },
    yAxis: {
        type: 'value',
        inverse: true
    },
    series: [{
        type: 'line',
        color: 'red'
    }],
    tooltip: {
        show: true,
        trigger: 'axis'
    },
    dataset: {
        source: mydata
    }
};