option =  {
          grid: {
            left: '0%',
            right: '2%',
            top: "2%",
            bottom: '5%',
            containLabel: true
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          yAxis: [
            {
              type: 'category',
              data: [
                '反复开机',
                '病毒行为',
                '违规外联',
                '设备未关机',
                '异常',
              ],
              axisLine: {
                show: true,
                lineStyle: {
                  color: "#409EFF",
                  width: 1,
                  type: "solid"
                }
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: true,
                textStyle: {
                  color: "#fff",
                  fontSize: 10
                },
              },
            }
          ],
          xAxis: [{
            type: 'value',
            axisLine: {
              show: false,
              lineStyle: {
                color: "#409EFF",
                width: 1,
                type: "solid"
              },
            },
            axisLabel: {
              color: "#fff"
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#233e64",
              }
            }
          }],
          series: [{
            type: 'bar',
            barWidth: '25%',
            data: [20, 50, 80, 58, 55],
            itemStyle: {
              barBorderRadius: [0, 15, 15, 0],
              color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                offset: 0,
                color: 'rgba(8,252,254,0)'
              }, {
                offset: 1,
                color: 'rgba(8,252,254,1)'
              }]),
            }
          }]
        };