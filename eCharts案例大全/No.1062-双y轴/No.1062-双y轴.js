let   hourPassengerTaxi = {
    legend: [ '22', '11'],
    xData: ['19', '20', '21', '22', '23','00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
    yData: [
      [35, 12, 2, 14, 25, 16, 10, 10, 10, 23, 12, 15, 3, 7, 12, 12, 12, 13, 13, 13, 14, 14, 15, 15],
      [150, 120, 170, 140, 300, 160, 110, 150, 120, 170, 140, 300, 160, 110, 150, 120, 170, 140, 400, 160, 110, 100, 100, 100],
    ],
  };

option = {
    backgroundColor:'#000',
      grid: {
        top: '25%',
        bottom: '12%',
        left: '12%',
        right: '10%',
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: [
        {
          itemWidth: 14,
          itemHeight: 14,
          left: 'center',
          top: '2%',
          itemGap: 20, //每条图例的距离
          data: [
            {
              name: hourPassengerTaxi.legend[0],
              textStyle: {
                color: '#60ACF7',
                fontSize: 14,
              },
            },
            {
              name: hourPassengerTaxi.legend[1],
              textStyle: {
                color: '#60ACF7',
                fontSize: 14,
              },
            },
          ],
        },
      ],
      xAxis: {
        data: hourPassengerTaxi.xData,
        axisLine: {
          show: true, //隐藏X轴轴线
          lineStyle: {
            color: 'rgba(255,255,255,0.4)',
            width: 1,
          },
        },
        axisTick: {
          show: false, //隐藏X轴刻度
        },
        axisLabel: {
          show: true,
          interval: hourPassengerTaxi.interval,
          textStyle: {
            color: '#60ACF7', //X轴文字颜色
            fontSize: 14,
          },
        },
        splitArea: {
          show: false,
        },
      },
      yAxis: [
        {
          type: 'value',
          name: '班次',
          nameTextStyle: {
            align: 'left',
            color: '#60ACF7',
            fontSize: 14,
          },
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,0.4)',
              width: 1,
            },
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#60ACF7',
              fontSize: 14,
            },
          },
        },
        {
          type: 'value',
          name: '人数',
          nameTextStyle: {
            align: 'right',
            color: '#60ACF7',
            fontSize: 14,
          },
          position: 'right',
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,0.4)',
              width: 1,
            },
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#60ACF7',
              fontSize: 14,
            },
          },
        },
      ],
      series: [
        {
          name: hourPassengerTaxi.legend[1],
          type: 'line',
          yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
          smooth: false, //平滑曲线显示
          symbol: 'circle', //标记的图形为实心圆
          symbolSize: 0, //标记的大小
          itemStyle: {
            //折线拐点标志的样式
            color: '#FAAD14',
            width: 2,
          },
          lineStyle: {
            color: '#FAAD14',
            width: 2,
          },
          data: hourPassengerTaxi.yData[1],
        },
        {
          name: hourPassengerTaxi.legend[0],
          type: 'bar',
          barWidth: 6,
          itemStyle: {
            normal: {
              barBorderRadius: 8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#2BF3F5',
                },
                {
                  offset: 1,
                  color: 'rgba(43, 243, 245, 0)',
                },
              ]),
              // borderWidth: 2,
            },
          },
          markArea: {
            silent: true,
            itemStyle: {
              opacity: 0.3,
              color: 'rgba(255,255,255,0.4)',
            },
            data: [
              [
                {
                  xAxis: '19',
                },
                {
                  xAxis: '00',
                },
              ],
            ],
          },
          data: hourPassengerTaxi.yData[0],
        },
      ],
    };