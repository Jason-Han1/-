option = {  
    backgroundColor: '#1b1b1b',
    tooltip : { 
         formatter: "{a} <br/>{c} {b}" 
    }, 
       series : [  
           {     
               startAngle: 180,  
               endAngle: 0,  
               name:'实际完成',  
               type:'gauge',  
               center : ['50%', '60%'],    // 默认全局居中  
               radius : 220,  
               min:0,  
               max:100,  
               splitNumber:0,  
               axisLine: {            // 坐标轴线  
                   lineStyle: {
                       color: [[0.82, '#ff4500'],[1, '#1e90ff']],// 属性lineStyle控制线条样式  
                       width: 2  
                   }  
               },  
               
               axisTick: {show:false},  
               axisLabel: {            // 坐标轴小标记  
                   textStyle: {       // 属性lineStyle控制线条样式  
                       fontWeight: 'bolder',  
                       fontSize : 16,  
                       color: 'rgba(30,144,255,0)', 
                   }  
               },  
               splitLine: {           // 分隔线  
                   length : 10,         // 属性length控制线长  
                   lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式  
                       width:1,  
                       color: '#444'  
                   }  
               },  
               pointer: {           // 分隔线 指针  
                   color:'#666666',  
                   width: 2,  
                   length:230  
               },  
               detail : {  
                   show : false  
               },  
               data:[{value: 40}]  
           },  
           
           
           
           {
            name:'转速',
            type:'gauge',
            center : ['50%', '60%'],    // 默认全局居中
            radius : '35%',
            min:0,
            max:10,
            startAngle: 180,  
            endAngle: 0,
            splitNumber:10,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.86, '#ff4500'],[1, '#1e90ff']],
                    width: 0,
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisLabel: {            // 坐标轴小标记
                textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight: '',
                    color: 'rgba(30,144,255,0)',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                length :35,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                   /* shadowColor : '#fff', //默认透明
                    shadowBlur: 10*/
                }
            },
            splitLine: {           // 分隔线
                length :0,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:0,
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            pointer: {
                width:0,
                shadowColor : '#fff', //默认透明
                shadowBlur: 5
            },
            detail : {  
                   show : false  
               },  
               data:[{value: 40}]  
        },
        
        
        
        {
            name:'转速',
            type:'gauge',
            center : ['50%', '60%'],    // 默认全局居中
            radius : '40%',
            min:0,
            max:10,
            startAngle: 180,  
            endAngle: 0,
            splitNumber:10,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.86,'#ff4500' ],[1, '#1e90ff']],
                    width: 0,
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisLabel: {            // 坐标轴小标记
                textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight:'' ,
                    color: 'rgba(30,144,255,0)',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                length :2,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    /*shadowColor : '#fff', //默认透明
                    shadowBlur: 10*/
                }
            },
            splitLine: {           // 分隔线
                length :0,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:0,
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            pointer: {
                width:0,
                shadowColor : '#fff', //默认透明
                shadowBlur: 5
            },
            detail : {  
                   show : false  
               },  
               data:[{value: 40}]  
        },
  
       ]  
}
