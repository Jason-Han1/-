var arr = [78.3, 98.5, 98.5, 85.3, 56.2, 98];
      var i = -1;
      var option = {
        tooltip: {
          //雷达图的tooltip不会超出div，也可以设置position属性，position定位的tooltip 不会随着鼠标移动而位置变化，不友好
          confine: true,
          enterable: true //鼠标是否可以移动到tooltip区域内
        },
        calculable: true,
        radar: {
          startAngle: 90,
          splitNumber: 5,
          shape: "polygon",
          name: {
            formatter: (a, b) => {
              i++;
              return `{a|${a}}
{b|${arr[i]}}`;
            },
            rich: {
              a: {
                color: "#000",
                align: "middle",
                fontSize: 16,
                fontWeight: 600
              },
              b: {
                color: "#003D9A",
                fontSize: 22,
                fontWeight: 600,
                padding: [0,0,5,0]
              }
            }
          },
          axisLine: {
            // (圆内的几条直线)坐标轴轴线相关设置
            lineStyle: {
              color: "#7C8CB7",
              // 坐标轴线线的颜色。
              width: 1,
              // 坐标轴线线宽。
              type: "solid"
              // 坐标轴线线的类型。
            }
          },
          center: ["65%", "50%"],
          radius: "60%",
          indicator: [
            {
              name: "求助",
              max: 150
            },
            {
              name: "纠纷",
              max: 150
            },
            {
              name: "电诈",
              max: 150
            },
            {
              name: "发案",
              max: 120
            },
            {
              name: "违法",
              max: 108
            },
            {
              name: "交通",
              max: 108
            }
          ],
          splitArea: {
            show: true,
            areaStyle: {
                color: [ 'rgba(201, 223, 255, 0.5)', '#fff', ]
            }
          },
          // (这里是指所有圆环)坐标轴在 grid 区域中的分隔线。
          splitLine: {
            show: true,
            lineStyle: {
              color: "#7C8CB7" // 设置网格的颜色
            }
          }
        },
        series: [
          {
            type: "radar",
            symbol: "circle",
            symbolSize: 9,
            itemStyle: {
                borderColor: '#FE5F42',
                borderWidth: 2,
                color: '#fff'
            },
            lineStyle: {
              color: "#FF5F42",
              width: 2
            },
            areaStyle: {
              color: "#efaf37" // 选择区域颜色
            },
            label: {
              show: false
            },
            data: [
              {
                value: arr
              }
            ]
          }
        ]
      };