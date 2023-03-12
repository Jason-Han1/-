option = {
    series: [
      {
        name: 'Access From',
        type: 'pie',
        minAngle: 2,
        radius: [70, 85],
        data: [
          {
            value: 12000,
            name: '导航套件',
            // 设置扇形的颜色
            itemStyle: {
              color: '#24CEBF'
            },
            // 设置文字的颜色
            label: {
              color: '#24CEBF'
            }
          },
          { value: 100, name: '', itemStyle: { color: 'rgba(0,0,0,0)' } },
          {
            value: 200,
            name: '智能插秧机',
            // 设置扇形的颜色
            itemStyle: {
              color: '#FFF'
            },
            // 设置文字的颜色
            label: {
              color: '#FFF'
            }
          },
          { value: 100, name: '', itemStyle: { color: 'rgba(0,0,0,0)' } },
          {
            value: 1,
            name: '智能收割机',
            // 设置扇形的颜色
            itemStyle: {
              color: '#00BFFF'
            },
            // 设置文字的颜色
            label: {
              color: '#00BFFF'
            }
          },
          { value: 100, name: '', itemStyle: { color: 'rgba(0,0,0,0)' } }
        ],
        labelLine: {
          length: 10,
          length2: 0,
          maxSurfaceAngle: 80
        },
        label: {
          alignTo: 'edge',
          minMargin: 5,
          edgeDistance: 100,
          distanceToLabelLine: 10,
          lineHeight: 20,
          formatter: function (params) {
            if (params.name) {
              return `{a|${params.value}}` + (params.name === '疆驭导航套件' ? '{b|套}' : '{b|台}') + '\n' + `{b|${params.name}}`
            }
          },
          rich: {
            a: {
              fontSize: 24,
              // color: params.color,
              fontFamily: 'Bebas',
              padding: [-30, 4, 10, 0]
            },
            b: {
              fontSize: 14,
              padding: [-30, 0, 10, 0],
              color: '#FFFFFF'
            }
          }
        },
        labelLayout: function (params) {
          const isLeft = params.labelRect.x < 400 / 2
          const points = params.labelLinePoints
          points[2][0] = isLeft ? params.labelRect.x : params.labelRect.x + params.labelRect.width
          return {
            labelLinePoints: points
          }
        }
      }
    ]
};
