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
        type: 'bar',
        emphasis:{
            itemStyle:{
                color:'#000'
            }
        }
    }]
};

myChart.on('click',e=>{
    console.log(e)
    myChart.dispatchAction({
        type: 'highlight',
        name:e.name
    })
})
