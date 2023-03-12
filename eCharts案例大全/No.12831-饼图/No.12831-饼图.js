option = {
          tooltip: {
            trigger: 'item',
          },
          visualMap: {
            show: false,
            inRange: {
              colorLightness: [0, 1]
            }
          },
          series: [
            {
              name: '资产组',
              type: 'pie',
              radius: '60%',
              center: ['50%', '50%'],
              data: [
                {value: 10, name: '大数据'},
                {value: 20, name: '巡控系统'},
                {value: 30, name: '多维平台'},
                {value: 40, name: '图像解析'},
                {value: 50, name: '边界设备'},
                {value: 60, name: '边界设备'},
                {value: 70, name: '安全设备'},
              ].sort(function (a, b) {
                return a.value - b.value
              }),
              roseType: 'angle',
              label: {
                formatter: '{b|{b}} \n{hr|}\n {c|{c}}',
                rich: {
                  hr: {
                    borderColor: '#fff',
                    width: '100%',
                    borderWidth: 1,
                    height: 0
                  },
                  b: {
                    fontSize: 12,
                    lineHeight: 25,
                    align: 'center',
                    padding: [2, 2],
                    color: '#fff',
                  },
                  c: {
                    fontSize: 12,
                    lineHeight: 25,
                    align: 'center',
                    color: '#fff',
                  }
                },
              },
              labelLine: {
                lineStyle: {
                  color: '#fff'
                },
              },
              itemStyle: {
                color: '#409EFF',
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          ]
        };