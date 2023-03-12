
      let myColor = ["#72cc66", "#fe4642", "#fea12e", "#027fff", "#EBEC2F"];
      let e = {
        蒲城县: 99,
        富平县: 98,
        潼关县: 94,
        韩城市: 88,
        临渭区: 81
      };
      let val = [];
      let legendName = [];
      let yval = [];
      let jj = [];
      let bf = [];
      for (let key in e) {
        legendName.unshift(key);
        val.unshift(e[key]);
      }

      val.forEach((el, idx) => {
        yval.push(idx);
        jj.push(Math.max.apply(null, val) - 0.55);
        bf.push(Math.max.apply(null, val));
      });
    option = {
        title: {
          text: "XX排名Top5",
          left: "5%",
          textStyle: {
            color: "#000",
            fontSize: 20,
            align: "center"
          }
        },
        grid: {
          left: "11%",
          right: "5%",
          top: "13%",
          bottom: -20,
          containLabel: true
        },
        xAxis: [
          {
            show: false
          }
        ],
        yAxis: [
          {
            axisTick: "none",
            axisLine: "none",
            offset: "20",
            splitNumber: 8,
            axisLabel: {
              textStyle: {
                color: "#000",
                fontSize: "12"
              }
            },
            data: legendName
          },
          {
            axisTick: "none",
            axisLine: "none",
            splitNumber: 8,
            axisLabel: {
              show: false,
              textStyle: {
                color: "#1980ff",
                fontSize: "12"
              }
            },
            data: yval
          },
          {
            name: "",
            splitNumber: 8,
            nameTextStyle: {
              color: "#10ffff",
              fontSize: "16"
            },
            axisLine: {
              lineStyle: {
                color: "rgba(0,0,0,0)"
              }
            },
            data: []
          }
        ],
        series: [
          {
            name: "条",
            type: "bar",
            yAxisIndex: 0,
            data: val,
            label: {
              normal: {
                show: true,
                position: "right",
                textStyle: {
                  color: "#000",
                  fontSize: "12"
                }
              }
            },
            barWidth: "10%",
            itemStyle: {
              normal: {
                color: function(params) {
                  var num = myColor.length;
                  return myColor[params.dataIndex % num];
                }
              }
            },
            z: 2
          },
          {
            name: "内框",
            type: "bar",
            yAxisIndex: 1,
            data: jj,
            barWidth: "20%",
            itemStyle: {
              normal: {
                color: "#fff",
                barBorderRadius: 10
              }
            },
            z: 1
          },
          {
            name: "外框",
            type: "bar",
            yAxisIndex: 2,
            data: bf,
            barWidth: "30%",
            itemStyle: {
              normal: {
                color: function(params) {
                  var num = myColor.length;
                  return myColor[params.dataIndex % num];
                },
                barBorderRadius: 10
              }
            },
            z: 0
          },
          {
            name: "外圆",
            type: "scatter",
            hoverAnimation: false,
            data: [0, 0, 0, 0, 0],
            yAxisIndex: 2,
            symbolSize: 18,
            itemStyle: {
              normal: {
                color: function(params) {
                  var num = myColor.length;
                  return myColor[params.dataIndex % num];
                },
                opacity: 1
              }
            },
            z: 2
          }
        ]
      };