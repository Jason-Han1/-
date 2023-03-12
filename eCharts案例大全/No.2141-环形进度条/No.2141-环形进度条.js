option = {

        title: [{
          text: '62.9%',
          x: 'center',
          y: 'center',
          // top: '47%',

          textStyle: {
            fontSize: '20',
            color: '#000',
            fontFamily: 'DINAlternate-Bold, DINAlternate',
            fontWeight: '600',
          },
        }],

        polar: {
          radius: ['0%', '100%'],
          center: ['50%', '50%'],
        },
        angleAxis: {
          max: 100,
          clockwise: false, // 逆时针
          // 隐藏刻度线
          show: false,
          startAngle: 0, // startAngle表示起始角度
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
        series: [
          {
            name: '',
            type: 'bar',
            //roundCap: true,
            barWidth: '14%',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(66, 66, 66, .3)',
            },
            data: [88],
            coordinateSystem: 'polar',

            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: '#3196fa',
                  },
                  {
                    offset: 1,
                    color: '#3196fa',
                  },
                ]),
            },
          }
        ],

      }