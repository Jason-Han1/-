const seriseData = [{
    name: 'one',
    value: 90
  }, {
    name: 'two',
    value: 100
  }, {
    name: 'three',
    value: 90
  },{
    name: 'four',
    value: 50
  }]
option = {
    radar: [
      {
        indicator: [
          { name: 'one', max: 100},
          { name: 'two', max: 100},
          { name: 'three', max: 100},
          { name: 'four', max: 100}
        ],
        radius: 200,
        startAngle: 90,
        splitNumber: 4,
        name: {
          textStyle: {
            fontSize: 36,
            color: '#999'
          },
          formatter: function(val) {
            let value = ''
            for (let i = 0; i < seriseData.length; i++) {
              if (seriseData[i].name === val) {
                value = seriseData[i].value
                break
              }
            }
            return value >= 90 ? [val, '{b|这是}{a|我的}{b|标签}'].join('\n') : val
          },
          rich: {
            a: {
                padding: [10,0,0,0],
                fontSize: 24,
                color: '#d0021b'
            },
            b: {
              padding: [10,0,0,0],
              fontSize: 24,
              color: '#333'
            }
          }
        },
        splitArea: {
          areaStyle: {
            color: ['#ffecef','#edf5ff']
          }
        },
        axisLine: {
          lineStyle: {
            width: 1,
            color: '#fcf6ff'
          }
        },
        splitLine: {
          lineStyle: {
            width: 1,
            color: '#fcf6ff'
          }
        }
      }
    ],
    series: [{
        type: 'radar',
        symbolSize: 10,
        itemStyle: {
            color: '#cdff95'
        },
        lineStyle: {    
          color: '#cdff95',
          width: 1,
          opacity: 1
        },
        areaStyle: {
            color: '#fdf022',
            opacity: 0.5
        },
        data: [
            {
                value: [20,30,30,40]
            }
        ]
    }]
};