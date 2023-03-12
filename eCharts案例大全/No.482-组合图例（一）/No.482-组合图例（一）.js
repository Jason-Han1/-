 var xData = (function () {
        var data = ['1日', '2日', '3日', '4日', '5日', '6日', '7日']
        return data
      })()
      
 option = {
        legend: {
          data: ['到店', '救援', '上门', '完单率'],
          left: '18%',
          top: 30,
          itemWidth: 16.7,
          itemHeight: 7.6,
          type: 'plain',
          textStyle: {
            color: 'RGBA(154, 209, 253, 1)',
          },
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            textStyle: {
              color: '#fff',
            },
          },
        },
        grid: {
          borderWidth: 0,
          top: 100,
          bottom: 80,
          left: 55,
          right: 45,
          textStyle: {
            color: '#fff',
          },
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            axisLine: {
              lineStyle: {
                color: 'rgba(255,255,255,.5)',
              },
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitArea: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              color: 'rgba(255,255,255,0.7)',
              fontSize: 10,
            },
            data: xData,
          },
        ],
        yAxis: [
          {
            name: '工单量',
            nameTextStyle: {
              color: '#FDFDFD',
              padding: [0, 0, 0, -50],
            },
            nameGap: 15,
            type: 'value',
            splitLine: {
              show: true,
              lineStyle: {
                type: 'dashed',
                color: 'RGBA(3, 75, 97, 1)',
              },
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              color: 'rgba(255,255,255,0.5)',
              fontSize: 10,
            },
            splitArea: {
              show: false,
            },
          },
          {
            name: '完单率',
            nameTextStyle: {
              color: '#FDFDFD',
              padding: [0, 0, 0, 35],
            },
            type: 'value',
            splitLine: {
              show: false,
            },
            min: 0,
            axisLabel: {
              interval: 0,
              color: 'rgba(255,255,255,0.5)',
              fontSize: 10,
              formatter: '{value}%',
            },
          },
        ],
        series: [
          {
            name: '到店',
            type: 'bar',
            stack: '1',
            barMaxWidth: 15,
            barGap: '10%',
            itemStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#2764CA', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#6D9EEE', // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
                opacity: 1,
              },
            },
            data: [1160, 1541, 458, 1445, 1447, 1586, 1641, 854, 1747, 1887],
          },

          {
            name: '救援',
            type: 'bar',
            stack: '1',
            itemStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#FF8B77', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#FE6AAC', // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
                opacity: 0.9,
                barBorderRadius: 0,
              },
            },
            data: [1160, 1541, 458, 1445, 1447, 1586, 1641, 854, 1747, 1887],
          },
          {
            name: '上门',
            type: 'bar',
            stack: '1',
            barMaxWidth: 15,
            barGap: '10%',
            itemStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#FFC130', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#FFDB68', // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
                opacity: 1,
              },
            },
            data: [1160, 1541, 1458, 1445, 1447, 1586, 1641, 854, 1747, 1887],
          },
          {
            name: '完单率',
            type: 'line',
            yAxisIndex: 1,
            symbolSize: 0,
            symbol: 'emptyCircle',
            itemStyle: {
              normal: {
                color: '#FFC130',
                barBorderRadius: '100%',
              },
              borderWidth: 0,
            },
            smooth: true,
            lineStyle: {
              normal: {
                width: 3,
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#FF8B77', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#FE6AAC', // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
              },
            },
            data: [5, 10, 6, 12, 5, 21, 20, 12],
          },
        ],
      }