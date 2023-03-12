var data = {
  title: [ '金加', '打光', '表面', '组装', '周边', '合计'],
regularRate: [67.7,80.7,56.8,36.6,71.6,54.6],
temporaryRate: [32.3,19.3,43.2,63.4,28.4,45.4],
};
option={
    title: {
      text:'BY制程单位：',
          left:'1%',
          top:'1%',
          textStyle:{
              fontSize: 16,
              color:'#9d9d9d',
                 fontWeight: 'bold',
          },
    },
    legend: {
      data: ['正式工占比', '派遣工占比'],
      orient : 'horizontal',
      itemHeight : 20,
           itemWidth : 40,
      left:'30%',
      top:'8%',
        textStyle:{
            fontSize:16,
        }
  },
       // 设置图表的位置
   grid: {
      bottom: '8%',
      left: '6%',
      right: '6%',
      top:'12%',
containLabel: true,
  },
// X轴
        xAxis: {
          type: 'value', // 坐标轴类型,   'value' 数值轴，适用于连续数据
          // 坐标轴刻度
          axisTick: {
            show: false // 是否显示坐标轴刻度 默认显示
          },
          // 坐标轴轴线
          axisLine: { // 是否显示坐标轴轴线 默认显示
            show: false // 是否显示坐标轴轴线 默认显示
          },
          // 坐标轴在图表区域中的分隔线
          splitLine: {
            show: false // 是否显示分隔线。默认数值轴显示
          },
          // 坐标轴刻度标签
          axisLabel: {
            show: false // 是否显示刻度标签 默认显示
          }
        },
        // Y轴
    yAxis: [
          // 左侧Y轴
          {
            // 坐标轴类型,  'category' 类目轴，适用于离散的类目数据
            // 为该类型时必须通过 data 设置类目数据
            type: 'category', 
            // 坐标轴刻度
            axisTick: {
              show: false // 是否显示坐标轴刻度 默认显示
            },
            // 坐标轴轴线
            axisLine: { // 是否显示坐标轴轴线 默认显示
              show: false, // 是否显示坐标轴轴线 默认显示
              lineStyle: { // 坐标轴线线的颜色
                color: '#cdd3ee'
              }
            },
            // 坐标轴在图表区域中的分隔线
            splitLine: {
              show: false // 是否显示分隔线。默认数值轴显示
            },
            // 坐标轴刻度标签
            axisLabel: {
              show: true, // 是否显示刻度标签 默认显示
              fontSize: 16, // 文字的字体大小
              color: '#333', // 刻度标签文字的颜色
              // 使用字符串模板，模板变量为刻度默认标签 {value}
              formatter: '{value}'
            },
            // 类目数据，在类目轴（type: 'category'）中有效
            data:data.title,
            inverse:true,
          }
        ],
// 系列列表
        series: [
          {
            type: 'bar', // 系列类型
            name: '正式工占比', // 系列名称, 用于tooltip的显示, legend 的图例筛选
            // 数据堆叠，同个类目轴上系列配置相同的stack值后，后一个系列的值会在前一个系列的值上相加
            stack: '总量',
            barMaxWidth: 30, // 柱条的最大宽度，不设时自适应
            // 图形上的文本标签
            label: {
              show: true,
              position: 'inside', 
                formatter: '{c}%',
                  textStyle:{
            fontSize:16,
            fontWeight:'bolder',
            color:'#fff',
        }
            },
            // 图形样式
            itemStyle: {
            color:'#fdad3c',
            },
            data: data.regularRate // 系列中的数据内容数组
          },
          // 柱体阴影
          {
                type: 'bar',
                   stack: '一个',
                barWidth: 3,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 2, 0, 0, [
                          {
                            offset: 0,
                            color: "#eaae5a" // 0% 处的颜色
                        }, 
                        {
                            offset: 0.5,
                            color: "#cacaca" // 100% 处的颜色
                        },
                        {
                            offset: 1,
                            color: "#f9f9f9" // 100% 处的颜色
                        }
                        ], false)
                    }
                },
                barGap: 0,
                data: data.regularRate.map(item => item)
           }, 
          {
            type: 'bar', // 系列类型
            name: '派遣工占比', // 系列名称, 用于tooltip的显示, legend 的图例筛选
            // 数据堆叠，同个类目轴上系列配置相同的stack值后，后一个系列的值会在前一个系列的值上相加
            stack: '总量',
            barMaxWidth:30, // 柱条的最大宽度，不设时自适应
            // 图形上的文本标签
            label: {
              show: true,
              position: 'inside',
                 formatter: '{c}%',
                   textStyle:{
            fontSize:16,
            fontWeight:'bolder',
            color:'#fff',
        }
            },
             // 图形样式
            itemStyle: {
            color:'#3cadfd',
            },

            data:data.temporaryRate // 系列中的数据内容数组
          },
           // 柱体阴影
          {
                type: 'bar',
                   stack: '一个',
                barWidth: 3,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 2, 0, 0, [
                          {
                            offset: 0,
                            color: "#5aaeea" // 0% 处的颜色
                        }, 
                        {
                            offset: 0.5,
                            color: "#cacaca" // 100% 处的颜色
                        },
                        {
                            offset: 1,
                            color: "#f9f9f9" // 100% 处的颜色
                        }
                        ], false)
                    }
                },
                barGap: 0,
                data: data.temporaryRate.map(item => item)
           }, 
        ]

}