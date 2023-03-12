var easingFuncs = {
    现状: function (k) {
        return Math.exp(-(k-0.5)*(k-0.5)/2)/2;
    },
    标准正态: function (k) {
        return Math.exp(-(k-0.5)*(k-0.5)/2);
    },
    
};

var N_POINT = 1000;

var grids = [];
var xAxes = [];
var yAxes = [];
var series = [];
var titles = [];
var legends =[];
var count = 0;

    titles.push({
        textAlign: 'center',
        text: name,
        textStyle: {
            fontSize: 12,
            fontWeight: 'normal'
        }
    });


echarts.util.each(easingFuncs, function (easingFunc, name) {
    var data = [];
    for (var i = -N_POINT; i <= N_POINT; i++) {
        var x = i*5 / N_POINT;
        var y = easingFunc(x);
        data.push([x, y]);
    }

    series.push({
        name: name,
        type: 'line',
        xAxisIndex: count,
        yAxisIndex: count,
        data: data,
        showSymbol: false,
        animationEasing: name,
        animationDuration: 1000
    });
    legends.push({
        name:name
    });
});

// var rowNumber = Math.ceil(Math.sqrt(count));
// echarts.util.each(grids, function (grid, idx) {
//     grid.left = ((idx % rowNumber) / rowNumber * 100 + 0.5) + '%';
//     grid.top = (Math.floor(idx / rowNumber) / rowNumber * 100 + 0.5) + '%';
//     grid.width = (1 / rowNumber * 100 - 1) + '%';
//     grid.height = (1 / rowNumber * 100 - 1) + '%';

//     // titles[idx].left = parseFloat(grid.left) + parseFloat(grid.width) / 2 + '%';
//     // titles[idx].top = parseFloat(grid.top) + '%';
// });

option = {
    title: titles.concat([{
        text: '变化趋势对比',
        top: 'bottom',
        left: 'center'
    }]),
    grid: {
        show: true,
        borderWidth: 0,
        backgroundColor: 'gray',
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowBlur: 2
    },
    legend:legends,
    xAxis: {
        type: 'value',
        show: true,
        min: -5,
        max: 5
    },
    yAxis:{
        type: 'value',
        show: true,
        min: 0.0,
        max: 1
    },
    series: series
};
