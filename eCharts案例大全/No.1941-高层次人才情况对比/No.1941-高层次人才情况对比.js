var getname = ['省级教学团队','国家级教学团队']  
var getvalue = [10,200];
var barWidth = 32;
var barWidthBg = 45
var color = [
    {
        type:'linear',
        colorStops:[
            {
                offset:0,
                color:'#FEAD5A'
            },
            {
                offset:1,
                color:'#FFD18C'
            }
        ]
    },
    {
        type:'linear',
        colorStops:[
            {
                offset:0,
                color:'#26D7A0'
            },
            {
                offset:1,
                color:'#21B088'
            }
        ]
    }
]
var seriesData = getname.map((item,index)=>{
    return {
        value:getvalue[index],
        itemStyle:{
            borderRadius:[2,2,0,0],
            color:color[index]
        }
    }
});



option = {
    grid:{
        left:'1%',
        right:'1%',
        bottom:'2%',
        top:'5%',
        containLabel:true
    },
    xAxis:{
      data:getname,
      axisTick:{
          show:false
      },
      axisLine:{
          lineStyle:{
              color:'#31C2FF'
          }
      },
      axisLabel:{
          show:true,
          color:'#CAEEFF',
          fontSize:12
      }
    },
    yAxis:{
        axisLine:{
            show:true,
            lineStyle:{
                color:'#31C2FF',
            }
        },
        axisLabel:{
            show:true,
            color:'#CAEEFF',
            fontSize:12
        },
        splitLine:{
            lineStyle:{
                color:'#31C2FF',
                opacity:0.2
            }
        }
    },
    series: [{
        type:'bar',
        data:seriesData,
        barWidth:barWidth,
        
    },{
        type:'bar',
        data:seriesData,
        barWidth:barWidthBg,
        barGap:'-120%',
        itemStyle:{
            opacity:0.2
        }
    },{
        type:'pictorialBar',
        data:seriesData,
        symbolPosition: "end",
        symbolSize:[barWidth,7],
        z:12,
        symbolOffset:[-3,-3],
        label:{
            show:true,
            position:'top'
        }
    },{
        type:'pictorialBar',
        data:seriesData,
        symbolPosition: "end",
        symbolSize:[barWidthBg,6],
        itemStyle:{
            opacity:0.2
        },
        z:11,
        symbolOffset:[-3,-3]
    }]
};
