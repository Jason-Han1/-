    var data = [
      [[0, 0, 39], [2, 2, 99]],
      [[0, 3, 49], [1, 2, 14], [4, 2, 129]],
      [[0, 3, 39], [3, 3, 54]],
      [[2, 4, 49], [3, 1, 94], [4, 1, 129]],
      [[2, 3, 49], [1, 3, 14]]
    ];
    var legend = ['龙头行业', '成熟行业', '一般行业', '潜力行业', '夕阳行业'];
    var series = legend.map((v, i) => {
      return {
        name: v,
        data: data[i],
        type: 'scatter',
        symbolSize: function(data) {
          return Math.sqrt(data[2]) * 7
        },
        label: {
          emphasis: {
            show: true,
            formatter: function(param) {
              return param.data[3]
            },
            position: 'top'
          }
        },
        itemStyle: {
          normal: {
            shadowBlur: 10,
            shadowColor: 'rgba(120, 36, 50, 0.5)',
            shadowOffsetY: 5
          }
        }
      }
    });
    option = {
        backgroundColor: '#ffffff',
        color: [
          '#0580F2',
          '#FAA732',
          '#E1575D',
          '#8B73CC',
          '#8CD123',
          '#4B53BA',
          '#429588'
        ],
        legend: {
          icon: 'circle',
          bottom: '20px',
          itemWidth: 12,
          itemHeight: 12,
          data: legend
        },
        grid: {
          left: '1%',
          right: '2%',
          // bottom: '20px',
          containLabel: true
        },
        xAxis: {
          show: true,
          type: 'category',
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              // 属性lineStyle（详见lineStyle）控制线条样式
              color: '#CCCCCC'
            }
          },
          axisLabel: {
            textStyle: {
              fontSize: 12,
              color: '#333333'
            },
            rotate: 0
          },
          data: ['0-50亿', '50-100亿', '100-500亿', '500-1000亿', '1000亿以上']
        },
        yAxis: {
          show: true,
          type: 'category',
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#CCCCCC'
            }
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              fontSize: 14,
              color: '#333333'
            }
          },
          data: ['30%一下', '30%-40%', '40%-50%', '50%以上'],
          scale: true
        },
        series: series
    };