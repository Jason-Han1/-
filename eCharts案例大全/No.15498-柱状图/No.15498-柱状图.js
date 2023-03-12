
option = {
     title:{
       show:true,
       text:'柱状图',
       link:'https://image.baidu.com/search/index?tn=baiduimage&ct=201326592&lm=-1&cl=2&ie=gbk&word=%B6%FE%D6%F9%D7%D3&fr=ala&ori_query=%E4%BA%8C%E6%9F%B1%E5%AD%90&ala=0&alatpl=sp&pos=0&hs=2&xthttps=111111'
     },
     tooltip:{
       show:true,
       trigger:'axis',
       formatter:function(params){
         var relVal =params[0].name;
         relVal +=params[0].value;
         return relVal;
       },

       showDelay:0,
       hideDelay:50,
       transitionDuration:0,
       backgroundColor:'rgba(50,50,50,1)',
       borderColor:'#aaa',
       showContent: true,
       borderRadius:8,
       padding:10
     },
     dataZoom:[
       {
         type:'slider',
         show:true,
         height:20,
         backgroundColor:'rgba(38,227,189,0.3)',
//         fillerColor: 'rgba(167,183,204,0.4)',
         borderColor:'#0a2b24'
       }
     ],
     axisPointer:{
       type:'line',
       axis:'auto'
     },
     legend:{
       data:['销量']
     },
     xAxis:{
       data:['白龙马','宝马','超级丽马','雅哈马','千里马','人马','卡马','卡尔马','云马','阿斯马']
     },
     yAxis:{},
     series:[{
       name:'销量',
       type:'bar',
       barMaxWidth:60,
       data:[5,20,36,10,20,15,30,25,35,28],
       itemStyle:{
         normal:{
           color:new echarts.graphic.LinearGradient(0,0,0.5,1,[{
             offset:0,
             color:'rgba(35,123,105,1)'
           },{
             offset:1,
             color:'rgba(103,237,210,.5)'
           }]),
           borderColor:'#23a5e2',
           borderWidth:2,
           barBorderRadius:[10,10,0,0],
//           shadowBlur:10,
           shadowColor:'rgba(168,225,226,0.5)',
//           shadowOffsetX:10,
//           shadowOffsetY:10,
           opacity:.6

         },
         emphasis:{
           color:new echarts.graphic.LinearGradient(0,0,0,1,[{
             offset:0,
             color:'rgba(13,164,171,1)'
           },{
             offset:1,
             color:'rgba(64,180,157,.1)'
           }]),
           borderColor:'#0ea4a6',
           borderWidth:2,
           barBorderRadius:[9,9,0,0],
           shadowBlur:30,
           shadowColor:'rgba(32,188 ,157,0.8)',
//           shadowOffsetX:10,
//           shadowOffsetY:10,
           opacity:.7,
           label:{
             show:true,
             textStyle:{
               color:'rgba(150,197,188,1)'
             }

           }
         }
       },
       markPoint:{
         symbol: 'circle',
         symbolSize:50,
         symbolOffset: [0,0],
         silent:true

       }

     }],
     label:{
       normal:{
         show:true,
         position:'top'

       }
//       emphasis:{
//         show:false,
//         position:[10,10],
//         formatter:'{b}:{c}',
//         textStyle:{
//           color:'#fff',
//           fontWeight:'bolder',
//           fontSize:14
//         }
//       }
     }

   };
