option = {
    backgroundColor:'#000',
    legend:{
        show:true,
        left:'center',
        top:'auto',
        textStyle:{
            color:'#FFFFFF',
            fontSize:12
        }
    },
    xAxis: {
        type:'category',
        axisLine:{
            show:true,
            symbol:'none',
            symbolSize:[0,0],
            symbolOffset:[0,0],
            lineStyle:{
                color:'rgba(255,255,255,0.8)',
                shadowColor:'rgba(255,255,255,1)',
                shadowOffsetX: '0',
            }
        },
        axisTick:{
            show:false,
        },
        axisLabel:{
            show:true,
            interval:0,
            color:'rgba(255,255,255,0.8)',
            fontSize:14
        },
        splitLine:{
            show:false
        },
        data: ['Sun', 'Mon', 'Tue']
    },
    yAxis: [{
        type:'value',
        position:'left',
        name:'个',
        nameLocation:'end',
        nameTextStyle:{
            color:'rgba(255,255,255,0.8)',
            fontSize:12
        },
        axisLine:{
            show:true,
            lineStyle:{
                color:'rgba(255,255,255,0.8)'
            }
        },
        axisTick:{
            show:false,
        },
        axisLabel:{
            show:true,
            interval:0,
            color:'rgba(255,255,255,0.8)',
            fontSize:14
        },
        splitLine:{
            show:true
        },
    },{
        type:'value',
        position:'right',
        // offset:20,
        name:'%',
        nameLocation:'end',
        nameTextStyle:{
            color:'rgba(255,255,255,0.8)',
            fontSize:12
        },
        axisLine:{
            show:true,
            lineStyle:{
                color:'rgba(255,255,255,0.8)'
            }
        },
        axisTick:{
            show:false,
        },
        axisLabel:{
            show:true,
            interval:0,
            color:'rgba(255,255,255,0.8)',
            fontSize:14
        },
        splitLine:{
            show:false
        },
    }],
    series: [{
        z: 1,
        yAxisIndex:0,
        name:'二级节点数量',
        type: 'bar',
        barWidth: 20,
        itemStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    x2: 1,
                    y: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#FF3FDA'
                    }, {
                        offset: 0.5,
                        color: '#FF3FDA'
                    }, {
                        offset: 0.5,
                        color: '#CC1BAA'
                    }, {
                        offset: 1,
                        color: '#CC1BAA'
                    }]
                }
            }
        },
        data:[220, 182, 191]
    },{
        z: 2,
        yAxisIndex:0,
        name:'二级节点数量',
        type: 'pictorialBar',
        data: [220, 182, 191],
        symbol: 'diamond',
        symbolOffset: [-24, '50%'],
        symbolSize: [20, 20 * 0.5],
        itemStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    x2: 1,
                    y: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#FF3FDA'
                    }, {
                        offset: 0.5,
                        color: '#FF3FDA'
                    }, {
                        offset: 0.5,
                        color: '#CC1BAA'
                    }, {
                        offset: 1,
                        color: '#CC1BAA'
                    }]
                }
            }
        },
    },{
        z: 3,
        yAxisIndex:0,
        name:'二级节点数量',
        type: 'pictorialBar',
        symbolPosition: 'end',
        data: [220, 182, 191],
        symbol: 'diamond',
        symbolOffset: [-24, '-50%'],
        symbolSize: [20, 20 * 0.5],
        itemStyle: {
            normal: {
                borderWidth: 0,
                color: '#FF3FDA'
            }
        },
    },{
        z: 1,
        yAxisIndex:0,
        name:'企业节点数量',
        type: 'bar',
        barWidth: 20,
        itemStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    x2: 1,
                    y: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#00FFFF'
                    }, {
                        offset: 0.5,
                        color: '#00FFFF'
                    }, {
                        offset: 0.5,
                        color: '#11A6D0'
                    }, {
                        offset: 1,
                        color: '#11A6D0'
                    }]
                }
            }
        },
        data:[220, 182, 191]
    },{
        z: 2,
        yAxisIndex:0,
        name:'企业节点数量',
        type: 'pictorialBar',
        data: [220, 182, 191],
        symbol: 'diamond',
        symbolOffset: [0, '50%'],
        symbolSize: [20, 20 * 0.5],
        itemStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    x2: 1,
                    y: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#00FFFF'
                    }, {
                        offset: 0.5,
                        color: '#00FFFF'
                    }, {
                        offset: 0.5,
                        color: '#11A6D0'
                    }, {
                        offset: 1,
                        color: '#11A6D0'
                    }]
                }
            }
        },
    },{
        z: 3,
        yAxisIndex:0,
        name:'企业节点数量',
        type: 'pictorialBar',
        symbolPosition: 'end',
        data: [220, 182, 191],
        symbol: 'diamond',
        symbolOffset: [0, '-50%'],
        symbolSize: [20, 20 * 0.5],
        itemStyle: {
            normal: {
                borderWidth: 0,
                color: '#00FFFF'
            }
        },
    },{
        z: 1,
        yAxisIndex:0,
        name:'公共递归节点数量',
        type: 'bar',
        barWidth: 20,
        itemStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    x2: 1,
                    y: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#FFD05C'
                    }, {
                        offset: 0.5,
                        color: '#FFD05C'
                    }, {
                        offset: 0.5,
                        color: '#DEA821'
                    }, {
                        offset: 1,
                        color: '#DEA821'
                    }]
                }
            }
        },
        data:[220, 182, 191]
    },{
        z: 2,
        yAxisIndex:0,
        name:'公共递归节点数量',
        type: 'pictorialBar',
        data: [220, 182, 191],
        symbol: 'diamond',
        symbolOffset: [24, '50%'],
        symbolSize: [20, 20 * 0.5],
        itemStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    x2: 1,
                    y: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#FFD05C'
                    }, {
                        offset: 0.5,
                        color: '#FFD05C'
                    }, {
                        offset: 0.5,
                        color: '#DEA821'
                    }, {
                        offset: 1,
                        color: '#DEA821'
                    }]
                }
            }
        },
    },{
        z: 3,
        yAxisIndex:0,
        name:'公共递归节点数量',
        type: 'pictorialBar',
        symbolPosition: 'end',
        data: [220, 182, 191],
        symbol: 'diamond',
        symbolOffset: [24, '-50%'],
        symbolSize: [20, 20 * 0.5],
        itemStyle: {
            normal: {
                borderWidth: 0,
                color: '#FFD05C'
            }
        },
    },{
        name:'二级节点增长率',
        yAxisIndex:1,
        type:'line',
        symbolSize :9,
        data:[30,60,50],
        lineStyle:{
            shadowColor:'#333',
            shadowOffsetX:0,
        }
    },{
        name:'企业节点增长率',
        yAxisIndex:1,
        type:'line',
        symbolSize :9,
        data:[20,70,56],
        lineStyle:{
            shadowColor:'#333',
            shadowOffsetX:0,
        }
    },{
        name:'公共递归节点增长率',
        yAxisIndex:1,
        type:'line',
        symbolSize :9,
        data:[10,40,60],
        lineStyle:{
            shadowColor:'#333',
            shadowOffsetX:0,
        }
    }]
};
