var trafficWay = [
        {
          name: '三类项目',
          value: 20
        },
        {
          name: '天分重点',
          value: 30
        },
        {
          name: '集团重点',
          value: 50
        }
      ]
      var total = 0
      for (var i = 0; i < trafficWay.length; i++) {
        total += trafficWay[i].value
      }

      var data = []
      var color = ['#36E461', '#0BEFF9', '#9429E1']
      for (var i = 0; i < trafficWay.length; i++) {
        data.push(
          {
            value: trafficWay[i].value,
            name: trafficWay[i].name,
            itemStyle: {
              normal: {
                borderWidth: 5,
                shadowBlur: 20,
                borderColor: color[i],
                shadowColor: color[i]
              }
            }
          },
          {
            value: total * 0.04,
            name: '',
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                },
                color: 'rgba(0, 0, 0, 0)',
                borderWidth: 0
              }
            }
          }
        )
      }
      var option = {
          backgroundColor:'#000',
        color: color,
        title: [{
          text: '200000',
          x: '49%',
          y: '42%',
          textAlign: 'center',
          textStyle: {
            fontFamily: 'Verdana-Bold',
            fontSize: '26',
            fontWeight: 'bold',
            color: '#FFF'
          }
        }, {
          text: '万小时',
          left: '49%',
          top: '55%',
          textAlign: 'center',
          textStyle: {
            fontFamily: 'MicrosoftYaHei',
            fontSize: '16',
            fontWeight: '100',
            color: '#fff'
          }
        }],
        tooltip: {
          show: true
        },
        series: [
          {
            name: '',
            type: 'pie',
            clockWise: false,
            radius: [75, 78],
            hoverAnimation: false,
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: 'outside',
                  color: '#FFFFFF',
                  fontSize: 16,
                  formatter: function(params) {
                    var percent = 0
                    // var total = 0
                    // for (var i = 0; i < trafficWay.length; i++) {
                    //   total += trafficWay[i].value
                    // }
                    percent = params.percent
                    // percent = ((params.value / total) * 100).toFixed(0)
                    if (params.name !== '') {
                      return params.name + '\n' + `{a${params.dataIndex / 2}|` + percent + '%}'
                    } else {
                      return ''
                    }
                  },
                  textStyle: {
                    rich: {
                      a0: {
                        color: '#36E461',
                        padding: [10, 0],
                        fontSize: 15
                      },
                      a1: {
                        color: '#0BEFF9',
                        padding: [10, 0],
                        fontSize: 15
                      },
                      a2: {
                        color: '#9429E1',
                        padding: [10, 0],
                        fontSize: 15
                      }
                    }
                  }
                },
                labelLine: {
                  length: 30,
                  length2: 50,
                  show: true,
                  color: '#00ffff'
                }
              }
            },
            data: data
          }
        ]
      }