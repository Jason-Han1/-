// See https://github.com/ecomfe/echarts-stat
//echarts.registerTransform(ecStat.transform.regression);

option = {
    dataset: [
        {
            dimensions: ['年份', 'NDVI'],
            source: [
                //X轴 ,  //Y轴  ,  //维度
                [2000, 0.68606864],
                [2001, 0.696828409],
                [2002, 0.72314398],
                [2003, 0.696941667],
                [2004, 0.724418838],
                [2005, 0.702737919],
                [2006, 0.670592261],
                [2007, 0.648559415],
                [2008, 0.702411173],
                [2009, 0.696228066],
                [2010, 0.686869857]
            ],
        },
        {
            dimensions: ['年份', 'NDVI'],
            source: [
                //X轴 ,  //Y轴  ,  //维度
                [2007, 0.683539469],
                [2008,0.706496932],
                [2009, 0.708490038],
                [2010, 0.696785927],
                [2011, 0.675654638],
                [2012, 0.657266023],
                [2013, 0.66900242]
            ],
        },
        {
            dimensions: ['年份', 'NDVI'],
            source: [
                //X轴 ,  //Y轴  ,  //维度
                [2012, 0.709662963],
                [2013,0.660571969],
                [2014, 0.577602956],
                [2015,0.75679552],
                [2016, 0.749460157],
                [2017, 0.735174275],
                [2018, 0.745248405]
            ],
        }
    ],
    legend: {
        data: ['2006年', '2011年','2013年'],
        right: "10%",
         top:'10%',
         textStyle:{
             fontSize:15,
         }
    },
    /*--------------------以下配置，不需要关注------------------*/
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
        }
    },
    xAxis: {
        min:2000,
        max:2018,
        interval:2,
        axisLabel: {
            formatter: function(value) {
                return value + "";
              },
          margin: 15,
         
          textStyle: {
               fontSize: 16,
           },
        },
         splitLine: {
               show:false,
        }
    },
    yAxis: {
        name:'Value',
        nameTextStyle: {
            color: '#777777',
            fontSize: 20,
            padding:[0,0,0,0]
        },
        type:'value',
        min:0.5,
        max:0.8,
       axisLabel: {
          margin: 15,
          textStyle: {
               fontSize: 16,
           },
        },
       
    },
    series: [
        
        {
            name: '2006年',
            symbolSize: 6,
            symbol: 'circle',
            type: 'line',
            datasetIndex: 0,
          markLine: {
                lineStyle: {
                    type: 'dashed',
                    color: 'Black',
                    width:1.3,
                },
                symbol: ['none', 'none'],
                label: {
                    show: false
                },

                data: [
                     [
                       {"symbol":"none","coord":[2006,0.670592261]},
                        {
                            "symbol":"none",
                            "label":{
                                "position":"middle",
                                "offset":[0,50],
                                "formatter":"","fontSize":14
                                
                            },
                            "coord":[2006,0.5]
                        }
                    ],

                ]
            },
   
            lineStyle: {
            color: '#9E87FF'
        },
        itemStyle: {
            normal: {
                color: '#9E87FF',
                borderColor: '#9E87FF',
            }
        },
            areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(190,184,220,0.6)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(190,184,220,0.2)'
                    }
                ])
        },
        },
        {
            symbolSize: 6,
            symbol: 'circle',
            name: '2011年',
         
            type: 'line',
            datasetIndex:1,
            lineStyle: {
            color: '#fe9a8b'
        },
         markLine: {
                lineStyle: {
                    type: 'dashed',
                    color: 'Black',
                    width:1.3,
                },
                symbol: ['none', 'none'],
                label: {
                    show: false
                },

                data: [
                     [
                       {"symbol":"none","coord":[2011,0.675654638]},
                        {
                            "symbol":"none",
                            "label":{
                                "position":"middle",
                                "offset":[0,50],
                                "formatter":"","fontSize":14
                                
                            },
                            "coord":[2011,0.5]
                        }
                    ],

                ]
            },
          itemStyle: {
            normal: {
                color: '#fe9a8b',
                borderColor: '#fe9a8b'
            }
        },
            areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(250,127,111,0.6)'
                    },
                    {
                        offset: 1,
                        color:'rgba(250,127,111,0.2)'
                    }
                ])
        },
            
            
        },
        {
            symbolSize: 6,
            symbol: 'circle',
            name: '2013年',
            type: 'line',
         
            datasetIndex:2,
             lineStyle: {
            color:  "rgba(58,182,224,1)"
        },
        markLine: {
                lineStyle: {
                    type: 'dashed',
                    color: 'Black',
                    width:1.3,
                },
                symbol: ['none', 'none'],
                label: {
                    show: false
                },

                data: [
                     [
                       {"symbol":"none","coord":[2013,0.660571969]},
                        {
                            "symbol":"none",
                            "label":{
                                "position":"middle",
                                "offset":[0,50],
                                "formatter":"","fontSize":14
                                
                            },
                            "coord":[2013,0.5]
                        }
                    ],

                ]
            },
         itemStyle: {
            normal: {
                color: "rgba(58,182,224,1)",
                borderColor: "rgba(58,182,224,1)"
            }
        },
            areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                             color: "rgba(58,182,224, 0.5)" // 0% 处的颜色
                        },
                        {
                            offset: 1,
                           color: "rgba(58,182,224, 0.1)" // 100% 处的颜色
                        }
                    ])
        },
            
        }
    ],
};

