option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'line',
        data:[220, 182, 191, 234, 290, 330, 310]
    },
    {
        type: 'scatter',
        data:[120, 122, 181, 284, 280, 330, 210],
        symbolSize: 15,
        itemStyle:{
            normal:{
                color:'#C1B1E1',
               
               
            }
        },

    },{
        type: 'line',
        data:[230, 122, 111, 224, 230, 130, 210],
        itemStyle:{
                normal:{
                    lineStyle:{
                        color:'#DD4F43',//2EC7C9
                        width:3,
                        type:'dotted'  //'dotted'虚线 'solid'实线
                    }
                }
            },    

    },]
};