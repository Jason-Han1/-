option = {
  legend: {"top": "20",right:"60"},
  tooltip: {},
  color: ['#5470c6', '#73c0de', '#fac858', '#ee6666', '#91cc75'],
  // color: ['#91cc75','#ee6666'],

  dataset: {
    // dimensions: ['product', '在运行', '已办结', '已终止', '已挂起', '已退回'],
    // dimensions: ['product', '平均办结天数', '最短耗时', '最长耗时'],
    // dimensions: ['product', '已办结', '超时'],
    // dimensions: ['product', '创建任务数', '处理任务数'],
    dimensions: ['product', '已办结', '已终止', '已挂起', '已退回'],

    // source: [
    //   {
    //     product: '流程名称1',
    //     平均办结天数: 85.8,
    //     最短耗时: 46.3,
    //     最长耗时: 93.7,

    //   },
    //   {
    //     product: '流程名称2',
    //     平均办结天数: 82.5,
    //     最短耗时: 65.2,
    //     最长耗时: 86.4,

    //   },
    //   {
    //     product: '流程名称3',
    //     平均办结天数: 73.4,
    //     最短耗时: 55.1,
    //     最长耗时: 83.1,

    //   },
    //   { product: '流程名称4', 平均办结天数: 82.5, 最短耗时: 65.2, 最长耗时: 86.4 },
    //   {
    //     product: '流程名称5',
    //     平均办结天数: 53.9,
    //     最短耗时: 39.1,
    //     最长耗时: 72.4,
    //   },
    // ],
    // source: [
    //   {
    //     product: '流程名称1',
    //     已办结: 85,
    //     超时: 18,
    //   },
    //   {
    //     product: '流程名称2',
    //     已办结: 82,
    //     超时: 12,
    //   },
    //   {
    //     product: '流程名称3',
    //     已办结: 73,
    //     超时: 16,
    //   },
    //   {
    //     product: '流程名称4',
    //     已办结: 88,
    //     超时: 17,
    //   },
    //   {
    //     product: '流程名称5',
    //     已办结: 94,
    //     超时: 12,
    //   },
    // ],
    // source: [
    //   {
    //     product: '机构1',
    //     创建任务数: 385,
    //     处理任务数: 318,
    //   },
    //   {
    //     product: '机构2',
    //     创建任务数: 282,
    //     处理任务数: 212,
    //   },
    //   {
    //     product: '机构3',
    //     创建任务数: 373,
    //     处理任务数: 316,
    //   },
    //   {
    //     product: '机构4',
    //     创建任务数: 288,
    //     处理任务数: 217,
    //   },
    //   {
    //     product: '机构5',
    //     创建任务数: 394,
    //     处理任务数: 312,
    //   },
    // ],
        source: [
      {
        product: '活动1',
        已办结: 385,
        已终止: 32,
        已挂起: 12,
        已退回: 20,
      },
      {
        product: '活动2',
        已办结: 385,
        已终止: 32,
        已挂起: 12,
        已退回: 20,
      },
      {
        product: '活动3',
        已办结: 385,
        已终止: 32,
        已挂起: 12,
        已退回: 20,
      },
      {
        product: '活动4',
        已办结: 385,
        已终止: 32,
        已挂起: 12,
        已退回: 20,
      },
      {
        product: '活动5',
        已办结: 385,
        已终止: 32,
        已挂起: 12,
        已退回: 20,
      },
    ],
    
    
  },
  xAxis: { type: 'category' },
  yAxis: {},
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [
    {
      type: 'bar',
      barWidth: '10%',
      itemStyle: {
        normal: {
          barBorderRadius: 6,
        },
      },
    },
    {
      type: 'bar',
      barWidth: '10%',
      itemStyle: {
        normal: {
          barBorderRadius: 6,
        },
      },
    },
    {
      type: 'bar',
      barWidth: '10%',
      itemStyle: {
        normal: {
          barBorderRadius: 6,
        },
      },
    },
    {
      type: 'bar',
      barWidth: '10%',
      itemStyle: {
        normal: {
          barBorderRadius: 6,
        },
      },
    },
    // {
    //   type: 'bar',
    //   barWidth: '10%',
    //   itemStyle: {
    //     normal: {
    //       barBorderRadius: 6,
    //     },
    //   },
    // },
  ],
};
