option = {
    backgroundColor:'#2B2B2B',
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['频率'],
        textStyle:{
            color:'#FFF',
            fontSize:20
        }
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        splitLine:{
            show:true,
            lineStyle:{
                type:'dotted'
            }
        },
        axisLabel:{
            textStyle:{
                color:'#FFF',
                fontSize:20
            }
        },
        axisLine:{
            lineStyle:{
                color:'#FFF'
            }
        },
        data: ['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','23:59']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} Hz',
            textStyle:{
                color:'#FFF',
                fontSize:20
            }
        },
        min:48.75,
        max:51.25,
        axisLine:{
            lineStyle:{
                color:'#FFF'
            }
        },
        splitLine:{
            show:true,
            lineStyle:{
                type:'dotted'
            }
        }
    },
    series: [
        {
            name:'频率',
            type:'line',
            symbol:'circle',
            itemStyle:{
                normal:{
                    color:'#00FF00'
                }
            },
            data:[],
            markPoint: {
                symbolSize:1,
                data: [
                    {type: 'max', name: '最大值',itemStyle:{normal:{color:'#00FF00'}}},
                    {type: 'min', name: '最小值',itemStyle:{normal:{color:'#00FF00'}}}
                ],
                label:{normal:{textStyle:{color:'#00ff00',fontSize:25}}}
            },
            lineStyle:{
                normal:{
                    color:'#00FF00',
                    width:3
                }
            },
            markLine: {
                lineStyle:{
                    normal:{
                        type:'solid',
                        width:2
                    }
                },
                data: [
                    {type: 'average', name: '平均值',itemStyle:{normal:{color:'#FFFFFF'}}}
                ],
                label:{normal:{textStyle:{color:'#FFF',fontSize:20}}}
            }
        },
        {
            name:'最大值',
            type:'line',
            symbol:'circle',
            symbolSize:1,
            itemStyle:{
                normal:{
                    color:'red'
                }
            },
            lineStyle:{normal:{width:2}},
            data:[51, 51, 51, 51, 51, 51, 51,51,51,51,51,51,51,51, 51, 51, 51, 51, 51, 51,51,51,51,51,51,51],
            
        },
        {
            name:'最小值',
            type:'line',
            symbol:'circle',
            symbolSize:1,
            itemStyle:{
                normal:{
                    color:'red'
                }
            },
            lineStyle:{normal:{width:2}},
            data:[49, 49, 49, 49, 49, 49, 49,49,49,49,49,49,49,49, 49, 49, 49, 49, 49, 49,49,49,49,49,49,49],
            
        }
    ]
};

var index=0;
setInterval(function () {
    if (index<=24) {
        option.series[0].data.push(Math.random().toFixed(2) * 2+49);
    } else {
        option.series[0].data=[];
        index=0;
    }
    index++;
    myChart.setOption(option, true);
},1000);
