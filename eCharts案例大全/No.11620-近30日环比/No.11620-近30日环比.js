var data_val=[5, 1, 6, 4, 2, -5, -1,4,8,6,2,-3,0,8,5,6,7,2,-7,5,3,7,2,3,4,5,7,7.5,8,7],
    xAxis_val=['1日', '2日', '3日', '4日', '5日', '6日', '7日','8日','9日','10日','11日','12日','13日','14日','15日','16日','17日','18日','19日','20日','21日','22日','23日','24日','25日','26日','27日','28日','29日','30日'];
var data_val1=[0,0,0,0,0,0,0];
var option = {
    backgroundColor:'#293042',
    grid:{
        left:10,
        top:'10%',
        bottom:20,
        right:40,
        containLabel:true
    },
    tooltip:{
        show:true,
        backgroundColor:'#384157',
        borderColor:'#384157',
        borderWidth:1,
        formatter:'{b}:{c}',
        extraCssText:'box-shadow: 0 0 5px rgba(0, 0, 0, 1)'
    },
    legend:{
        right:0,
        top:0,
        data:['距离'],
         textStyle:{
            color :'#5c6076'
        }
    },
    // title: {
    //     text: '跑步数据检测',
    //     x:'4.5%',
    //     top: '1%',
    //     textStyle:{
    //     color :'#5c6076'
    //     }
    // },
    xAxis: {
        data: xAxis_val,
        boundaryGap:false,
        axisLine:{
            show:false
        },
         axisLabel: {
            textStyle: {
                color: '#5c6076'
            }  
        },
        axisTick:{
            show:false
        }
    },
    yAxis: { 
        ayisLine:{
            show:false
        },
         axisLabel: {
             formatter: "{value} %",
            textStyle: {
                color: '#5c6076'
            }  
        },
        splitLine:{
            show:true,
            lineStyle:{
                color:'#2e3547'
            }
        },
        // axisLabel: {
        //         show: true,
        //         formatter: "{value} %", //右侧Y轴文字显示
        //         textStyle: {
        //             color: "#ebf8ac"
        //         }
        //     },
        axisLine: {
                lineStyle: {
                    color: '#384157'
                }
            }
    },
    
    series: [
        {
            type: 'bar',
            name:'linedemo',
            
            
            tooltip:{
                show:false
            },
            animation:false,
            barWidth:1.4,
            hoverAnimation:false,
            data:data_val,
            itemStyle:{
                normal:{
                    color:'#f17a52',
                    opacity:0.6,
                    label:{
                        show:false
                    }
                }
            }
        },
        {
            type: 'line',
            name:'距离',
            
            animation:false,
            symbol:'circle',
    
            hoverAnimation:false,
            data:data_val1,
            itemStyle:{
                normal:{
                    color:'#f17a52',
                    opacity:0,
                }
            },
            lineStyle:{
                normal:{
                    width:1,
                    color:'#384157',
                    opacity:1
                }
            }
        },
        {
            type: 'line',
            name:'linedemo',
            smooth:true,
            symbolSize:10,
            animation:false,
            lineWidth:1.2,
            hoverAnimation:false,
            data:data_val,
            symbol:'circle',
            itemStyle:{
                normal:{
                    color:'#f17a52',
                    shadowBlur: 40,
                    label:{
                        show:true,
                        position:'top',
                        textStyle:{
                            color:'#f17a52',
                    
                        }
                    }
                }
            },
           areaStyle:{
                normal:{
                    color:'#f17a52',
                    opacity:0.08
                }
            }
            
        }
    ]
};
myChart.setOption(option);

