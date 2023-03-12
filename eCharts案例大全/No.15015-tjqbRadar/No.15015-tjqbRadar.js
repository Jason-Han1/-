option = {
    radar: [{
        indicator: [{
            name: '60以前'
        }, {
            name: '汽车',
            axisLabel:{
                show:false
            }
        }, {
            name: '民航',
            axisLabel:{
                show:false
            }
        }, {
            name: '住宿',
            axisLabel:{
                show:false
            }
        }, {
            name: '上网',
            axisLabel:{
                show:false
            }
        }],
        center: ['25%', '50%'],
        radius: 120,
        startAngle: 90,
        splitNumber: 6,
        shape: 'polygon',
        triggerEvent: true,
        silent: true,
        scale: true,
        nameGap:2,
        name: {
            formatter: '{value}',
            textStyle: {
                color: '#fff',
                fontSize: 12
            }
        },
        splitArea: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#449cff'
            }
        },
        axisTick:{
          show:true  
        },
        axisLabel:{
          show:true,
          color:'red'
        },
        splitLine: {
            lineStyle: {
                color: '#449cff'
            }
        }
    }],
    series: [{
        name: '雷达图',
        type: 'radar',
        areaStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#44ff86'
                    }, {
                        offset: 1,
                        color: '#0060ff'
                    }],
                    globalCoord: false
                }
            }
        },
        lineStyle: {
            normal: {
                color: '#00ffff',
                width:3
            }
        },
        data: [{
            value: [500,600,700,800,900],
            symbol: 'circle',
            symbolSize: 6,
            itemStyle:{
                normal:{
                    color:'#01eef0'
                }
            }
        }]
    }]
}