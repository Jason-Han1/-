var data = [];
var now = +new Date('2012-05-12');
var DAY = 3600 * 24 * 1000;
var HOUR = 3600 * 1000;

for (var i = 0; i < 100; i++, now += HOUR) {
    data.push([now, Math.random()])
}

option = {
    grid: {
        bottom: 100
    },
    dataZoom: [{
        type: 'slider'
    }, {
        type: 'inside'
    }],
    xAxis: {
        type: 'time',
        interval: DAY / 4,
        axisLabel: {
            formatter: function (value) {
                if (value % DAY === 0) {
                    var month = echarts.format.formatTime('M月', value)
                    var dayOfM = echarts.format.formatTime('d日', value)
                    return '{strong|' + dayOfM + '}\n{lite|' + month + '}';
                }
                else {
                    
                    var formatted = echarts.format.formatTime('h点', value);
                    return formatted;
                }
            },
            rich: {
                strong: {
                    color: '#2784e8',
                    fontSize: 14,
                    fontWeight: 700
                },
                lite: {
                    color: '#999',
                    lineHeight: 15,
                    fontSize: 10
                }
            }
        }
    },
    yAxis: {
    },
    tooltip: {
        trigger: 'axis'
    },
    series: [{
        type: 'line',
        data: data
    }]
};