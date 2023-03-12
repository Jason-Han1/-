let source = ['60%', '50%']
option = {
          title:{
              text: '背景饼图'
          },
          tooltip: {
            trigger: 'item',
            formatter: "{b}: {c} ({d}%)"
          },
          legend: {
            type: 'scroll',
            orient: 'vertical',
            left: '20%',
            top: 'middle',
            icon: 'roundRect',
            data: ['理财页面', '首页', '福利', '我的']
          },
          series: [
            {
              type: 'pie',
              data: [100],
              z: 2,
              radius: ['69%', '0%'],
              center: source,
              itemStyle: {
                normal: {
                  color: '#fff',
                }
              },
              silent: true,
              labelLine: {
                normal: {
                  show: false
                }
              }
            }, {
              type: 'pie',
              data: [100],
              z: 1,
              radius: ['70%', '0%'],
              center: source,
              itemStyle: {
                normal: {
                  color: '#dbd7d6',
                }
              },
              silent: true,
              labelLine: {
                normal: {
                  show: false
                }
              }
            }, {
              type: 'pie',
              data: [100],
              z: 4,
              radius: ['30%', '0%'],
              center: source,
              itemStyle: {
                normal: {
                  color: '#fff',
                }
              },
              silent: true,
              labelLine: {
                normal: {
                  show: false
                }
              }
            }, {
              type: 'pie',
              data: [100],
              z: 3,
              radius: ['31%', '0%'],
              center: source,
              itemStyle: {
                normal: {
                  color: '#dbd7d6',
                }
              },
              silent: true,
              labelLine: {
                normal: {
                  show: false
                }
              }
            },
            {
              type: 'pie',
              z: 4,
              radius: ['40%', '60%'],
              center: source,
              color: ['#6695ed', '#ff7f4e', '#87cefa', '#33cd31'],
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [{
                value: 3661,
                name: '理财页面'
              }, {
                value: 5713,
                name: '首页'
              }, {
                value: 17623,
                name: '福利'
              }, {
                value: 3299,
                name: '我的'
              }]
            }]
        }