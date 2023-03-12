

option = {
    grid: [{
        top:"10%",
        right: '4%',
        left:'10%',
        bottom: '55%',
        containLabel: true
    },{
        top:'50%',
        right: '4%',
          left:'10%',
        bottom: '3%',
        containLabel: false
    }],
    yAxis : [
        {
            name : 'aaa',
        },
         {
            name : 'bbb',
             gridIndex: 1,
        }
    ],
    xAxis : [
        {
            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        {
          data : ['1', '2', '3', 'Thu', 'Fri', 'Sat', '7'],
             gridIndex: 1,
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '60%',
            data:[10, 52, 200, 334, 390, 330, 220]
        },
         {
            name:'直接访问2',
            type:'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            barWidth: '60%',
            data:[10, 52, 200, 334, 390, 330, 220]
        }
    ]
};
