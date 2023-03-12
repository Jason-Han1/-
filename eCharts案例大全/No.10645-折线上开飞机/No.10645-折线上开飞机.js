var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
var data=[{
    coords:[['Mon',820],['Tue',932],
    ['Wed',901],['Thu',934],
    ['Fri',1290],['Sat',1330],
    ['Sun',1320],]
    
    }]
          
           



option = {
    title:{
        text:"折线上开飞机",
        subtext:'木可的随笔'
        
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    },
    {
        name:  ' Top10',
        type: 'lines',
      
       
        coordinateSystem:'cartesian2d',
        symbolSize: 10,
      
        polyline:true,
        effect: {
            show: true,
            smooth: false,
            trailLength: 0,
            symbol: "arrow",
           color:'red',
            symbolSize: 20,
            symbol:planePath
        },
        lineStyle: {
            normal: {
               
                width: 1,
                opacity: 0.6,
                curveness: 0.2
            }
        },
        data: data
    },]
};
