option = {
   
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: [],
            textStyle: {
              color: 'RGB(255,255,255)'
            }
          },
          grid: {
            left: '3%',
            right: '5%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            splitLine: {
              show: false
            },
            axisLine: {
              lineStyle: {
                type: 'dash',
                color: 'RGB(255,255,255)'
              }
            },
            axisLabel: {
              interval: 0,
              textStyle: {
                fontSize: 8,
              },
            }
          },
          yAxis: {
            type: 'value',
            axisLine: {
              show: false,
              lineStyle: {
                color: 'RGB(255,255,255)'
              }
            },
            splitLine: {
              lineStyle: {
                type: 'dash',
                color: "silver"
              }
            },
            axisTick: {
              show: false
            }
          },
          series: []
        
};

