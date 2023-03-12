
  option={
        legend: {
          y: '6%',
          orient: 'horizontal',
          left: 'right',
          textStyle: {
            fontSize: 12,
            color: '#333'
          },
          data: ['替代文字']
        },
        tooltip: {
          trigger: 'item',
          position: 'top',
          formatter: '{c}'
        },
        grid: {
          x: '9%',
          y: '20%',
          x2: '3%',
          y2: '15%'
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            data: [
              '1',
              '2',
              '3',
              '4',
              '5',
              '6',
              '7',
              '8',
              '9',
              '10',
              '11',
              '12'
            ],
            axisLine: {
              show: true,
              lineStyle: {
                color: '#d9d9d9',
                width: 1
              }
            },
            axisTick: {
              show: true,
              lineStyle: {
                color: '#d9d9d9',
                width: 1
              }
            },
            axisLabel: {
              show: true,
              interval: 0,
              textStyle: {
                color: '#666666',
                fontSize: 10
              }
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: '#d9d9d9',
                width: 1
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            min: 0,
            max: 5,
            // interval: 2,
            axisLine: {
              show: true,
              lineStyle: {
                color: '#d9d9d9',
                width: 1
              }
            },
            axisLabel: {
              show: true,
              margin: 15,
              // formatter: '{value}件',
              textStyle: {
                color: '#666',
                fontSize: 10
              }
            },
            splitArea: {
              show: true,
              areaStyle: {
                color: ['#FFFFFF', '#f5f6fa']
              }
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: '#E0F4FF'
              }
            }
          }
        ],
        series: [
          {
            name: '舆情统计',
            type: 'bar',
            barWidth:13,
            data: [3.5, 2.3, 4.4, 1.8, 2.8, 0.8, 2.8, 2.2, 1.2, 3.6, 3, 2.2],
            itemStyle: {
              normal: {
                color: '#2ec054'
              }
            },
            label:{
                show:true,
                position:'top',
                backgroundColor:{
                    
                }
            }
          }
        ]
      }
  