option = {
    // toolbox: {
    //   show: true,
    //   feature: {
    //     saveAsImage: {}
    //   }
    // },
    backgroundColor: '#FFF',
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    series: [
        {
        name: '访问来源',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          emphasis: {
            show: true,
            textStyle: {
              fontWeight: 'bold'
            }
          },
          padding: [-20, -160, 0, -160], // 设置文字显示的位置
          formatter: '{b}: {c} ({d}%)'
        },
        labelLine: {
            normal: {
                show: true,
                length: 15, // 第一段线 长度
                length2: 170, // 第二段线 长度
                lineStyle: {
                    color: 'rgba(0, 0, 0, 0.45)'
                },
                align: 'right'
            },
            color: "#000",
            emphasis: {
                show: true
            }
        },
        itemStyle: {
          offset: 2, // 扇区间隔大小
          normal: {
            borderColor: '#FFF'
          }
        },
        data: [
          {
            value: 335,
            name: '直接访问',
            itemStyle: {
              color: "#F8C64A"
            }
          },
          {
            value: 310,
            name: '邮件营销',
            itemStyle: {
              color: "#76A9F9"
            }
          },
          {
            value: 234,
            name: '联盟广告',
            itemStyle: {
              color: "#67BFC9"
            }
          },
          {
            value: 135,
            name: '视频广告',
            itemStyle: {
              color: "#B198F6"
            }
          },
          {
            value: 1548,
            name: '搜索引擎',
            itemStyle: {
              color: "#FE8C71"
            }
          }
        ]
      }
    ]
  }