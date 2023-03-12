var data1 = 200;
var data2 = [1221, 932, 901, 934, 1290, 1330, 1320];

option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value',
        axisPointer: {
            show: true,
            value: data1,
            lineStyle: {
                color: '#004E52',
                opacity: 0.5,
                width: 2
            },
            snap: false,
            handle: {
                show: true,
                size: 20,
                margin: 60,
                color: '#DC143C',
                throttle: 100
            },
            triggerTooltip: false,
        }
    },
    series: [{
        type: 'bar',
        data: data2
    }, {
        type: 'line',
        data: data2,
    }]
};