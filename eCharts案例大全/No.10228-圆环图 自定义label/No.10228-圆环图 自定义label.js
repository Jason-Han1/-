let testimg = 'data:image/png;base64,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'
let radius = ['50%', '70%'],  // 圆环大小
    center = ['30%', '50%'],   // 中心位置
    colors = ['#00D2FF','#02AFFF','#0091E4','#0071E4','#004BE4','#5B00E4']; // 节点颜色
    seriesData = [{value:107, name:'type',c:30},
                {value:102, name:'type2',c:30},
                {value:101, name:'type3',c:30}]; 
                
option = {
   color:colors,
    // title : {
    //     text: '标题',
    //     x:'center',
    //     y:'bottom',
    //     textStyle:{
    //         color:'#2acaff',
    //     },
    // },  
    tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)'
    },
    legend:{
        type: 'scroll',
        icon: 'circle',
        x: 'right',
        y: 'center',
        orient: 'vertical',   
        align: 'left',
      formatter: function(params) {
                    //   alert(JSON.stringify(params))
                      let num = seriesData.filter(v=>v.name === params)[0].c
                    var str = '';
                     str = '{a|}  {nameStyle|'+params+' }' + '      {rate|' + num + '%}';
                    return str
      },
       textStyle: {
            fontSize: 9,
            color: '#000',
            rich: {
                a: {
                    width: 20,
                    height: 20,
                    lineHeight: 20,
                    shadowBlur: 0,
                    shadowColor: '#2b2a38',
                    shadowOffsetX:'1',
                    shadowOffsetY:'1',
                    backgroundColor: {
                        image: testimg
                    },
                },
                nameStyle: {
                    fontSize: 16,
                    color: "#FFF",
                    textBorderColor:'rgba(0, 0, 0, 0)',
                    textShadowColor:'#2b2a38',
                    textShadowBlur:'0',
                    textShadowOffsetX:1,
                    textShadowOffsetY:1,
                },
                rate: {
                    fontSize: 20,
                    lineHeight: 30,
                    color: "#FFF",
                    textBorderColor:'rgba(0, 0, 0, 0)',
                    textShadowColor:'#2b2a38',
                    textShadowBlur:'0',
                    textShadowOffsetX:1,
                    textShadowOffsetY:1,
                }
            }
                
        },
    },
    series : [
        {
            name: 'TOP5',
            type: 'pie',
            radius: radius,
            center: center,    
            avoidLabelOverlap: false, 
              label: {
                    normal:{
                        show:false,
                        position: 'center',
                    },
                    emphasis: {
                        show: true,
                        position: 'center',
                        fontSize: 14,
                        formatter: function(params){
                            var str = '';
                            str = '{numStyle|'+params.percent+' }' + '{rate|%}';
                            return str
                        },
                        rich: {
                            numStyle: {
                            fontSize:14,
                            color:'#000000'
                            },
                            rate: {
                            fontSize:12,
                            color:'#cccccc'
                            }         
                        }
                    },
                },
            // label:{
            //     normal:{
            //     show:true,
            //     position: 'center',
            //     }
            // },
            // emphasis: {
            //     label: {
            //         show: true,
            //         fontSize: '30',
            //         position: 'center',
            //         fontWeight: 'bold',
            //           formatter: function(params){
            //     //   alert(JSON.stringify())
            //       var str = '';
            //          str = '{numStyle|'+params.percent+' }' + '{rate|%}';
            //         return str
            //         // return params.percent+'%'
            //     },
            //   rich: {
            //     numStyle: {
            //       fontSize:50,
            //       color:'#000000'
            //     },
            //     rate: {
            //       fontSize:20,
            //       color:'#cccccc'
            //     }
                          
            //   }
            //     }
            // },
            data:seriesData,
            // [
            //      {
            //                             value:0 ,
            //                             label: {
            //                                 normal: {
            //                                     // formatter: function(){
            //                                     //     return '中心内容'
            //                                     // },
            //                                     position: 'center',
            //                                     show: true,
            //                                     textStyle: {
            //                                         fontSize: 24,
            //                                         fontWeight: 'bold',
            //                                         color: '#98c5f5'
            //                                     }
            //                                 }
            //                             },
            //                         },
            //     {value:335, name:'type'},
            //     {value:310, name:'type2'},
            //     {value:234, name:'type3'},
            //     {value:135, name:'type4'},
            //     {value:1548, name:'type5'},
            //     {value:1548, name:'其他'},
            // ],
            // itemStyle: {
            //     emphasis: {
            //         shadowBlur: 10,
            //         shadowOffsetX: 0,
            //         shadowColor: 'rgba(0, 0, 0, 0.5)'
            //     }
            // },
        
        }
    ]
};