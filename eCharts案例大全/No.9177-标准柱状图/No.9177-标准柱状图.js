option = {
    legend: {},
    tooltip: {},
    dataset: {
        source: [
            ['lenght', "string", "buffer"],
            [5, 1, 1],
            [1000, 5, 74],
            [10000, 37, 591],
            [25000, 89, 1660],
            [50000, 171, 2931]
        ]
    },
    xAxis: {
        type: 'category',
         name: "数据量(Kb)",
          nameTextStyle: {
        color: '#000',
        fontSize: '16'
      },
    },
    yAxis: {
      type: 'value',
      name: "耗时(ms)",
      nameTextStyle: {
        color: '#000',
        fontSize: '16'
      },
      minInterval: 1, //设置左侧Y轴最小刻度
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: '#000'
        }
      }, //设置横线样式
      axisLabel: {
        textStyle: {
          fontSize: '14',
          color: '#333'
        }
      },
    },
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
        {type: 'bar'},
        {type: 'bar'},
    ]
};
