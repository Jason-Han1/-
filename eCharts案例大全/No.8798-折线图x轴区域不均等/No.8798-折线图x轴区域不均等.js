var dd = [];
for (var i = 0; i < 146; i++) {
    var node = '2017-12-10' + '\n' + i
    dd.push(node);
}

option = {
    tooltip: {
        trigger: 'item',
        formatter: function(val) {
            return '[' + val.value[0] + '] : ' + val.value[2]
        }
    },
    xAxis: {
        type: 'category',
        data: dd,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(40, 80, 95, 1)',
            }
        },
        onZero: false,
        scale: true,
        axisLabel: {
            interval: 23,
            rotate: 90,
            showMaxLabel: true,
        }
    },
    yAxis: {
        type: 'time',
    },
    series: [{
        data: [],
        type: 'line',
    }]
};