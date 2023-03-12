data = [
  {
    name: 'Node 1',
    x: 300,
    y: 300
  },
  {
    name: 'Node 2',
    x: 800,
    y: 300
  },
  {
    name: 'Node 3',
    x: 550,
    y: 100
  },
  {
    name: 'Node 4',
    x: 550,
    y: 500
  }
]
seriesData = [
  {
    type: 'graph',
    layout: 'none',
    symbolSize: 60,
    roam: false,
    zlevel: 1,
    label: {
      show: true,
      position: 'left',
    },
    edgeSymbol: ['circle', 'arrow'],
    edgeSymbolSize: [4, 10],
    edgeLabel: {
      fontSize: 20
    },
    data: data,
    // links: [],
    links: [
      {
        source: 0,
        target: 1,
        symbolSize: [5, 20],
        label: {
          show: true
        },
        lineStyle: {
          width: 5,
          curveness: 0.2
        }
      },
      {
        source: 'Node 2',
        target: 'Node 1',
        label: {
          show: true
        },
        lineStyle: {
          curveness: 0.2
        }
      },
      {
        source: 'Node 1',
        target: 'Node 3'
      },
      {
        source: 'Node 2',
        target: 'Node 3'
      },
      {
        source: 'Node 2',
        target: 'Node 4'
      },
      {
        source: 'Node 1',
        target: 'Node 4'
      }
    ],
    lineStyle: {
      opacity: 0.9,
      width: 2,
      curveness: 0
    }
  }
]
option = {
  title: {
    text: 'Basic Graph'
  },
  tooltip: {},
  animationDurationUpdate: 1500,
  animationEasingUpdate: 'quinticInOut',
  series: seriesData
};

// 需要先setOption一次，不然会出现下面的问题
// TypeError: Cannot read properties of undefined (reading 'queryComponents')
myChart.setOption(option)

seriesData0 = getPieSeries(data, myChart)
function getPieSeries(scatterData, chart) {
  return scatterData.map(function (item, index) {
    // 这里是关键，懂了 convertToPixel 方法，可以将多个图进行组合
    var center = chart.convertToPixel({seriesIndex: 0}, [item.x, item.y]);
    console.log(item, index, center)
    return {
      name: item.name,
      id: index + 'pie',
      zlevel: 2,
      type: 'pie',
      center: center,
      label: {
        formatter: '{c}',
        position: 'inside'
      },
      radius: 30,
      data: [
        { name: '工作', value: Math.round(Math.random() * 24) },
        { name: '娱乐', value: Math.round(Math.random() * 24) },
        { name: '睡觉', value: Math.round(Math.random() * 24) }
      ]
    };
  });
}
series = [...seriesData, ...seriesData0]
option.series = series
// 这里再setOption一次，就可以将结点替换成饼图
myChart.setOption(option);