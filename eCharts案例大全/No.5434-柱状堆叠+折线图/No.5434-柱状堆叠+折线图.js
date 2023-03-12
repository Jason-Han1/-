option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
      },
      legend: {
        data: [
          '营销短信',
          '行业短信',
          '语音电话',
          '语音验证码',
          '营销短信单价',
          '行业短信单价',
          '语音电话单价',
          '语音验证码单价',
          '总金额',
        ],
        top: '20',
      },
      grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
        {
          type: 'value',
        },
      ],
      series: [
        {
          name: '营销短信',
          type: 'bar',
          stack: '广告',
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: '行业短信',
          type: 'bar',
          stack: '广告',
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: '语音电话',
          type: 'bar',
          stack: '广告',
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: '语音验证码',
          type: 'bar',
          stack: '广告',
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: '营销短信单价',
          type: 'line',
          yAxisIndex: 1,
          data: [0.2, 0.8, 0.5, 0.8, 0.4, 0.2, 0.6],
        },
        {
          name: '行业短信单价',
          type: 'line',
          yAxisIndex: 1,
          data: [0.5, 0.2, 0.5, 0.8, 0.1, 0.9, 0.2],
        },
        {
          name: '语音电话单价',
          type: 'line',
          yAxisIndex: 1,
          data: [0.6, 0.7, 0.1, 0.3, 0.7, 0.11, 0.5],
        },
        {
          name: '语音验证码单价',
          type: 'line',
          yAxisIndex: 1,
          data: [0.56, 0.72, 0.51, 0.2, 0.0, 0.7, 0.4],
        },
        {
          name: '总金额',
          type: 'line',
          yAxisIndex: 0,
          data: [1500, 1600, 1700, 1800, 1900, 2300, 1600],
        },
      ],
    }
