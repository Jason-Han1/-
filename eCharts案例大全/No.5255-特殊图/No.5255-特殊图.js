option = {
    title: {
      text: 'TOP10'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      },
      // 鼠标移入条形图提示层文字的自定义
      formatter (params) {
        let relVal = params[0].name
        for (var i = 0, l = params.length; i < l; i++) {
          // console.log(params)
          let circle = `<i class="iconfont icon-yuan" style="margin-right:4px;font-size:14px;color:${params[i].color}"></i>`
          params[i].value = Math.abs(params[i].value)
          relVal += '<br/>' + circle + params[i].seriesName + ' : ' + params[i].value + 'ms'
        }
        return relVal
      }
    },
    legend: {
      data: ['平均性能', '实时性能']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'value',
        // 设置x轴线的属性
        axisLine: {
          lineStyle: {
            color: '#888'
          }
        },
        axisLabel: {
          formatter (value) {
            return Math.abs(value) // 负数取绝对值变正数（x轴本来数据是正负才能分开两边展示的，所以我们只是把负数处理为正数在视觉上显示）
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'category',
        axisTick: {show: false},
        // 设置y轴线的属性
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        },
        data: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1'] // y轴下到上
      }
    ],
    color: ['#98d87d', '#49a9ee'],
    series: [
      {
        name: '实时性能',
        type: 'bar',
        stack: '总量',
        barMaxWidth: '22',
        // barGap: '-100%',
        // barCategoryGap: '10',
        label: {
          normal: {
            show: true,
            color: '#444',
            align: 'left',
            // 自定义条形图上显示的文字
            formatter (params) {
              let htmlStr = params.data.ip + "    " + Math.abs(params.value) + 'ms'
              return htmlStr
            }
          }
        },
        // data:[100, 200, 300, 400, 500, 600, 700] // 数据给升序
        data: [ // 数据给升序
          {
            ip: '1.3.2.6',
            value: 100
          },
          {
            ip: '1.3.2.6',
            value: 200
          },
          {
            ip: '1.3.2.6',
            value: 300
          },
          {
            ip: '1.3.2.6',
            value: 400
          },
          {
            ip: '1.3.2.6',
            value: 500
          },
          {
            ip: '1.3.2.6',
            value: 600
          },
          {
            ip: '1.3.2.6',
            value: 700
          },
          {
            ip: '1.3.2.6',
            value: 800
          },
          {
            ip: '1.3.2.6',
            value: 900
          },
          {
            ip: '1.3.2.6',
            value: 1000
          }
        ]
      },
      {
        name: '平均性能',
        type: 'bar',
        stack: '总量', // 数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置。
        barMaxWidth: '22',
        label: {
          normal: {
            show: true,
            color: '#444',
            align: 'right',
            formatter (params) {
              let htmlStr = Math.abs(params.value) + 'ms' + "    " + params.data.ip
              return htmlStr
            }
          }
        },
        data: [
          {
            ip: '1.3.2.6',
            value: -100
          },
          {
            ip: '1.3.2.6',
            value: -200
          },
          {
            ip: '1.3.2.6',
            value: -300
          },
          {
            ip: '1.3.2.6',
            value: -400
          },
          {
            ip: '1.3.2.6',
            value: -500
          },
          {
            ip: '1.3.2.6',
            value: -600
          },
          {
            ip: '1.3.2.6',
            value: -700
          },
          {
            ip: '1.3.2.6',
            value: -800
          },
          {
            ip: '1.3.2.6',
            value: -900
          },
          {
            ip: '1.3.2.6',
            value: -1000
          }
        ]
      }
    ]
  };