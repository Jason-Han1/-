option = {
    backgroundColor:'rgba(0,0,0,0)',
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        markArea:{
            itemStyle:{
                // borderWidth:1,
                // borderColor:'#efefef'
            },
            data:[
                
                [
                    {
                        coord:["Mon",200],
                    },
                    {
                        coord:["Tue",400],
                    }
                
                ],
                [
                    {
                        coord:["Mon",400],
                    },
                    {
                        coord:["Tue",620],
                    }
                
                ],
                [
                    {
                        coord:["Mon",620],
                    },
                    {
                        coord:["Tue",900],
                    }
                
                ]
            ]
        }
    }]
};
