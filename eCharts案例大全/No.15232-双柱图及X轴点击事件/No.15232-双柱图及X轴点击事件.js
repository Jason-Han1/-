option = {
    legend: {
        data: ['bar1', 'bar2']
    },
    xAxis: {
        triggerEvent:true,
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        name: 'bar1',
        type: 'bar',
        itemStyle: {
            normal: {
                color: '#1FBCD2'
            }
        },
        data: [220, 182, 191, 234, 290, 330, 310]
    }, {
        name: 'bar2',
        type: 'bar',
        itemStyle: {
            normal: {
                color: '#FEDC6E'
            }
        },
        data: [200, 200, 101, 300, 330, 190, 100]
    }]
};
myChart.on('click', function(param) {
  alert(param.value);
}); 