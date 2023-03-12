option= {
        backgroundColor:'#0e2147',
        grid: {
                    left: '3.5%',
                    top:'21.5%',
                    right: '4%',
                    bottom: '12%',
                    containLabel: true
                },
        xAxis: [
            {
                type: 'category',
                axisLabel:{
                                textStyle:{
                                     color: 'rgba(255,255,255,0.8)',
                                     fontSize:'14',
                                }
                              },
                axisTick:{show:false},
                axisLine:{
                                  lineStyle:{
                                      color:'rgba(160,160,160,0.3)',
                                  }
                              },
                boundaryGap : false,
                data: ['20-25','26-30','31-35','36-40','41-45','46-50','51-55','56-60','61-65'],
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '单位：人',
                nameGap:'20',
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
            }
        ],
        series: [
            {
                type:'line',
                itemStyle:{
                    normal:{
                        color:'rgba(255,255,255,0)',
                        areaStyle:{
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 1,[{offset: 1, color: '#00c6ea'},{offset: 0, color: '#0082e6' }],false)
                        }
                    }
                },
                label:{
                            normal:{
                                show:true,
                                position:'top',
                                textStyle:{
                                    color:'#ffffff',
                                    fontSize:'16',
                                }
                            }
                        },
                data:[35,165,60,58,55,61,40,20,45]
            }
        ]
    };