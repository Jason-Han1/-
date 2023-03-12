let data = [
    {name: '253.161.210.69', value: 97},
    {name: '56.234.119.70', value: 68},
    {name: '191.145.54.113', value: 50},
    {name: '209.41.95.49', value: 36},
    {name: '208.240.205.155', value: 13}
]
let xAxisData = data.map(item => item.name)
let seriesData = data.map(item => item.value)
let maxSeriesData = []
const MAX = Math.max(...seriesData)
for (let i = 0; i < seriesData.length; i++) {
    maxSeriesData.push(MAX)
}
let barLinearColors = [
    new echarts.graphic.LinearGradient(0, 1, 1, 1, [
      { offset: 0, color: "#EB3B5A" },
      { offset: 1, color: "#FE9C5A" }
    ]),
    new echarts.graphic.LinearGradient(0, 1, 1, 1, [
      { offset: 0, color: "#FA8231" },
      { offset: 1, color: "#FFD14C" }
    ]),
    new echarts.graphic.LinearGradient(0, 1, 1, 1, [
      { offset: 0, color: "#F7B731" },
      { offset: 1, color: "#FFEE96" }
    ]),
    new echarts.graphic.LinearGradient(0, 1, 1, 1, [
      { offset: 0, color: "#395CFE" },
      { offset: 1, color: "#2EC7CF" }
    ])   
]

function rankBarColor (cData) {
    let tempData = []
    cData.forEach((item, index) => {
        tempData.push({
            value: item,
            itemStyle: {
                color: index > 3 ? barLinearColors[3] : barLinearColors[index]
            }
        })
    })
    return tempData
}
var option = {
    tooltip: {
        backgroundColor: 'rgba(50,50,50,.3)',
        textStyle: {
            color: '#222'
        }
    },
    xAxis: {
      type: "value",
      splitLine: { show: false },
      axisLabel: { show: false },
      axisTick: { show: false },
      axisLine: { show: false }
    },
        yAxis: [
          {
            type: "category",
            inverse: true,
            axisLine: { show: false },
            axisTick: { show: false },
            data: xAxisData,
            axisLabel: {
              rich: {
                nt1: {
                  color: "#fff",
                  backgroundColor: '#EB3B5A',
                  width: 16,
                  height: 16,
                  fontSize: 12,
                  align: "center",
                  borderRadius: 100,
                  padding: [0, 1, 2, 1]
                },
                nt2: {
                  color: "#fff",
                  backgroundColor: '#FA8231',
                  width: 16,
                  height: 16,
                  fontSize: 12,
                  align: "center",
                  borderRadius: 100,
                  padding: [0, 1, 2, 1]
                },
                nt3: {
                  color: "#fff",
                  backgroundColor: '#F7B731',
                  width: 16,
                  height: 16,
                  fontSize: 12,
                  align: "center",
                  borderRadius: 100,
                  padding: [0, 1, 2, 1]
                },
                nt: {
                  color: "#fff",
                  backgroundColor: '#00a9c8',
                  width: 16,
                  height: 16,
                  fontSize: 12,
                  align: "center",
                  borderRadius: 100,
                  padding: [0, 1, 2, 1]
                }
              },
              formatter: function(value, index) {
                let idx = index + 1
                if (idx <= 3) {
                  return ["{nt" + idx + "|" + idx + "}"].join("\n");
                } else {
                  return ["{nt|" + idx + "}"].join("\n");
                }
              }
            }
          },
          {//名称
          type: 'category',
            offset: -10,
            position: "left",
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: {
              color: '#333',
              align: "left",
              verticalAlign: "bottom",
              lineHeight: 32,
              fontSize: 12
            },
            data: xAxisData
          },
        ],
        series: [
          {
            zlevel: 1,
            type: "bar",
            barWidth: 16,
            data: rankBarColor(seriesData),
            itemStyle: {
              normal: {
                barBorderRadius: 30
              }
            },
            label: {
              show: true,
              fontSize: 12,
              color: "#fff"
            }
          },
          {
            type: "bar",
            barWidth: 16,
            barGap: "-100%",
            itemStyle: {
              normal: {
                barBorderRadius: 30,
                color: 'rgba(0,0,0,0.04)'
              }
            },
            data: maxSeriesData
          }
        ]
      };