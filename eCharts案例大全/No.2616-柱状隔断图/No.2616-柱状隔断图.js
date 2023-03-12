var myData = [834, 596, 386, 1012, 183, 609, 577]
option = {
        tooltip: {},
        animation: false,
        grid: {
          top: '10%',
          left: '10%',
          right: '10%',
          bottom: '18%',
        },
        xAxis: {
          data: ['文章数', '图片数', '视频数', '文档数', '评论数', '说说数', '收藏数'],
          axisLine: {
            show: true,
            lineStyle: {
              color: '#144B50',
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: '#63696A',
            fontSize: '12',
          },
        },
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              color: '#63696A',
              fontSize: '12',
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            // name: '主营业务',
            type: 'bar',
            barWidth: 20,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#FD7F0E',
                  },
                  {
                    offset: 1,
                    color: '#412c12',
                  },
                ]),
              },
            },
            data: myData,
            z: 10,
            zlevel: 0,
            label: {
              show: true,
              position: 'top',
              fontSize: 16,
              color: '#FD7F0E',
            },
          },
          {
            // 分隔
            type: 'pictorialBar',
            itemStyle: {
              normal: {
                color: '#07171a',
              },
            },
            symbolRepeat: 'fixed',
            symbolMargin: 2,
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [20, 2],
            symbolPosition: 'start',
            symbolOffset: [0, -1],
            data: myData,
            width: 25,
            z: 0,
            zlevel: 1,
          },
        ],
      }