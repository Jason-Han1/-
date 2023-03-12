option = {
    title: {
        text: 'Awesome Chart'
    },
    toolbox:{
        show:true,
        feature:{
             magicType: {type: ['line', 'bar']},
        }
       
  
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'bar',
        data:[220, 182, 191, 234, 290, 330, 310]
    }]
};