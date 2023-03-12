  let overWeight=[ {"code":"111","stock":"frv","overWeightNum":"41.8308"},
    {"code":"222","stock":"工rgre银","overWeightNum":"35.7686"},
    {"code":"333","stock":"股割让给份","overWeightNum":"30.6345"},
    {"code":"444","stock":"精热个人的密","overWeightNum":"29.7876"},
    {"code":"555","stock":"东割让给方","overWeightNum":"24.207"},
    {"code":"666","stock":"过热如果富","overWeightNum":"24.695"},
    {"code":"777","stock":"thrt能","overWeightNum":"21.1411"},
    {"code":"888","stock":"传媒","overWeightNum":"16.531"},
    {"code":"999","stock":"股份","overWeightNum":"15.9554"},
    {"code":"112","stock":"风格的","overWeightNum":"15.8416"}]
  let underWeight=[{"code":"211","stock":"石膏板","underweightNum":"58.6204"},
    {"code":"222","stock":"Erebus","underweightNum":"36.0593"},
    {"code":"233","stock":"二哥","underweightNum":"30.3707"},
    {"code":"244","stock":"我让我爸","underweightNum":"28.8139"},
    {"code":"255","stock":"uol","underweightNum":"26.8439"},
    {"code":"266","stock":"违法","underweightNum":"26"},
    {"code":"277","stock":"访问","underweightNum":"25.7525"},
    {"code":"288","stock":"为给我吧","underweightNum":"25.4942"},
    {"code":"299","stock":"二哥冯如杯","underweightNum":"24.5708"},
    {"code":"300","stock":"热个人","underweightNum":"24.8275"}]
    
  let overData = [];
      let underData = [];
      overWeight.forEach((it, index) => {
        overData[index] = {};
        overData[index].value = parseFloat(it.overWeightNum).toFixed(2);
        overData[index].label = [it.code, it.stock].join(" ");
      });
      underWeight.forEach((it, index) => {
        underData[index] = {};
        underData[index].value = parseFloat(it.underweightNum).toFixed(2);
        underData[index].label = [it.code, it.stock].join(" ");
      });
      let data = {
        etc: {
          name: "增张",
          data: overData
        },
        notEtc: {
          name: "减少",
          data: underData
        }
      };
      function contains(arr, dst) {
        var i = arr.length;
        while ((i -= 1)) {
          if (arr[i] == dst) {
            return i;
          }
        }
        return false;
      }
      let legendData = [data.etc.name, data.notEtc.name];
      let yAxisDataN = data.etc.data.map(e => e.label);
      let yAxisDataV = data.notEtc.data.map(e => e.label);
      let yAxisLabelN = data.etc.data.map(e => e.value).sort((a, b) => a - b);
     // console.log(data.etc.name);
      let yAxisLabelV = data.notEtc.data
        .map(e => e.value)
        .sort((a, b) => a - b);
      let rankData = data.etc.data.map((item, index) => index);

      let top = 60;
      let bottom = 10;
      var labelSetting = {
        label: "16",
        yLabel: "16"
      };
      var attackSourcesColor = [
        "#EB3B5A",
        "#FA8231",
        "#F7B731",
        "#2D5CAF",
        "#1089E7",
        "#F57474",
        "#56D0E3",
        "#1089E7",
        "#F57474",
        "#1089E7",
        "#F57474",
        "#F57474"
      ];
      var option = {
        title: {
          text: "",
          x: "center",
          textStyle: {
            color: "#fff",
            fontSize: 22
          }
        },
        backgroundColor: "#000",
        // tooltip: {
        //   show: true,
        //   trigger: "axis",
        //   axisPointer: {
        //     type: "shadow"
        //   }
        // },
        legend: {
          left: "center",
          itemGap: 100,
          top: 10,
          itemWidth: 0, //图例标记的图形宽度
          itemHeight: 0, //图例标记的图形高度
          y: "center",
          borderRadius: 0,
          inactiveColor: "#FFF",
          formatter: name => {
            if (name == data.etc.name) {
              return "{a|" + name + "}";
            } else {
              return "{b|" + name + "}";
            }
          },
          textStyle: {
            rich: {
              a: {
                padding: [3, 10, 5, 10],
                align: "center",
                fontSize: 10,
                backgroundColor: "#EB5252",
                color: "#fff"
              },
              b: {
                padding: [4, 10, 5, 10],
                align: "center",
                fontSize: 10,
                backgroundColor: "#4AB57D",
                color: "#fff"
              }
            }
          },
          data: legendData
        },
        grid: [
          {
            right: "55%",
            width: "40%",
            containLabel: false,
            bottom,
            top
          },
          {
            left: "51%",
            width: 0,
            top: top,
            bottom: bottom
          },
          {
            left: "55%",
            width: "40%",
            containLabel: false,
            bottom,
            top
          }
        ],
        xAxis: [
          {
            type: "value",
            inverse: true,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            splitLine: {
              show: false
            }
          },
          {
            gridIndex: 1,
            show: false
          },
          {
            gridIndex: 2,
            type: "value",
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            splitLine: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            //show: false,';.,
            offset: -10,
            //padding: [-23, -30],
            position: "right",
            axisLabel: {
              lineHeight: 56,
              color: "#fff",
              fontSize: labelSetting.yLabel,
              fontSize: 10
            },
            axisLine: {
              show: false
            },
            type: "category",
            inverse: false,
            axisTick: {
              show: false
            },

            axisLabel: {
              interval: 0,
              shadowOffsetX: "-10px",
              color: ["#fff"],
              align: "right",
              verticalAlign: "bottom",
              lineHeight: 30,
              fontSize: 10,
              formatter: function(value, index) {
                return yAxisDataN[index];
              }
            },
            data: yAxisDataN.reverse()
          },
          {
            gridIndex: 1,
            position: "",
            type: "category",
            inverse: true,
            axisLabel: {
              show: true,
              margin: 0,
              color: "#fff",
              fontSize: 10,
              postion: "right",
              rich: {
                nt1: {
                  color: "#fff",
                  backgroundColor: attackSourcesColor[0],
                  width: 15,
                  height: 15,
                  fontSize: 10,
                  align: "center",
                  borderRadius: 100
                },
                nt2: {
                  color: "#fff",
                  backgroundColor: attackSourcesColor[1],
                  width: 15,
                  height: 15,
                  fontSize: 10,
                  align: "center",
                  borderRadius: 100
                },
                nt3: {
                  color: "#fff",
                  backgroundColor: attackSourcesColor[2],
                  width: 15,
                  height: 15,
                  fontSize: 10,
                  align: "center",
                  borderRadius: 100
                },
                nt: {
                  color: "#fff",
                  backgroundColor: attackSourcesColor[3],
                  width: 15,
                  height: 15,
                  fontSize: 10,
                  align: "center",
                  lineHeight: 3,
                  borderRadius: 100
                }
              },
              formatter: function(value, index) {
                index = contains(yAxisDataV, value) + 1;
                if (index - 1 < 3) {
                  return ["{nt" + index + "|" + index + "}"].join("\n");
                } else {
                  return ["{nt|" + index + "}"].join("\n");
                }
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisPointer: {
              label: {
                show: true,
                margin: 30
              }
            },
            data: yAxisDataV
          },
          {
            //show: false,
            offset: -10,
            gridIndex: 2,
            position: "left",
            axisLabel: {
              color: `#fff`,
              fontSize: labelSetting.yLabel,
              fontSize: 10
            },
            axisLine: {
              show: false
            },
            //type: "category",
            inverse: false,
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0,
              //shadowOffsetX: '-10px',
              color: ["#fff"],
              align: "left",
              verticalAlign: "bottom",
              lineHeight: 30,
              fontSize: 10,
              formatter: function(value, index) {
                return yAxisDataV[index];
              }
            },
            data: yAxisDataV.reverse()
          }
        ],
        series: [
          {
            name: legendData[0],
            type: "bar",
            barWidth: "15",
            barMinHeight: "50",
            lineHeight:"3",
            label: {
              show: true,
              fontSize: labelSetting.label,
              lineHeight: 56,
              distance: 10,
              color: "#fff",
              fontSize: 10,
              width: "15",
              align: "center",
              lineHeight:"8",
              padding:[2,0,0,0]
            },
            itemStyle: {
              color: "#298bf6",
              normal: {
                barBorderRadius: 30,
                color: new echarts.graphic.LinearGradient(0, 1, 1, 1, [
                  { offset: 0, color: "#FE9C5A" },
                  { offset: 1, color: "#EB3B5A" }
                ])
              }
            },
            data: yAxisLabelN
          },
          {
            type: "bar",
            barWidth: "15",
            barMinHeight: "50",
            label: {
              show: true,
              fontSize: labelSetting.label,
              distance: 10,
              color: "#fff",
              fontSize: 10,
              padding:[2,0,0,0]
            },
            xAxisIndex: 2,
            yAxisIndex: 2,
            name: legendData[1],
            itemStyle: {
              color: "#4AB57D",
              normal: {
                barBorderRadius: 30,
                color: new echarts.graphic.LinearGradient(0, 1, 1, 1, [
                  { offset: 0, color: "#4AB57D" },
                  { offset: 1, color: "#C7DA5B" },
                  { offset: 1, color: "#3A5EC5" },
                  { offset: 1, color: "#068749" },
                ])
              }
            },
            data: yAxisLabelV
          }
        ]
      };