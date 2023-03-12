var myColor=['#eb2100','#eb4800','#eb7f00','#d0a00e','#c9db00','#93c222'];
option = {
        backgroundColor:'#0e2147',
        grid: {
            left: '3.8%',
            top:'21%',
            right: '4%',
            bottom: '12%',
            containLabel: true
        },
        xAxis: {
            data: ['博士研究生', '硕士研究生', '大学本科', '高中毕业', '专科毕业', '中专毕业'],
            axisTick: {show: false},
            axisLine: {show: true,
                       lineStyle:{
                            color:'rgba(160,160,160,0.3)',
                        }
                
            },
            axisLabel:{
                                textStyle:{
                                     color: 'rgba(255,255,255,0.8)',
                                     fontSize:'14',
                                },
                              },
        },
        yAxis: {
            name:'单位：人',
            nameGap:'30',
                    nameTextStyle:{
                        color:'#ffffff',
                        fontSize:'16',
                    },
            splitLine: {
                        show:false,
                        lineStyle:{
                            color:'rgba(160,160,160,0.3)',
                        }
                    },
            axisTick: {show: false},
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
        },
        series: [
            {
            name: 'hill',
            type: 'pictorialBar',
             barGap:'-100%',
            barCategoryGap: '40%',
            symbol: 'path://M150 50 L130 130 L170 130 Z',
            // label:{
            //     normal:{
            //         show:true,
            //         position:'top',
            //         textStyle:{
            //             fontSize:'16',
            //             color:'#ffffff'
            //         }
            //     }
            // },
            itemStyle: {
                normal: {
                    color: function(params) {
                                var num=myColor.length;
                                return myColor[params.dataIndex%num]
                        },
                }
            },
            data: [130, 160,12, 59, 12, 100],
            z: 8
        },
            {
            name: 'ill',
            type: 'pictorialBar',
            barCategoryGap: '40%',
            symbol: 'path://M150 50 L130 130 L170 130 Z',
            // label:{
            //     normal:{
            //         show:true,
            //         position:'top',
            //         textStyle:{
            //             fontSize:'16',
            //             color:'#ffffff'
            //         }
            //     }
            // },
            itemStyle: {
                normal: {
                    color: 'rgba(23,244,25,1)'
                }
            },
            data: [110, 120,8, 49, 10, 60],
            z: 10
        },
            {
            name: 'ill',
            type: 'pictorialBar',
            barCategoryGap: '40%',
            symbol: 'path://M150 50 L130 130 L170 130 Z',
            // label:{
            //     normal:{
            //         show:true,
            //         position:'top',
            //         textStyle:{
            //             fontSize:'16',
            //             color:'#ffffff'
            //         }
            //     }
            // },
            itemStyle: {
                normal: {
                    color: 'rgba(223,24,235,.5)'
                }
            },
            data: [10, 12,8, 9, 1, 6],
            z: 10
        },
          {
            symbol: 'image://data:image/png;base64,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',
            symbolSize: 42,
            name: "完成率",
            type: "line",
            // xAxisIndex: 1,
             data: [110, 120,8, 49, 10, 60],
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    color: {
                        colorStops: [{
                                offset: 0,
                                color: '#821eff'
                            },

                            {
                                offset: 1,
                                color: '#204fff'
                            }
                        ],
                    }
                }
            },
           z: 10
        }     
        ]
    };