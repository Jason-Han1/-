option = {
    series: [
            {
              name: '系统风险',
              type: "gauge",
              startAngle: 180,
              endAngle: 0,
              radius: "90%",
              center: ["50%", "60%"],
              axisLine: {
                lineStyle: {
                  width: 15,
                  color: [
                    [1, new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                      {
                        offset: 0.33,
                        color: '#08fcfe'
                      },
                      {
                        offset: 0.66,
                        color: '#e5e46e'
                      },
                      {
                        offset: 1,
                        color: '#EB3457'
                      }
                    ])]],
                }
              },
              axisTick: {show: false},
              axisLabel: {show: false,},
              splitLine: {show: false},
              pointer: {
                show: true,
                width: "2%",
                length: '80%',
              },
              itemStyle: {
                color: '#fff'
              },
              detail: {
                show: false,
                color: '#fff'
              },
              data: [{
                value: 88,
                name: '系统风险',
                textStyle: {
                  color: '#fff'
                }
              }]
            }
          ]
};