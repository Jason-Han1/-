option = {
    backgroundColor: 'transparent',
    title: [{
      text: ['{a|603} {b|人}', '{c|羁押性}'].join('\n'),
      x: '65%',
      y: '20%',
      textStyle: {
        rich: {
          a: { color: '#68C7FE', fontSize: 18, align: 'center' },
          b: { color: '#606266', fontSize: 12, align: 'center' },
          c: { color: '#606266', lineHeight: 18, fontSize: 12, align: 'center' }
        }
      }
    }, {
      text: ['{a|603} {b|人}', '{c|非羁押性}'].join('\n'),
      left: '15%',
      top: '20%',
      textStyle: {
        rich: {
          a: { color: '#F8A245', fontSize: 18, align: 'center' },
          b: { color: '#F8A245', fontSize: 12, align: 'center' },
          c: { color: '#606266', lineHeight: 18, fontSize: 12, align: 'center' }
        }
      }
    }],
    series: [
      {
        type: 'pie',
        center: ['25%', '70%'],
        radius: ['40%', '50%'],
        label: {
          normal: {
            position: 'center'
          }
        },
        data: [{
          value: 40,
          name: '污染来源分析',
          itemStyle: {
            normal: {
              color: '#E4E7ED'
            }
          }
        }, {
          value: 60,
          name: '占位',
          tooltip: {
            show: false
          },
          itemStyle: {
            normal: {
              color: '#68C7FE'
            }
          },
          label: {
            normal: {
              formatter: [
                '{a| {d}%}'
              ].join('\n'),
              rich: {
                a: {
                  color: '#303133',
                  fontSize: 22,
                  fontWeight: 600
                }
              }
            }
          }
        }]
      },

      {
        type: 'pie',
        center: ['75%', '70%'],
        radius: ['40%', '50%'],
        label: {
          normal: {
            position: 'center'
          }
        },
        data: [{
          value: 20,
          itemStyle: {
            normal: {
              color: '#F8A245'
            }
          },
          label: {
            normal: {
              formatter: [
                '{a| {d}%}'
              ].join('\n'),
              rich: {
                a: {
                  color: '#303133',
                  fontSize: 22,
                  fontWeight: 600
                }
              }
            }
          }
        }, {
          value: 80,
          tooltip: {
            show: false
          },
          itemStyle: {
            normal: {
              color: '#E4E7ED'
            }
          }
        }]
      }]
};