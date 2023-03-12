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
  legend: {
    data: [{
        name:"线损",
        itemStyle:{
            color:"rgb(13,219,207)"
        },
        lineStyle:{
            color:"rgb(13,219,207)"
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
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
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
      //x轴线
      splitLine:{
        show: true,
        lineStyle: {
          type: [5,10],
          dashOffset: 10,
          color: '#1282C8'
        }
      },
      boundaryGap: false,
      data: ['1', '2','3', '4','5', '6','7','8']
    }
  ],
  yAxis: [
    {
      name: '单位：千t',
      nameTextStyle:{//y轴上方单位的颜色
              color:'#6b96aa'  
      },
      type: 'value',
      axisTick:{
        show: false,
        lineStyle: {
          color: '#1282C8'
        }
      },
      splitLine:{
        show: false
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
      name: '线损',
      type: 'line',
      smooth:0.6,
      min: 0,
      symbol: 'circle',
      symbolSize: 0,
      lineStyle: {
        normal: {
            // 颜色渐变函数 前四个参数分别表示四个位置依次为
            // 右下左上
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{ 
                                        offset: 0, 
                                        color: '#b073f3' 
                                    },
                                    { 
                                        offset: 0.3, 
                                        color: '#ca9bea' 
                                    },
                                    { 
                                        offset: 0.6, 
                                        color: '#d1b0d4' 
                                    },{ 
                                        offset: 1, 
                                        color: '#fae5d9' 
                                    }]),//线条渐变色 
          width: 4,
          shadowColor: 'rgba(70, 55, 88, 0.35)',
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
              offset: 0, color: "rgba(58, 46, 73, 0.9)" // 0% 处的颜色
          }, {
              offset: 0.5, color: "rgba(56, 44, 71, 0.5)" // 100% 处的颜色
          },{
              offset: 1, color: "transparent", //0% 处的颜色
            }],
          global: false // 缺省为 false
        }
      },
      data: [0.32, 0.31, 0.43, 0.52, 0.54, 0.55, 0.54,0.41]
    }
  ]
};