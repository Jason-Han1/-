  let dataArr = [
         { name: "物料1", value: 100 },
            { name: "物料2", value: 99 },
            { name: "物料3", value: 98.5 },
            { name: "物料4", value: 95 },
            { name: "物料5", value: 84 },
            { name: "物料6", value: 57 },
            { name: "物料7", value: 35 },
            { name: "物料8", value: 25 },
            { name: "物料9", value: 20 },
            { name: "物料10", value: 20 },
            { name: "物料11", value: 15 },
            { name: "物料12", value: 13 },
            { name: "物料13", value: 10 },
        ]
let dataAxis = dataArr.map(obj => obj.name);
let TData = dataArr.map(item => Number(item.value));
let max = Math.max(...TData);
let maxArr = new Array(TData.length).fill(max);

option = {
    title: {
        text: '',
        textStyle: {
            align: 'center',
            color: '#fff',
            fontSize: 20,
        },
        top: '3%',
        left: 'center'
    },
    grid: {
          left: '5%',
          right: '0%',
          top: '10%',
          bottom: 25,
          containLabel: true
        },
    xAxis: {
          show: false,
          xAxisIndex: 1,
          splitNumber: 3,
          type: "value",
          nameGap: 30,
          axisTick: {
            show: true
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#fff",
              fontSize: 16
            }
          },
          min: function(value) {
            return value.min > 2 ? value.min - 2 : value.min;
          },
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "rgba(58,78,105,.8)"
            }
          }
    },
    yAxis: {
          type: "category",
          data: dataAxis,
          axisTick: {
            show: false
          },
          inverse: true,
          z: 10,
        axisLabel: {
            show: true,
            color: "#fff",
            fontSize: dataAxis.length > 10 ? 18 : 22,
            interval: 0,
            formatter: function(value) {
              var idx = dataAxis.indexOf(value);
              return ( "{sort" +
                (idx < 5 ? 0 : "Default") +
                "|" +
                (idx + 1) +
                "}"
              );
            },
            rich: {
              label: {
                color: "#fff",
                fontSize: dataAxis.length > 10 ? 18 : 22,
                padding: [0, 10, 50, 0],
                fontWeigth: "normal"
              },
              sort0: {
                color: "#3877de",
                fontSize: 12,
                width: 20,
                  height: 20,
                borderRadius:5,
                //textShadowColor: "rgba(0,0,0,.4)",
                //textShadowBlur: 2,
                //textShadowOffsetX: -1,
                //textShadowOffsetY: 1,
                //shadowColor: "rgba(255,102,31,.26)",
                verticalAlign: "middle",
                //shadowBlur: 8,
                //shadowOffsetY: 4,
                fontStyle: "italic",
                align: "center",
                backgroundColor: "#e6f2ff"
              },
              sort1: {
                color: "#fff",
                fontSize: 16,
                width: 20,
                height: 20,
                textShadowColor: "rgba(0,0,0,.4)",
                fontStyle: "italic",
                textShadowBlur: 2,
                textShadowOffsetX: -1,
                textShadowOffsetY: 1,
                shadowColor: "rgba(255,171,41,.26)",
                verticalAlign: "middle",
                shadowBlur: 8,
                shadowOffsetY: 4,
                align: "center",
                backgroundColor: "#ff900e"
              },
              sort2: {
                color: "#fff",
                fontSize: 16,
                width: 20,
                height: 20,
                fontStyle: "italic",
                textShadowColor: "rgba(0,0,0,.4)",
                textShadowBlur: 2,
                textShadowOffsetX: -1,
                textShadowOffsetY: 1,
                shadowColor: "rgba(11,175,237,.26)",
                verticalAlign: "middle",
                shadowBlur: 8,
                shadowOffsetY: 4,
                align: "center",
                backgroundColor: "#0599de"
              },
              sortDefault: {
                color: "#8e929e",
                fontSize: 12,
                width: 20,
               // padding: [0, 3, 0, 0],
                height: 20,
                borderRadius:5,
                fontStyle: "italic",
                //textShadowColor: "rgba(0,0,0,.4)",
                //textShadowBlur: 2,
                //textShadowOffsetX: -1,
                //textShadowOffsetY: 1,
                //shadowColor: "rgba(15,191,129,.26)",
                verticalAlign: "middle",
                //shadowBlur: 8,
                //shadowOffsetY: 4,
                align: "center",
                backgroundColor: "#f4f4f6"
              }
            }
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#e4e4e4"
            }
          }
        },
    color: ["#ff562e", "#ff900e", "#0599de", "#0bbe63"],    
    series: [
          {
            type: "bar",
            barGap: "-100%",
            barWidth: "30%",
            z: 0,
            label: {
              normal: {
                show: true,
                position: ["70%", '-200%'],
                formatter: function(params) {
                  var idy = params.dataIndex > 3 ? 3 : params.dataIndex;
                  return (
                    "{cc" + "|" + "到料率:}{color" + idy + "|" + TData[params.dataIndex] +
                    "}{u" + idy + "|" + "%}"
                  );
                },
                    rich: {
                        cc: {
                    color: "#b4bbc5",
                    fontSize: 12,
                    verticalAlign: "bottom"
                  },
                  color0: {
                    color: "#ff562e",
                    fontSize: 14,
                    verticalAlign: "bottom"
                  },
                  color1: {
                    color: "#ff900e",
                    fontSize: 14,
                    verticalAlign: "bottom"
                  },
                  color2: {
                    color: "#0599de",
                    fontSize: 14,
                    verticalAlign: "bottom"
                  },
                  color3: {
                    color: "#0bbe63",
                    fontSize: 14,
                    verticalAlign: "bottom"
                  },
                  u0: {
                    fontSize: 14,
                    color: "#ff562e",
                    verticalAlign: "bottom"
                  },
                  u1: {
                    color: "#ff900e",
                    fontSize: 14,
                    verticalAlign: "bottom"
                  },
                  u2: {
                    color: "#0599de",
                    fontSize: 14,
                    verticalAlign: "bottom"
                  },
                  u3: {
                    color: "#0bbe63",
                    fontSize: 14,
                    verticalAlign: "bottom"
                  }
                }
              }
            },
            tooltip: {
              show: false
            },
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: "#e1e7eb"
              }
            },
            data: maxArr
          },
          {
            type: "bar",
            barGap: "-100%",
            barWidth: "30%",
           label: {
              normal: {
                show: true,
                position: [0, '-200%'],
                   formatter: function (params) {
                       return (
                           "{cn|" + dataAxis[params.dataIndex]+"}"
                  );
                },
                    rich: {
                        cn: {
                    color: "#273b5e",
                    fontSize: 12,
                    verticalAlign: "bottom"
                  },
                }
              }
            },
            z: 8,
            itemStyle: {
              barBorderRadius: 5,
              shadowColor: "rgba(0, 0, 0, 0.1)",
              shadowBlur: 8,
              shadowOffsetY: 8,
              color: params => {
                // build a color map as your need.
                //定义一个颜色集合
                var colorList = ["#ff7a0e", "#ffcb48", "#12c9fe", "#13c1a3"];
                var colorList2 = ["#ff562e", "#ff900e", "#0599de", "#0bbe63"];
                //对每个bar显示一种颜色
                var idx = params.dataIndex < 3 ? params.dataIndex : 3;
                var colorS = colorList[idx];
                var colorS2 = colorList2[idx];
                return new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  { offset: 0, color: colorS },
                  { offset: 1, color: colorS2 }
                ]);
              },
              emphasis: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  { offset: 1, color: "#00ff90" },
                  { offset: 0, color: "#0084f3" }
                ])
              }
            },
            data: TData
          }
        ]
};