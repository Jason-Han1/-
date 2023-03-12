var dimensionData = [
    {name: "覆盖", max: 10},
    {name: "干扰", max: 10},
    {name: "感知", max: 10},
    {name: "故障", max: 10},
    {name: "容量", max: 10}
];
var color=['#DAA520','#F08080']
var data = [{
    value:[7, 3, 4, 5, 8],
    name:'图例一',
    areaStyle:{
        color:'#DAA520'
    },
    emphasis:{
        areaStyle:{
             color:'#DAA520'
        }
    }
},{
    value:[2,8,7,1,2],
    name:'图例二',
     areaStyle:{
        color:'#F08080'
    },
    emphasis:{
        areaStyle:{
             color:'#F08080'
        }
    }
},
];
var radius = '60%'
option = {
    title: {
        text: '基础雷达图'
    },
    color:color,
    animation:false,
    legend: {
    },
    radar: {
        name: {
            show:true,
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        indicator: dimensionData,
        center:['50%', '50%'],
        startAngle:90,
        splitNumber: 5,
        radius: radius,
        shape: 'circle',
         splitArea: {
           areaStyle: {
             color: ['rgba(0, 21, 102, 0.4)'],
           },
        },
        splitLine: {
            show:true,
            lineStyle: {
              color: ['rgba(238,238,238, 0.2)']
            }
        },
        axisLine: {
           lineStyle: {
             color: ['rgba(238,238,238, 0.2)']
           }
        }
    },
     tooltip: {
        show:false,
        trigger:'item',
        axisPointer:{
         
            snap:true
        }
    },
    //极坐标系
    polar: {
        radius: radius,
        center:['50%', '50%'],
    },
    
    angleAxis: {
    triggerEvent:true,
       axisLine: {
          lineStyle: {
             color: 'rgba(238,238,238, 0.2)'
          }
       },
    },
    radiusAxis: {
        //用注释掉的这个用法可以动态控制刻度的个数，但有时候会出现刻度标签显示不全的现象
        // type: 'value',
        // min: 0,
        // max: 10,
        // interval: 2
        type: 'category',
        splitNumber: 5,
        axisLabel:{
           show:true,
           interval: 0,
           fontSize:9,
           color:"rgba(255, 255, 255, 0.5)",
        },
        axisTick:{
           show:true,
           inside:true,
        },
        axisLine:{
           show:true,
           lineStyle:{
              color:'rgba(238,238,238, 0.2)'
           }
        },
        splitLine:{
           show:false,
           lineStyle:{
             color:'rgba(238,238,238, 0.2)'
           }
        },
        data:data
    },
    
    series: [{
        name: '',
        //silent:true,//有了mouseover监听不了
        type: 'radar',
        data: data,
        radarIndex:0,
        symbol: 'circle',
        symbolSize: 6,
        //  itemStyle: {
        //     normal: {
        //       color: 'rgba(255, 255,255, 1)',
        //       borderColor: 'rgba(255, 179, 0, 1)',
        //       borderWidth: 1,
        //     }
        //  },
        //  areaStyle: {
        //       color: color,
        //  },
        //  emphasis:{
        //      areaStyle: {
        //       color: color,
        //  },
        //  },
        //  lineStyle: {
        //     width: 2,
        //     color: color
        //  }
    }]
};


myChart.on("mouseover", function(params){
   console.log(params)
    var isSelectedDot = params.event.target.__dimIdx;
    if(isSelectedDot === undefined) {
        option.tooltip.show = false;
        myChart.setOption(option);
        return;}
    console.log(isSelectedDot)
    
    console.log(myChart.getZr())
    //做鼠标滑过拐点的操作  
    option.tooltip.show = true;
    option.tooltip.formatter = function(params){
        var str = '';//声明一个变量用来存储数据
        var short=''
        str='<div style="font-weight:bold">'+dimensionData[isSelectedDot].name+'</div>'
        for(var i=0;i<data.length;i++){
            short+='<div style="font-size:12px">'
            short+='<div style="display:inline-block;width:10px;height:10px;border-radius:50%;background:'+data[i].areaStyle.color+'">'+'</div>'
            short+='&nbsp;'
            short+='<span>'+data[i].name+'：'+'</span>'
            short+='<span>'+data[i].value[isSelectedDot]+'</span>'
            short+='<br>'
            short+='</div>'
        }
        str+=short
        //console.log(dimensionData)
        console.log(params.data.value[isSelectedDot])
        return str;
    };
    myChart.setOption(option);
});

myChart.on("mouseout", function(params){
    var isSelectedDot = params.event.target.__dimIdx;
    if(isSelectedDot === undefined) 
    option.tooltip.show = false;
    myChart.setOption(option);
});
