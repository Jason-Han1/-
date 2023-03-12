option = {

   color: ['#319ae5', '#32df48', '#d067e9', '#fcbc04', '#33373a'],
      // 设置图表的位置
      grid: {
        containLabel: true, // grid 区域是否包含坐标轴的刻度标签, 常用于『防止标签溢出』的场景
      },
      // 提示框组件
      tooltip: {
        trigger: 'axis', // 触发类型, axis: 坐标轴触发
        axisPointer: {
          // 指示器类型  'line' 直线指示器 'shadow' 阴影指示器 'none' 无指示器
          // 'cross' 十字准星指示器 其实是种简写，表示启用两个正交的轴的 axisPointer
          type: 'none',
        },
        textStyle: {
          color: '#cdd3ee', // 文字颜色
        },
        // 提示框浮层内容格式器，支持字符串模板和回调函数两种形式 折线（区域）图、柱状（条形）图、K线图
        // {a}（系列名称），{b}（类目值），{c}（数值）, {d}（无）
        formatter: '{b}<br />{a0}: {c0}%<br />{a1}: {c1}%<br />{a2}: {c2}%',
      },
      // 图例组件
      legend: {
        show: false,
        data: ['PDB', 'PD', 'RTB', '麦穗', '抄底'], // 图例的数据数组
      },
      // X轴
      xAxis: {
        type: 'value', // 坐标轴类型,   'value' 数值轴，适用于连续数据
        // 坐标轴刻度
        axisTick: {
          show: false, // 是否显示坐标轴刻度 默认显示
        },
        // 坐标轴轴线
        axisLine: { // 是否显示坐标轴轴线 默认显示
          show: false, // 是否显示坐标轴轴线 默认显示
        },
        // 坐标轴在图表区域中的分隔线
        splitLine: {
          show: false, // 是否显示分隔线。默认数值轴显示
        },
        // 坐标轴刻度标签
        axisLabel: {
          show: false, // 是否显示刻度标签 默认显示
        },
      },
      yAxis: [
        // 左侧Y轴
        {
          // 坐标轴类型,  'category' 类目轴，适用于离散的类目数据
          // 为该类型时必须通过 data 设置类目数据
          type: 'category',
          // 坐标轴刻度
          axisTick: {
            show: false, // 是否显示坐标轴刻度 默认显示
          },
          // 坐标轴轴线
          axisLine: { // 是否显示坐标轴轴线 默认显示
            show: false, // 是否显示坐标轴轴线 默认显示
            lineStyle: { // 坐标轴线线的颜色
              color: '#cdd3ee',
            },
          },
          // 坐标轴在图表区域中的分隔线
          splitLine: {
            show: false, // 是否显示分隔线。默认数值轴显示
          },
          // 坐标轴刻度标签
          axisLabel: {
            show: true, // 是否显示刻度标签 默认显示
            fontSize: 16, // 文字的字体大小
            color: '#cdd3ee', // 刻度标签文字的颜色
            // 使用字符串模板，模板变量为刻度默认标签 {value}
            formatter: '{value}',
          },
          // 类目数据，在类目轴（type: 'category'）中有效
          data: [''],
        },
      ],
      // 系列列表
      series: [{
        type: 'bar', // 系列类型
        name: 'PDB', // 系列名称, 用于tooltip的显示, legend 的图例筛选
        // 数据堆叠，同个类目轴上系列配置相同的stack值后，后一个系列的值会在前一个系列的值上相加
        stack: '总量',
        barMaxWidth: 60, // 柱条的最大宽度，不设时自适应
        // 图形上的文本标签
        label: {
          show: true,
          // 标签的位置 left right bottom top inside  // 绝对的像素值 position: [10, 10]
          // 相对的百分比 position: ['50%', '50%']
          position: 'inside',
        },
        data: [20], // 系列中的数据内容数组
      },
      {
        type: 'bar',
        name: 'PD',
        stack: '总量',
        barMaxWidth: 60,
        label: {
          show: true,
          position: 'inside',
        },
        data: [60],
      },
      {
        type: 'bar',
        name: 'RTB',
        stack: '总量',
        barMaxWidth: 60,
        label: {
          show: true,
          position: 'inside',
        },
        data: [20],
      },
      {
        type: 'bar',
        name: '麦穗',
        stack: '总量',
        barMaxWidth: 60,
        label: {
          show: true,
          position: 'inside',
        },
        data: [25],
      },
      {
        type: 'bar',
        name: '抄底',
        stack: '总量',
        barMaxWidth: 60,
        label: {
          show: true,
          position: 'inside',
        },
        data: [20],
      },
    ],
};