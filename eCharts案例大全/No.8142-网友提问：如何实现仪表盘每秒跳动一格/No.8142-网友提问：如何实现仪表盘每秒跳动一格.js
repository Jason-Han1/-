var val = 30;

option = {
    title: {
        text: '仪表盘每秒跳动一格'
    },
    series: [{
        name: '仪表盘每秒跳动一格v1',
        type: 'gauge',
        center: ['25%', '50%'],
        radius: '50%',
        axisLine: {
            lineStyle: {
                color: [
                    [0.299, '#888'],
                    [0.7, '#91c7ae'],
                    [1, '#888']
                ]
            }
        },
        data: [{
            value: val,
            name: '读数'
        }]
    }, {
        name: '仪表盘每秒跳动一格v2',
        type: 'gauge',
        center: ['75%', '50%'],
        radius: '50%',
        min: 30,
        max: 70,
        axisLine: {
            lineStyle: {
                color: [
                    [1, '#91c7ae']
                ]
            }
        },
        data: [{
            value: val,
            name: '读数'
        }]
    }]
};



app.timeTicket = setInterval(function() {

    val === 70 ? val = 30 : val++;

    option.series[0].data[0].value = val;
    option.series[1].data[0].value = val;

    myChart.setOption(option, true);
}, 1000);