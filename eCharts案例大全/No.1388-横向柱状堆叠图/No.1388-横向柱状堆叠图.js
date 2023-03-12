var data = {
        data: [[320], [120], [220], [150]],
        legend: ['华为', '中兴', '烽火', '瑞斯'],
      }

      var option;

      var colors = ['#4C98FB', '#83CCE7', '#26C7C8', '#73DEBD'];


      option = {
        color: colors,
        legend: {
          top: '35%',
          left: '30%',
          data: data.legend
        },
        grid: {
          left: '15%'
        },
        xAxis: {
          type: 'value',
          show: false,
          minorSplitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'category',
          data: ['各厂商端口占比'],
          // 去除网格线
          axisLine: {
            show: false
          },
          // 去除刻度线
          axisTick: {
            show: false
          }
        },
        series: [],

      };
      for (var i = 0; i < data.data.length; i++) {
        option.series.push({
          name: data.legend[i],
          type: 'bar',
          stack: 'total',
          barWidth: '30px',
          label: {
            show: true,
          },
          emphasis: {
            focus: 'series'
          },
          data: data.data[i]
        })
      }
