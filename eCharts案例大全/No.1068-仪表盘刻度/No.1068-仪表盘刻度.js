option ={
    backgroundColor:'www',
      grid: {
        top: '18%',
        left: '15%',
        right: '5%',
        bottom: '25%',
        // containLabel: true
      },
      title: {
        text: '{c|' + '利用率' + '}\n {a|' + 33 + '}{b|' + '%}',
        x: 'center',
        y: 'center',
        textStyle: {
          rich: {
            a: {
              fontSize: 22,
              color: '#EBEBEB',
              fontWeight: 700
            },
            b: {
              fontSize: 18,
              color: '#EBEBEB',
            },
            c: {
              fontSize: 14,
              color: '#ffffff',
              padding: [15, 0]
            }
          }
        }
      },

      tooltip: {
        formatter: function (params) {
          return '<span style="color: #000;">利用率：' + params.value + '%</span>';
        },
      },
      angleAxis: {
        max: 100,
        clockwise: false, // 逆时针
        // 隐藏刻度线
        show: false,
      },
      radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
      polar: [
        {
          center: ['50%', '50%'], //中心点位置
          radius: '120%', //图形大小
        },
      ],
      series: [
        {
          type: 'gauge',
          name: '仪表刻度',
          radius: '58%',
          startAngle: '0',
          endAngle: '-359.99',
          splitNumber: '50',
          center: ['50%', '50%'],
          pointer: {
            show: false
          },
          title: {
            show: false
          },
          detail: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              opacity: 0
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitLine: {
            show: true,
            length: 8,
            lineStyle: {
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                {
                  offset: 0,
                  color: '#16CEB9',
                },
                {
                  offset: 1,
                  color: '#6648FF',
                },
              ]),
              width: 1,
              type: 'solid',
            },
          },
        },
        {
          type: 'bar',
          z: 10,
          data: [33],
          showBackground: false,
          coordinateSystem: 'polar',
          roundCap: true,
          barWidth: 15,
          itemStyle: {
            borderRadius: '50%',
            normal: {
              opacity: 1,
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                {
                  offset: 0,
                  color: '#00DDFF',
                },
                {
                  offset: 1,
                  color: '#4346D3',
                },
              ]),
            },
          },
        },
      ],
    };
