 const title = ['北京一区','北京二区','北京三区','北京四区'],
       v1s = [110,156,223,123],  v2s = [89,112,223,234],
       v3s = [120,190,234,236],  v4s = [123,256,234,347],
       v5s = [100,239,112,178],  v6s = [78,188,248,123];
option = {
        legend: {
          data: ['堂食实收金额(元)', '外卖实收金额(元)'],
          bottom: 10,
          itemHeight: 7,
          itemWidth: 7,
          icon: 'rect',
          itemStyle: {
            color: 'inherit'
          },
          textStyle: {
            color: '#333333',
            fontSize: 10
          }
        },
        grid: {
          top: 40,
          left: 60,
          bottom: 85,
          right: 10
        },
        xAxis: [
          {
            axisTick: {
              length: 40,
              lineStyle: {color: '#ccc'}
            },
            axisLine: {
              lineStyle: {color: 'transparent'}
            },
            data: title
          },
          {
            name: '',
            position: 'bottom',
            offset: 20,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: '#535252',
              fontSize: 11
            },
            data: title
          },
        ],
        yAxis: {
          axisLine: {
            lineStyle: {color: '#ccc'}
          },
          axisLabel: {
            textStyle: {
              color: '#333',
              fontSize: 10
            }
          }
        },
        series: [
          {
            type: 'bar',
            name: '堂食实收金额(元)',
            stack: 'SS',
            data: v1s,
            barGap: '15%',
            itemStyle: {
              color: 'rgba(48,103,131,0.4)'
            },
            label: {
              color: 'blue',
              normal: {
                show: true,
                position: 'bottom',
                textStyle: {
                  color: '#000',
                  fontSize: 10
                },
                formatter: '去年同期',
              }
            }
          },
          {
            type: 'bar',
            name: '外卖实收金额(元)',
            stack: 'SS',
            barGap: '15%',
            itemStyle: {
              color: 'rgba(235,125,49,.4)'
            },
            data: v2s,
          },
          {
            type: 'bar',
            stack: 'AA',
            barGap: '15%',
            name: '堂食实收金额(元)',
            itemStyle: {
              color: 'rgba(48,103,131,.7)'
            },
            data: v3s,
            label: {
              normal: {
                show: true,
                position: 'bottom',
                textStyle: {
                  color: '#000',
                  fontSize: 10
                },
                formatter: '上月同期',
              }
            }
          },
          {
            type: 'bar',
            stack: 'AA',
            barGap: '15%',
            name: '外卖实收金额(元)',
            itemStyle: {
              color: 'rgba(235,125,49,.7)'
            },
            data: v4s,
          },
          {
            type: 'bar',
            stack: 'NN',
            barGap: '15%',
            name: '堂食实收金额(元)',
            itemStyle: {
              color: 'rgba(48,103,131,1)'
            },
            data: v5s,
            label: {
              normal: {
                show: true,
                position: 'bottom',
                textStyle: {
                  color: '#000',
                  fontSize: 10
                },
                formatter: '本期',
              }
            }
          },
          {
            type: 'bar',
            stack: 'NN',
            barGap: '15%',
            name: '外卖实收金额(元)',
            itemStyle: {
              color: '#eb7d31'
            },
            data: v6s,
          }
        ]
      };
