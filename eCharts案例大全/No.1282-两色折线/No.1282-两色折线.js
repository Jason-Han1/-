
let baseSize = 16

let seriesObjs = []
  let categories = [
          "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00",
          "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00",
        ]
  let seriesData = [
          [549, 452, 364, 297, 281, 305, 550, 1040, 1600, 2560, 3118, , , , ,,,,,,,,,, ],
          [, , , , , , , , , , 3118, 3278, 3100, 3078, 2858, 3010, 2884, 2675, 1985, 1633, 1207, 982, 795, 637, ]
        ]
  let colors = [
    ['rgba(34,143,254,1)', 'rgba(34,143,254,0.7)', 'rgba(34,143,254,0.1)'],
    ['rgba(254,0,0,1)', 'rgba(254,0,0,0.7)', 'rgba(254,0,0,0.1)'],
  ]
  let line = ['实时用户', '预测用户']
  line.map((item, index) => {
    seriesObjs.push(
      {
        name: item,
        type: 'line',
        showSymbol: false,
        data: seriesData[index],
        yAxisIndex: 1,
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: colors[index][1]
            }, {
              offset: 1,
              color: colors[index][2]
            }], false)
          }
        },
        itemStyle: {
          normal: {
            color: colors[index][0]
          }
        },
        lineStyle: {
          width: 1
        }
      }
    )
  })
  


option = {
    legend: {
      show: false,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisLabel: {
        show: true,
        color: '#fff',
        fontSize: 0.75 * baseSize
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(73, 163, 255, 1)',
          width: 1
        }
      },
      axisTick: {
        show: false
      },
      data: categories
    },
    yAxis: [
      {
        type: 'value',
        position: 'right',
        splitLine: {
            show: false
        }
        ,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        }
      },
      {
        type: 'value',
        name: '(人)',
        nameTextStyle: {
          color: '#fff',
          padding: [0, 0, 0, 0]
        },
        axisLabel: {
          show: true,
          color: '#fff',
          fontSize: 0.75 * baseSize
        },
        axisLine: {
          lineStyle: {
            color: '#344755',
            width: 0
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(20, 82, 129, 1)',
            width: 0.5
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    grid: {
      show: false,
      width: '90%',
      left: 3.5 * baseSize,
      right: 0,
      bottom: 1.2 * baseSize,
      top: 2 * baseSize,
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line'
      },
      formatter: (params) => {
        let data0 = params[0].data
        let data1 = params[1].data
        let str = `<i style="background: #092C5A;border-radius: 50%;"></i>`
        if (data0 === undefined) {
          return `${params[1].name}<br>
            <i style="display: inline-block;width:0.6rem;height: 0.6rem;background: rgba(254,251,0,1);border-radius: 50%;"></i>
            ${params[1].seriesName}: ${data1}`
        }
        if (data1 === undefined) {
          return `${params[0].name}<br>
            <i style="display: inline-block;width:0.6rem;height: 0.6rem;background: rgba(34,143,254,1);border-radius: 50%;"></i>
            ${str}${params[0].seriesName}: ${data0}`
        }
        return `${params[0].name}<br>
          <i style="display: inline-block;width:0.6rem;height: 0.6rem;background: rgba(34,143,254,1);border-radius: 50%;"></i>
          ${str}${params[0].seriesName}: ${data0}`
      },
      // position: function (pos, params, dom, rect, size) {
      //   // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。
      //   let obj = { top: 0 }
      //   obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5
      //   return obj
      // },
      // formatter: function (params) {
      //   let span = `<div style="background: #092C5A;border-radius: 5px;">${params[0].data}人</div>`
      //   return span
      // },
      textStyle: {
        fontSize: 14
      }
    },
    series: seriesObjs
};
