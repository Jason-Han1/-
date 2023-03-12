//输入rem获取相应的px值
function remToPx(rem) {
  const clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  console.log("clientWidth:",clientWidth);
  if (!clientWidth) return;
  return 100 * (clientWidth / 1920) * rem;
}

option = {
    // color: ['#70b603', '#e9eef4', 'pink'],
    title: {
      text: "指针图",
      left: "center",
      // offsetCenter: [0, "-100%"],
      textStyle: {
        color: (function () {
          return "pink";
        })(),
        fontSize: remToPx(.56)
      }
    },
    tooltip: {
      formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
      feature: {
        // restore: {},
        // saveAsImage: {}
      }
    },
    series: [
      {
        name: "设备利用率",
        type: "gauge",
        radius: "100%",
        center: ["50%", "60%"], // 默认全局居中
        axisLine: {
          // 坐标轴线
          lineStyle: {
            // 属性lineStyle控制线条样式
            width: 80,
            color: [
              [0.25, "#F4664A"],
              [0.5, "#FAAD14"],
              [0.75, "#A0D911"],
              [1, "#30BF78"]
            ]
            // 30BF78 A0D911 FAAD14 F4664A
          }
        },
        axisTick: {
          // 坐标轴小标记
          length: 0, // 属性length控制线长
          lineStyle: {
            // 属性lineStyle控制线条样式
            color: "auto"
          }
        },
        axisLabel: {
          show: false
        },
        splitLine: {
          // 分隔线
          length: 0, // 属性length控制线长
          lineStyle: {
            // 属性lineStyle（详见lineStyle）控制线条样式
            color: "red"
          }
        },
        detail: { formatter: "{value}%", textStyle: { color: "pink" } },
        data: [        {
          name: null,
          value: 50,
          selected: true
        }]
      }
    ]
};
