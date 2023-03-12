var data = 100;
var max = 200;
option = {
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
    },
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    series: [
        {
            name: '业务指标',
            type: 'gauge',
            detail: {formatter: '100%'},
            data: [{value: 100, name: '空气指数'}],
            axisTick:{
                show: false
            },
            max: 200,
            splitLine: {
                show: true,
                length: 21,
                lineStyle:{
                    width: 20,
                    color: '#a474aa',
                    type: 'dotted'
                }
            },
            pointer: {
                show: false
            },
            splitNumber: 2,
            axisLabel:{
                show: false
            },
            axisLine: { // 坐标轴线DCDDDD
                show: true,
                lineStyle: { // 属性lineStyle控制线条样式
                    color: [
                        [data / max, '#e89'],//根据实际数据动态改变
                        [1, '#DCDDDD'],
                     
                    ],
                    width: 20, //半径
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 1
                },
            },
            markLine: {
                data:{
                    0:{
                        x: '5px',
                        y: '5px',
                        name: '起点',
                        symbol: 'circle',
                        lineStyle:{
                            type: 'linear',
                            color: '#5a4c3d',
                            width: 2,
                        }
                    },
                    1:{
                        x: '5px',
                        y: '5px',
                        name: '终点',
                        symbol: 'circle',
                        lineStyle:{
                            type: 'linear',
                            color: '#fcfcf1',
                            width: 2,
                        }
                    }
                    
                }
            }
        }
    ]
};

