option = {backgroundColor:"#FFF",
            radar: {
              name: {
                textStyle: {
                  color: '#999999',
                }
              },
              splitArea: {
                areaStyle: {
                  color: ['#fff', '#fff', '#fff', '#fff'],
                  shadowColor: 'rgba(0, 100, 0, 0.3)'
                }
              },
              indicator: [
                {name: 'A', max: 6500},
                {name: 'B', max: 6500},
                {name: 'C', max: 3800},
                {name: 'D', max: 3800},
                {name: 'E', max: 5200},
                {name: 'F', max: 3600}
              ]
            },
            series: [{
              type: 'radar',
              data: [
                {
                  value: [500, 3400, 2800, 3100, 4200, 2600],
                  name: 'DATA',
                  itemStyle: {
                    normal: {
                      color: 'rgba(5, 128, 242, 0.5)'
                    }
                  },
                  areaStyle: {
                    normal: {
                      color: '#37A2DA'
                    }
                  }
                }
              ]
            }]
          }