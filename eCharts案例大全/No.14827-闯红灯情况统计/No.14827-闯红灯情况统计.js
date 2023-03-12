//------------------------------------引用请注明出处

var dataBeast=[0, 3,  18, 13];
var dataBeauty=[2, 7,  20, 28];
var xAxisData=['若面前是绿灯，会选择闯另一半红灯','若另在一半是绿灯，会选择闯面前的红灯','看情况','无论如何都只过绿灯'];
var dataTotal=function(){
    var data=[];
    for(var i=0;i<dataBeauty.length;i++){
        data.push(dataBeauty[i]+dataBeast[i]);
    }
    
    return data;
}

console.log(dataTotal());

option = {
    color:['#019aba','#7a201f','#11565d'],
    backgroundColor:'#000',
    title: {
        text: '闯红灯情况统计',
        textStyle: {
            color:'#fff',
            fontSize:18,
            fontWeight:'bold',
            
        },
       
        subtextStyle: {
            color:'#ddd',
        },
    },
    legend:{
        right:'20%',
        textStyle: {
            color: '#666',
            fontSize: 12,
        },
        data:['男','女','总人数'],
        
        // 自定义legend图标
        // data: [
        //     {
        //         name: '帅哥',
        //         icon: 'image://url',
        //         textStyle: {
        //             color: 'red'
        //         }
        //     },
        //     {
        //         name: '美女',
        //         icon: 'image://url',
        //         textStyle: {
        //             color: 'red'
        //         }
        //     },
        //     {
        //         name: '总人数',
        //         icon: 'image://url',
        //         textStyle: {
        //             color: 'red'
        //         }
        //     },
        // ]
    },
    tooltip:{
        show:true,
        trigger: 'axis',
        axisPointer: {
            type:'cross',
            crossStyle:{
               color:'#ddd',
               
           },

        },
    },
    
    toolbox:{
        right:20,
        feature:{
            saveAsImage: {},
            restore: {},
            dataView: {},
            dataZoom: {},
            magicType: {
                type:['line','bar']
            },
            // brush: {},
        }
    },
    
    grid:{
        left:5,
        right:20,
        top:80,
        bottom:50,
        containLabel:true,
    },
    xAxis: {
      show:true,
      
      axisLabel:{
         interval:0,
         rotate:-20,
         margin: 30,
         textStyle:{
              color:'#ddd',
              align: 'center'
             
         },
      },
      axisTick:{
          alignWithLabel:true,
          lineStyle:{
              color:'#ddd',
              
          },
      },
      data:xAxisData,
    },
    yAxis: [
        {
            type:'value',
            name:'(人/次)',
            nameTextStyle:{
                color:'#ddd',
            },
            axisLabel:{
             textStyle:{
                  color:'#ddd',
             },
            },
            axisTick:{
              alignWithLabel:true,
              lineStyle:{
                  color:'#ddd',
                  
              },
            },
            splitLine:{
                show:false,
            },
        },
        {
            type:'value',
            name:'总人次',
            nameTextStyle:{
                color:'#ddd',
            },
            axisLabel:{
             textStyle:{
                  color:'#ddd',
             },
            },
            axisTick:{
              alignWithLabel:true,
              lineStyle:{
                  color:'#ddd',
                  
              },
            },
            splitLine:{
                show:false,
            },
        },
    ],
  
    series: [
        {
            type: 'bar',
            name:'男',
            stack:'游客人数',
            data:dataBeast,
            label: {
                normal: {
                    show:true,
                    position: 'insideTop',
                    offset:[0,20],
                    textStyle:{
                       color:'#000',
                    },
                },
                emphasis: {
                     textStyle:{
                       color:'#fff',
                    }, 
                },
            },
        },
        {
            type: 'bar',
            name:'女',
            stack:'游客人数',
            data:dataBeauty,
            label: {
                normal: {
                    show:true,
                    position: 'insideTop',
                    offset:[0,20],
                    textStyle:{
                       color:'#000',
                    },
                },
                emphasis: {
                   textStyle:{
                       color:'#fff',
                    }, 
                },
            },
        },
        {
            type: 'line',
            name:'总人数',
            yAxisIndex:1,
            stack:'游客人数',
            data:dataTotal(),
            label: {
                normal: {
                    show:true,
                    position: 'insideTop',
                    offset: [0,-30],
                     textStyle:{
                       color:'#666',
                    }, 
                },
                emphasis: {
                    textStyle:{
                       color:'#fff',
                    },  
                },
            },
            // symbol:'image://../imgs/point1.png',
            symbolSize:8,
            itemStyle: {
                    normal: {
                        // "color": "#01B3D7",
                        barBorderRadius: 0,
                        label: {
                            show:false,
                            position: "top",
                            formatter: function(p) {
                                return p.value > 0 ? (p.value) : '';
                            }
                        }
                    }
                },
            lineStyle: {
                    normal: {
                    color: '#01B3D7',
                    width: 1,
                
                    },
                },
        },
    ]
};