    var gain = 0.9;
    var gap = 0;
    var myColor=['#e63810','#ff6b00','#e3b61f','#13b5b1'];
    var myBgColor=['rgba(230,56,16,0.2)','rgba(255,107,0,0.2)','rgba(227,182,31,0.2)','rgba(19,181,177,0.2)'];
    //柱子数据
    var data = [8, 15, 10,6];
    var option = {
       backgroundColor:'rgba(0,0,0,0.8)',
            grid: {
                left: '3%',
                top:'10%',
                right: '2%',
                bottom: '5%',
                containLabel: true
            },
            xAxis: [{
                    type: 'category',
                    axisTick: {
                        show: false
                    },
                    axisLine:{
                                  lineStyle:{
                                      color:'rgba(160,160,160,0.3)',
                                  }
                              },
                    axisLabel:{
                        textStyle:{
                            color:function(param,index){
                                return myColor[index]
                            },
                            fontSize:13*gain,
                        }
                    },
                    data: ['01','02','03','04']
                }
            ],
            yAxis: {
                type: 'value',
                name:'',
                nameGap:35+gap,
                nameTextStyle:{
                    color:'#ffffff',
                    fontSize:16*gain,
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                splitLine: {
                    lineStyle:{
                        color:'rgba(160,160,160,0.3)',
                    }
                },
                axisLabel: {
                    show: false,
                    textStyle: {
                        color: 'rgba(255,255,255,0.8)',
                        fontSize:14*gain,
                    }
                },
                
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"]
                    }
                }
            },
            series: [
                {
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            show: true,
                            color: function(params) {
                                var num=myColor.length;
                                return myColor[params.dataIndex%num]
                            },
                            barBorderRadius: 50,
                            borderWidth: 0,
                            borderColor: '#333',
                        }
                    },
                    label: {
                        normal: {
                            show: false,

                        }
                    },
                    barWidth: '25%',
                    data: data
                }
            ]
    };