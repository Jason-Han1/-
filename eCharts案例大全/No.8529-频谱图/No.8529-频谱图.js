
option = {
    xAxis: {
        color: ["#8FDBDC"],
        type: "category",
        data: ["0", "2", "4", "6", "8"],
        boundaryGap: false,
        nameLocation:'end',
     axisLine:{
        show:false
     },
        axisTick:{
            show:false
        }
      },
      yAxis: {
        boundaryGap: false,
        type: "value",
        nameLocation:'end',
        max:0,
        min:-120,
        
      },
      grid: {
        top:100,
        bottom:100,
      },
      series: [
        {
          data: [-120,-110,-60,-20,-70],
          type: "line",
          smooth: true,
          lineStyle:{
              color:"#2EC7C9"
          },
          areaStyle: {
              origin:'start',
              color:'#8FDBDC'
          }
          
        }
      ]
};