option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        data: ['总计', '海尔', '易美健', '乔融']
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
          data: ['申请金额', '通过金额']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '总计',
          type: 'bar',
          barWidth: '30%',
          barGap: '-100%',
          data: [8083321.7, 3777972.44],
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          }
        }, {
          name: '海尔',
          type: 'bar',
          barWidth: '30%',
          stack: 'group1',
          data: [724696, 538172],
          label: {
            normal: {
              show: true,
              position: 'inside'
            }
          }
        }, {
          name: '易美健',
          type: 'bar',
          barWidth: '30%',
          stack: 'group1',
          data: [1409574, 1027662.24],
          label: {
            normal: {
              show: true,
              position: 'inside'
            }
          }
        }, {
          name: '乔融',
          type: 'bar',
          barWidth: '30%',
          stack: 'group1',
          data: [5949051.7, 2212138.2],
          label: {
            normal: {
              show: true,
              position: 'inside'
            }
          }
        }
      ]
    };