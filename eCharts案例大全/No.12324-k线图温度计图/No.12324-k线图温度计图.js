option = {
    xAxis: {
        data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
    },
    yAxis: {},
    series: [{
        type: 'k',
        barWidth:10,
        itemStyle:{
            // borderColor:'#fff',
            borderWidth:0,
            opacity:.4,
          color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: 'grey' // 0% 处的颜色
                }, {
                    offset: 1, color: 'grey' // 100% 处的颜色
                }],
            }  
        },
       emphasis:{
            itemStyle:{
                opacity:1,
                 borderWidth:0,
          color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: 'rgb(90,161,244)' // 0% 处的颜色
                }, {
                    offset: 1, color: 'rgb(114,198,126)' // 100% 处的颜色
                }],
            }  
        },
       },
        data: [
            [20, 30, 20, 30],
            [35, 40, 35, 40],
            [38, 33, 33, 38],
            [40, 43, 40, 43,]
        ]
    },
      {
            type: 'scatter',
            color:'rgb(114,198,126)',
            itemStyle:{
                 opacity:1,
            },
            symbolSize: 20,
            z: 10,
            data:  [20, 35, 33, 40],
        },
        {
            type: 'scatter',
            color:'rgb(90,161,244)',
             itemStyle:{
                 opacity:1,
            },
            label: {
                normal: {
                    show: false,
                }
            },
            symbolSize: 20,
            z: 20,
            data:  [30, 40, 38, 43],
        },
    
    ]
};
