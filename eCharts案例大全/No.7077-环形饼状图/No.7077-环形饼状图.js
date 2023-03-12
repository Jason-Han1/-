option = {
        title: {
          show: false
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {	// 图例部分
          icon: "circle",
          orient: "vertical",
          left: 137,
          top: 61,
          itemGap: 11,
          itemHeight: 50,
          itemWidth: 70,
          align: "center",
          itemWidth: 0,
          formatter: function(name, ticket, callback) { // 图例值格式化
            var arr2 = ["{b|" + 80] + "%" + "}"; 
            if (name == "营销服务") {
              return arr2;
            }
          },
          textStyle: {
            rich: {
              a: {
                verticalAlign: "left",
                fontSize: 12,
                align: "left",
                color: "#000",
                width: 20
              },
              b: {
                fontSize: 47,
                fontFamily: "DS-Digital-Bold",
                align: "center",
                color: "#000",
                width: 67, // 图例数值宽度
                lineHeight: 10,
                height: 40
              }
            }
          },
          data: ["营销服务", "客服服务"]
        },
        graphic: [
          {
             //环形图中间添加文字
             type: "text", //通过不同top值可以设置上下显示
             left: "45%",  // 文字位置调整
             top: "45%",	// 文字位置调整
             style: {
               text: "占比" + "\n" + 80 + "%", // 文字内容
               textAlign: "center",
               fill: "#000", //文字的颜色
               width: 50,
               height: 50,
               fontSize: 50,
              fontFamily: "Microsoft YaHei"
             }
           }
         ],
        color: ["#48CFAE", "#5D9CEC"],
        series: [
          {
            name: "投诉数",
            type: "pie",
            radius: ["72%", "78%"],
            center: ["50%", "50%"],
            legendHoverLink: false,
            hoverAnimation: false,
            avoidLabelOverlap: false,
            animationDurationUpdate: 0,
            label: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: 80,				// 蓝色（渐变色）内容部分
                name: "营销服务",
                itemStyle: {
                  color: {
                    type: "linear",
                    x: 0,
                    y: 1,
                    x2: 1,
                    y2: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: "#55fafa" // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#5593fa" // 100% 处的颜色
                      }
                    ],
                    global: false // 缺省为 false
                  }
                }
              },
              {
                value: 20,				// 灰色内容部分
                name: "客服服务",
                itemStyle: {
                  color: "#EBEEEF"
                }
              }
            ]
          }
        ]
      }
      