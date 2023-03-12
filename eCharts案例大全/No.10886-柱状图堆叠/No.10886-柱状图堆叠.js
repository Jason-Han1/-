var color = ['#4587E7','#ff69b4'];
option = {
    color: color,
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        }
    },
    yAxis: {
        type: 'value',
    },
    xAxis: {
        type: 'category',
        data: ['Oct', 'Sep', 'Aug', 'July', 'June', 'May', 'Apr', 'Mar', 'Feb', 'Jan']
    },
    series: [{
        name: '月开支',
        type: 'bar',
        barGap: '-100%',
        data: [1900, 1029, 1602, 2004, 1100, 1800, 2800, 1407, 2200, 900]
    }, {
        type: 'bar',
        silent: true,
        barGap: '-100%',
        data: [100, 1000, 800, 1070, 900, 300, 1200, 900, 1200, 200]
    }]
}