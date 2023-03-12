let angle = 0; //角度，用来做简单的动画效果的
let value = 80;
var timerId;
var outerRidus1 = 0.8
var outerRidus2 = 0.85
option = {
  backgroundColor: '#090d1a',
  legend: {
    orient: 'vertical',
    show: true,
    right: '5%',
    y: 'center',
    icon: 'pin',
    itemGap: 30,
    textStyle: {
      color: '#FFFFFF',
      fontSize: 12,
      lineHeight: 20,
    },
  },
  tooltip: {
    show: true,
  },
  series: [
    // 最外层圆
    {
      type: 'pie',
      radius: ['75%', '55%'],
      center: ['50%', '50%'],
      hoverAnimation: false,
      data: [
        {
          value: 30,
          name: '运行中',
          itemStyle: {
            normal: {
              color: {
                // 完成的圆环的颜色
                colorStops: [
                  {
                    offset: 0,
                    color: '#0060FF', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#00EFFE', // 100% 处的颜色
                  },
                ],
              },
            },
          },
        },
        {
          value: 30,
          name: '已停止',
          itemStyle: {
            normal: {
              color: {
                // 完成的圆环的颜色
                colorStops: [
                  {
                    offset: 0,
                    color: '#44D7B6', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#6DD400', // 100% 处的颜色
                  },
                ],
              },
            },
          },
        },
        {
          value: 40,
          name: '未上线',
          itemStyle: {
            normal: {
              color: {
                // 完成的圆环的颜色
                colorStops: [
                  {
                    offset: 0,
                    color: '#FFA600', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#FEDB65', // 100% 处的颜色
                  },
                ],
              },
            },
          },
        },
      ],
      label: {
        show: true,
        position: 'outside',
        formatter: '{d}%',
        color: '#FFFFFF',
      },
      labelLine: {
        normal: {
          length: 80,
          lineStyle: {
            width: 1,
          },
        },
      },
    },
    // 内圆 + 中间文字
    {
      type: 'pie',
      radius: ['60%', '40%'],
      center: ['50%', '50%'],
      hoverAnimation: false,
      z: 10,
      label: {
        position: 'center',
        formatter: () => {
          return '佣金总额\r\n{total|100} 个';
        },
        rich: {
          total: {
            fontSize: 24,
            color: '#FFFFFF',
          },
        },
        color: '#FFFFFF',
        fontSize: 16,
        lineHeight: 30,
      },
      data: [
        {
          value: 30,
          name: '运行中',
          itemStyle: {
            normal: {
              color: {
                // 完成的圆环的颜色
                colorStops: [
                  {
                    offset: 0,
                    color: '#0060FF', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#00EFFE', // 100% 处的颜色
                  },
                ],
              },
              opacity: 0.5,
            },
          },
        },
        {
          value: 30,
          name: '已停止',
          itemStyle: {
            normal: {
              color: {
                // 完成的圆环的颜色
                colorStops: [
                  {
                    offset: 0,
                    color: '#44D7B6', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#6DD400', // 100% 处的颜色
                  },
                ],
              },
              opacity: 0.5,
            },
          },
        },
        {
          value: 40,
          name: '未上线',
          itemStyle: {
            normal: {
              color: {
                // 完成的圆环的颜色
                colorStops: [
                  {
                    offset: 0,
                    color: '#FFA600', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#FEDB65', // 100% 处的颜色
                  },
                ],
              },
              opacity: 0.5,
            },
          },
        },
      ],
      labelLine: {
        show: false,
      },
    },

    // 紫色线1 + 点
    {
      name: 'ring5',
      type: 'custom',
      coordinateSystem: 'none',
      renderItem: function (params, api) {
        return {
          type: 'arc',
          shape: {
            cx: api.getWidth() / 2,
            cy: api.getHeight() / 2,
            r: Math.min(api.getWidth(), api.getHeight()) / 2 * outerRidus1 ,// 180,
            startAngle: ((0 + angle) * Math.PI) / 180,
            endAngle: ((90 + angle) * Math.PI) / 180,
          },
          style: {
            stroke: '#8383FA',
            fill: 'transparent',
            lineWidth: 1.5,
          },
          silent: true,
        };
      },
      data: [0],
    },
    // 紫色线1点
    {
      name: 'ring5', //紫点
      type: 'custom',
      coordinateSystem: 'none',
      renderItem: function (params, api) {
        let x0 = api.getWidth() / 2;
        let y0 = api.getHeight() / 2;
        let r =  Math.min(api.getWidth(), api.getHeight()) / 2 * outerRidus1;
        let point = getCirlPoint(x0, y0, r, 0 + angle);
        return {
          type: 'circle',
          shape: {
            cx: point.x,
            cy: point.y,
            r: 4,
          },
          style: {
            stroke: '#8450F9', //绿
            fill: '#8450F9',
          },
          silent: true,
        };
      },
      data: [0],
    },
    // 蓝色
    {
      name: 'ring5',
      type: 'custom',
      coordinateSystem: 'none',
      renderItem: function (params, api) {
        return {
          type: 'arc',
          shape: {
            cx: api.getWidth() / 2,
            cy: api.getHeight() / 2,
              r: Math.min(api.getWidth(), api.getHeight()) / 2 * outerRidus1 ,// 180,
            startAngle: ((180 + angle) * Math.PI) / 180,
            endAngle: ((270 + angle) * Math.PI) / 180,
          },
          style: {
            stroke: '#4386FA',
            fill: 'transparent',
            lineWidth: 1.5,
          },
          silent: true,
        };
      },
      data: [0],
    },
    {
      name: 'ring5', // 蓝色
      type: 'custom',
      coordinateSystem: 'none',
      renderItem: function (params, api) {
        let x0 = api.getWidth() / 2;
        let y0 = api.getHeight() / 2;
        let  r = Math.min(api.getWidth(), api.getHeight()) / 2 * outerRidus1// 180
        let point = getCirlPoint(x0, y0, r, 180 + angle);
        return {
          type: 'circle',
          shape: {
            cx: point.x,
            cy: point.y,
            r: 4,
          },
          style: {
            stroke: '#4386FA', //绿
            fill: '#4386FA',
          },
          silent: true,
        };
      },
      data: [0],
    },
    // 橘色
    {
      name: 'ring5',
      type: 'custom',
      coordinateSystem: 'none',
      renderItem: function (params, api) {
        return {
          type: 'arc',
          shape: {
            cx: api.getWidth() / 2,
            cy: api.getHeight() / 2,
             r: Math.min(api.getWidth(), api.getHeight()) / 2 * outerRidus2 ,// 200,
            startAngle: ((250 + -angle) * Math.PI) / 180,
            endAngle: ((10 + -angle) * Math.PI) / 180,
          },
          style: {
            stroke: '#0CD3DB',
            fill: 'transparent',
            lineWidth: 1.5,
          },
          silent: true,
        };
      },
      data: [0],
    },
    {
      name: 'ring5', //绿点
      type: 'custom',
      coordinateSystem: 'none',
      renderItem: function (params, api) {
        let x0 = api.getWidth() / 2;
        let y0 = api.getHeight() / 2;
        let r = Math.min(api.getWidth(), api.getHeight()) / 2 * outerRidus2 // 200;
        let point = getCirlPoint(x0, y0, r, 250 + -angle);
        return {
          type: 'circle',
          shape: {
            cx: point.x,
            cy: point.y,
            r: 4,
          },
          style: {
            stroke: '#0CD3DB', //绿
            fill: '#0CD3DB',
          },
          silent: true,
        };
      },
      data: [0],
    },
    // 粉色
    {
      name: 'ring5',
      type: 'custom',
      coordinateSystem: 'none',
      renderItem: function (params, api) {
        return {
          type: 'arc',
          shape: {
            cx: api.getWidth() / 2,
            cy: api.getHeight() / 2,
            r: Math.min(api.getWidth(), api.getHeight()) / 2 * outerRidus2 ,// 200,,
            startAngle: ((70 + -angle) * Math.PI) / 180,
            endAngle: ((200 + -angle) * Math.PI) / 180,
          },
          style: {
            stroke: '#FF8E89',
            fill: 'transparent',
            lineWidth: 1.5,
          },
          silent: true,
        };
      },
      data: [0],
    },
    //粉色点
    {
      name: 'ring5',
      type: 'custom',
      coordinateSystem: 'none',
      renderItem: function (params, api) {
        let x0 = api.getWidth() / 2;
        let y0 = api.getHeight() / 2;
        let r = Math.min(api.getWidth(), api.getHeight()) / 2 * outerRidus2// 200,;
        let point = getCirlPoint(x0, y0, r, 70 + -angle);
        return {
          type: 'circle',
          shape: {
            cx: point.x,
            cy: point.y,
            r: 4,
          },
          style: {
            stroke: '#FF8E89', //粉
            fill: '#FF8E89',
          },
          silent: true,
        };
      },
      data: [0],
    },
  ],
};

//获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
function getCirlPoint(x0, y0, r, angle) {
  let x1 = x0 + r * Math.cos((angle * Math.PI) / 180);
  let y1 = y0 + r * Math.sin((angle * Math.PI) / 180);
  return {
    x: x1,
    y: y1,
  };
}

function draw() {
  angle = angle + 3;
  _chart.setOption(option, true);
  //window.requestAnimationFrame(draw);
}
if (timerId) {
  clearInterval(timerId);
}
timerId = setInterval(function () {
  //用setInterval做动画感觉有问题
  draw();
}, 100);
