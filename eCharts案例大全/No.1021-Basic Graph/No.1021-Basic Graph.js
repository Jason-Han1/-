option = {
  title: {
    text: 'Basic Graph'
  },
  tooltip: {},
  animationDurationUpdate: 1500,
  animationEasingUpdate: 'quinticInOut',
  series: [
    {
      type: 'graph',
      layout: 'none',
      symbolSize: 60,
      roam: true,
      label: {
        show: true,
        color:'#4381E4'
      },
      edgeSymbolSize: [8, 8],
      edgeLabel: {
        fontSize: 20
      },
      itemStyle: {
        color: '#fff',
        borderColor: '#5E8FC8',
        borderWidth: 2
      },
      data: [
        {
          name: 'Node 1',
          x: 0,
          y: 0,
          symbolSize: 70,
          itemStyle: {
            borderColor: '#B1CEF2',
            borderWidth: 6,
            color: '#4381E4',
          },
          label:{
            color:'#fff'
          }
        },
        {
          name: 'Node 2',
          x: -10,
          y: -20,
          color: '#5E8FC8'
        },
        {
          name: 'Node 3',
          x: 10,
          y: -20
        },
        {
          name: 'Node 4',
          x: -10,
          y: 20
        },
        {
          name: 'Node 5',
          x: -30,
          y: 20
        },
        {
          name: 'Node 6',
          x: 10,
          y: 20
        },
        {
          name: 'Node 7',
          x: 30,
          y: 20
        },
        {
          name: 'Node 8',
          x: 0,
          y: 40
        },
        {
          name: 'Node 9',
          x: -20,
          y: 40
        },
        {
          name: 'Node 10',
          x: 40,
          y: 40
        },
        {
          name: 'Node 11',
          x: -40,
          y: 40
        },
        {
          name: 'Node 12',
          x: 20,
          y: 40
        },
        {
          name: 'Node 13',
          x: 10,
          y: 60
        }
      ],
      links: [
        {
          source: 'Node 2',
          target: 'Node 1',
          symbol: ['', 'arrow'],
          lineStyle: {
            curveness: -0.2,
            color: '#5E8FC8'
          },

          itemStyle: {
            symbolSize: 20
          }
        },
        {
          source: 'Node 3',
          target: 'Node 1',
          symbol: ['', 'arrow'],
          lineStyle: {
            curveness: 0.2,
            color: '#5E8FC8'
          }
        },
        {
          source: 'Node 1',
          target: 'Node 5',
          symbol: ['', 'arrow'],
          lineStyle: {
            curveness: -0.2,
            color: '#5E8FC8'
          }
        },
        {
          source: 'Node 1',
          target: 'Node 4',
          symbol: ['arrow', 'arrow'],
          lineStyle: {
            curveness: -0.2,
            color: '#D97E7D'
          }
        },
        {
          source: 'Node 1',
          target: 'Node 4',
          symbol: ['arrow', 'arrow'],
          lineStyle: {
            curveness: -0.3,
            color: '#F0CD83'
          }
        },
        {
          source: 'Node 1',
          target: 'Node 6',
          symbol: ['arrow', 'arrow'],
          lineStyle: {
            curveness: 0.2,
            color: '#F0CD83'
          }
        },
        {
          source: 'Node 6',
          target: 'Node 1',
          symbol: ['', 'arrow'],
          lineStyle: {
            curveness: -0.3,
            color: '#5E8FC8'
          }
        },
        {
          source: 'Node 1',
          target: 'Node 7',
          symbol: ['arrow', 'arrow'],
          lineStyle: {
            curveness: 0.2,
            color: '#A7C88C'
          }
        },
        {
          source: 'Node 1',
          target: 'Node 11',
          symbol: ['', 'arrow'],
          lineStyle: {
            curveness: -0.3,
            color: '#A7C88C'
          }
        },
        {
          source: 'Node 1',
          target: 'Node 9',
          symbol: ['', 'arrow'],
          lineStyle: {
            curveness: -0.3,
            color: '#5E8FC8'
          }
        },
        {
          source: 'Node 1',
          target: 'Node 8',
          symbol: ['', 'arrow'],
          lineStyle: {
            curveness: 0,
            color: '#F0CD83'
          }
        },
        {
          source: 'Node 1',
          target: 'Node 10',
          symbol: ['', 'arrow'],
          lineStyle: {
            curveness: 0.3,
            color: '#D97E7D'
          }
        },
        {
          source: 'Node 10',
          target: 'Node 1',
          symbol: ['', 'arrow'],
          lineStyle: {
            curveness: -0.2,
            color: '#D97E7D'
          }
        },
        {
          source: 'Node 1',
          target: 'Node 12',
          symbol: ['', 'arrow'],
          lineStyle: {
            curveness: 0.3,
            color: '#5E8FC8'
          }
        },
        {
          source: 'Node 1',
          target: 'Node 13',
          symbol: ['', 'arrow'],
          lineStyle: {
            curveness: 0.1,
            color: '#5E8FC8'
          }
        }
      ],
      lineStyle: {
        opacity: 0.9,
        width: 1.5,
        curveness: 0
      },
      emphasis: {
          focus: 'adjacency',
          lineStyle: {
            opacity: 1,
            width: 3,
          }
        }
    }
  ]
};
