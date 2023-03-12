option = {
  title: {
    subtext: '不同城市市民购买睡眠产品比例',
    left: '300'
  },
  backgroundColor: '#FFFFFF',
  series: {
    type: 'sankey',
    layout: 'none',
    emphasis: {
      focus: 'adjacency'
    },
    data: [
      {
        name: '一线',
        itemStyle: {
            color: '#F9CA65',
            borderColor: '#000000'
          }
      },
      {
        name: '二线',
        itemStyle: {
            color: '#916EA7',
            borderColor: '#000000'
          }
      },
      {
        name:'三线',
        itemStyle: {
            color: '#b4532a',
            borderColor: '#000000'
          }
      },
      {
        name: '足浴盆',
        itemStyle: {
            color: '#58614C',
            borderColor: '#000000'
          }
      },
      {
        name: '手环等监测设备',
        itemStyle: {
            color: '#228fbd',
            borderColor: '#000000'
          }
      },
      {
        name: '睡眠枕头',
        itemStyle: {
            color: '#873527',
            borderColor: '#000000'
          }
      },
      {
        name: '蒸汽眼罩',
        itemStyle: {
            color: '#A8713B',
            borderColor: '#000000'
          }
      }
    ],
    links: [
      {
        source: '一线',
        target: '足浴盆',
        value: 26
      },
      {
        source: '一线',
        target: '手环等监测设备',
        value: 32.8
      },
      {
        source: '一线',
        target: '睡眠枕头',
        value: 26.7
      },
      {
        source: '一线',
        target: '蒸汽眼罩',
        value: 21.8
      },
      {
        source: '二线',
        target: '足浴盆',
        value: 37.8
      },
      {
        source: '二线',
        target: '手环等监测设备',
        value: 37.8
      },
      {
        source: '二线',
        target: '睡眠枕头',
        value: 28.1
      },
      {
        source: '二线',
        target: '蒸汽眼罩',
        value: 26.2
      },
      {
        source: '三线',
        target: '足浴盆',
        value: 24.7
      },
      {
        source: '三线',
        target: '手环等监测设备',
        value: 34.3
      },
      {
        source: '三线',
        target: '睡眠枕头',
        value: 31
      },
      {
        source: '三线',
        target: '蒸汽眼罩',
        value: 25.3
      }
    ],
     lineStyle: {
        color: 'gradient',
        curveness: 0.8
      },
      itemStyle: {
        color: '#1f77b4',
        borderColor: '#1f77b4'
      },
      label: {
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Arial',
        fontSize: 10
      }
  },
    tooltip: {
    trigger: 'item'
  }
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}
