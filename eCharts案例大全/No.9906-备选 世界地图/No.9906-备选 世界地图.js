option = {
    backgroundColor: '#333333',
    geo: {
        map: 'world',
        label: {
          emphasis: {
            show: true,
            color: '#fff'
          }
        },
        roam: true,
        itemStyle: {
          normal: {
            areaColor: 'rgba(0, 26, 45, 0.4)',
            borderColor: '#3697AD',
            borderWidth: 1,
            shadowColor: '#3697AD',
            shadowBlur: 30
          },
          emphasis: {
            areaColor: '#2a333d'
          }
        }
      },
      series: [{
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        symbolSize: 5,
        rippleEffect: {
          brushType: 'stroke',
          scale: 5,
          period: 8
        },
        itemStyle: {
          normal: {
            color: '#44FCF7'
          }
        },
        data: [
            {'name': '多哈', 'value': [51.511744, 25.292405]}, 
            {'name': '约翰内斯堡','value': [28.047305, -26.204103]},
            {'name': '基辅', 'value': [30.5234, 50.450099]}, 
            {'name': '萨格勒布','value': [15.981919, 45.815008]}, 
            {'name': '克拉科夫', 'value': [19.940063, 50.100353]}, 
            {'name': '日内瓦','value': [6.143158, 46.204389]}, 
            {'name': '斗湖', 'value': [112.238749, 30.067011]}, 
            {'name': '马尼拉','value': [120.98453, 14.58865]}, 
            {'name': '中国香港', 'value': [114.186125, 22.293586]}, 
            {'name': '中国澳门','value': [113.551589, 22.19316]}
        ]
      }]
};