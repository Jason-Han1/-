app.title = '区域分色柱状图';
option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
    },
    yAxis: {
        type: 'value'
    },
    visualMap: {
    show: false,
    type:'piecewise',
    dimension: 1,
    pieces: [{gte: 0, lte: 50, color: '#66CC00'},
    {gte: 50, lte: 100, color: '#FFFF33'},
    {gte: 100, lte: 150, color: '#FFBF5D'},
    {gte: 150, lte: 200, color: '#FD6979'}],  //pieces的值由动态数据决定
    itemSymbol:"roundRect",
    inRange:{
        color:['#66CC00','#FFFF33','#FD6979'],
        symbolSize:[50,100]
    },
    outOfRange: {
         color: 'black'
    },
    },
    series: [{
        name:'1',
        data: [20, 200, 150, 80, 70],
        type: 'bar'
    }]
};
