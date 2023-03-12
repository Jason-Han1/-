option = {
   series: [
        {
          name: '业务指标',
          type: 'gauge',
          detail: {
            formatter: '{value}℃ 舒适',
            color: '#222222',
          },
          axisLine: {            // 坐标轴线
            lineStyle: {       // 属性lineStyle控制线条样式
              width: 24,
              color: [ [ 0.45, '#2e95f7' ], [ 0.6, '#5abf39' ], [ 1, '#f6aa3f' ] ],
            },
            show: true,
          },
          axisTick: {
            show: false,
            splitNumber: 4
          },
          axisLabel: {
            show: true,
            distance: 12,
          },
          splitLine: {
            show: true,
            length:40,
            lineStyle:{
                color: 'auto',
            }
          },
          pointer: {
            show: true,
            length: '50%',
            width: '6',
          },
          itemStyle: {
            color: '#17324d'
          },
          radius: '100%',
          startAngle: 185,
          endAngle: -5,
          min: 0,
          max: 40,
          animation: true,
          data: [ { value: 10 } ]
        },
        {
          name: '小圆形',
          type: 'pie',
          hoverAnimation: false,
          legendHoverLink: false,
          tooltip: {
            show: false
          },
          center: [ '50%', '50%' ],
          radius: [ '3%' ],
          z: 20,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: false
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          animation: false,
          data: [ {
            value: 0,
            name: '1',
            itemStyle: {
              normal: {
                color: "red"
              }
            }
          }, {
            value: 100,
            name: '2',
            itemStyle: {
              normal: {
                color: '#17324d'
              }
            }
          } ]

        },
      ]
};

