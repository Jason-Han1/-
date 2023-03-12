myChart.showLoading()
  diskData = [
    {
      name: '用户基本属性标签',
      value: 1,
      children: [
        {
          name: '性别标签',
          value: 1
        },
        {
          name: '年龄标签',
          value: 1
        },
        {
          name: '星座标签',
          value: 1
        },
        {
          name: '属相标签',
          value: 1
        },
        {
          name: '地区标签',
          value: 1
        }
      ]
    },
    {
      name: '用户偏好标签',
      value: 1,
      children: [
        {
          name: '时间偏好',
          value: 1
        },
        {
          name: '功能偏好',
          value: 1
        },
        {
          name: '活动偏好',
          value: 1
        },
        {
          name: '发帖偏好',
          value: 1
        },
        {
          name: '建言偏好',
          value: 1
        },
        {
          name: '内容偏好',
          value: 1
        }
      ]
    },
    {
      name: '生命周期标签',
      value: 1,
      children: [
        {
          name: '新手上路',
          value: 1
        },
        {
          name: '忠实粉丝',
          value: 1
        },
        {
          name: '种子用户',
          value: 1
        },
        {
          name: '重点留存用户',
          value: 1
        },
        {
          name: '潜在用户',
          value: 1
        }
      ]
    }
  ]
  myChart.hideLoading()
  const formatUtil = echarts.format
  function getLevelOption () {
    return [
      {
        itemStyle: {
          borderWidth: 0,
          gapWidth: 20
        }
      },
      {
        itemStyle: {
          gapWidth: 1
        }
      },
      {
        colorSaturation: [0.35, 0.5],
        itemStyle: {
          gapWidth: 1,
          borderColorSaturation: 0.6
        }
      }
    ]
  }
  myChart.setOption(
    (option = {
      color: ['#6E35FF80', '#0522A780', '#7222A780'],
      title: {
        text: 'Disk Usage',
        left: 'center'
      },
      tooltip: {
        formatter: function (info) {
          const value = info.value
          const treePathInfo = info.treePathInfo
          const treePath = []
          for (let i = 1; i < treePathInfo.length; i++) {
            treePath.push(treePathInfo[i].name)
          }
          return [
            '<div class="tooltip-title">' +
              formatUtil.encodeHTML(treePath.join('/')) +
              '</div>',
            'Disk Usage: ' + formatUtil.addCommas(value) + ' KB'
          ].join('')
        }
      },
      series: [
        {
          name: 'Disk Usage',
          type: 'treemap',
          visibleMin: 300,
          label: {
            show: true,
            formatter: '{b}'
          },
          itemStyle: {
            borderWidth: 0,
            borderColor: 'transparent',
            gapWidth: 0
          },
          levels: getLevelOption(),
          data: diskData
        }
      ]
    })
  )

  // ---
  const sliceIndex = [
    [0, 4],
    [0, 4],
    [0, 4]
  ]
  setInterval(function () {
    const tags = JSON.parse(JSON.stringify(diskData))
    for (let i = 0; i < tags.length; i++) {
      let tag = tags[i].children
      const tagLength = tag.length

      const sliceItem = sliceIndex[i]

      tag = [...tag, ...tag]

      tags[i].children = tag.slice(sliceItem[0], sliceItem[1])
      sliceItem[0] += 1
      if (sliceItem[0] > tagLength) {
        sliceItem[0] = 0
        sliceItem[1] = 4
      } else {
        sliceItem[1] += 1
      }
      sliceIndex[i] = sliceItem
    }
    const option = myChart.getOption()
    option.series[0].data = tags
    myChart.setOption(option)

    function randomRange (min, max) {
      return Math.floor(Math.random() * (max - min)) + min
    }
  }, 1500)
