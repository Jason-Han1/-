option = {
    color: {
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    type: "linear",
    global: false,
    colorStops: [
   {
                offset: 0,
                color: '#b0b513',
            },
            {
                offset: .4,
                color: '#b0b513'
            },
            {
                offset: .4,
                color: '#bec81a'
            },
            {
                offset: 1,
                color: '#dcdc3c'
            }
    ],
},
    grid: {
        left: '10%',
        right: '4%',
        bottom: '3%',
        containLabel: false
    },
    xAxis: {
        type: 'value',
        show:false,
max:100
    },
    yAxis: {
        type: 'category',
        show:false,
        data: ['特级用户数量']
    },
    series: [
        {
            name: '正常',
            type: 'bar',
               z: 5,
            barWidth:20,
            data: [80]
        },
        { 
            data:[1],
            z: 1,
            type: "pictorialBar",
            barMaxWidth: "20",
              symbol:'diamond',
              symbolPosition: "end",
             itemStyle: {
                  color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: "linear",
                    global: false,
                    colorStops: [
                   {
                                offset: 0,
                                color: '#b0b513',
                            },
                            {
                                offset: .4,
                                color: '#b0b513'
                            },
                            {
                                offset: .4,
                                color: '#bec81a'
                            },
                            {
                                offset: 1,
                                color: '#dcdc3c'
                            }
                    ],
        },
        },
    symbolOffset: [2, 0], //左右、上下
    symbolSize: [20,20], //宽高
    zlevel: 1,
       },
     { //一蓝底
        data:[80],
           z: 1,
        type: "pictorialBar",
        barMaxWidth: "20",
          symbol:'diamond',
          symbolPosition: "end",
         itemStyle: {
              color: {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                type: "linear",
                global: false,
                colorStops: [
               {
                            offset: 0,
                            color: '#b0b513',
                        },
                        {
                            offset: .4,
                            color: '#b0b513'
                        },
                        {
                            offset: .4,
                            color: '#bec81a'
                        },
                        {
                            offset: 1,
                            color: '#dcdc3c'
                        }
                ],
              },
            },
        symbolOffset: [10, 0], //左右、上下
        symbolSize: [20,20], //宽高
        zlevel: 1,
    },
    ]
}
