 option = {
     backgroundColor:'#03213E',
        title: {
          text: '联合监管',
          right: 20,
          top: 0,
          textStyle: {
            color: 'rgba(3,215,243,1)',
            fontSize: 14,
            fontWight: 400,
          },
        },
        length: ['直接访问', '背景'],
        tooltip: {
          type: 'item',
        },
        xAxis: {
          type: 'value',
          position: 'top',
          splitLine: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            //  改变x轴字体颜色和大小
            textStyle: {
              color: 'rgba(255,255,255,.4)',
              fontSize: 12,
            },
          },
        },
        grid: {
          left: 80,
        },
        yAxis: {
          type: 'category',
          data: ['使用率指数', '效能指数', '安全指数', '减排指数'],
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
            //  改变y轴颜色
            lineStyle: {
              color: '#2c4054',
            },
          },
          axisLabel: {
            //  改变y轴字体颜色和大小
            //formatter: '{value} m³ ', //  给y轴添加单位
            textStyle: {
              color: 'rgba(255,255,255,1)',
              fontSize: 12,
            },
          },
        },
        series: [
          {
            type: 'bar',
            barWidth: 16,
            showBackground: true,
            backgroundStyle: {
              color: '#2f788f',
            },
            itemStyle: {
              normal: {
                label: {
                  show: false, //开启显示
                  textStyle: {
                    //数值样式
                    color: '#FFFFFF',
                    fontSize: 16,
                    fontWeight: 600,
                  },
                },
                color: '#05d3ee',
              },
            },
            data: [19, 29, 39, 81],
          },
        ],
      }