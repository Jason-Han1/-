option = {
    title: {
        text: 'Awesome Chart',
        textStyle:{
            fontSize:30
        },
        left:'center'
    },
    grid:[{bottom:'50%',
        containLabel:true
    },{top:'50%'}],
    xAxis: [{
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },{
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        gridIndex:1
    }],
    yAxis:[{},{gridIndex:1}],
    series: [{
        type: 'line',
        data:[220, 182, 191, 234, 290, 330, 310]
    },{
        type: 'line',
        data:[120, 82, 91, 134, 290, 330, 310],
        xAxisIndex:1,
        yAxisIndex:1
    }]
};