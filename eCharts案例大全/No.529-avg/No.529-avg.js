option = {
  backgroundColor: '#000',
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  legend: {
    data: [{
        name:"当日",
        itemStyle:{
            color:"rgb(156,220,158)"
        },
        lineStyle:{
            color:"rgb(156,220,158)"
        }
    },{
        name:"平均",
        itemStyle:{
            color:"rgb(236,225,161)"
        },
        lineStyle:{
            color:"rgb(236,225,161)"
        }
    }],
    textStyle: {
        //文字样式
        color: "#b4c9d1",
        fontSize: "12"
     },
     top:"4%",
     right:"3%"
  },
  xAxis: [
    {
      type: 'category',
      //x轴坐标点
      axisTick:{
        show: false,
        lineStyle: {
          color: '#7e99c2'
        }
      },
      //x轴坐标线样式
      axisLine: {
        show: false,
        lineStyle: {
          color: '#7e99c2'
        }
      },
      axisLabel:{
        color: '#89C3DD'
      },
      boundaryGap: false,
      data: ['00:00', '00:15','00:30', '00:45','01:00', '01:15','01:30','01:45']
    }
  ],
  yAxis: [
    {
       name: '单位：t/MWh',
      type: 'value',
      axisTick:{
        show: false,
        lineStyle: {
          color: '#1282C8'
        }
      },
       //x轴线
      splitLine:{
        show: true,
        lineStyle: {
          type: [5,10],
          dashOffset: 10,
          color: '#1282C8'
        }
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#1282C8'
        }
      },
      axisLabel:{
        color: '#89C3DD'
      }
    }
  ],
  series: [
    {
      name: '当日',
      type: 'line',
      min: 0,
      symbol: 'circle',
      symbolSize: 0,
      lineStyle: {
        normal: {
          color: '#85dd9f',
          width: 4,
          shadowColor: 'rgba(133, 221, 159, 0.35)',
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowOffsetY: 10
        },
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
              offset: 0, color: "rgba(56, 97, 80, 0.9)" // 0% 处的颜色
          }, {
              offset: 0.5, color: "rgba(35, 61, 44, 0.5)" // 100% 处的颜色
          },{
              offset: 1, color: "transparent", //0% 处的颜色
            }],
          global: false // 缺省为 false
        }
      },
      data: [0.32, 0.31, 0.43, 0.52, 0.54, 0.55, 0.54,0.41]
    },
    {
      name: '平均',
      type: 'line',
      symbol: 'circle',
      symbolSize: 0,
      lineStyle: {
        normal: {
          color: '#ece1a1',
          width: 4,
          type: 'dashed'
        },
      },
      data: [0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4]
    }
  ]
};