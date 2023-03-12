option = {
        grid: {
          top: '10%',
          left: '15%',
          right: '8%',
          bottom: '14%',
        },
        tooltip: {
          show: false,
        },
        xAxis: {
          data: ['咨询', '投诉', '户内', '公区'],
          axisLine: {
            lineStyle: {
              color: 'rgba(0, 164, 255, 0.2)', //底部边框颜色
            },
          },
          axisTick: { //y轴刻度线
            show: false
          },
          axisLabel: {
            textStyle: {
              color: 'rgba(152, 191, 251, 1)', //底部文字颜色
              fontSize: 12,
            },
          },
        },
        yAxis: [
          {
            type: 'value',
            splitLine: {
              show: false,
              lineStyle: {
                color: 'rgba(255,255,255,0.2)', //网格线的颜色
                width: 1,
                type: 'solid',
              },
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: 'rgba(0, 164, 255, 0.2)', //左边框颜色
              },
            },
            axisTick: { //y轴刻度线
              show: false
            },
            axisLabel: {
              show: true,
              fontSize: 12,
              textStyle: {
                color: 'rgba(152, 191, 251, 1)', //左文字颜色
              },
              formatter: '{value}万',
            },
          },
        ],
        series: [
          {
            name: '',
            type: 'bar',
            barWidth: 25,
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(0,63,119,0)',
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    // color: '#00FFE3',//渐变1
                    color: 'rgba(21,136,209,1)', //渐变1
                  },
                  {
                    offset: 1,
                    // color: '#4693EC',//渐变2
                    color: 'rgba(21,136,209,1)', //渐变2
                  },
                ]),
              },
            },
            data: [20, 70, 60, 40],
            z: 1,
          },
          {
            name: '',
            type: 'bar',
            barWidth: 25,
            barGap: '-100%',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(0,63,119,0)',
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    // color: '#00FFE3',//渐变1
                    color: '#133771', //渐变1
                  },
                  {
                    offset: 1,
                    // color: '#4693EC',//渐变2
                    color: '#133771', //渐变2
                  },
                ]),
              },
            },
            data: [35, 95, 75, 55],
            z: 0,
          },
          {
            type: 'pictorialBar',
            barWidth: 25,
            itemStyle: {
              normal: {
                color: '#0d1d4d', //数据的间隔颜色
              },
            },
            symbolRepeat: 'fixed',
            symbolMargin: 3,
            symbol: 'rect',
            symbolSize: [25, 4],
            symbolPosition: 'end',
            symbolOffset: [0, 0],
            data: [20, 90, 60, 40],
            z: 2,
            zlevel: 0,
          },
          {
            type: 'pictorialBar',
            barWidth: 25,
            itemStyle: {
              normal: {
                color: 'transparent',
              },
            },
            symbolMargin: 3,
            symbol: 'rect',
            symbolSize: [25, 4],
            data: [20, 70, 60, 40],
            z: 2,
            zlevel: 0,
            label: {
              show: true,
              position: 'top',
              fontSize: 13,
              color: 'rgba(255, 255, 255, 1)',
              formatter: function (params) {
                return params.value
              },
            },
          },
          {
            type: 'pictorialBar',
            barWidth: 25,
            itemStyle: {
              normal: {
                color: 'transparent',
              },
            },
            symbolMargin: 3,
            symbol: 'rect',
            symbolSize: [25, 4],
            data: [35, 95, 75, 55],
            z: 2,
            zlevel: 0,
            label: {
              show: true,
              position: 'top',
              fontSize: 13,
              color: 'rgba(0, 164, 255, 1)',
              formatter: function (params) {
                return params.value
              },
            },
          },
        ],
      }