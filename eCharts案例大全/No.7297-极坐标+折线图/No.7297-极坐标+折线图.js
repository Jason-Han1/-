
option = {
    backgroundColor: '#fff',
    title: {
        text: '极坐标+折线图'
    },
   angleAxis: {
          type: 'category',
          startAngle:45,
          axisLine:{
            show: false  
          },
          axisTick: {
                alignWithLabel: true
            },
          splitLine:{
            show: true  ,
            lineStyle:{
                color: '#f2f2f2'
            }
          },
          data: ["绩效奖金", "带薪年假", "补充医疗保险", "年底双薪","员工旅游"]
      },
    radiusAxis: {
        max:100,
        axisLine:{
            show: false  
          },
          axisTick:{
              show: false
              
          },
          axisLabel:{
              show: false,
          },
          splitLine:{
            lineStyle:{
                color: '#f2f2f2'
            }
          },
    },
    polar: {},
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'line',
        coordinateSystem: 'polar',
        smooth: true,
        data: [40,49,50, 52, 45,40],
        symbol: "circle",
        symbolSize:10,
        areaStyle:{
            color: "#5ca6eb",
            opacity: 0.3
        },
        lineStyle:{
            color: "#5ca6eb",
            opacity: 0.8,
            width: 3
        },
        itemStyle:{
            color: "#5ca6eb",
        },
        label:{
            show: true,
            formatter:"{c} %",
            color: "#333",
            fontWeight: 600,
            fontSize:15
        }
    }]
};