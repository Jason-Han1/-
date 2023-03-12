var data = [ {
          name: '智库基金',
          value: 5600
        },
        {
          name: '孵化器种子基金',
          value: 3600
        },
        {
          name: '天使基金',
          value: 1500
        }];
let colorList = ['#3990fd', '#e7b001', '#49c988']
option = {
   tooltip: {
      trigger: 'item',
      show: false
    },
    legend: [
      {
        type: 'scroll',
        orient: 'vertical',
        bottom: '15%',
        left: '30%',
        data: data.slice(0, 1),
        itemGap: 10,
        itemWidth: 8,
        itemHeight: 8,
        selectedMode: true,
        icon: 'circle',
        textStyle: {
          rich: {
            a0: {
              color: colorList[0],
              fontSize: 12,
              fontWeight: 'bolder'
            },
            a1: {
              color: colorList[1],
              fontSize: 12,
              fontWeight: 'bolder'
            },
            a2: {
              color: colorList[2],
              fontSize: 12,
              fontWeight: 'bolder'
            },
            b: {
              color: '#000',
              fontSize: 12,
              fontWeight: 'bolder'
            },
            c: {
              color: '#000',
              fontSize: 12,
              fontWeight: 'bolder'
            }
          }
        },
        formatter: function(name) {
          if (data.length) {
            let unit = '万元'
            let title = ''
            var target
            var index
            for (var i = 0, l = data.length; i < l; i++) {
              if (data[i].name == name) {
                target = data[i].value
                title = data[i].label
                index = i < 6 ? i : 5
              }
            }
            return `{a${index}| ${name}}{b|\n ${target}}{c| ${unit}}`
          }
        }
      },
      {
        type: 'scroll',
        orient: 'vertical',
        bottom: '15%',
        right: '40%',
        data: data.slice(1, 2),
        itemGap: 10,
        itemWidth: 8,
        itemHeight: 8,
        selectedMode: true,
        icon: 'circle',
        textStyle: {
          rich: {
            a0: {
              color: colorList[0],
              fontSize: 12,
              fontWeight: 'bolder'
            },
            a1: {
              color: colorList[1],
              fontSize: 12,
              fontWeight: 'bolder'
            },
            a2: {
              color: colorList[2],
              fontSize: 12,
              fontWeight: 'bolder'
            },
            b: {
              color: '#000',
              fontSize: 12,
              fontWeight: 'bolder'
            },
            c: {
              color: '#000',
              fontSize: 12,
              fontWeight: 'bolder'
            }
          }
        },
        formatter: function(name) {
          if (data.length) {
            let unit = '万元'
            let title = ''
            var target
            var index
            for (var i = 0, l = data.length; i < l; i++) {
              if (data[i].name == name) {
                target = data[i].value
                title = data[i].label
                index = i < 6 ? i : 5
              }
            }
            return `{a${index}| ${name}}{b|\n ${target}}{c| ${unit}}`
          }
        }
      },
      {
        type: 'scroll',
        orient: 'vertical',
        bottom: '10%',
        left: '30%',
        data: data.slice(2, 3),
        itemGap: 10,
        itemWidth: 8,
        itemHeight: 8,
        selectedMode: true,
        icon: 'circle',
        textStyle: {
          rich: {
            a0: {
              color: colorList[0],
              fontSize: 12,
              fontWeight: 'bolder'
            },
            a1: {
              color: colorList[1],
              fontSize: 12,
              fontWeight: 'bolder'
            },
            a2: {
              color: colorList[2],
              fontSize: 12,
              fontWeight: 'bolder'
            },
            b: {
              color: '#000',
              fontSize: 12,
              fontWeight: 'bolder'
            },
            c: {
              color: '#000',
              fontSize: 12,
              fontWeight: 'bolder'
            }
          }
        },
        formatter: function(name) {
          if (data.length) {
            let unit = '万元'
            let title = ''
            var target
            var index
            for (var i = 0, l = data.length; i < l; i++) {
              if (data[i].name == name) {
                target = data[i].value
                title = data[i].label
                index = i < 6 ? i : 5
              }
            }
            return `{a${index}| ${name}}{b|\n ${target}}{c| ${unit}}`
          }
        }
      }
    ],
    series: [
      {
        type: 'pie',
        
        center: ['50%', '30%'],
        radius: ['40%', '55%'], //数组的第一项是内半径，第二项是外半径
        hoverAnimation: false,//鼠标放上不放大，点击也不放大
        clockwise: true,
        avoidLabelOverlap: true,
        hoverOffset: 30,
        // emphasis: {//如果不注销，hoverAnimation：false，点击后也会有样式变化
        //   itemStyle: {
        //     borderColor: '#f3f3f3',
        //     borderWidth: 10
        //   }
        // },
        itemStyle: {
          normal: {
            borderRadius: 2,
            borderColor: 'rgba(255, 255, 255, 1 )',
            borderWidth: 1,
            color: function(params) {
              return colorList[params.dataIndex]
            }
          }
        },
        label: {
          show: false,
          position: 'outside',
          formatter: '{a|{b}：{d}%}\n{hr|}',
          rich: {
            hr: {
              backgroundColor: 't',
              borderRadius: 1,
              width: 1,
              height: 1,
              padding: [1, 1, 0, -4]
            },
            a: {
              padding: [-15, 7, -10, 7]
            }
          }
        },
        labelLine: {
          normal: {
            length: 10,
            length2: 15,
            lineStyle: {
              width: 1
            }
          }
        },
        data: data
      }
    ]
};
