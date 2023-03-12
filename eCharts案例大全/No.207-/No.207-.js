option = {
//      legend: {
//         show: true,
//       icon: "roundRect",//形状  类型包括 circle，rect,line，roundRect，triangle，diamond，pin，arrow，none
//      itemWidth: 25,  // 设置宽度
// itemHeight: 10, // 设置高度
// itemGap: 40, // 设置间距
//         top: 5,
//         right: 120,
//         textStyle: {
//             fontSize: 24,
//             color: 'rgba(243, 246, 252, 0.8)'
//         },
//      },
         color:['rgba(49, 126, 245, 1)',''],
    legend:[
        {
             top: "0%",
          right: "13%",
        
                
          textStyle: {
            // 图例文字样式
            color: "rgba(243, 246, 252, 0.8)",
            fontSize: 24,
            fontFamily: "微软雅黑",
            
          },
          itemWidth: 33, // 图例图形的宽度
          itemHeight: 12, // 图例图形的高度
          data: [
            {
              name: "授信通过率", // 图例文字内容
              icon: "circle" // 图例图形的形状，有多个可选值：'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'，
            //也可引用自定义的图片
                //icon: "image://https://p1.pstatp.com/list/dfic-imagehandler/8ac89fbe-b30c-4ba0-8d75-02c0f60a7ea6"
            }
            ]


            
        },
          {
             top: "0%",
          right: "30%",
          textStyle: {
            // 图例文字样式
            color: "rgba(243, 246, 252, 0.8)",
            fontSize: 24,
            fontFamily: "微软雅黑"
          },
          itemWidth: 20, // 图例图形的宽度
          itemHeight: 20, // 图例图形的高度
          data: [
            {
              name: "进件", // 图例文字内容
              icon: "rect" // 图例图形的形状，有多个可选值：'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'，
            //也可引用自定义的图片
                //icon: "image://https://p1.pstatp.com/list/dfic-imagehandler/8ac89fbe-b30c-4ba0-8d75-02c0f60a7ea6"
            }
            ]


            
        },
        
        ],
     tooltip: {
    show: true,  
     trigger: 'axis', 
     },


  xAxis: {
    type: 'category',
    data: ['北京', '天津', '河北', '山西', '内蒙古', '辽宁', '吉林','上海','江苏','浙江','安徽','福建','江西','山东','河南','湖北','湖南','广东','广西','海南','重庆','四川','贵州','云南','陕西','深圳','苏州'],
     axisTick: {
      show: false
    }, 
    axisLabel: {
            inside: false,
            interval: 0,
            textStyle: {
                color: 'rgba(247, 248, 253, 0.8)',
                fontSize:'16',
               
                
            }
        },
        axisLine: {
            symbol: "circle",
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.6)',
                         
                        }
                    },
  },
  yAxis:[ {
     name:'件',
     min: 0,
    max: 10,
    type: 'value',
    nameTextStyle: {
        fontSize: 22,
         color:'rgba(243, 246, 252, 0.8)',
    verticalAlign: 'top', // top名称显示在坐标轴外，bottom显示在坐标轴内部
    padding: [-30,60,0,0]
   },
     interval: 2, //设置坐标轴的分割段数
    axisLine: {
          show:false
        },
    axisTick: {
      show: false
    },
    splitLine: {
        show: true,
        lineStyle:{
           color: '#364559',
           width: 2,
           type: 'dashed'
      }
　　},
　　  axisLabel: {
            inside: false,
            textStyle: {
                color: 'rgba(255, 255, 255, 0.6)',
                fontSize:'16',
               
                
            }
        },

  },
  {
      name:'%',
      min: 0,
          max: 50,
    type: 'value',
    nameTextStyle: {
        fontSize: 22,
         color:'rgba(243, 246, 252, 0.8)',
    verticalAlign: 'top', // top名称显示在坐标轴外，bottom显示在坐标轴内部
    padding: [-30,0,0,40]
   },
   //设置坐标轴的分割段数
     axisLine: {
          show:false
        },
         axisTick: {
      show: false
    },
    splitLine: {
        show: false,
        
      
　　},
　　  axisLabel: {
            inside: false,
            textStyle: {
                color: 'rgba(247, 248, 253, 0.6)',
                fontSize:'16',
               
                
            }
        },
        
        
  },
],
  series: [
      {
         name:'授信通过率',
         smooth: false,
         symbol: "none", 
      data: [0, 0, 0, 0, 0, 0, 50,0,50,0,0,0,0,0,50,30,0,0,0,0,0,30,0,0,0,0,50],
      type: 'line',
        yAxisIndex: 1, //在单个图表实例中存在多个y轴的时候有用
			lineStyle: {
                  color: 'rgba(49, 126, 245, 1)', 
                   type:'dotted',
                   width:5,
        },
      
    },
   
     {
        name:'进件',
       
        symbol: "none", 
      data: [1, 2.5, 3, 1, 2, 1.8, 3,3,3,5.5,1,2,1,3.5,7.8,6,1,0.5,1.8,4,2,2,2,1,1,0.5,0.5],
      type: 'bar',
        yAxisIndex: 0, //在单个图表实例中存在多个y轴的时候有用
        barWidth:20,
      
         itemStyle: {//区域填充渐变颜色
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: 'rgba(121, 248, 199, 1)' // 0% 处的颜色
                }, {
                    offset: 1, color: 'rgba(74, 233, 252, 0.1)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }
        }
    },
     
  ]
};