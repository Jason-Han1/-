option = {
  title: {
    text: '用户登入统计',
  },
  // 提示框
  tooltip: { 
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },

// 工具栏组件
 toolbox: {
    show: true,
    feature: {
      dataZoom: {
        yAxisIndex: 'none'
      },
      dataView: { readOnly: false },
      magicType: { type: ['line', 'bar'] },
      restore: {},
      saveAsImage: {}
    }
  },
 
  // 头部标注
  legend: {
    data: ['全部', '我']
  },
 
  xAxis: [
    {
      type: 'category',
      // prettier-ignore
      data: ['12-02', '12-05', '12-06', '12-16', '12-17']
    }
  ],
   yAxis: [
    {
      type: 'value',
      min: 0,
      max: 120,
      position: 'left',
      axisLabel: {
        formatter: '{value} '
      },
      axisLine: {
              //y轴
              show: true,
            },
            // axisTick: {
            //   //y轴刻度线
            //   show: false,
            // },
            // splitLine: {
            //   //网格线
            //   show: true,
            // },
      
    }
  ],
  
  
  series: [
    {
      type: 'bar',
      name: '全部',
      data: [1,2, 13, 109,2, ],
      
      
      itemStyle: {
        // 柱条的颜色（color）；
        color:'rgba(213, 58, 53,0.8)',
        // 柱条的描边颜色（borderColor）、宽度（borderWidth）、样式（borderType）；
        borderType: 'solid',
        // 阴影（shadowBlur、shadowColor、shadowOffsetX、shadowOffsetY）。
        shadowBlur: 10
      },
      // barGap 被设为 '20%'，这意味着每个类目（比如 A）下的两个柱子之间的距离，
      // 相对于柱条宽度的百分比。而 barCategoryGap 是 '40%'，
      // 意味着柱条每侧空余的距离，相对于柱条宽度的百分比。
      barGap: '20%',
      barCategoryGap: '40%',
      
      // 为柱条添加背景色
      // 用 showBackground 开启，并且可以通过 backgroundStyle 配置。
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(220, 220, 220, 0.5)'
      },
      
    },
    {
      type: 'bar',
      name: '我',
      data: [1, 2, 11, 89,2],
      
      
       itemStyle: {
        // 柱条的颜色（color）；
        color:'rgba(51, 75, 92)',
        
      },
        showBackground: true,
      backgroundStyle: {
        color: 'rgba(220, 220, 220, 0.5)'
      },
      
    },
   
  ]
};