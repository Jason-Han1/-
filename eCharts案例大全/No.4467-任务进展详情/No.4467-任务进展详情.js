var uploadedDataURL = "/asset/get/s/data-1608885653923-6Kn2IlkrV.json";

function getTaskBarOptions ({ xList, sData }, taskType) {
  // 根据不同的任务
  const settingObj = {
    midterm: {
      color: '#28B3C0',
      name: '中期要求'
    },
    total: {
      color: '#42A76A',
      name: '结项要求'
    }
  }

  const option = {
      backgroundColor: '#000',
    grid: {
      left: 74,
      top: 45,
      right: 32
    },
    tooltip: {
      show: true,
      alwaysShowContent: true,
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: (p) => {
        let { data, name } = p[0]
        const html = `
          <p>${name}</p>
          <p>目标总数：${data.totalTargetCount}</p>
          <p>已完成数：${data.completedCount}</p>
          <p>完成进度：${data.value}%</p>
        `
        return html
      }
    },
    xAxis: {
      type: 'category',
      data: xList,
      axisLine: {
        lineStyle: {
          color: 'rgba(94, 100, 121, 0.3)'
        }
      },
      axisLabel: {
        show: true,
        interval: 'auto',
        color: 'rgba(183, 193, 233, 0.6)',
        fontSize: 10,
        formatter: function (params) {
          var index = 4
          // var newstr = ''
          // for (var i = 0; i < params.length; i += index) {
          //   var tmp = params.substring(i, i + index)
          //   newstr += tmp + '\n'
          // }
          if (params.length > index) {
            return params.substring(0, index) + '...'
          } else {
            return params
          }
        }
      }
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 100,
      axisLine: {
        lineStyle: {
          color: 'rgba(94, 100, 121, 0.2)'
        }
      },
      axisLabel: {
        show: true,
        interval: 'auto',
        formatter: '{value} %',
        color: 'rgba(183, 193, 233, 0.6)',
        fontSize: 10
      },
      splitLine: {
        show: false
      }
    },
    dataZoom: [
      {
        type: 'slider',
        start: 0,
        end: 50,
        borderColor: '#252836',
        fillerColor: 'rgba(40, 179, 192, 0.15)',
        handleStyle: {
          color: '#484D64'
        },
        textStyle: {
          color: 'rgba(183, 193, 233, 0.3)'
        }
      }
    ],
    series: [
      // 中期要求
      {
        name: settingObj[taskType].name,
        itemStyle: {
          color: settingObj[taskType].color
        },
        showBackground: true,
        barMaxWidth: 50,
        backgroundStyle: {
          color: 'rgba(40, 179, 192, 0.07)'
        },
        data: sData,
        type: 'bar'
      }
    ]
  }

  return option
}

$.getJSON(uploadedDataURL, function(geoJson){
    const curActiveTaskType = 'total'
    const taskBarData = geoJson.target_progress[curActiveTaskType]
    const chart = echarts.init(document.getElementById('chart-panel'));
    const option = getTaskBarOptions(taskBarData, curActiveTaskType)
    
    chart.setOption(option);
})
