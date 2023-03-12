option = {
  title: {
    text: 'Basic Radar Chart'
  },
  legend: {
    data: ['Allocated Budget', 'Actual Spending']
  },
  radar: {
    // shape: 'circle',
    indicator: [
      {name: "覆盖", max: 10},
    {name: "干扰", max: 10},
    {name: "感知", max: 10},
    {name: "故障", max: 10},
    {name: "容量", max: 10}
    ],
      center:['50%', '50%'],
        startAngle:90,
        splitNumber: 5,
        radius: '60%',
        shape: 'circle',
        name: {
           show:true,
           textStyle: {
             color: '#ffffff',
             fontSize: 12
            }
        },
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
  //极坐标系
    polar: {
        radius: '60%',
    },
    angleAxis: {
       axisLine: {
          lineStyle: {
             color: 'rgba(238,238,238, 0.2)'
          }
       },
    },
  radiusAxis: {
     type: 'category',
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
        data:["2", "4", "6", "8", "10"]
  },
  tooltip: {
        
    },
  series: [
    {
      type: 'radar',
      name:'容积雷达图',
        radarIndex:0,
        data:[{
           value:[7.9, 3, 3, 5.11, 4.4]
         }],
         symbol: 'circle',
         symbolSize: 6,
         itemStyle: {
            normal: {
              color: '#38f'
            }
         },
         areaStyle: {
            normal: {
               color: 'rgba(255, 179, 0, 0.8)',
            }
         },
         lineStyle: {
            width: 2,
            color: 'rgba(255, 179, 0, 1)'
         }
    }
  ]
};