var data_val = [560.3, 848, 10607.4, 1427604.2, 201826.9, 45623.8,1747264.9,1032035.3,1069932.3,11708423.7,7522985.3,4855087.3,4144926.4,5225214.9,5266493.5,2257290.9],
    xAxis_val = ['15年9月', '15年10月', '15年11月', '15年12月', '16年1月', '16年2月', '16年3月', '16年4月', '16年5月', '16年6月', '16年7月','16年8月','16年9月','16年10月','16年11月','16年12月'];
var data_val1 = [0, 0, 0, 0, 0, 0, 0];
var option = {
    backgroundColor:'#fff',
    grid:{
        left:0,
        top:'10%',
        bottom:0,
        right:10,
        containLabel:true
    },
    tooltip:{
        show:true,
        backgroundColor:'#fff',
        borderColor:'#c23531',
        borderWidth:1,
        textStyle:{
            color:'#3c3c3c',
            fontSize:13
        },
        formatter:'{b}:{c}',
        extraCssText:'box-shadow: 0 0 5px rgba(0, 0, 0, 0.3)'
    },
    legend:{
        right:0,
        top:0,
        data:['rate']
    },
    title: {
        text: '流水月统计'
    },
    xAxis: {
        data: xAxis_val,
        boundaryGap:false,
        axisLine:{
            show:false
        },
        axisTick:{
            show:false
        }
    },
    yAxis: {
        splitLine:{
            show:true,
            lineStyle:{
                color:'#eee'
            }
        }
    },
    series: [
        {
            type: 'bar',
            name:'rate',
            tooltip:{
                show:false
            },
            animation:false,
            barWidth:1,
            hoverAnimation:false,
            data:data_val,
            itemStyle:{
                normal:{
                    color:'#c23531',
                    //opacity:0.49,
                    label:{
                        show:false
                    }
                }
            }
        },
        {
            type: 'line',
            name:'rate',
            animation:false,
            symbol:'',
            symbolSize:6,
            tooltip:{
                show:false
            },
            hoverAnimation:false,
            data:data_val1,
            itemStyle:{
                normal:{
                    opacity:0.9,
                    label:{
                        show:false
                    }
                }
            },
            lineStyle:{
                normal:{
                    width:1,
                    color:'#c23531',
                    opacity:0.9
                }
            }
        },
        {
            type: 'line',
            name:'rate',
            smooth:true,
            symbolSize:8,
            animation:false,
            hoverAnimation:false,
            data:data_val,
            itemStyle:{
                normal:{
                    //opacity:0,
                    label:{
                        show:true,
                        position:'top',
                        textStyle:{
                            color:'#3c3c3c'
                        }
                    }
                }
            },
            areaStyle:{
                normal:{
                    color:'#c23531',
                    opacity:0.1
                }
            }
            
        }
    ]
};
myChart.setOption(option);

