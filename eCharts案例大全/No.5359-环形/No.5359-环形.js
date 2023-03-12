  var color1 = {
      type: "linear",
      x: 0,
      y: 0,
      x2: 1,
      y2: 1,
      colorStops: [{
              offset: 0,
              color: "rgba(1,130,188,1)"
          },
          {
              offset: 1,
              color: "rgba(1,130,188,0.2)"
          }
      ],
      global: false

  };
  var color2 = {
      type: "linear",
      x: 0,
      y: 0,
      x2: 1,
      y2: 1,
      colorStops: [{
              offset: 0,
              color: "rgba(40,209,128,1)"
          },
          {
              offset: 1,
              color: "rgba(40,209,128,0.2)"
          }
      ],
      global: false
  };
  var color3 = {
      type: "linear",
      x: 0,
      y: 0,
      x2: 1,
      y2: 1,
      colorStops: [{
              offset: 0,
              color: "rgba(205,89,90,1)"
          },
          {
              offset: 1,
              color: "rgba(205,89,90,0.2)"
          }
      ],
      global: false
  };
  option = {
      backgroundColor: "#000",
      graphic: [{
          type: 'group',
          top: 'middle',
          left: '22%',
          id: 'data',
          children: [{
                  type: 'text',
                  id: 'current',
                 top: 360, //延Y轴居中
                  style: {
                      text: "1000个",
                      font: '26px "SourceHanSansCN-Regular", sans-serif',
                      fill: '#fcfcfc',
                      textAlign: 'center'
                  }
              }
             
          ]
      }],
      angleAxis: {
          type: "value",
          startAngle: 90,
          splitNumber: 50, //坐标轴分割段true数
          clockwise: false, //是否逆时针
          min: 0,
          max: 100,
          axisLine: {
              show: false
          },
          axisTick: {
              show: false
          },
          splitLine: {
              show: false
          },

          axisLabel: {
              show: false
          }
      },
      radiusAxis: {

          min: 0,
          type: "category",

          z: 200,
          axisLine: {
              show: false
          },
          axisTick: {
              show: false
          },
          axisLabel: {
              show: false,
              margin: 0,
              fontSize: 10,
              formatter: function(value, index) {
                  var list = [25, 25, 25, 88];
                  return list[index] + "%";
              },
              textStyle: {
                  color: "#96F5F6"
              },
              interval: 0
          }
      },
      polar: {
          center: ["25%", "43%"],
          radius: ["20%", "62%"]
      },
      tooltip: {
          show: false
      },
      series: [

          {
              type: "bar",
              barWidth: '25%',
              hoverAnimation: false, //鼠标悬浮是否有区域弹出动画，false:无  true:有
              data: [50.25],
              coordinateSystem: "polar",
              name: "很快就凋零骷髅",
              stack: "a",
              roundCap: true,
              itemStyle: {
                  color: color1,
                  barBorderRadius: 5
              }
          },
          {
              type: "bar",
              barWidth: '25%',
              hoverAnimation: false, //鼠标悬浮是否有区域弹出动画，false:无  true:有
              data: [0, 58.68, 0],
              coordinateSystem: "polar",
              name: "还是电话监控",
              stack: "a",
              roundCap: true,
              itemStyle: {
                  color: color2,
                  barBorderRadius: 5
              }

          },
          {
              type: "bar",
              barWidth: '25%',
              hoverAnimation: false, //鼠标悬浮是否有区域弹出动画，false:无  true:有
              data: [0, 0, 68.50],
              coordinateSystem: "polar",
              name: "韩国代购就你们",
              stack: "a",
              roundCap: true,
              itemStyle: {
                  // color: color3,
                  barBorderRadius: 5
              }

          }

      ],
      legend: {
          show: true,
          orient: 'vertical', //垂直显示
          y: '30%', //延Y轴居中
          x: '56%', //居右显示
          // selectedMode: 'multiple', 
          padding: -0.5, //调节legend的位置
          icon: "circle", //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
          itemWidth: 10, // 设置宽度
          itemHeight: 10, // 设置高度
          itemGap: 45, // 设置间距
          data: ["很快就凋零骷髅", "还是电话监控", "韩国代购就你们"],
          selectedMode: false,
          align: "left",
          textStyle: {
              fontFamily: "SourceHanSansCN-Regular",
              color: "#ffffff",
              fontSize: 18
          }
      }
  }