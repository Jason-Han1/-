 var option = {
     backgroundColor:'#323a5e',
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '2%',
          right: '4%',
          bottom: '14%',
          top:'16%',
          containLabel: true
        },
         legend: {
            data: ['2017年', '2018年'],
            left: 'center',
            bottom: 50,
            textStyle: {
                color: "#c3cad9",
                fontSize: 18
            },
            itemGap: 40,
            itemWidth: 12,
            itemHeight: 10,
            // itemGap: 35
        },
        xAxis: {
          type: 'category',
          data: ['1-10人企业','10-50人企业','50人以上企业'],
          axisLine: {
            lineStyle: {
              color: 'rgba(101, 124, 168, 0.3)'
            }
          },
          axisLabel: {
            textStyle: {
              fontFamily: 'Microsoft YaHei',
              color: '#6e69b2'
            }
          },
        },

        yAxis: {
          type: 'value',
          max:'100',
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(101, 124, 168, 0.3)'
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(101, 124, 168, 0.3)'
            }
          },
          axisLabel: {
            formatter: '{value}%',
            textStyle: {
              fontFamily: 'Microsoft YaHei',
              color: '#6e69b2'
            }
          
          }
        },
        series: [{
          name: '2017年',
          type: 'bar',
          barWidth: '15%',
          itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#c88aff'
                }, {
                    offset: 1,
                    color: '#8f52f2'
                }]),
                barBorderRadius: [4, 4, 0, 0]
            }
            
          },
          data: [62, 59, 84]
        },
        {
          name: '2018年',
          type: 'bar',
          barWidth: '15%',
          itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#7ea7ef'
                }, {
                    offset: 1,
                    color: '#5e88f5'
                }]),
                barBorderRadius: [4, 4, 0, 0]
            }
          },
          data: [82, 98, 90]
        }]
      };
