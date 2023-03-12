var min = 100;
var max = 2000;
option = {
            backgroundColor:'#0e2147',
            grid: {
                left: '2.5%',
                top:'19.5%',
                right: '2.8%',
                bottom: '22%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    axisLabel:{
                     textStyle:{
                          color: 'rgba(255,255,255,0.8)',
                          fontSize:'14',
                     },
                       interval:0,  
                       rotate:-45, 
                    },
 data: ['广州市','深圳市','珠海市','汕头市','佛山市','韶关市','湛江市','肇庆市','江门市','茂名市','惠州市','梅州市','汕尾市','河源市' ,'阳江','清远','东莞','中山','潮州','揭阳','云浮'],
                    axisLine:{
                                  lineStyle:{
                                      color:'rgba(160,160,160,0.3)',
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
                    name:'单位：个',
                    nameGap:25,
                    nameTextStyle:{
                        color:'#ffffff',
                        fontSize:'16',
                    },
                    axisLabel: {
                        textStyle: {
                            color: 'rgba(255,255,255,0.8)',
                            fontSize:'14',
                        }
                    },
                    axisTick:{
                        show:false
                    },
                    axisLine: {
                        lineStyle:{
                            color:'rgba(160,160,160,0.3)',
                        }
                    },
                    splitLine: {
                        lineStyle:{
                            color:'rgba(160,160,160,0.3)',
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
                                color:'#ffffff',
                                fontSize:'16',
                            }
                        }
                    },
                    markPoint : {
                        symbolSize:'70',
                        label:{
                            normal:{
                                textStyle:{
                                    color:'#ffffff',
                                    fontSize:'16',
                                }
                            }
                        },
                        data : [
                            // {name : '年最低', value : min, xAxis: 0, yAxis: 300},
                            // {name : '年最高', value : max, xAxis: 19, yAxis: 2670}
                             {name : '年最低', value :max,  xAxis: 19, yAxis: 2670},
                            {name : '年最高', value : min, xAxis: 0, yAxis: 300}
                        ]
                    },
                   // data:[100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000]
                data:[2670,2500,1980,1955,1800,1500,1430,1250,1200,980,900,870,830,706,679,647,611,558,450,442,300]
                    
                }
            ]
    };