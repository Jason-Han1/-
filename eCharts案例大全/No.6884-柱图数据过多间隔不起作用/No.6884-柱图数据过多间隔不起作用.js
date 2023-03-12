option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    dataZoom:{
        type:'slider',
        endValue: 10,
    },
    yAxis: {},
    series: [{
        type: 'bar',
        color:'lightgreen',
        barWidth:25,
        barCategoryGap:50,
        
        data:[220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310]
    }]
};