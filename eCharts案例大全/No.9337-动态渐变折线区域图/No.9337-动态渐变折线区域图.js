//声明数据
var arrData = [{
        name: '2010',
        value: 200,
        growth: '3.5%' //自定义参数
    },{
        name: '2011',
        value: 400,
        growth: '4.0%'
    },{
        name: '2012',
        value: 400,
        growth: '4.7%'
    },{
        name: '2013',
        value: 600,
        growth: '4.75%'
    },{
        name: '2014',
        value: 500,
        growth: '4.8%'
    },{
        name: '2015',
        value: 700,
        growth: '4.9%'
    },{
        name: '2016',
        value: 1000,
        growth: '5.2%'
    },{
        name: '2017',
        value: 400,
        growth: '5.3%'
    },{
        name: '2018',
        value: 600,
        growth: '5.4%'
    },{
        name: '2019',
        value: 700,
        growth: '5.5%'
    }];
    
//①先设置默认辅助数组
var newData = [],
    maxData = [];
for(var n=0; n< arrData.length; n++){
    newData.push(arrData[n]);
    maxData.push(null);
} 
//console.log(newData);
//console.log(maxData)

//图表
var option = {
    backgroundColor: '#0d073d',
    title: {
        text: 'GDP增长率',
        textStyle: {
            color: '#fff',
            fontSize: 16,
            fontWeight: 400
        },
        itemGap: 5,
        subtext: '定时过滤',
        subtextStyle: {
            color: '#fff',
            fontSize: 14,
            fontWeight: 400
        },
        x: 'center',
        y: 5,
    },
    tooltip: {
        trigger: 'axis',
        backgroundColor:'rgba(14,42,59,0.6)',
        borderColor:'#59dcff',
        borderWidth: 1,
        borderRadius: 0,
        textStyle: {
            color: "#fff",
            fontSize: 14,
            align:'left'
        },
        axisPointer:{
            type: 'line', //'line' | 'cross' | 'shadow' | 'none
            lineStyle: {
                width: 1,
                type: 'dotted',
                color: 'rgba(255,255,255,.618)'
            }
        },
        confine: true, //是否将 tooltip 框限制在图表的区域内
        position: function(point, params, dom, rect, size) {
            // 固定在顶部
            return [point[0], point[1] - 80];
        },
        formatter: function(params){  //console.log(params)
            var res = params[0].name+ '年：<br/>总量：'+ params[0].value +'亿元'+'<br/>增速：'+params[0].data.growth;
            return res;
        }
    },
    grid: {
        top:'15%',
        right: '5%',
        bottom: '10%',
        left: '8%'
    },
    legend: {
        show: false
    },
    xAxis: {
        type: 'category',
        boundaryGap: false, //边界间隙
        axisLabel: {
            interval: 0, //类目间隔 设置为 1，表示『隔一个标签显示一个标签』
            margin: 5,
            textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
            },
            formatter: '{value}'
        },
        axisLine:{
            lineStyle:{
                color:'#879dac' //x轴线
            }
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: ['rgba(0, 41, 77, .618)', 'rgba(1, 35, 65, .618)']
            }
        },
        data: (function(data){
            var arr=[];
            data.forEach(function(items){
                arr.push(items.name);   
            });
            return arr;
        })(arrData) //载入横坐标数据
    },
    yAxis: {
        type: 'value',
        max: 1200, //设置最大值
        axisLine: {
            lineStyle: {
                color: '#879dac'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
            },
            formatter: '{value}'
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(34, 63, 90, .618)', //横向网格线颜色
                type: 'dashed',
                width: 1
            }
        }
    },
    color:['rgba(0,175,255,1)','rgba(0,218,204,1)'],
    series: [
        {
            name: '1',
            type: 'line',
            smooth: false, //是否曲线
            animationDuration: 1000,
            itemStyle: {
                normal: {
                    color: 'rgba(0,175,255,1)',
                    borderColor: 'rgba(0,175,255,1)'
                }
            },
            lineStyle: {
                normal: {
                    color: 'rgba(0,175,255,1)',
                    width: 3,
                }
            },
            areaStyle: { 
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1,[
                        {offset: 0, color: 'rgba(0,175,255,1)'},
                        {offset: 1, color: 'transparent'}
                    ]), //区域渐变颜色
                    opacity: .8
                }
            },
            symbol: 'circle',
            symbolSize: 3,
            z: 1,
            data: arrData //载入数据
        },
        {
            name: '2',
            type: 'line',
            smooth: false, 
            itemStyle: {
                normal: {
                    color: 'rgba(0,175,255,1)',
                    borderColor: 'rgba(0,175,255,1)'
                }
            },
            lineStyle: {
                normal: {
                    color: 'rgba(0,175,255,1)',
                    width: 3,
                }
            },
            areaStyle: { 
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1,[
                        {offset: 0, color: 'rgba(0,175,255,1)'},
                        {offset: 1, color: 'transparent'}
                    ]), //区域渐变颜色
                    opacity: .8
                }
            },
            symbol: 'emptyCircle',
            symbolSize: 3,
            data: newData //载入数据
        },
        {
            name: '3',
            type: 'line',
            smooth: false, 
            animationDuration: 1000,
            itemStyle: {
                normal: {
                    color: '0,218,204', 
                    borderColor: "rgba(0,159,146,0)"
                }
            },
            lineStyle: {
                normal: {
                    type: "solid",
                    width: 0,
                    color: 'rgba(0,218,204,1)'
                }
            },
            areaStyle: { 
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(96,250,250,0)'
                        }, {
                            offset: 1,
                            color: 'rgba(96,250,250, .35)'
                        }]
                    },
                    opacity: .8
                }
            },
            symbol: 'none',
            symbolSize: 3,
            data: maxData //载入数据
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);


var app = {
    currentIndex: -1, //init Time
};
//定时
setInterval(function(){
    var dataLen = option.series[0].data.length;
    // 取消之前高亮的图形
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: app.currentIndex
    });
    app.currentIndex = (app.currentIndex + 1) % dataLen;  //循环时间与数组总个数进行匹配

    var maxNum = option.yAxis.max; //取得最大值
    
    if (app.currentIndex == 0) {
        maxData.splice(0, dataLen, null);
        newData.splice(0, dataLen, null);
    }
    //②修改动画变色辅助数据
    newData.splice(app.currentIndex, 1, arrData[app.currentIndex]);
    //console.log(newData)
    maxData.splice(app.currentIndex, 1, maxNum);
    //console.log(maxData)

    myChart.setOption({
        series: [
            {
                name: '2',
                itemStyle: {
                    normal: {
                        color: 'rgba(255,0,102,1)', //图标点颜色
                        borderColor: 'rgba(255,0,102,1)'
                    }
                },
                lineStyle: {
                    normal: {
                        color: 'rgba(255,0,102,1)',
                        width: 3,
                    }
                },
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
                                color: 'rgba(255,0,102,1)'
                            }, {
                                offset: 1,
                                color: 'rgba(255,0,102,0)'
                            }]
                        },
                        opacity: .9
                    }
                }, 
                data: newData //载入图形变色的数据
            }, 
            {
                name: '3',
                data: maxData //载入数据
            }
        ]
    });

    // 高亮当前图形
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: app.currentIndex,
    });

    //tooltip
    myChart.dispatchAction({
        type: 'showTip', //showTip 显示 , hideTip 隐藏
        seriesIndex: 0,
        dataIndex: app.currentIndex
    });

}, 1000);