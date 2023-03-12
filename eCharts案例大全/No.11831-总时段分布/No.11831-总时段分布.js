option = {
    xAxis: {
        type: 'category',
        data: ['0-6点', '6-9点', '9-12点', '12-14点', '14-18点', '18-21点', '21-24点']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [0, 62, 5, 27, 3, 45, 9],
        type: 'line',
        symbol: 'triangle',
        symbolSize: 15,
        lineStyle: {
            normal: {
                color: 'green',
                width: 4,
                type: 'dashed'
            }
        },
        itemStyle: {
            normal: {
                borderWidth: 3,
                borderColor: 'yellow',
                color: 'blue'
            }
        }
    }]
};
