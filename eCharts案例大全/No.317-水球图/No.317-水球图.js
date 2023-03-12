const value = 60.35
option = {
    backgroundColor:'#061530',
    series: [
      {
        type: 'liquidFill',
        radius: '90%',
        data: [
          value / 100,
          {
            value: (value - 10) / 100,
            direction: 'left'
          }
        ],
        backgroundStyle: {
          borderWidth: 1,
          color: 'transparent'
        },
        label: {
          normal: {
            color: '#27e5f1',
            insideColor: '#f7e8c1',
            left: '50%',
            top: '40%',
            textAlign: 'center',
            textStyle: {
              fontSize: 90,
              fontWeight: '600',
              color: '#fff',
              textAlign: 'center',
              textBorderColor: 'rgba(0, 0, 0, 0)',
              textShadowColor: '#000',
              textShadowBlur: '0',
              textShadowOffsetX: 0,
              textShadowOffsetY: 1
            }
          }
        },
        color: [{
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          colorStops: [{
            offset: 0,
            color: ['#324791'] // 0% 处的颜色
          }, {
            offset: 1,
            color: ['#449090'] // 100% 处的颜色
          }],
          global: false // 缺省为 false
        }],
        outline: {
          show: true,
          borderDistance: 5,
          itemStyle: {
            borderWidth: 0,
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [{
                offset: 0, color: '#0b2355' // 0% 处的颜色
              }, {
                offset: 1, color: '#195b9d' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            }
          }
        }
      }
    ]
};
