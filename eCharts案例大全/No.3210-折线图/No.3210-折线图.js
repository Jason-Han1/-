 option = {
        backgroundColor: '#12193a',
        color: ['#f0c725'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'line', // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: '6%',
          right: '4%',
          top: '10%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisLine: {
              lineStyle: {
                color: 'rgba(240,199,37,0.5)',
              },
            },
            offset: 10,
            axisLabel: {
              interval: 0,
              // rotate:'45',
              color: '#c1cadf',
              fontSize: 20,
            },
            axisTick: {
              show: false // 去除刻度线
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(255,255,255,.1)'  //分割线颜色
              }
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            name: '数量',
            axisTick: {
              show: false // 去除刻度线
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(255,255,255,.1)'  //分割线颜色
              }
            },
            nameTextStyle: {
              color: '#c1cadf',
              align: 'right',
              lineHeight: 10,
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(240,199,37,0.5)',
              },
            },
            axisLabel: {
              interval: 0,
              color: '#c1cadf',
              fontSize: 20,
            },
          },
        ],
        series: [
          {
            // name:'总卡数',
            type: 'line',
            smooth: true,
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(240,199,37,1)',
                },
                {
                  offset: 1,
                  color: 'rgba(240,199,37,0.01)',
                },
              ]),
            },
            data: [36, 24, 22, 34, 36, 26, 44],
            barWidth: '30%',
            itemStyle: {
              normal: {
                color: '#f0c725',
              },
            },
            symbol: 'circle', //折线图，节点形状
            symbolSize: 15, //折线图，节点圆圈大小
          },
        ],
      };