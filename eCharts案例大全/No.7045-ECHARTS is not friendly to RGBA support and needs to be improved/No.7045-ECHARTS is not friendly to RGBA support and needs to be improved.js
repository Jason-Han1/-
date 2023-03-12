option = {
       tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
        xAxis: [
          {
            type: 'category',
            data: ['资产', '负债', '所有者权益', '收入', '支出', '利润'],
            axisTick: {
              // 刻度
              show: false
            },
            axisLine: {
              // X轴线
              show: false
            }

          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: { // 网格线
              lineStyle: {
                type: 'dashed' // 设置网格线类型 dotted：虚线   solid:实线
              }
            }

          }
        ],
        series: [
          {
            // name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [10, -52, 200, -38, 390, 330],
            itemStyle: {
              normal: {
                color: function (params) {                  var index_color = params.value
                  if (index_color >= 0) {
                    return '#87cefa'
                  } else {
                    return 'rgba(158,208,255)'
                  }}
              }
            }
          }
        ]
};
