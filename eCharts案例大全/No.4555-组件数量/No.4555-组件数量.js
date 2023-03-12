let obj = {
      title: '报表组件数量',
      min: 0,
      max: 12,
      value: 10,
      color: {
        inner: [255, 155, 38],
        external: [0, 153, 255],
      },
    };
    let { title, min, max, value, color } = obj;
    let { inner, external } = color;
    let innerColor = `rgba(${inner[0]},${inner[1]},${inner[2]},1)`;
    let externalColor = `rgba(${external[0]},${external[1]},${external[2]},1)`;
     option = {
         backgroundColor:'black',
      grid: {
        top: '0',
        left: '10%',
        right: '10%',
        containLabel: true,
      },
      title: {
        text: title, //strInsert(title, 3),
        x: 'left',
        left: 5,
        bottom: 60,
        textStyle: {
          color: 'white',
          fontSize: 18,
          fontWeight: 'normal',
        },
      },
      tooltip: {},
      series: [
        {
          name: '内层数据刻度',
          type: 'gauge',
          center: ['50%', '50%'],
          radius: '85%',
          startAngle: 180,
          endAngle: -60,
          max,
          splitNumber: 6,
          axisLine: {
            // 坐标轴线
            show: true,
            lineStyle: {
              width: 0,
              shadowBlur: 0,
              color: [
                [0, externalColor],
                [1, externalColor],
              ],
            },
          },
          axisTick: {
            show: true,
            lineStyle: {
              color: 'auto',
              width: 1,
            },
            length: 5,
            splitNumber: 10,
          },
          splitLine: {
            // 分隔线
            length: 10, // 属性length控制线长
            lineStyle: {
              // 属性lineStyle（详见lineStyle）控制线条样式
              color: 'auto',
              width: 4,
            },
          },
          axisLabel: {
            color: 'white',
            fontSize: 14,
          },
          itemStyle: {
            color: innerColor,
          },
          data: [{ value }],
          detail: {
            show: true,
            offsetCenter: ['0', '-20%'],
            fontSize: 10,
            color: innerColor,
            show: false,
          },
          pointer: {
            width: 2,
            length: '90%',
          },
          animationDuration: 4000,
        },
        {
          name: '最内层线',
          type: 'gauge',
          radius: '30%',
          center: ['50%', '50%'],
          startAngle: 180,
          endAngle: -60,
          axisLine: {
            show: false,
            lineStyle: {
              opacity: 0,
            },
          },
          splitLine: {
            show: false,
            lineStyle: {
              opacity: 0,
            },
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            length: 3,
            splitNumber: 3,
            lineStyle: {
              color: innerColor,
              width: 1,
              type: 'solid',
            },
          },
          detail: {
            show: false,
          },
          pointer: {
            show: false,
          },
        },
        {
          //指针上的圆
          type: 'pie',
          tooltip: {
            show: false,
          },
          hoverAnimation: false,
          legendHoverLink: false,
          radius: ['0%', '14%'],
          center: ['50%', '50%'],
          label: {
            normal: {
              show: false,
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
          },
          data: [
            {
              value: 120,
              itemStyle: {
                normal: {
                  color: innerColor,
                },
              },
            },
          ],
        },
        {
          //指针上的圆
          type: 'pie',
          tooltip: {
            show: false,
          },
          hoverAnimation: false,
          legendHoverLink: false,
          radius: ['10%', '10%'],
          center: ['50%', '50%'],
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
          data: [
            {
              value: 120,
              itemStyle: {
                normal: {
                  borderColor: 'black',
                  borderWidth: 3,
                  color: innerColor,
                },
              },
            },
          ],
        },
      ],
    };