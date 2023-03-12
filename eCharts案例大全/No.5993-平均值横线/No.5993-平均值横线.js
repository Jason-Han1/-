option = {
      tooltip: {
        trigger: 'item',
        backgroundColor: '#999999',
      },
      title: {
        text: '',
        top: 15,
        left: 50,
        textStyle: {
          color: '#4D4D4D',
          fontSize: 14,
        },
      },
      legend: {
        data:['本市同行业均值', '园区同行业均值'],
        itemWidth: 20,
        itemHeight: 2,
        itemGap: 10,
        orient: 'vertical',
        right: 20,
        top: 20,
      },
      grid: {
        top: '70px',
        left: '36px',
        right: '36px',
        bottom: '70px',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: true,
          axisLabel: {
            interval: 0,
            height: '13',
            fontSize: '10',
            fontFamily: 'Roboto-Regular,Roboto',
            fontWeight: '400',
            color: 'rgba(56,49,77,1)',
            lineHeight: '13',
          },
          axisTick: {
            show: true,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#E2E2E2',
            },
          },
          data: ['园区', '企业'],
        },
      ],
      yAxis: {
        type: 'value',
        max:10,
        axisTick: {
          show: false,
        },
        axisLabel: {
          interval: 0,
          height: '13',
          fontSize: '10',
          fontFamily: 'Roboto-Regular,Roboto',
          fontWeight: '400',
          color: 'rgba(56,49,77,1)',
          lineHeight: '13',
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#E2E2E2',
          },
        },
        splitLine: {
          show: false,
        },
      },
      series: [
        {
          name: '园区同行业均值',
          type: 'bar',
          barWidth: '40px',
          stack: 'A',
          zlevel: 100,
          label: {
            normal: {
              show: true,
              position: 'top',
            },
          },
          itemStyle: {
            normal: {
              color: '#57B27B',
            },
          },
          markLine: {
            symbol: 'none',
            data: [
              {
                yAxis: 2,
                lineStyle: {
                  color: '#57B27B',
                  type: 'solid',
                },
              },
            ],
            silent: true,
          },
          data: [
            {
              value: 2,
              itemStyle: {
                color: 'rgba(0,0,0,0)',
              },
              label: {
                show: true,
                position: 'top',
                color: '#F9B8B8',
                offset: [0, 25],
              },
            },
            {
              value:8,
              itemStyle: {
                color: '#57B27B',
              },
            },
          ],
        },
        {
          name: '本市同行业均值',
          type: 'bar',
          barWidth: '40px',
          stack: 'A',
          zlevel: 100,
          label: {
            normal: {
              show: true,
              position: 'top',
            },
          },
          itemStyle: {
            normal: {
              color: '#F9B8B8',
            },
          },
          markLine: {
            symbol: 'none',
            data: [
              {
                yAxis: 3,
                lineStyle: {
                  color: '#F9B8B8',
                  type: 'solid',
                },
              },
            ],
            silent: true,
          },
          data: [
            {
              value: 3,
              itemStyle: {
                color: '#F9B8B8',
              },
            },
            {
              value: 0,
              itemStyle: {
                color: 'rgba(0,0,0,0)',
              },
            },
          ],
        },
      ],
    };