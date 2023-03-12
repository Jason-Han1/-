var dataArr = [{type: 'max', name: '最大值'},{coord:[1,9]},{coord:[2,4]}]
var dataArr2 = [{type: 'max', name: '最大值'},{coord:[2,9]},{coord:[2,5]}]
var dataArr3 = [{type: 'max', name: '最大值'},{coord:[3,9]},{coord:[2,6]}]

// coord 控制块显示位置
option = {
    title: {
        text: '未来一周气温变化',
        subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['最高气温','最低气温']
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} °C'
        }
    },
    series: [
        {
            name:'圆角矩形',
            type:'line',
            data:[11, 11, 16, 13, 12, 13, 10],
            markPoint: {
                symbol:'roundRect',
                // symbol:'image://http://img30.360buyimg.com/poprx/jfs/t23662/172/668395134/12944/5653b1ff/5b3c2737N3d867c2f.png',
                itemStyle:{
                  color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                            offset: 0, color: 'red' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'blue' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }  
                },
                symbolSize:[50, 50],// 容器大小
                symbolOffset:[0,-20],//位置偏移
                data:dataArr,
                label: {
                    offset: [0, 0],
                    color: '#ffffff',
                    formatter: [
                      '2'
                    ].join('\n'),
                }
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'三角形',
            type:'line',
            data:[11, 11, 16, 13, 12, 13, 10],
            markPoint: {
                symbol:'triangle',
                symbolRotate:'180',
                // symbol:'image://http://img30.360buyimg.com/poprx/jfs/t23662/172/668395134/12944/5653b1ff/5b3c2737N3d867c2f.png',
                itemStyle:{
                  color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                            offset: 0, color: 'blue' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'red' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }  
                },
                symbolSize:[15,8],// 容器大小
                symbolOffset:[0,9],//位置偏移
                data:dataArr,
                label: {
                    offset: [0, 0],
                }
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'图片背景1',
            type:'line',
            data:[11, 11, 15, 13, 12, 13, 10], 
            markPoint: {
                // symbol:'roundRect',
                symbol:'image://http://img30.360buyimg.com/poprx/jfs/t20383/178/1878804254/12785/4dd350ff/5b3c2762Ndee0aefc.png',
                itemStyle:{
                  color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                            offset: 0, color: 'red' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'blue' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }  
                },
                symbolSize:[35, 25],// 容器大小
                symbolOffset:[0,-20],//位置偏移
                data:dataArr2,
                label:{
                    offset:[0,-3],
                    color: '#ffffff',
                    formatter: [
                      '3'
                    ].join('\n'),
                }
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'图片背景2',
            type:'line',
            data:[11, 11, 15, 13, 12, 13, 10],
            markPoint: {
                // symbol:'roundRect',
                symbol:'image://http://img30.360buyimg.com/poprx/jfs/t20023/329/2344745722/12670/a004c21d/5b3c2794Ndd1983e8.png',
                itemStyle:{
                  color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                            offset: 0, color: 'red' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'blue' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }  
                },
                symbolSize:[35, 25],// 容器大小
                symbolOffset:[0,-20],//位置偏移
                data:dataArr3
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
    ]
};