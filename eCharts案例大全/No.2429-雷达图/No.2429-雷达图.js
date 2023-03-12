
const seriseData = [{
    name: 'one',
    value: 30
  }, {
    name: 'two',
    value: 100
  }, {
    name: 'three',
    value: 90
  }]
option = {
    title: {
      text: '嘿嘿',
      left: 'center',
      top: 'middle',
      textStyle: {
        color: '#333',
        textBorderColor: '#eaff8f',
        textBorderWidth: 1,
        fontSize: 28
      }
    },
    radar: [
      {
        indicator: [
          { name: 'one', max: 100 },
          { name: 'two', max: 100 },
          { name: 'three', max: 100 }
        ],
        radius: 100,
        startAngle: 90,
        splitNumber: 4,
        shape: 'circle',
        name: {
          textStyle: {
            fontSize: 24,
            color: '#333'
          },
          formatter: function(val) {
            let value = ''
            for (let i = 0; i < seriseData.length; i++) {
              if (seriseData[i].name === val) {
                value = seriseData[i].value
                break
              }
            }
            return value >= 90 ? [val + ' ' + value, '{b|前10%}'].join('\n') : [val + ' ' + value]
          },
          rich: {
            b: {
              backgroundColor: '#eaff8f',
              padding: [3, 6],
              fontSize: 14,
              color: '#333'
            }
          }
        },
        splitArea: {
          areaStyle: {
            color: ['#fff']
          }
        },
        axisLine: {
          lineStyle: {
            width: 1,
            color: 'rgba(8,151,156,0.1)'
          }
        },
        splitLine: {
          lineStyle: {
            width: 1,
            color: 'rgba(8,151,156,0.1)'
          }
        }
      }
    ],
    series: [
      {
        type: 'radar',
        symbol: 'none',
        lineStyle: {
          opacity: 0
        },
        areaStyle: {
            color: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 0.66,
                colorStops: [{
                    offset: 0,
                    color: '#fbed96' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#abecd6' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }
        },
        data: [{
          value: [30,100,90]
        }]
      }
    ]
  }
