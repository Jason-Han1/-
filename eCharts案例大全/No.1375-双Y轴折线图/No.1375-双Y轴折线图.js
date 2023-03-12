
option = {
    backgroundColor: '#0e1c47',
    legend: {
        align: "left",
        right: '5%',
        top:'14%',
        textStyle:{
            color:'#fff',
            fontSize:16
        },
        icon:'rect',
        itemGap:25,
        itemWidth:30,
         itemHeight:5,
        data: [
           '出水温度', '回水温度','风机频率'
        ]
    },
    grid: {
        top: '18%',
        left: '15%',
        right: '5%',
        bottom: '25%',
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: { 
            show: true,
            lineStyle: {
                color: '#fff'
            },
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                padding: 16,
                fontSize: 14
            },
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
         data:['0:00','2:00','04:00','6:00', '8:00','10:00','12:00','14:00', '16:00','18:00','20:00','22:00', '23:45', ]
    },
    ],
    yAxis: [{
        name: '℃',
        nameTextStyle: {
            color: "#fff",
            fontSize: 16,
            padding:[0,40,20,0]
        },
        min: 0,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#7c9bb7',
                type:'dashed'
            },
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff',
                padding: 16
            },
        },
        axisTick: {
            show: false,
        },
    },
       {
      type: 'value',
      name: 'HZ',
      nameTextStyle: {
         color: '#fff',
         fontSize: 30,
         padding: [0,0,25,20]
      },
      axisLine: { show: false },
      axisTick: {show: false },
      axisLabel: {
        show: true,
        color: '#fff',
        fontSize: 30,
        padding: [10,0,0,0],
      },
      splitLine: { show: false }
    }
],
    series: [{
        name: '出水温度',
        type: 'line',
        showAllSymbol: true,
        symbolSize: 0,
        smooth: true,
        lineStyle: {
            normal: {
                width: 3,
                color: "#ffbc46",
            },
            borderColor: 'rgba(0,0,0,.4)',
        },
        itemStyle: {
            color: "#ffbc46",
        },
        tooltip: {
            show: true
        },
        areaStyle: {
            color: {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0, color:'rgba(255, 188, 70, 0.5)'
    }, {
        offset: 1, color: 'rgba(255, 188, 70, 0)' 
    }],
    global: false
}
        },
        data: ["35", "36", "38", "35", "37", "38"]
    }, {
        name: '回水温度',
        type: 'line',
        showAllSymbol: true,
        symbolSize: 0,
        smooth: true,
        lineStyle: {
            normal: {
                width: 3,
                color: "#52fdeb", 
            },
        },
        itemStyle: {
            color: "#52fdeb",
        },
        tooltip: {
            show: true
        },
        areaStyle: { 
                       color: {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0, color:'rgba(82, 253, 235, 0.5)'
    }, {
        offset: 1, color: 'rgba(82, 253, 235, 0)' 
    }],
    global: false
}
        },
        data:["23", "25", "24", "26", "23", "25"]
    },
     {
        name: '风机频率',
        type: 'line',
        yAxisIndex: 1,
        showAllSymbol: true,
        symbolSize: 0,
        smooth: true,
        lineStyle: {
            normal: {
                width: 3,
                color: "#8ed1fb",
            },
        },
        itemStyle: {
            color: "#8ed1fb",
        },
        tooltip: {
            show: true
        },
        areaStyle: {
                       color: {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0, color:'rgba(142, 209, 251, 0.5)'
    }, {
        offset: 1, color: 'rgba(142, 209, 251, 0)' 
    }],
    global: false
}
        },
        data:["54", "55", "62", "53", "56", "57"]
    }
    ]
}