  var colorList = ['#2859ff', '#3990fd', '#49c988', '#e7b001']
  var data = [
    {
      name: '国家级科研院所',
      value: 5600
    },
    {
      name: '国家级重点实验室',
      value: 3600
    },
    {
      name: '国家级工程技术研究中心',
      value: 1500
    },
    {
      name: '省级技术创新中心',
      value: 2000
    }
  ]
option = {
    backgroundColor:'#f5f5f5',
   tooltip: {
      trigger: 'item',
      show: false
    },
    legend: {
      type: 'scroll',
      orient: 'vertical',
      right: '5%',
      top: 'center',
      itemGap: 20,
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
          a3: {
            color: colorList[3],
            fontSize: 12,
            fontWeight: 'bolder'
          },
          b: {
            color: '#000',
            fontSize: 12,
            fontWeight: 'bolder'
          }
        }
      },
      formatter: function(name) {
        if (data.length) {
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
          return `{a${index}| ${name}}{b| ${target}}家`
        }
      }
    },
    series: [
      {
        type: 'pie',
        center: ['40%', '50%'],
        radius: ['60%', '40%'], //数组的第一项是内半径，第二项是外半径
        clockwise: true,
        avoidLabelOverlap: true,
        hoverOffset: 30,
        emphasis: {
          itemStyle: {
            borderColor: '#f3f3f3',
            borderWidth: 10
          }
        },
        itemStyle: {
          normal: {
            borderRadius: 1,
            borderColor: 'rgba(255, 255, 255, 1 )',
            borderWidth: 2,
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
