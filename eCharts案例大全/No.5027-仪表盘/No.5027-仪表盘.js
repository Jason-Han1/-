var data= { name: '电流', value: [{ value: 224.38, itemStyle: { color: 'rgb(156,214,206)' } }] }
var endNum=600
var startNum= 0
var option = {
    backgroundColor:'rgb(245, 251, 254)',
    tooltip: {
          formatter: '{a} <br/>{b} : {c}'
        },
        series: [
          {
            name: data.name,
            type: 'gauge',
            radius: '55%',
            randMap: 'true',
            splitNumber: 20,
            axisLine: { // 坐标轴线
              lineStyle: { // 属性lineStyle控制线条样式
                width: 20,
                color: [
                  [1, 'rgba(110,188,247,0.9)']
                ]
              }
            },
            axisLabel: {
              show: false
            },
            axisTick: {
              length: 12,
              lineStyle: {
                color: 'rgba(255,255,255,0.8)'
              }
            },
            splitLine: {
              show: false
            },
            itemStyle: {
              show: false
            },
            pointer: {
              show: false
            },
            detail: {
              textStyle: {
                padding: [160, 0, 0, 0],
                fontSize: 18,
                color: '#000'
              },

              formatter: function (params) {
                return data.name
              }
            }
          },
          {
            name: data.name,
            type: 'gauge',
            radius: '70%',
            min: startNum, // 最小刻度
            splitNumber: 5,
            max: endNum, // 最大刻度
            axisLine: {
              show: true,
              lineStyle: {
                width: 2,
                shadowBlur: 0,
                color: [
                  [1, 'rgb(110,188,247)']
                ]
              }
            },
            axisTick: {
              show: true,
              lineStyle: {
                color: 'rgb(190,235,248)',
                width: 1
              },
              length: -15,
              splitNumber: 10
            },
            splitLine: {
              show: true,
              length: -20,
              lineStyle: {
                color: 'rgb(190,235,248)'
              }
            },
            axisLabel: {
              formatter: function (value) {
                const texts = []
                if (value < 1000) {
                  texts.push(value)
                }
                if (value >= 1000) {
                  value = value / 1000
                  texts.push(value + 'k')
                }
                return texts
              },
              textStyle: {
                color: 'rgb(110,188,247)',
                shadowBlur: 40,
                shadowColor: '#fff',
                backgroundColor: 'rgb(245, 251, 254)',
                padding: -25,
                fontSize: 14
              }
            },
            pointer: { // 仪表盘指针
              width: 10,
              show: true,
              length: '90%'
            },
            detail: {
              textStyle: {
                padding: [60, 0, 0, 0],
                fontSize: 30,
                fontWeight: 500,
                fontFamily: 'agency fb'
              },

              formatter: function (params) {
                const texts = []
                if (params < 1000) {
                  texts.push(params)
                }
                if (params >= 1000) {
                  params = params / 1000
                  texts.push(params)
                }
                return params
              }
            },
            data: data.value
          }
        ]
};