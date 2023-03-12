var data=[
        {"time":"10-12","result":[{"name":"正面","value":3},{"name":"负面","value":3.6},{"name":"中性","value":2.7}]},
        {"time":"10-13","result":[{"name":"正面","value":3.3},{"name":"负面","value":2.5},{"name":"中性","value":2.8}]},
        {"time":"10-16","result":[{"name":"正面","value":2.7},{"name":"负面","value":1.5},{"name":"中性","value":1.9}]},
        {"time":"10-18","result":[{"name":"正面","value":2.2},{"name":"负面","value":1.3},{"name":"中性","value":1.8}]},
        {"time":"10-20","result":[{"name":"正面","value":2.9},{"name":"负面","value":1.4},{"name":"中性","value":2.1}]},
        {"time":"10-22","result":[{"name":"正面","value":3.2},{"name":"负面","value":1.7},{"name":"中性","value":2.4}]},
        {"time":"10-23","result":[{"name":"正面","value":3.6},{"name":"负面","value":1.9},{"name":"中性","value":2.3}]},
        {"time":"10-24","result":[{"name":"正面","value":2.7},{"name":"负面","value":1.5},{"name":"中性","value":1.9}]},
        {"time":"10-25","result":[{"name":"正面","value":2.2},{"name":"负面","value":1.3},{"name":"中性","value":1.8}]},
        {"time":"10-26","result":[{"name":"正面","value":2.9},{"name":"负面","value":1.4},{"name":"中性","value":2.1}]},
        {"time":"10-27","result":[{"name":"正面","value":3.2},{"name":"负面","value":1.7},{"name":"中性","value":2.4}]},
        {"time":"10-28","result":[{"name":"正面","value":3.6},{"name":"负面","value":1.9},{"name":"中性","value":2.3}]}
    ];
    var name=[data[0].result[0].name,data[0].result[1].name,data[0].result[2].name];
    var xData=[];
    var data1=[],data2=[],data3=[];

    for(var i=0;i<data.length;i++){
        xData.push(data[i].time);
        data1.push(data[i].result[0].value);
        data2.push(data[i].result[1].value);
        data3.push(data[i].result[2].value);
    }
var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#00ffff'

                }
            },
            textStyle:{
                fontSize:14
            }
        },
        legend: {
            show:true,
            icon: 'rect',
            itemWidth: 20,
            itemHeight: 10,
            itemGap: 13,
            data: name,
            right: 'center',
            textStyle: {
                fontSize: 14,
                color: '#000000'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        dataZoom:[{
            type:'slider',
            show:false,
            realtime:true,
            startValue:0,
            endValue:4
        }],
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            offset:2,
            data: xData,
            axisLabel:{
                show:true,
                textStyle: {            
                    color: '#59deee',
                    fontSize:'14'
                }
            },
            axisLine:{show:false},
            axisTick:{show:false},
            splitLine:{show:false}
        }],
        yAxis: [{
            type: 'value',
            boundaryGap: true,
            offset:5,
            axisTick: {
                show: false
            },
            axisLine: {
                show:false
            },
            axisLabel: {
                margin: 5,
                textStyle: {
                    fontSize: 14,
                    color: '#59deee'
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#027b84'
                }
            }
        }],
        series: [{
            name:name[0],
            type: 'line',
            smooth: true,
            symbolSize:3,
            lineStyle: {
                normal: {
                    width: 1,
                    color:'#00ff00'
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 255, 0, 1)'
                    }, {
                        offset: 0.3,
                        color: 'rgba(0, 255, 0, 0.1)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: '#00ff00',//图例颜色
                    borderColor:'#00ff00',
                    borderWidth:3
                }
            },
            data: data1
        },
            {
                name: name[1],
                type: 'line',
                smooth: true,
                symbolSize:3,
                lineStyle: {
                    normal: {
                        width: 1,
                        color:"#f8555b"
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(248, 84, 91, 1)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(248, 84, 91, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color:"#f8555b",
                        borderColor:'#f8555b',
                        borderWidth:3
                    }
                },
                data: data2
            },
            {
                name: name[2],
                type: 'line',
                smooth: true,
                symbolSize:3,
                lineStyle: {
                    normal: {
                        width: 1,
                        color:"#c490bf"
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(196, 144, 191, 1)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(196, 144, 191, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color:"#c490bf",
                        borderColor:'#c490bf',
                        borderWidth:3
                    }
                },
                data: data3
            }, ]
    };
    var a = 1;

setInterval(function () {
    if(a == (xData.length-4)){
        a=0;
    }
    myChart.dispatchAction({
        type:'dataZoom',
        startValue:a,
        endValue:a+4
    });
    a++;
},2000)