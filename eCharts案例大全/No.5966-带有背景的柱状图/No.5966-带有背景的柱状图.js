option = {
    backgroundColor:'#134e8d',
    tooltip:{
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            shadowStyle:{
                color:'rgba(20,80,135,0)'
            }
        },
    },
    xAxis: [
        { 
            show:true,
            type: 'category',
            axisLine:{
                lineStyle:{
                    color:'#fff',
                    width:1
                }
            },
            axisTick: {
                show :true,
                alignWithLabel: false
            },
            axisLabel:{
                show:true,
                margin:15,
                fontSize:18
            },
            data: ["一季度", "二季度", "三季度","四季度"]
        },
        { 
            type: "category", 
            show:false
        },
    ],
     yAxis: {
        axisLine:{
            lineStyle:{
                color:'#fff',
                width:1
            }
        },
        axisTick: {
            show :true,
            alignWithLabel: true
        },
        axisLabel:{
            show:true,
            fontSize:18
        },
        splitLine:{
            show:false
        },
    },
    series: [
        {
          type: "bar",
          name:'redApple',
          barWidth: 32,
          xAxisIndex: 0,
          data: [143, 185, 193,25],
        },
        {
          type: "bar",
          name:'greenApple',
          barWidth: 32,
          xAxisIndex: 0,
          data: [90, 180, 300,28],
        },
        {
          type: "bar",
           name:'pinkApple',
          barWidth: 32,
          xAxisIndex: 0,
          data: [186, 65, 450,90],
        },
        {
          // 背景
          type: "bar",
          barCategoryGap: "20%",
          xAxisIndex: 1,
          data: [0, 0, 0,0],
          itemStyle: {
            normal: { color: "rgba(0,0,0, 0.3)" },
        },
        showBackground:true,
        backgroundStyle: {
            color: 'rgba(0,0,0, 0.3)'
        },
        tooltip:{
           show:false
        },
    },
  ],
};
