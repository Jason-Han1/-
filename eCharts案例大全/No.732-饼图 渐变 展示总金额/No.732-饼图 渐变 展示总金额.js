const circularGraph = {
        title: '标题',
        head: false,
        data: [
          {
            name: '费用1',
            value: 228.22
          },
          {
            name: '费用2',
            value: 269.34
          },
          {
            name: '费用3',
            value: 44.4
          },
          {
            name: '费用4',
            value: 448.58
          },
          {
            name: '费用5',
            value: 50.35
          }
        ],
        sum: {
          name: ['总金额(元)'],
          number: 0
        }
      }
      let sum = 0
      circularGraph.data.map((item) => {
        sum += item.value
      })
      circularGraph.sum.number = sum
      const int = sum.toFixed(2)
option = {
        title: {
          text: '{a|' + int + '}\n{c|' + circularGraph.sum.name + '}',
          x: 'center',
          y: '50%',
          textStyle: {
            rich: {
              a: {
                fontSize: 43,
                color: '#363D54',
                fontWeight: '600'
              },
              c: {
                fontSize: 10,
                color: '#999999',
                padding: [5, 0]
              }
            }
          }
        },
        color: [   //按顺序设置渐变颜色
          {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: '#00ACFF'
            }, {
              offset: 1, color: '#0074FF'
            }],
            global: false // 缺省为 false
          },
          {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: '#B262FF'
            }, {
              offset: 1, color: '#7B33FF'
            }],
            global: false
          },
          {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: '#DCFEFB'
            }, {
              offset: 1, color: '#B7FCF6'
            }],
            global: false
          },
          {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: '#B5AEFF'
            }, {
              offset: 1, color: '#7E76FF'
            }],
            global: false
          },
          {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: '#ABF1DA'
            }, {
              offset: 1, color: '#73DEB3'
            }],
            global: false
          }
        ],
        tooltip: {
          trigger: 'item',
          formatter: '{b}: {c} ({d}%)'
        },
        series: [
          {
            type: 'pie',
            radius: ['40%', '60%'],
            top: 50,
            label: {
              show: true,
              position: 'outside',
              formatter: function(val) {
                return '{a|' + val.name + '}{b|\n' + val.value + '元}'
              },
              textStyle: {
                rich: {
                  a: {
                    color: '#333333',
                    fontSize: '12'
                  },
                  b: {
                    color: '#0086FF',
                    fontSize: '12',
                    padding: [4, 0, 0, 0]
                  }
                }
              }
            },
            labelLine: {
              show: true,
              length: 40,
              length2: 30,
              minTurnAngle: 105,
              lineStyle: {
                width: 2
              }
            },
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
              textColor: '#000'
            },
            itemStyle: {
              borderCap: 'round'
            },
            data: circularGraph.data // 数据
          }
        ]
      }