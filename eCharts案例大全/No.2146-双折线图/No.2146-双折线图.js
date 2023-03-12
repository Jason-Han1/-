option ={
        backgroundColor: '#FFF',
        grid: {
          top: '10%',
          bottom: '15%',
          left: '5%',
          right: '4%',
        },
        tooltip: {
          trigger: 'axis',
          label: {
            show: true,
          },
        },
        legend: {
          icon: 'circle',
          align: 'left',
          itemWidth: 8,
          itemHeight: 8,
          itemGap: 20,
          borderRadius: 4,
          textStyle: {
            fontSize: 14,
          },
          x: 'center',
          y: 'bottom',
          data: ['线上成交', '线下成交'],
        },
        xAxis: {
          boundaryGap: true, //默认，坐标轴留白策略
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
            alignWithLabel: true,
          },
          data: [
          '11-01',
          '11-02',
          '11-03',
          '11-04',
          '11-05',
          '11-06',
          '11-07',
        ],
        },
        yAxis: {
          axisLine: {
            show: false,
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
              color: 'rgba(33,148,246,0.2)',
            },
          },
          axisTick: {
            show: false,
          },
        },
        series: [
          {
            name: '线上成交',
            type: 'line',
            symbol: 'circle',
            symbolSize: 7,
            lineStyle: {
              color: '#52C1F5',
              shadowBlur: 12,
              shadowColor: 'rgb(33,148,246,0.9)',
              shadowOffsetX: 1,
              shadowOffsetY: 1,
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(82, 193, 245, 0.5)',
                    },
                    {
                      offset: 1,
                      color: 'rgba(82, 193, 245, 0.3)',
                    },
                  ],
                  false
                ),
                shadowColor: 'rgba(82, 193, 245, 0.1)',
              },
            },
            itemStyle: {
              color: '#52C1F5',
              borderWidth: 1,
              borderColor: '#FFF',
            },

            data: [2000, 1200, 2000, 3400, 1000, 5000, 6000],
          },
          {
            name: '线下成交',
            type: 'line',
            symbol: 'circle',
            symbolSize: 7,
            lineStyle: {
              color: '#FF7A8C',
              shadowBlur: 12,
              shadowColor: 'rgb(33,148,246,0.9)',
              shadowOffsetX: 1,
              shadowOffsetY: 1,
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(255,122,140, 0.5)',
                    },
                    {
                      offset: 1,
                      color: 'rgba(255,122,140, 0.3)',
                    },
                  ],
                  false
                ),
                shadowColor: 'rgba(255,122,140, 0.1)',
              },
            },
            itemStyle: {
              color: '#FF7A8C',
              borderWidth: 1,
              borderColor: '#FFF',
            },

            data: [1000, 800, 1500, 2400, 1500, 2000, 3000],
          },
        ],
      }
