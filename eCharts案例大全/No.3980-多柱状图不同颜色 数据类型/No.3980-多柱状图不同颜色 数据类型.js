option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [
            {value: 150,
                itemStyle: {
                    color: 'lightblue'
                }
                
            }, {value: 200,
                itemStyle: {
                    color: 'gray'
                }
                
            },  {value: 130,
                itemStyle: {
                    color: 'lightgreen',
                    borderWidth:10,
                    borderColor:'#ff6000'
                }
                
            },,{value: 130,
                itemStyle: {
                    color: '#ff6000',
                }
                
            }, 80, 70, 110, 130],
        type: 'bar'
    }]
};