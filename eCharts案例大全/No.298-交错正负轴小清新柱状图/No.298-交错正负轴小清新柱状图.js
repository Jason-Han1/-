option = {
  // tooltip: {
  //   trigger: 'axis', //坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
  //   axisPointer: {
  //     // 坐标轴指示器，坐标轴触发有效
  //     type: 'shadow' // 默认为直线，可选为：'line' | 'shadow' |'cross'
  //   }
  // },
  legend: {  // 图例名称
    data: [
      {
        name: '孩子得分',
        // 强制设置图形为圆。
        icon: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAeCAMAAACMnWmDAAAAAXNSR0IArs4c6QAAAKhQTFRFAAAAVar//1VVZpn//2ZmVX///1V/UI/v73B/TZTy7mh57mp3TJPw7Wp4TpTx7mh3TpPx7Wp4TZTx7Wl5TZTx7Wp4TZTx7ml5TJPx7mp4TpTx7ml5TZTx7ml5TZPy7Wl3TZTxTJTx7ml4TZTx7mp4TZPx7ml4TZTx72p4TZTx7Wl4TZTx7ml47ml4TZTx7ml4TZTx7ml4TZTx7ml4TZTx7ml4TZTx7ml4u1AwCwAAADZ0Uk5TAAMDBQUGBhAQTExNV1dYWICAgYGRkZKSk5OUlJaWra3ExcXGxsfH6Ojp6erq6+zs+Pj5+fr6clkymwAAANJJREFUSMet1uUOwkAQBOBBCm1xK+5Spfju+78ZP5AgoQnpzAN8yeXudhZ4JGe1l+5efkV/5eCtOnYenynWQ0mMJmbbMN+9qiuSBlT1ai9cZiSSFlQdZ5/eRBigTh9iTzigDm9eWVigVgCg6PPAwARQFx6oDcAImWBUgCVMUG04XLCPGRdcIOSCEY5c8MQH6Ueesy+F/mzID7sEIyZ/PfpwoI6vyCQP2HtRDcgVwC8peo0CqPppwaD2sYo04zTgrmV+bTc5y1n75//BS7Dp2oUncwUqjtO+z/XY+QAAAABJRU5ErkJggg==',
        // 设置文本为红色
        textStyle: {
          color: '#666'
        }
      },
      {
        name: '班级得分',
        icon: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAeCAMAAACMnWmDAAAAAXNSR0IArs4c6QAAAGNQTFRFAAAA////////////2PD/3uv/3+z/2u//2+//2+v/2+3/2+3/3O7/3e3/2+3/3Oz/3O3/3O3/3O3/3O3/3O3/3O3/3O3/3O3/3O3/3O7/3Oz/3O3/3O3/3O3/3O3/3O3/3O3/iGM2agAAACB0Uk5TAAECAyEnKD4/QEZHSWJjiYqLwsPExcrLzNvc6Ovy8/n2WQkRAAAAtklEQVQYGa3BWRKCMBQEwElQgkoANyRG8+b+p9Sy0NJfmW68udCfsvEPlk9DcPjlY+IiKXp8WY1cbFzhY3OjwC1gtjVK2A4v6ztFyhpP1UiZsQIQKdQBLlEoOTSUatBTqseRUgdkSmUYpQwUA8VglDJkSmUcKXXAQKkeDaUauESh5IGOQh2A6kKZqcJTXShSary0RglrMWsLBUqLj3riYlONLz5eucg1evzyYX/Oxj9YPu+Dx+wB+JMWp4+W1DkAAAAASUVORK5CYII=',
        // 设置文本为红色
        textStyle: {
          color: '#666'
        }
      }
    ],
    bottom: '6%',
    show: true,
    itemGap: 30, // 图例项间距
  },
  grid: {
    left: '10%',
    right: '10%',
    bottom: '15%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      axisTick: {
        //坐标轴刻度相关设置。
        show: false
      },
      offset: 10, // 调整类目偏移量
      data: [
        {
          value: '周一',
          textStyle: {
            color: "rgba(102, 102, 102, 1)",
            fontSize: 24
          }
        },
        {
          value: '周二',
          textStyle: {
            color: "rgba(102, 102, 102, 1)",
            fontSize: 24
          }
        },
        {
          value: '周三',
          textStyle: {
            color: "rgba(102, 102, 102, 1)",
            fontSize: 24
          }
        },
        {
          value: '周四',
          textStyle: {
            color: "rgba(102, 102, 102, 1)",
            fontSize: 24
          }
        },
        {
          value: '周五',
          textStyle: {
            color: "rgba(102, 102, 102, 1)",
            fontSize: 24
          }
        },
        {
          value: '周六',
          textStyle: {
            color: "rgba(102, 102, 102, 1)",
            fontSize: 24
          }
        },
        {
          value: '周日',
          textStyle: {
            color: "rgba(102, 102, 102, 1)",
            fontSize: 24
          }
        }
      ],
  
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(211, 211, 211, 1)",
          width: 2,
          cap: "round"
        }
      }

    }
  ],
  yAxis: [
    {
      type: 'value',
      show: false
    }
  ],
  series: [
    {
      name: '孩子得分',
      type: 'bar',
      stack: '孩子得分',
      data: [-120, 0, 0, -244, 0, -0, 0],
      // data: [-120, 0, 0, -134, -30, -0, 0],
      barWidth: '20%',
      itemStyle: {
        borderRadius: [0, 0, 40, 40],
        // 通过描边模拟 数据为0时 也显示一点点高度
        color: '#EE6978',
        borderWidth: 2,
        borderType: 'solid',
        borderColor: '#EE6978'
      },
      label: {
				show: true,
				position: "bottom",
				color: "#EE6978",
				formatter({ value }) {
					if (value == 0) {
						value = "";
					}
					return `${value}`;
				},
			}
    },
    {
      name: '孩子得分',
      type: 'bar',
      stack: '孩子得分', //数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置。
      data: [0, 302, 342, 0, 0, 200, 100],
      barWidth: '20%',
      itemStyle: {
        borderRadius: [40, 40, 0, 0],
        // 通过描边模拟 数据为0时 也显示一点点高度
        color: '#4D94F1',
        borderWidth: 2,
        borderType: 'solid',
        borderColor: '#4D94F1'
      },
      label: {
				show: true,
				position: "top",
				color: "#4D94F1",
				formatter({ value }) {
					if (value == 0) {
						value = "";
					}
					return `${value}`;
				},
			}
    },
    {
      name: '班级得分',
      type: 'bar',
      // stack: '总量',
      data: [200, 170, 240, 244, 200, 0, 200],
      barWidth: '20%',
      itemStyle: {
        borderRadius: [40, 40, 0, 0],
        // 通过描边模拟 数据为0时 也显示一点点高度
        color: '#DCEDFF',
        borderWidth: 2,
        borderType: 'solid',
        borderColor: '#DCEDFF'
      },
      label: {
				show: true,
				position: "top",
				color: "#DCEDFF",
				formatter({ value }) {
					if (value == 0) {
						value = "";
					}
					return `${value}`;
				},
			}
    }
  ]
};
