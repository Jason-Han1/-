var data = [820];
option = {
    xAxis: {
        type: 'category',
        boundaryGap: false,//从刻度0开始对应。
        data: ['7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00','14:00','15:00','16:00','17:00','18:00']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: data,
        type: 'line',
        smooth: true
    }]
};
setInterval(function () {
    if (data.length<13) {
         data.push(5)
    }
    myChart.setOption({
        series: [{
            data: data
        }]
    });
}, 1000);