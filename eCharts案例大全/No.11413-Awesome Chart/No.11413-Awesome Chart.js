option = {
    title: {
        text: 'Awesome Chart',
        subtext:'xxx',
        left:'center',
        textAlign:'left',
        textStyle:{
            fontSize:30
        }
    },
    grid:[{
        bottom:'50%',
        containLabel:true
    },{
       top:'50%',
       containLabel:true
    }],
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: [{}],
    series: [{
        type: 'line',
        data:[220, 182, 191, 234, 290, 330, 310]
    },{
        type: 'pie',
        data:[200, 182, 100, 222, 290, 355, 111],
        center:['50%','80%'],
        radius:'30%',
    }]
};