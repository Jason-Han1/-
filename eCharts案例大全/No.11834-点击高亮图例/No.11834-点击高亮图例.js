option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    color: 'green',
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        // type: 'line',
        itemStyle: {
            normal: {},
            emphasis: {
                color: 'red'
            }
        }
    },{
        data: [220, 300, 250, 180, 170, 210, 230],
        type: 'bar',
        // type: 'line',
        itemStyle: {
            normal: {},
            emphasis: {
                color: 'red'
            }
        }
    }]
};


myChart.on("click", function (data) {
    myChart.dispatchAction({
        type: 'downplay',
        // seriesIndex: 0,//这行不能省
        // dataIndex: data.dataIndex
    });
    
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: data.seriesIndex,//这行不能省
        dataIndex: data.dataIndex
    });
    
    setTimeout(function() {
        myChart.dispatchAction({
            type: 'downplay'
        });
    }, 1000 * 5);
});
