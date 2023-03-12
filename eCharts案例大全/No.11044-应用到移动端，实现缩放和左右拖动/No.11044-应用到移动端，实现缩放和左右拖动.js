  option = {
      tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
      },
      legend: {
          data: ['邮件营销', '联盟广告']
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      xAxis: [{
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周二', '周三', '周四', '周五', '周六']
      }],
      yAxis: [{
          type: 'value'
      }],
      series: [{
          name: '邮件营销',
          type: 'bar',
          stack: '广告',
          data: [120, 132, 101, 134, 90, 230, 132, 101, 134, 90, 230],
          itemStyle: {
              normal: {
                  color: '#108EE9'
              }
          }
      }],
      dataZoom: [{
          type: 'inside', //图表下方的伸缩条
          show: true, //是否显示
          realtime: true, //
          start: 0, //伸缩条开始位置（1-100），可以随时更改
          end: 100, //伸缩条结束位置（1-100），可以随时更改
      }]
  };

  if (option && typeof option === "object") {
      myChart.setOption(option, true);
  }