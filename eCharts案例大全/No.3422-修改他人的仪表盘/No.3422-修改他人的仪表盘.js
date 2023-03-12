var dataArr = 50;
var colorSet = {
    color: '#fff'
};
option = {
        backgroundColor: "rgba(0,0,0,1)",
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%",
        },
        title: {
          show: true,
          text: '达成率',
          textStyle: {
            color: colorSet.color,
            fontWeight: "normal",
            fontSize: 16,
          },
          bottom: 200,
          textAlign: "center",
          left: "50%",
        },
        series: [
          //第一层
          //实心线条
          {
            name: "最最外部进度条",
            type: "gauge",
            radius: "80%",
            splitNumber: 100,
            axisLine: {
              lineStyle: {
                color: [[1, "rgba(2, 100, 127,0.2)"]],
                width: 40, //宽度
                shadowColor: "rgba(145,207,255,.0)",
                shadowBlur: 6,
                shadowOffsetX: 0,
              },
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
            itemStyle: {
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
                name: "title",
                value: dataArr,
              },
            ],
            pointer: {
              show: false,
            },
            animationDuration: 4000,
          },
          //刻度条
          {
            name: "外部刻度",
            type: "gauge",
            //  center: ['20%', '50%'],
            radius: "82.5%",
            min: 0, //最小刻度
            max: 100, //最大刻度
            splitNumber: 10, //刻度数量
            startAngle: 225,
            z: 5,
            endAngle: -45,
            axisLine: {
              show: false,
              lineStyle: {
                width: 1,
                color: [[1, "rgba(0,0,0,0)"]],
              },
            }, //仪表盘轴线
            axisLabel: {
              show: true,
              color: "rgba(255,255,255,1)",
              fontSize: 30,
              distance: 0,
              //显示的刻度值
              formatter: function (v) {
                switch (v + "") {
                  case "0":
                    return "0";
                  case "20":
                    return "20";
                  case "40":
                    return "40";

                  case "60":
                    return "60";

                  case "80":
                    return "80";

                  case "100":
                    return "100";
                }
              },
            }, //刻度标签。
            axisTick: {
              show: true,
              splitNumber: 7,
              lineStyle: {
                color: "#42E5FB", //用颜色渐变函数不起作用
                width: 2,
              },
              length: 0, //不显示的刻度长度
            }, //刻度样式
            splitLine: {
              show: true,
              length: 40, //显示的刻度长度
              lineStyle: {
                color: "#42E5FB", //用颜色渐变函数不起作用
              },
            }, //分隔线样式
            detail: {
              show: false,
            },
            pointer: {
              show: false,
            },
          },
          //第二层
          //实心线条
          {
            name: "最外部进度条",
            type: "gauge",
            radius: "70%",
            splitNumber: 100,
            axisLine: {
              lineStyle: {
                color: [[1, "#02647f"]],
                width: 5,
                shadowColor: "rgba(145,207,255,.5)",
                shadowBlur: 6,
                shadowOffsetX: 0,
              },
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
            itemStyle: {
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
                name: "title",
                value: dataArr,
              },
            ],
            pointer: {
              show: false,
            },
            animationDuration: 4000,
          },
          //第三层扇形过渡
          {
            name: "内部进度条",
            type: "gauge",
            radius: "70%", //半径
            z: 4,
            splitNumber: 10,
            axisLine: {
              lineStyle: {
                color: [
                  //从外道里渐变
                  [
                    dataArr / 100,
                    new echarts.graphic.LinearGradient(0, 0, 1, 1, [
                      {
                        offset: 0,
                        color: "rgba(52, 248, 232,0.8)",
                      },
                      {
                        offset: 0.5,
                        color: "rgba(52, 248, 232,0.5)",
                      },
                      {
                        offset: 1,
                        color: "rgba(52, 248, 232,0.1)",
                      },
                    ]),
                  ],
                  [1, "rgba(28,128,245,.0)"],
                ],
                width: 255, //扇形宽度
              },
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
            itemStyle: {
              show: false,
            },
            //显示的文字
            detail: {
              formatter: function (value) {
                if (value !== 0) {
                  var num = Math.round(value);
                  return parseInt(num).toFixed(0) + "%";
                } else {
                  return 0;
                }
              },
              offsetCenter: [0, 0],
              textStyle: {
                padding: [0, 0, 0, 0],
                fontSize: 16,
                fontWeight: "700",
                color: colorSet.color,
              },
            },
            title: {
              //标题
              show: false,
              offsetCenter: [0, 46], // x, y，单位px
              textStyle: {
                color: "rgba(255, 255, 255, 1)",
                fontSize: 40, //表盘上的标题文字大小
                fontWeight: 700,
                fontFamily: "PingFangSC",
              },
            },
            data: [
              {
                name: dataArr,
                value: dataArr,
              },
            ],
            itemStyle: {
              normal: {
                color: "rgba(255, 255, 255, .0)", //指针消失
              },
            },
            pointer: {
              show: false,
              length: "80%",
              radius: "20%",
              width: 3, //指针粗细
            },
            animationDuration: 4000,
          },
          //第四层
          {
            type: "pie",
            name: "内层层细圆环",
            radius: ["21.5%", "22%"],
            center: ["50%", "50%"],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
              normal: {
                color: "#042c4d",
              },
            },
            label: {
              show: false,
            },
            data: [100],
          },
          // 圆环内部刻度全满
          {
            name: "内部刻度",
            type: "gauge",
            //  center: ['20%', '50%'],
            radius: "20%",
            min: 0, //最小刻度
            max: 100, //最大刻度
            splitNumber: 10, //刻度数量
            startAngle: 225,
            endAngle: -269.9999,
            axisLine: {
              show: false,
              lineStyle: {
                width: 1,
                color: [[1, "rgba(0,0,0,0)"]],
              },
            }, //仪表盘轴线
            axisLabel: {
              show: false,
            }, //刻度标签。
            axisTick: {
              show: true,
              splitNumber: 7,
              lineStyle: {
                color: "#042c4d", //用颜色渐变函数不起作用
                width: 2,
              },
              length: 10,//刻度长度
            }, //刻度样式
            splitLine: {
              show: true,
              length: 0,
              lineStyle: {
                color: "#042c4d", //用颜色渐变函数不起作用
              },
            }, //分隔线样式
            detail: {
              show: false,
            },
            pointer: {
              show: false,
            },
          },
          // 透明内圆显示文字
          {
            name: "内圆",
            type: "pie",
            hoverAnimation: false,
            legendHoverLink: false,
            radius: "5%",
            z: 4,
            labelLine: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: 0,
              },
              {
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(0,0,0,0)",
                  },
                  emphasis: {
                    color: "rgba(0,0,0,0)",
                  },
                },
              },
            ],
          },
        ],
      };