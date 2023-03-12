
var min = 100;
var max = 2000;
option = {
            backgroundColor:'',
            grid: {
                left: '2.5%',
                top:'5.5%',
                right: '2.8%',
                bottom: '10%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    axisLabel:{
                     textStyle:{
                          color: '#121a2a',
                          fontSize:'12',
                     },
                       interval:0,  
                       rotate:-45, 
                    },
 data: ['河北省','山西省','辽宁省','吉林省','黑龙江省','江苏省','浙江省','安徽省','福建省','江西省','山东省','河南省','湖北省','湖南省','广东省','海南省','四川省','贵州省','云南省','陕西省','甘肃省'],
                    axisLine:{
                                  lineStyle:{
                                      color:'#121a2a',
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
                    nameGap:25,
                    nameTextStyle:{
                        color:'#121a2a',
                        fontSize:'16',
                    },
                    axisLabel: {
                        show: false,
                        textStyle: {
                            color: '#121a2a',
                            fontSize:'12',
                        }
                    },
                    axisTick:{
                        show: false
                    },
                    axisLine: {
                        show: false,
                        lineStyle:{
                            color:'rgba(160,160,160,0.3)',
                        }
                    },
                    splitLine: {
                        show: false,
                        lineStyle:{
                            color:'rgba(160,160,160,0.3)',
                        }
                    }
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
                                color: '#00CCFF'
                            }, {
                                offset: 1,
                                color: '#00CCFF'
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
                                color:'#121a2a',
                                fontSize:'12',
                            }
                        }
                    },
                    markPoint : {
                        symbolSize:'70',
                        label:{
                            normal:{
                                textStyle:{
                                    color:'#121a2a',
                                    fontSize:'16',
                                }
                            }
                        }
                    },
                   // data:[100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000]
                data:[2670,2500,1980,1955,1800,1500,1430,1250,1200,980,900,870,830,706,679,647,611,558,450,442,300]
                    
                }
            ]
    }