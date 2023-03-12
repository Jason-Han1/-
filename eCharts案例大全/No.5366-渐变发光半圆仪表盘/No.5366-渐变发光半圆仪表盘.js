option = null;
      let currentSpeedData = [{
        value: '60',
      }]
      var value = currentSpeedData[0].value;
      var colorRegionRate = (value / 100).toFixed(2);
      var {
        bgColor,
        level
      } = detectionData(value);
      var colors = [
        [0.05, '#3B85CD'],
        [0.10, '#4CA4CD'],
        [0.15, '#4DA6CD'],
        [0.20, '#62CBCE'],
        [0.25, '#6FE3CE'],
        [0.30, '#70FAC7'],
        [0.35, '#78EDBE'],
        [0.40, '#7AEEBE'],
        [0.45, '#78EABC'],
        [0.50, '#7CFACE'],
        [0.55, '#88F0AD'],
        [0.60, '#8EF3A8'],
        [0.65, '#8EF3A8'],
        [0.70, '#8FE998'],
        [0.75, '#8FE998'],
        [0.80, '#A7F68A'],
        [0.85, '#AEF883'],
        [0.90, '#B6F776'],
        [0.95, '#B7F46F'],
        [1, '#C4FC68']
      ];
      var colorList = [];
      colors.forEach((item, key) => {
        if (colorRegionRate >= item[0]) {
          colorList.push(item);
        } else {
          colorList.push([item[0], "#1D4176"]);
        }
      });
      option = {
        // tooltip: {
        //   show: false,
        //   position: "inside",
        //   formatter: "小于20%有发展空间<br>20%~40%为健康<br>40%~60%为预警<br>大于60%为过度",
        //   textStyle: {
        //     fontSize: 10,
        //   },
        // },
        backgroundColor: '#000000',
        series: [{
          name: "刻度",
          type: "gauge",
          radius: '100%',
		  center:['50%','75%'],  //边距
          min: 0, //最小刻度
          max: 100, //最大刻度
          splitNumber: 6, //刻度数量
          startAngle: 180,
          endAngle: 0,
          axisLine: {
            show: true,
            lineStyle: {
              width: 0,
              shadowBlur: 1,
              color: colorList,
            },
          }, //仪表盘轴线
          axisLabel: {
            show: false,
            color: "#0ab7ff",
            fontSize: 15,
            distance: -50,
            formatter: function(flow) {
              return flow + "分";
            },
          }, //刻度标签。
          axisTick: {
            show: true,
            splitNumber: 5,
            lineStyle: {
              color: 'auto',
              width: 2, //外圈刻度盘
            },
            length: -20,
          }, //刻度样式
          splitLine: {
            show: false,
            length: -0,
            lineStyle: {
              color: "#ffffff",
            },
          }, //分隔线样式
          pointer: { //仪表盘指针
            show: false,
          },
          detail: {
            offsetCenter: [0, '-8%'], // x, y，单位px 偏移位置
            textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              color: '#ffffff',
              fontSize: 18,
              borderColor: '#3982f7', // 值域边框颜色
               //边框颜色
              borderWidth:1,
              shadowColor:"#2d71f6",                          //阴影颜色
              shadowOffsetX:1,                            //阴影水平方向上的偏移距离
              shadowOffsetY:1,                            //阴影垂直方向上的偏移距离
              shadowBlur:8,
              borderRadius: 6,
              padding: [12,8,8,8]
            },
            formatter: function(currentSpeed) {
              return currentSpeed + "m³/S";
            },
          },
          data: currentSpeedData,
        },
          {
            type: "gauge",
            radius: '85%',
            center: ["50%", "75%"],
            splitNumber: 0, //刻度数量
            startAngle: 180,
            endAngle: 0,
            axisLine: {
              show: true,
              lineStyle: {
                width: 5,  // 内圈刻度

                borderWidth:1,
                shadowColor:"#3982f7",                          //阴影颜色
                shadowOffsetX:0,                            //阴影水平方向上的偏移距离
                shadowOffsetY:0,                            //阴影垂直方向上的偏移距离
                shadowBlur:8,
                borderRadius: 6,


                // color: "#fa1900"
                color: [
                  [1, new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: "#0E2562"
                  },
                    {
                      offset: 0.5,
                      color: "#0E2562"
                    },
                    {
                      offset: 1,
                      color: "#0E2562"
                    }
                  ])]
                ],
              },
            },
            //分隔线样式。
            splitLine: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            pointer: {
              show: false,
              length: "80%",
              width: "20%",
            },
            title: {
              show: true,
              offsetCenter: ['0%', "-45%"], // x, y，单位px 瞬时流量
              textStyle: {
                color: "#ffffff",
                fontSize: 18,
                fontWeight: 400,
                opacity: 0.9,
              },
            },
            //仪表盘详情，用于显示数据。
            detail: {
              show: true,
              offsetCenter: ['10%', "-30%"],
              color: "#ffffff",
              padding: [0, 10],
              backgroundColor: bgColor,
              borderRadius: 25,
              formatter: function(value) {
                return level;
              },
              textStyle: {
                fontSize: 12,
              },
            },
            data: [{
              name: "瞬时流量"
            }],

          },
        ],
      };

      function detectionData(value) {
        return {
          bgColor: bgColor,
        }
      }
      myChart.setOption(option);
      // 自适应图表
      window.onresize = function(){
        myChart.resize();
      }