option = {
    backgroundColor:"white",
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    color:['#EE5C42','#1874CD','#CEFFEE',"#ff73cb"],
    yAxis: {},
    series: [{
        type: 'line',
        data:[120, 182, 191, 134, 190, 130, 110]
    },{
        type: 'line',
        data:[200, 199, 185, 233, 300, 300, 350]
    },{
        type: 'bar',
        data:[200, 199, 185, 233, 300, 300, 350]
    }]
};