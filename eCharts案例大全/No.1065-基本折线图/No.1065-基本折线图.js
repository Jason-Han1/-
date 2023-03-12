option = {
    title: {
        text: 'chart_3'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        axisTick:{
            show:false
        }
    },
    yAxis: {
        splitLine:{
            show:false
        },
        axisLine:{
            show:true
        }
    },
    tooltip:{
        trigger:"axis",
        axisPointer:{
            type:"line",
        },
        formatter:["{b}", "{c}%"].join("\n"),
        textStyle:{
            color:"rgba(24,23,255,1)"
        }
    },
    series: [{
        type: 'line',
        symbol:"circle",
        symbolSize:10,
        smooth:true,
        data:[220, 182, 191, 234, 290, 330, 310],
        itemStyle:{//拐点的样式
            color:"rgba(244,253,255,1)",
            borderWidth:1,
            borderColor:"rgba(87, 183, 242, 1)"
        },
        lineStyle:{//线条的样式
            width:3,
            color:"rgba(87, 183, 242, 1)"
        },
        areaStyle:{
            color:{
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                  offset: 0, color: 'rgba(87, 183, 242, 1)' // 0% 处的颜色
              }, {
                  offset: 1, color: 'rgba(6,37,55,0)' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            }
        }
    }]
};
