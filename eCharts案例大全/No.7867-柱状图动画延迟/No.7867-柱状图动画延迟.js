var xAxisData = [];
var data1 = [];
var data2 = [];
for (var i = 0; i < 10; i++) {
    xAxisData.push('类目' + i);
    data1.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5);
    data2.push((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 5);
}

option = {
    title: {
        text: '柱状图动画延迟'
    },
    legend: {
        data: ['bar', 'bar2']
    },
    toolbox: {
        // y: 'bottom',
        feature: {
            magicType: {
                type: ['stack', 'tiled']
            },
            dataView: {},
            saveAsImage: {
                pixelRatio: 2
            }
        }
    },
    tooltip: {},
    xAxis: {
        data: xAxisData,
        splitLine: {
            show: false
        }
    },
    yAxis: {
    },
    series: [{
        name: 'line',
        type: 'line',
        data: data1,
        label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
        animationDelay: function (idx) {
            return idx * 2000;
        }
    }, {
        name: 'line',
        type: 'line',
        data: data2,
        animationDelay: function (idx) {
            return idx * 2000 + 100;
        }
    }],
    animationEasing: 'linear',
    animationDuration:20000,
};