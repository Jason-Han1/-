
const rich = {
value: {
  fontSize: 18,
  fontFamily: 'DINAlternate-Bold, DINAlternate',
  fontWeight: 'bold',
  color: '#FFFFFFFF'
},
unit: {
  fontSize: 14,
  fontFamily: 'PingFangSC-Medium,PingFang SC',
  fontWeight: '500',
  color: 'rgba(255, 255, 255, .6)'
}
}
const data2 = [
  {name: '<10', value: 16},
  {name: '10-30', value: 50}
]
const names = []
const values = []
const datas = []
data2.forEach(e => {
names.push(e.name)
values.push(e.value)
})
const max = Math.max(...values)
data2.forEach(e => {
    datas.push({
      value: max,
      name: e.name,
      num: e.value
    })
})
option = {
    backgroundColor: '#000920',
    grid: {
      top: '4%',
      left: '15%',
      right: '20%',
      bottom: 20
    },
    xAxis: {
      type: 'value',
      // name: '辆',
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      axisLine: {
        show: false
      }
    },
    yAxis:[
     {
        data:['<10', '10-30'],
        type: 'category',
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },axisLabel: {
            fontSize: 14,
            fontFamily: 'PingFangSC-Semibold, PingFang SC',
            fontWeight: '600',
            color: '#B6EEF9'
          }
    }],
    series:[{
        name: '今年',
        type: 'bar',
        barWidth: '10px',
        itemStyle: {
          normal: {
            color: '#2CFAA6'
          }
        },
        data: data2
      },
      {
        name: '今年',
        type: 'bar',
        barWidth: '13px',
        barGap: '-113%',
        itemStyle: {
          normal: {
            color: 'transparent',
            borderColor: '#2CFAA6',
            opacity: 0.2,
            borderWidth: 1
          }
        },
        label: {
          normal: {
            show: false
          }
        },
        data: datas
      },
      {
        name: '今年',
        type: 'bar',
        barWidth: '13px',
        barGap: '-113%',
        itemStyle: {
          normal: {
            color: 'transparent'
          }
        },
        label: {
          normal: {
            show: true,
            formatter: series => {
              const item = series.data
              return `{value|${item.num}}`
            },
            rich: rich,
            position: 'right',
          }
        },
        data: datas
      }
      ]
};
