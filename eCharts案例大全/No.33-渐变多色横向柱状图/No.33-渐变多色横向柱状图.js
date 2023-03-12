var attaData = [62, 52, 34, 61, 15, 25];
      //十六进制颜色转RBG 拼接为rgba返回
      function colorRgb(val) {
        // 16进制颜色值的正则
        var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        // 把颜色值变成小写
        var color = val.toLowerCase();
        if (reg.test(color)) {
          // 如果只有三位的值，需变成六位，如：#fff => #ffffff
          if (color.length === 4) {
            var colorNew = "#";
            for (var i = 1; i < 4; i += 1) {
              colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1));
            }
            color = colorNew;
          }
          // 处理六位的颜色值，转为RGB
          var colorChange = [];
          for (var i = 1; i < 7; i += 2) {
            colorChange.push(parseInt("0x" + color.slice(i, i + 2)));
          }
          return "rgba(" + colorChange.join(",") + ",0.4)";
        } else {
          return color;
        }
      }
      //渐变底色
      var attackSourcesColor1 = [
        "#36C9FF",
        "#6DECEC",
        "#6DFD96",
        "#FFCD00",
        "#F76F1C",
        "#EC6D6D",
      ];
      //拼接itemStyle
      function attackSourcesDataFmt(sData) {
        var sss = [];
        sData.forEach(function (item, i) {
          let itemStyle = {
            barBorderRadius: [0, 20, 20, 0],
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              {
                offset: 0,
                color: colorRgb(attackSourcesColor1[i]),
              },
              {
                offset: 1,
                color: attackSourcesColor1[i],
              },
            ]),
          };
          sss.push({
            value: item,
            itemStyle: itemStyle,
          });
        });
        return sss;
      }
    var   option = {
           backgroundColor:"#000",
        tooltip: {
          trigger: "axis",
          borderColor: "#62FFFF",
          formatter: " {b}     {c}户",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          x: 65,
          y: 40,
          x2: 20,
          y2: 20,
        },
        xAxis: {
          axisLine: {
            lineStyle: {
              color: "#44A0B7",
            },
          },
          axisLabel: {
            textStyle: {
              color: "#fff",
            },
          },
          show: true,
          type: "value",
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
        yAxis: {
          name: "单位:户",
          type: "category",
          data: ["杭州市", "宁波市", "绍兴市", "湖州市", "温州市"],
          axisLine: {
            lineStyle: {
              color: "#44A0B7",
            },
          },
          axisLabel: {
            textStyle: {
              color: "#fff",
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            name: "",
            type: "bar",
            barWidth: 12,
            data: attackSourcesDataFmt(attaData),
          },
          {
            name: "",
            type: "bar",
            barWidth: 12,
            barGap: "-100%",
            z: 0,
            itemStyle: {
              barBorderRadius: [0, 20, 20, 0],
              color: "rgba(0, 120, 121, 0.54)",
            },
            data: [100, 100, 100, 100, 100, 100],
          },
        ],
      };