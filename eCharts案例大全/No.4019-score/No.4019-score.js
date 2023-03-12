var min = 100;
var max = 2000;
option = {
            backgroundColor:'#ffffff',
            grid: {
                left: '2.5%',
                top:'19.5%',
                right: '2.8%',
                bottom: '22%',
                containLabel: true
            },
               legend: {
        data: ['Admission',]
    },
            toolbox: {
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
            xAxis : [
                {
                    type : 'category',
                    axisLabel:{
                     textStyle:{
                          color: 'rgba(0,0,0,0.8)',
                          fontSize:'16',
                     },
                       interval:0,  
                       rotate:30, 
                    },
                    data : ["USA","France","UK","Australia","Germany","China","Canada","Russia","India","SouthAfrica","Mongolia","Cambodia","Nigeria","Sudan"],
                    axisLine:{
                                  lineStyle:{
                                      color:'#808A87',
                                  }
                              },
                    axisTick:{
                        show:false
                    },
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name:'Score',
                    nameGap:25,
                    nameTextStyle:{
                        color:'#000000',
                        fontSize:'16',
                    },
                    axisLabel: {
                        textStyle: {
                            color: 'rgba(0,0,0,0.8)',
                            fontSize:'14',
                        }
                    },
                    axisTick:{
                        show:false
                    },
                    axisLine: {
                        lineStyle:{
                            color:'#808A87',
                        }
                    },
                    splitLine: {
                        lineStyle:{
                            color:'rgba(130,130,130,0.3)',
                        }
                    },
                },
            ],
            series : [
                {
                    type:'bar',
                    barWidth: '40%',
                    itemStyle:{
                      normal:{
                          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#de682e'
                            }, {
                                offset: 1,
                                color: '#ecc232'
                            }]),
                      }
                    },
                    label:{
                        normal:{
                            show:true,
                            position:'top',
                            formatter:function(param){
                                if(param.value==max||param.value==min){
                                    return ''
                                }
                                 return param.value
                            },
                            textStyle:{
                                color:'#000000',
                                fontSize:'16',
                            }
                        }
                    },
                    markPoint : {
                        symbolSize:'90',
                        label:{
                            normal:{
                                textStyle:{
                                    color:'#000000',
                                    fontSize:'14',
                                }
                            }
                        },
                        data : [
                            {name : '年最低', value : min, xAxis: 0, yAxis: 100},
                            {name : '年最高', value : max, xAxis: 19, yAxis: 2000}
                        ]
                    },
                    data:[67.10 ,
                        51.98 ,
                        49.75 ,
                        46.08 ,
                        43.51 ,
                        39.90 ,
                        37.02 ,
                        32.89 ,
                        20.58 ,
                        20.39 ,
                        16.25 ,
                        12.23 ,
                        8.76 ,
                        6.85 

                    ]
                }
            ]
    };