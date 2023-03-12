option = {
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    tooltip:{
      trigger:'axisPointer'  
    },
    visualMap: {
        show:false,
        type: 'piecewise',
        pieces: [
            {min: 1200},
            {min: 500, max: 1200},
            {min: 310, max: 500},
            {min: 200, max: 300},
            {min: 100, max: 200},
            {max:100}
        ],
        color: ['#c67179','#c4598c', '#ee7869', '#f1a345','#d8bc37','#24bd5d']
    },
    yAxis: {},
    series: [{
        type: 'bar',
        itemStyle:{
            normal:{
                barBorderRadius:[5,5,0,0]
            }
        },
        barWidth:10,
        data:[120, 282, 391, 434, 500, 520, 1500]
    }]
};