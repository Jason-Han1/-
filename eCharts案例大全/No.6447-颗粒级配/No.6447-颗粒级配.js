option = {
    title: {
        text: '颗粒级配',
   textStyle: {
      fontSize: 25,
    },
    left:'center',
    top:100
    },
    legend: {
        data:['上包络线','下包络线'],
        left:120,
        top:150
    },
    xAxis: {                                          //x轴线坐标        
    show:true,                                              
    type:'log',
    inverse:true,
    name: "粒径/mm",
    nameLocation: "middle",
    nameTextStyle: {
      color: "rgba(0, 0, 0, 1)",                     //标题的颜色
      fontStyle: "normal",
      fontWeight: 'bold',
      fontFamily: "Arial",
      fontSize: 20,
      lineHeight:50,
    },
    axisLine: {                                     //不显示x轴线
      show: false,
    },
    axisTick: {                                     //不显示主刻度线
      show: false,
      interval: 1,
      inside: true,
      length: 30,
    },
    minorTick: {                                   //不显示次级刻度线
      show: false,
      splitNumber: 5,
      length: 30,
      lineStyle: {
        color: "rgba(215, 32, 32, 1)",
        width: 5,
        type: "dashed",
         }
    },
    axisLabel: {                                    //刻度线的标注
      show: true,
      interval: 5,
      inside: false,
      margin: 10,
      fontSize: 18,
    },
     splitLine: {                                    //主网格线
      show: true,
      interval: 'auto',
      lineStyle: {
        color: "rgba(0, 0, 0, 0.3)",
        type:'solid',
        width:2,
      },
    }, 
    minorSplitLine: {                                //次网格线
      show: true,
      interval: 'auto',
      lineStyle: {
        color: "rgba(0, 0, 0, 0.1)",
        type:'solid',
        width:1,
      },
    },
     min:'0.1',                                       //x轴最小值
     max:'1000',                                       //x轴最大值
     
    
},
    yAxis: {                                     
    show:true,
    type:'value',
    inverse:false, 
    name: "小于某粒径之百分数%",                          
    nameLocation: "middle",
    nameTextStyle: {
      color: "rgba(0, 0, 0, 1)",           //标题的颜色
      fontStyle: "normal",
      fontWeight: "bold",
      fontFamily: "Arial",
      fontSize: 20,
      lineHeight:80,
    },
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
      interval: 1,
      inside: true,
      length: 30,
    },
    minorTick: {
      show: false,
      splitNumber: 2,
      length: 30,
      lineStyle: {
        color: "rgba(215, 32, 32, 1)",
        width: 5,
        type: "dashed",
         },
    },
    axisLabel: {
      show: true,
      interval: 5,
      inside: false,
      margin: 10,
      fontSize: 18,
    },
     splitLine: {
      show: true,
      interval: 'auto',
      lineStyle: {
        color: "rgba(0,0, 0, 0.1)",
        type:'solid',
        width:1,
      },
    },
    minorSplitLine: {
      show: true,
      interval: 'auto',
      lineStyle: {
        color: "rgba(0,0, 0, 0.1)",
        type:'solid',
        width:2,
      },
    },
     min:0,
     max:100,
     interval:10,
     
},
     grid: {
    show: true,
     top:'middle',
     left:'center',
     width:800,
     height:400,
     backgroundColor: "rgba(255, 255, 255, 1)",
     borderColor:"rgba(0, 0, 0, 0.8)",
     borderWidth: 2
},
    series: [
        {
        name:'上包络线',
        data: [[400,100], [200,82], [100,65],[80,60],[60,53],[40,45],[20,32],[10,23],[5,15]],
        type: 'line',
        smooth: true,
        symbol: "none",
        lineStyle: {
            color: "rgba(191, 59, 59, 1)",
            width:2,
       shadowBlur: 3,
      shadowColor: "rgba(184, 34, 34, 1)"
    }       
        
    },
        {
        name:'下包络线',
        data: [[600,100], [400,80], [200,57],[100,42],[80,40],[60,35],[40,30],[20,23],[10,17]],
        type: 'line',
        smooth: true,
         symbol: "none",
        lineStyle: {
            color: "rgba(0,0, 0, 1)",
            width:2,
       shadowBlur: 3,
      shadowColor: "rgba(0, 0, 0, 1)"
    }       
        
    },
    ]
};
