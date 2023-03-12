var dataArr = 60;

option = {
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%',
        },
        series: [
            //指针
          {
            type: 'gauge',
            center: ['50%', '60%'],
            radius: '100%',
            z: 4,
            splitNumber: 10,
            axisLine: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            detail: {
              show: false,
            },
            title: {
              //标题
              show: false,
            },
            data: [
              {
                name: '',
                value: 60,
              },
            ],
            itemStyle: {
              normal: {
                color: '#1492ff',
              },
            },
            pointer: {
              show: true,
              length: '110%',
              radius: '20%',
              width: 4, //指针粗细
            },
            animationDuration: 4000,
          },
          {
            type: 'gauge',
            startAngle: 225,
            endAngle: -45,
            radius: '75%',
            center: ['50%', '60%'],
            axisLine: {
              lineStyle: {
                width: 14,
                color: [[1, '#cef0ff']],
              },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            itemStyle: {
              color: '#fff',
            },
            detail: {
              formatter: function (value) {
                if (value > 5) {
                  return "正常";
                } else {
                  return "警告";
                }
              },
              offsetCenter: [0, "90%"],
              color: "#1492FF",
              textStyle: {
                fontSize: 22,
              },
            },
            data: [
              {
                value: 60,
              },
            ],
          },
          {
            name: '外部刻度',
            type: 'gauge',
            center: ['50%', '60%'],
            radius: '114%',
            min: 0, //最小刻度
            max: 100, //最大刻度
            splitNumber: 10, //刻度数量
            startAngle: 225,
            endAngle: -45,
            axisLine: {
              show: true,
              lineStyle: {
                width: 14,
                color: [
                  [
                    1,
                    new echarts.graphic.LinearGradient(
                        0,
                        0,
                        1,
                        0,
                        [
                          {
                            offset: 0.1,
                            color: '#FF8116', // 50% 处的颜色
                          },
                          {
                            offset: 0.35,
                            color: '#FFE200', // 50% 处的颜色
                          },
                          {
                            offset: 0.7,
                            color: '#2ED568', // 40% 处的颜色
                          },
                          {
                            offset: 0.9,
                            color: '#14B7FF', // 50% 处的颜色
                          },
                        ],
                        false
                    ),
                  ],
                ],
              },
            }, //仪表盘轴线
            axisLabel: {
              show: false,
            }, //刻度标签。
            axisTick: {
              show: false,
              splitNumber: 5,
              lineStyle: {
                color: '#42E5FB', //用颜色渐变函数不起作用
                width: 2,
              },
              length: 8,
            },
            splitLine: {
              distance: 16,
              show: true,
              length: 10,
              lineStyle: {
                width: 1,
                color: '#fff', //用颜色渐变函数不起作用
              },
            },
            pointer: {
              show: true,
            },
          },
        ],
      };
