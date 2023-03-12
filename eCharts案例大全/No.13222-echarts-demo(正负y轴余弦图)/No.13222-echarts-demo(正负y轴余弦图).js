
var xAxisData = [];
var data1 = [];
var data2 = [];
for (var i = 0; i < 100; i++) {
    xAxisData.push('类目' + i);
    data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
    data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
}
option={
    backgroundColor: 'rgb(35, 43, 46)',
    color: ['rgba(0,136,219)', 'rgba(82,255,176)'],
    legend: {
        data: ['bar', 'bar2'],
        align: 'left',
        textStyle: {
            color: '#fff',
        },
    },
    tooltip: {},
    xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#ccc',
            },
        },
    },
    yAxis: {
        axisLine: {
            lineStyle: {
                color: '#ccc',
            },
        },
    },
    series: [{
        name: 'bar',
        type: 'bar',
        data: data1,
        animationDelay: function(idx) {
            return idx * 10;
        }
    }, {
        name: 'bar2',
        type: 'bar',
        data: data2,
        animationDelay: function(idx) {
            return idx * 10 + 100;
        }
    }],
    animationEasing: 'elasticOut',
    animationDelayUpdate: function(idx) {
        return idx * 5;
    }
};