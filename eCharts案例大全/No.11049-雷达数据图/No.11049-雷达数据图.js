// Schema:
// date,AQIindex,PM2.5,PM10,CO,NO2,SO2
var dataBJ = [
    [98,80,99,96.6,92,94],

];


var lineStyle = {
    normal: {
        color:'#FFB129',
        width: 1,
        opacity: 0.5
    }
};

option = {
    backgroundColor: "#344b58",
    tooltip: {
        trigger: 'axis',
        show:true
    },
    legend: {
        data: ['巡查里数','在线时长', '上报事件'],
        textStyle:{
            color:'#FEFFFE',
            fontSize:20
        }
    },
    radar: {
        indicator: [
            {name: '巡查里数(公里/人数)', max: 100},
            {name: '在线时长(公里/人天)', max: 100},
            {name: '上报事件(上报事件/总量)', max: 100},
          
        ],
        shape: 'circle',
        splitNumber: 4,
        name: {
            textStyle: {
                color: '#ffffff',
                fontSize:16
            }
        },
        splitLine: {
            lineStyle: {
                color: [
                    'rgba(238,238,238, 0.3)', 'rgba(238,238,238, 0.2)',
                    'rgba(238,238,238, 0.2)', 'rgba(238,238,238, 0.2)',
                    'rgba(238,238,238, 0.2)', 'rgba(238,238,238, 0.2)'
                ].reverse(),
                width:2
            }
        },
        splitArea: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(238,238,238, 0.2)'
            }
        }
    },
    series:[{
            name: '指数',
            type: 'radar',
            tooltip: {
                trigger: 'item'
            },
            data: dataBJ,
            symbol: 'circle',
            symbolSize:20,
            itemStyle: {
                normal: {
                color:'rgba(252,153,80,0.8)',
                borderColor:'rgba(249,118,21,0.2)',
                borderWidth:17,
                }
            },
            areaStyle: {
                normal: {
                    color:'rgba(153,63,28,0.49)',
                }
            },
            lineStyle:{
                color:'rgba(255,154,81,1)',
                width:2
            },
        },
        {
            name: '指数_2',
            tooltip: {
                trigger: 'item'
            },
            type: 'radar',
            lineStyle:{
                color:"rgba(1,1,1,0)"
            },
            data: [[80,40,80]],
            symbol: 'circle',
            symbolSize:7,
            itemStyle: {
                normal: {
                    color: '#3BD3CA',
                  
                }
            },
            areaStyle: {
                normal: {
                    opacity: 0
                }
            }
        },{
            name: '指数_3',
            tooltip: {
                trigger: 'item'
            },
            type: 'radar',
            lineStyle:{
                color:"rgba(1,1,1,0)"
            },
            data: [[30,30,30]],
            symbol: 'circle',
            symbolSize:7,
            itemStyle: {
                normal: {
                    color: 'rgba(255,255,255,0.6)',
                  
                }
            },
            areaStyle: {
                normal: {
                    opacity: 0
                }
            }
        }],
      
    
};