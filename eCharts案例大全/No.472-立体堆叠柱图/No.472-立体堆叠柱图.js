option = {
        backgroundColor: "#1a2439", 
           grid: {
        left: '3%',
        right: '4%',
        bottom: '13%',
        top:'18%',
        containLabel: true
    },
  xAxis: [{
        type: 'category',
        axisLine: { 
            show: true,
            lineStyle: {
                color: '#fff',
width:3,
            },
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                padding: [10,0,0,0],
                fontSize:60,
            },
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    ],   
    yAxis: {
           type: "value",
        axisLine: {
            show: false,
            lineStyle: {
                color: "#B5B5B5",
            },
        },
        splitLine: {
            show: false,
        },
              axisTick: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                fontFamily: "dsDigital2",
                color: "#FFF",
            },
            fontSize: 30,
        },
    },
    series: [
        {
        type: 'bar',
         barWidth:80,
        z: 11,
            stack: "zs",
            label: {
            show: true,
            position: 'top', 
            color: '#10b3ff',
              fontFamily: "dsDigital2",
            fontSize: 30,
            distance: 15,//距离头部的距离 
        },
           itemStyle: {
                        color: {
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 0,
                            type: "linear",
                            global: false,
                            colorStops: [
                          {
                                        offset: 0,
                                        color: '#1d87ff',
                                    },
                                    {
                                        offset: .5,
                                        color: '#2182f7'
                                    },
                                    {
                                        offset: .5,
                                        color: '#0f69c9'
                                    },
                                    {
                                        offset: 1,
                                        color: '#0f87ff'
                                    }
                            ],
                        },
        },
        data:[220, 182, 191, 234, 290, 330, 310]
    },
    {
        type: 'bar',
            stack: "zs",
        z: 10,
           label: {
            show: true,
            position: 'top', 
            color: '#ffa70f',
              fontFamily: "dsDigital2",
            fontSize: 30,
            distance: 15, 
        },
           itemStyle: {
                        color: {
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 0,
                            type: "linear",
                            global: false,
                            colorStops: [
                           {
                                        offset: 0,
                                        color: '#d18843',
                                    },
                                    {
                                        offset: .5,
                                        color: '#c97b33'
                                    },
                                    {
                                        offset: .5,
                                        color: '#9c571c '
                                    },
                                    {
                                        offset: 1,
                                        color: '#bc732e'
                                    }
                            ],
                        },
        },
        data:[220, 182, 191, 234, 290, 330, 310]
    },
      {
            "name": "",
            "type": "pictorialBar",
            symbol: 'diamond',
            "symbolSize": [80, 20],
            "symbolOffset": [-0, 10],
            "z": 1,
               itemStyle: {
                        color: {
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 0,
                            type: "linear",
                            global: false,
                            colorStops: [
                               {
                                        offset: 0,
                                        color: '#1d87ff',
                                    },
                                    {
                                        offset: .5,
                                        color: '#2182f7'
                                    },
                                    {
                                        offset: .5,
                                        color: '#0f69c9'
                                    },
                                    {
                                        offset: 1,
                                        color: '#0f87ff'
                                    }
                            ],
                        },
        },
            "data": [1, 1, 1, 1, 1, 1,1]
        },
        {
            "name": "",
            "type": "pictorialBar",
            symbol:'diamond', 
              "symbolSize": [80, 20],
                "symbolOffset": [-0, -10],
            symbolPosition: "end",
            "z": 12,
               itemStyle: {
                        color: {
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 0,
                            type: "linear",
                            global: false,
                            colorStops: [
                              {
                                        offset: 0,
                                        color: '#d18843',
                                    },
                                    {
                                        offset: .5,
                                        color: '#c97b33'
                                    },
                                    {
                                        offset: .5,
                                        color: '#9c571c '
                                    },
                                    {
                                        offset: 1,
                                        color: '#bc732e'
                                    }
                            ],
                        },
        },
             data:[220, 182, 191, 234, 290, 330, 310]
        },        
          {
            "name": "",
            "type": "pictorialBar",
            symbol: 'diamond',
            symbolPosition: 'end',
            "symbolSize": [80, 20],
            "symbolOffset": [-0, -10],
            "z": 20,
             itemStyle:{ 
                        opacity: 1,
                         color:'#9c571c',
                     },
            "data": [440, 364, 382, 468, 580, 660, 620]
        },
    ]
};