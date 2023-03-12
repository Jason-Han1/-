option = {
   tooltip: {//提示框
      trigger: 'axis',//坐标轴触发
      axisPointer: {//坐标轴指示器配置项
        // Use axis to trigger tooltip
        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow',阴影类型
      }
    },
    legend: {
      itemWidth:15,//图例标记的图形宽度
      itemHeighe:15,//图例标记的图形高度
    },//图例
    grid: {//网格
      left: '3%',//组件离容器左侧的距离
      right: '4%',//组件离容器右侧的距离
      bottom: '3%',//组件离容器下侧的距离
      containLabel: true// 区域是否包含坐标轴的刻度标签
    },
    xAxis: {
      type: 'value'//坐标轴类型：数值轴
    },
    yAxis: {
      type: 'category',//坐标轴类型：类目轴
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    series: [
      {
        name: 'Direct',
        type: 'bar',
        stack: 'total',//数据堆叠
        label: {//图形上的文本标签
          show: true//是否显示标签
        },
        itemStyle:{
            color:'green'
        },
        emphasis: {//高亮的图形样式和标签样式
          focus: 'series'//聚焦当前高亮的数据所在的系列的所有图形
        },
        data: [320, 302, 301, 334, 390, 330, 320]
      },
      {
        name: 'Mail Ad',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
          textStyle:{
              color:'black'//文本标签的颜色
          }
        },
        itemStyle:{
            color:'yellow'
        },
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Affiliate Ad',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        itemStyle:{
            color:'orange'
        },
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ad',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
        },
        itemStyle:{
            color:'violet'
        },
        emphasis: {
          focus: 'series'
        },
        data: [150, 212, 201, 154, 190, 330, 410]
      },
      {
        name: 'Search Engine',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        itemStyle:{
            color:'pink',
            barBorderRadius:[0,5,5,0],//柱条圆角
        },
        emphasis: {
          focus: 'series'
        },
        data: [820, 832, 901, 934, 1290, 1330, 1320]
      }
    ]
};
