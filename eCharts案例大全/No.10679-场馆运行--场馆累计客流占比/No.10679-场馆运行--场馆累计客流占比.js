option = {
          backgroundColor: '#2c343c',
          tooltip: {
            trigger: 'item',
            formatter: function(params) {
            return params.name + ":" + params.value + '%'
        }
          },
      color:['#A60551', '#9E016A', '#9F026D', '#970187', '#6E15C9','#301BD0','#1961CD','#2B8ED1','#38AFCF', '#32CFD6', '#7ACEB6',],
        //   visualMap: {
        //     show: false,
        //     inRange: {
        //       colorLightness: [0, 1]
        //     }
        //   },
          series: [
            {
            //   name: '资产组',
              type: 'pie',
              radius: '60%',
              center: ['50%', '50%'],
              data: [
                {value: 2.51, name: 'E3馆'},
                {value: 2.87, name: 'E1馆'},
                {value: 3.99, name: '其他'},
                {value: 4.65, name: 'D1馆'},
                {value: 4.88, name: 'C3馆'},
                {value: 5.07, name: 'C1馆'},
                {value: 6.51, name: 'B3馆'},
                {value: 6.51, name: 'B2馆'},
                {value: 7.23, name: 'A4馆'},
                {value: 7.59, name: 'A2馆'},
                {value: 7.97, name: 'A1馆'},
                
              ].sort(function (a, b) {
                return a.value - b.value
              }),
              roseType: 'angle',
              label: {
                formatter: '{b|{b}} \n{hr|}\n {c|{c}%}',
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
                // color: '#409EFF',
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          ]
        };