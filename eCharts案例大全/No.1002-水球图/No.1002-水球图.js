// 外部脚本
// https://cdn.jsdelivr.net/npm/echarts-liquidfill@3/dist/echarts-liquidfill.min.js

let value = 0.6868
option = {
        series: [{
          type: 'liquidFill',
          radius: '75%',
          center: ['50%', '50%'],
          color: ['#2397f6'],
          data: [value], // data个数代表波浪数
          backgroundStyle: {
            borderWidth: 1,
            color: '#ecf6ff'
          },
          label: {
            normal: {
              formatter: (value * 100).toFixed(2) + '%',
              textStyle: {
                fontSize: 41,
                color: "#7AABFA",
              }
            }
          },
          outline: {
            show: false,
          },
        }
        ]
      }
