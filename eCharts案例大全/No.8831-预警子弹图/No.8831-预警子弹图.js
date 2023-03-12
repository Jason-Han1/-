var set1 =[
    ['时间范围', '阈值', '实际值'],
    ['当前半小时', 100, 115],
    ['当前一小时', 200, 386],
    ['当前6小时', 300, 576],
    ['当前半天', 400, 489],
    ['当天', 500, 797],
    ['近3天', 600, 764],
    ['近7天', 700, 1342],
    ['当周', 800, 1241],
    ['当月', 850, 1669]
];

option = {
    // backgroundColor:'#fff',
    legend:{
        show:true,
        left:8,
        top:8
    },
    grid:{
        left:80,
        right:40,
        top:32,
        bottom:32
    },
    
    dataset:{
        source:set1
    },
    
    
    xAxis: {
    //   show:false，
    },
    yAxis: {
        // show:false,
        type:'category',
    },
    series: [{
        type: 'bar',
        encode:{
            x:[1],
            y:[0]
        },
        itemStyle:{
            color:'#D9001B',
            //  barBorderRadius:[0, 90, 90, 0],
             opacity:0.5,
        },
        barGap:'-80%',
        barWidth:16
    },
        {
        type: 'bar',
        encode:{
            x:[2],
            y:[0]
        },
        itemStyle:{
            color:'#D9001B',
            //  barBorderRadius:[0, 90, 90, 0],
        },
        barWidth:10,
        label:{
            show:true,
            position:'right'
        }
        }
    ]
};
myChart.resize({width:568, height:320})