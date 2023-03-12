option = {
          color: ['#F56C6C', '#e5e46e', '#6ee5a6'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            x: 'right',
            textStyle: {color: '#fff', fontSize: 12},
            right: '5%',
            top: '5%',
            data: ['高危', '中危', '低危'],
          },
          grid: { //图表的位置
            top: '17%',
            left: '8%',
            right: '5%',
            bottom: '12%',
          },
          yAxis: [
            {
              type: 'value',
              splitLine: {show: false},
              axisLabel: {color: '#fff'},
              axisTick: {show: false},
              axisLine: {lineStyle: {color: '#409EFF'}},
            }],
          xAxis: [{
            type: 'category',
            data: ['运维', 'V5平台', '作战平台', '边界设备', '安全设备'],
            axisLabel: {color: '#fff'},
            axisTick: {show: false},
            axisLine: {
              lineStyle: {color: '#409EFF'}
            }
          }],
          series: [
            {
              name: '低危',
              type: 'bar',
              stack: 1,
              barWidth: '35%',
              data: [20, 30, 25, 25, 20]
            },
            {
              name: '中危',
              type: 'bar',
              barWidth: '35%',
              stack: 1,
              data: [30, 25, 20, 35, 20]
            },
            {
              name: '高危',
              barWidth: '35%',
              type: 'bar',
              stack: 1,
              data: [25, 20, 25, 15, 35]
            },
            {
              name: '总数',
              type: 'line',
              data: [100, 120, 82, 70, 57],
              smooth: true,
              symbolSize: 10,
              itemStyle: {
                color: '#409EFF'
              }
            },
          ]
        }