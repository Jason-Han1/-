// ，美美哒五角星
option = {
    xAxis: {show:false},
    yAxis: {show:false},
    series: [{
        data: [[25, 180],[12, 35], [45, 125], [5, 125], [38, 35], [25, 180]],
        type: 'line',
        symbol:'circle',
        symbolSize:0,
        itemStyle:{
            normal:{
                areaStyle:{
                    color:'red',
                     shadowColor: 'red',
                     shadowBlur: 10,
                     shadowOffsetX:6,
                     shadowOffsetY:5
                }
            }
        },
        lineStyle:{
            normal:{
                color:'rgba(0,0,0,0)'
            }
        }
    }]
};