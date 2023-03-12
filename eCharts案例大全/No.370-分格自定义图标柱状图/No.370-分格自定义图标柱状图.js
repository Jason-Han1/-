option = {
      grid: [
        {
          //设置边距
          left: 30,
          bottom: 50,
          top: 20,
          right: 20,
        },
      ],
      dataZoom: [
        //滑动条
        {
          show: false, //是否显示滑动条
          type: "slider", // 这个 dataZoom 组件是 slider 型 dataZoom 组件
          startValue: 0, // 从头开始。
          endValue: 8, // 一次性展示6个。
        },
      ],

      xAxis: {
        type: "category",
        data: ['1','2','3','4','5'],
        axisLabel: {
          //X轴文字样式
          color: "black",
          fontSize: 12,
          interval: 0,
          rotate: 90, //调整数值改变倾斜的幅度（范围-90到90）
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          //隐藏刻度
          show: false,
        },
        axisLine: {
          //y轴
          show: false,
        },
      },
      yAxis: {
        type: "value",
        axisTick: {
          //隐藏刻度
          show: false,
        },
        splitLine: {
          //隐藏刻度
          show: false,
        },
        axisLabel: {
          //Y轴文字
          color: "black",
          fontSize: 12,
        },
        axisLine: {
          //y轴
          show: false,
        },
      },
      series: [
        {
          data: [100,200,150,200,130,200],
          type: "pictorialBar",
          symbol:  "path://M8.247197 8.247197m288.651889 0l1253.57392 0q288.651889 0 288.651889 288.651889l0 0q0 288.651889-288.651889 288.65189l-1253.57392 0q-288.651889 0-288.651889-288.65189l0 0q0-288.651889 288.651889-288.651889Z",
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: "rgba(38, 98, 240, 1)",
                },
                {
                  offset: 1,
                  color: "rgba(0, 119, 255, 1)",
                },
              ]),
              label: {
                show: true, //开启显示
                position: "top", //在上方显示
                textStyle: {
                  //数值样式
                  color: "#fff",
                  fontSize: 10,
                },
              },
            },
          },
          animationEasing: "elasticOut",
          symbolSize: ["40%", "13%"],
          symbolMargin: "4", //图形垂直间隔
          symbolRepeat: "fixed",
          symbolClip: true,
        },
      ],
    }