option = {
          textStyle: {
            color: '#000',
            fontSize: 12,
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'line'
            }
          },
          legend: {
            icon: 'rect',
            right: '8%',
            top: '2%',
            data: ['系统风险', '站点风险',],
          },
          grid: { //图表的位置
            top: '17%',
            left: '2%',
            right: '2%',
            bottom: '5%',
            containLabel: true,
          },
          yAxis: [
            {
              type: 'value',
              splitLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: '#409EFF'
                }
              },
            }],
          xAxis: [
            {
              //boundaryGap: false,
              axisLabel: {
                rotate: 20,
              },
              type: 'category',
              data: ['2018-9-27', '2018-9-27', '2018-9-27', '2018-9-27', '2018-9-27', '2018-9-27', '2018-9-27'],
              axisTick: {show: false},
              axisLine: {
                lineStyle: {
                  color: '#409EFF',
                }
              }
            }
          ],
          series: [
            {
              name: '系统风险',
              type: 'line',
              data: [100, 120, 82, 70, 57, 240, 44],
              smooth: true,
              symbolSize: 5,
              itemStyle: {
                color: '#409EFF'
              }
            },
            {
              name: '站点风险',
              type: 'line',
              data: [57, 88, 68, 89, 74, 14, 300],
              smooth: true,
              symbolSize: 5,
              itemStyle: {
                color: '#08fcfe'
              }
            },
          ]
        };