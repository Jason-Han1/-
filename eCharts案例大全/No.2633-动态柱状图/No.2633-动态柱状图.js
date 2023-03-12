option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
    }]
};

setInterval(function (){
    var axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');

    var data0 = option.series[0].data;
    
    //data0.shift();
    data0.push(Math.round(Math.random() * 1000));
    

    //option.xAxis.data.shift();
    option.xAxis.data.push(axisData);
    

    myChart.setOption(option);
}, 2100);