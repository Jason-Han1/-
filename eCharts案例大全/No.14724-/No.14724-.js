
var lineColors = ['#198487', '#599912'];

function renderLineItem(barIndex, param, api) {
    var context = param.context;
    if (context.rendered) {
        return;
    }
    context.rendered = true;
    var barLayout = api.barLayout({
        barWidth: 80, 
        barGap: '30%', 
        barCategoryGap: '20%',
        count: 2
    });
    
    var points = [];
    var groupChildren = [];
    
    for (var i = 0; i < param.dataInsideLength; i++) {
        var point = api.coord([i, api.value(1, i)]);
        point[0] += barLayout[barIndex].offsetCenter;
        points.push(point);
        groupChildren.push({
            type: 'circle',
            shape: {
                cx: point[0], cy: point[1], r: 7
            },
            style: {
                fill: '#fff',
                stroke: lineColors[barIndex],
                lineWidth: 1
            },
            z2: 100
        })
    }
    
    groupChildren.push({
        type: 'polyline',
        shape: {
            points: points
        },
        style: api.style({
            fill: null,
            stroke: lineColors[barIndex],
            lineDash: [8, 4],
            lineWidth: 2
        }),
        z2: 90
    });
    
    return {
        type: 'group',
        children: groupChildren
    }
}


option = {
    tooltip : {
        show:false,
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['WIFI','内置应用','系统设置','建议与咨询','用户反馈率']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['最新版本-2','最新版本-1','最新版本']
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel: {
                formatter: '{value}%'
            }
        },
    ],
    series : [
        {
            name:'WIFI',
            type:'bar',
            stack: 'one',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'inside',
                        formatter:function(params){
                            return params.seriesName+'\n'+params.value+"%";
                        }
                    }
                }
            },
            barWidth:80,
            data:[100, 90, 70]
        },
        {
            name:'内置应用',
            type:'bar',
            stack: 'one',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'inside',
                        formatter:function(params){
                            return params.seriesName+'\n'+params.value+"%";
                        }
                    }
                }
            },
            data:[80, 70, 50]
        },
        {
            name:'系统设置',
            type:'bar',
            stack: 'one',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'inside',
                        formatter:function(params){
                            return params.seriesName+'\n'+params.value+"%";
                        }
                    }
                }
            },
            barWidth:80,
            data:[70, 50, 30]
        },
        {
            name:'建议与咨询',
            type:'bar',
            stack: 'one',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'inside',
                        formatter:function(params){
                            return params.seriesName+'\n'+params.value+"%";
                        }
                    }
                }
            },
            barWidth:80,
            data:[50, 40, 20]
        },
        {
            name:'WIFI',
            type:'bar',
            stack: 'two',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'inside',
                        formatter:function(params){
                            return params.seriesName+'\n'+params.value+"%";
                        }
                    }
                }
            },
            barWidth:80,
            data:[90, 80, 60]
        },
        {
            name:'内置应用',
            type:'bar',
            stack: 'two',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'inside',
                        formatter:function(params){
                            return params.seriesName+'\n'+params.value+"%";
                        }
                    }
                }
            },
            barWidth:80,
            data:[70, 60, 40]
        },
        {
            name:'系统设置',
            type:'bar',
            stack: 'two',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'inside',
                        formatter:function(params){
                            return params.seriesName+'\n'+params.value+"%";
                        }
                    }
                }
            },
            barWidth:80,
            data:[50, 40, 30]
        },
        {
            name:'建议与咨询',
            type:'bar',
            stack: 'two',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'inside',
                        formatter:function(params){
                            return params.seriesName+'\n'+params.value+"%";
                        }
                    }
                }
            },
            barWidth:80,
            data:[40, 30, 20]
        },
        {
            name:'用户反馈率',
            type:'custom',
            renderItem: echarts.util.curry(renderLineItem, 0),
            lineStyle: {
                normal: {
                    type:'dashed'
                }
            },
            data:[300, 250, 170],
        },
        {
            name:'用户反馈率',
            type:'custom',
            renderItem: echarts.util.curry(renderLineItem, 1),
            lineStyle: {
                normal: {
                    type:'dashed'
                }
            },
            data:[250, 210, 150]
        }
    ]
}