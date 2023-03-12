 var option = {
     backgroundColor:'#000',
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
              show:true
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '1%',
            top:'20%',
            containLabel: true
          },
          legend: {
              show: false
          },
          xAxis: {
            type: 'category',
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月'],
            axisLine: {
              lineStyle: {
                color: 'white'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              rotate: 40,
              textStyle: {
                fontFamily: 'Microsoft YaHei'
              }
            },
          },

          yAxis: {
            type: 'value',
            name: '个',
            axisLine: {
              // show: false,
              lineStyle: {
                color: 'white'
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(21, 63, 101, 1)',
                type: 'dashed',
              }
            },
            axisLabel: {}
          },
          series: [{
            name: '数量',
            type: 'bar',
            barWidth: '30%',
            itemStyle: {
              color: 'rgba(2, 191, 247, 1)'
            },
            data: [100, 120, 80, 123, 96, 89, 152, 114, 120, 119]
          }]
        }