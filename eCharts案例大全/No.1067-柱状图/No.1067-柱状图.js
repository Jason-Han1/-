let   inboundTrends = {
    width: 8,
    barBg: ['#31B3FF', '#48F8AF'],
    textColor: '#A7E4FD',
    nameColor: '#A7E4FD',
    yName: '车次', //
    xData: ['19', '20', '21', '22', '23', '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
    yData: [50, 110, 120, 160, 100, 50, 50, 110, 120, 160, 100, 50, 50, 110, 120, 160, 100, 50, 50, 110, 120, 160, 100, 50],
  };

option ={
    backgroundColor:'ww',
      grid: {
        top: '15%',
        right: '7%',
        left: '2%',
        bottom: '5%',
        containLabel: true,
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          lineStyle: {
            type: 'solid',
          },
          // 坐标轴指示器，坐标轴触发有效
          type: 'line', // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
          let str = params[0].name + '<br />';
          params.forEach((item) => {
            if (item.seriesType !== 'line') {
              let a =
                '<span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;left:5px;background-color:#2DECF5;"></span>' +
                item.value +
                '<br />';
              let b = '';
              let c = item.value ? a : b;
              str += c;
            }
          });
          return str;
        },
      },
      xAxis: [
        {
          type: 'category',
          offset: 10,
          color: '#59588D',
          //   boundaryGap:false,
          data: inboundTrends.xData,
          axisLabel: {
            interval: 0,
            margin: 0,
            color: inboundTrends.textColor,
            textStyle: {
              fontSize: 16,
            },
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#538EC1',
            },
          },
          axisTick: {
            show: false,
          },
        },
      ],
      yAxis: [
        {
          name: '人/时间',
          nameTextStyle: {
            color: inboundTrends.nameColor,
            fontSize: 16,
          },
          axisLabel: {
            formatter: '{value}',
            color: 'red',
            textStyle: {
              fontSize: 16,
              color: inboundTrends.textColor,
            },
          },
          axisLine: {
            lineStyle: {
              color: '#538EC1',
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
      ],
      series: [
        {
          data: [50, 110, 120, 160, 100, 50],
          type: 'line',
          symbolSize: 0,
          symbol: 'circle',
          markArea: {
            silent: true,
            itemStyle: {
              opacity: 0.3,
              color: 'rgba(255,255,255,0.5)',
            },
            data: [
              [
                {
                  xAxis: '19',
                },
                {
                  xAxis: '22',
                },
              ],
            ],
          },
          lineStyle: {
            normal: {
              width: 4,
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'transparent', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'transparent', // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
          },
          markLine: {
            lineStyle: {
              type: 'dashed',
              color: '#FF0000',
            },
            symbol: 'circle', //标记的图形为实心圆
            symbolSize: 0, //标记的大小
            label: {
              show: true,
              color: '#FF0000',
              fontSize: 14,
              fontWeight: 'bold',
              distance: 8,
            },
            data: [{ type: 'average', name: '均值', symbol: 'none' }],
          },
        },
        {
          // name: inboundTrends.legendName[0], //上面黄色的
          yAxisIndex: 0,
          type: 'bar',
          barWidth: 8,
          stack: 'one',
          itemStyle: {
            normal: {
              color: function (params) {
                if(params.name ==inboundTrends.xData[22] || params.name ==inboundTrends.xData[23]){
                  return inboundTrends.barBg[1]
                }else {
                  return inboundTrends.barBg[0]
                }
              },
              barBorderRadius: [8, 8, 8, 8],
            },
          },
          data: inboundTrends.yData,
        },
      ],
    };