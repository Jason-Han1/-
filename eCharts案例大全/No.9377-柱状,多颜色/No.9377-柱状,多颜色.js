var color=['#3ae7c2','#0fe9f0','#00e3ff','#00d0ff','#00b8fd','#059fee','#0b8de4'];
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
        barWidth:20,
        itemStyle: {
            normal: {
                barBorderRadius: 10,
                color:function(params){
                    return color[params.dataIndex];
                }
            }
        },
        type: 'bar'
    }]
};
