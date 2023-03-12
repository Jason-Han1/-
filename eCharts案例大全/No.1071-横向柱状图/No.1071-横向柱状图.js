let   passengerOccupancy = {
    xData: ['天津', '北京', '上海', '广东', '新疆', '大连', '杭州', '西安', '成都', '开封'],
    yData: [4015, 3709, 3497, 2978, 2255, 2015, 1609, 1297, 978, 555],
  }
option = {
    backgroundColor:'www',
      grid: {
        left: '9%',
        right: '5%',
        bottom: '1%',
        top: '5%',
        containLabel: true,
      },
      // tooltip: {
      //   trigger: 'axis',
      //   axisPointer: {
      //     type: 'none',
      //   },
      //   formatter: function (params) {
      //     return (
      //       params[0].name +
      //       '<br/>' +
      //       "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
      //       params[0].value +
      //       '%'
      //     );
      //   },
      // },
      xAxis: {
        show: false,
        type: 'value',
      },
      yAxis: [
        {
          type: 'category',
          inverse: true,
          axisLabel: {
            align: 'left',
            margin: 120,
            show: true,
            textStyle: {
              color: '#60ACF7',
              fontSize: 18,
            },
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
          data: passengerOccupancy.xData,
        },
        {
          type: 'category',
          inverse: true,
          axisTick: 'none',
          axisLine: 'none',
          show: true,
          axisLabel: {
            margin: 20,
            textStyle: {
              color: '#60ACF7',
              fontSize: '18',
            },
            formatter: function (value) {
              return '{a|' + value.toLocaleString() + '}{b|' + ' 人}'
            },
            rich: {
              a: {
                fontSize: 18,
                color: '#60ACF7',
              },
              b: {
                fontSize: 14,
                color: '#60ACF7',
              },
            }
          },
          data: passengerOccupancy.yData,
        },
      ],
      series: [
        {
          name: '金额',
          type: 'bar',
          zlevel: 1,
          itemStyle: {
            normal: {
              barBorderRadius: 10,
              color: new echarts.graphic.LinearGradient(0, 0, 0.9, 0, [
                {
                  offset: 0,
                  color: 'rgba(96, 172, 247, 0)',
                },
                {
                  offset: 1,
                  color: 'rgba(96, 172, 247, 1)',
                },
              ]),
            },
          },
          barWidth: 10,
          data: passengerOccupancy.yData,
        },
        {
          name: '背景',
          type: 'bar',
          barWidth: 10,
          barGap: '-100%',
          data: [100, 100, 100, 100, 100],
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0.9, 0, [
                {
                  offset: 0,
                  color: 'rgba(255,255,255,0)',
                },
                {
                  offset: 1,
                  color: 'rgba(255,255,255,0.1)',
                },
              ]),
              barBorderRadius: 10,
            },
          },
        },
      ],
    };

