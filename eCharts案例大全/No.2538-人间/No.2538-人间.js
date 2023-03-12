      var data0 = [
        2, 6, 6, 6, 5, 4.3, 3.3, 3, 3.6, 9, 6, 6, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
        9, 9, 9, 9, 9, 9, 9, 9, 9,
      ]; //透明
      var data1 = [
        0, 5, 5, 5, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
        3, 3, 3, 3, 3, 3, 3,
      ]; //第一个计划
      var data2 = [
        1, 0, 0, 0, 1, 0.2, 0.3, 0.3, 2.4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ]; //已用时间
      var data3 = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
      ]; //第二个超期
      var data4 = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
      ]; //第一个超期
      var data5 = [
        0, 0, 0, 0, 1, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
      ]; //第二个计划
      var projectData = [
        "人间四月",
        "你来人间一趟",
        "我看见人间",
        "人间四月花海",
        "人间郁郁",
        "人间事实",
        "人间",
        "人间",
        "人间",
        "人间",
        "人间",
        "人间",
        "人间",
        "人间",
        "人间",
        "人间",
        "人间",
        "人间",
        "人间",
        "人间",
        "人间",
        "人间",
        "人间",
        "人间",
        "人间",
        "人间",
        "人间",
        "人间",
        "人间",
        "人间",
     
      ];
      for (var i = 0; i < data3.length; i++) {
        if (data3[i] == 0) {
          if (data2[i] == 0) {
            data1[i] = {
              value: data1[i],
              itemStyle: {
                barBorderRadius: [4, 4, 4, 4],
              },
            };
          } else {
            data2[i] = {
              value: data2[i],
              itemStyle: {
                barBorderRadius: [4, 4, 4, 4],
              },
            };
          }
        } else {
          data3[i] = {
            value: data3[i],
            itemStyle: {
              barBorderRadius: [4, 4, 4, 4],
            },
          };
        }
      }
option = {
    backgroundColor: "#fff",
        tooltip: {
          trigger: "axis",
          formatter: function (params) {
            var str = "<div>" + params[0].name + "<div>";
            for (var i = 0; i < params.length; i++) {
              if (i == 0) {
                continue;
              } else {
                str +=
                  params[i].marker +
                  "" +
                  params[i].seriesName +
                  " : " +
                  params[i].value +
                  "<br>";
              }
            }
            return str;
          },
          axisPointer: {
            type: "shadow",
            shadowStyle: {
              color: "rgba(210,219,238,0.2)",
            },
          },
        },
        legend: {
          data: ["计划", "已用时间", "启动超期", "实施超期"],
        //   "人间", "四月", "花海", "人事"]
          left: "30",
        },
        xAxis: {
          type: "value",
          position: "top",
          interval: 1,
          min: 0,
          max: 11,
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "#666",
            formatter: function (value) {
              var texts = [];
              for (var i = 0; i < 12; i++) {
                if (value == i) {
                  texts.push(i + 1 + "月");
                }
              }
              return texts;
            },
          },
          axisLine: {
            lineStyle: {
              color: "#ccc",
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#e8e8e8",
              type: "dashed",
            },
          },
        },
        yAxis: {
          type: "category",
          realtimeSort: true,
          data: projectData,
          axisLine: {
            show: true,
            lineStyle: {
              color: "#ccc",
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "#666",
            letterSpacing: "5",
          },
        },
        grid: {
          left: "30",
          right: "50",
          bottom: "0",
          containLabel: true,
        },
        series: [
          {
            name: "透明",
            type: "bar",
            stack: "总量",
            barMaxWidth: 32,
            itemStyle: {
              normal: {
                color: "rgba(0,0,0,0)",
              },
            },
            label: {
              normal: {
                position: "inside",
                formatter: function (params) {
                  if (params.value > 0) {
                    return params.value;
                  } else {
                    return "";
                  }
                },
              },
            },
            data: data0,
          },
          {
            name: "启动超期",
            type: "bar",
            stack: "总量",
            barMaxWidth: 26,
            itemStyle: {
              normal: {
                color: "#fe917a",
              },
            },
            label: {
              normal: {
                show: false,
                position: "inside",
                formatter: function (params) {
                  if (params.value > 0) {
                    return params.value;
                  } else {
                    return "";
                  }
                },
              },
            },
            data: data4,
          },
          {
            name: "计划",
            type: "bar",
            stack: "总量",
            barMaxWidth: 26,
            itemStyle: {
              normal: {
                color: "#e8e8e8",
              },
            },
            label: {
              normal: {
                show: false,
                position: "inside",
                formatter: function (params) {
                  if (params.value > 0) {
                    return params.value;
                  } else {
                    return "";
                  }
                },
              },
            },
            data: data1,
          },
          {
            name: "已用时间",
            type: "bar",
            stack: "总量",
            barMaxWidth: 26,
            itemStyle: {
              normal: {
                color: "#58c99e",
              },
            },
            label: {
              normal: {
                show: true,
                position: "inside",
                formatter: function (params) {
                  if (params.value > 0) {
                    return params.value;
                  } else {
                    return "";
                  }
                },
              },
            },
            data: data2,
          },
          {
            name: "实施超期",
            type: "bar",
            stack: "总量",
            barMaxWidth: 26,
            itemStyle: {
              normal: {
                color: "#fe917a",
              },
            },
            label: {
              normal: {
                show: true,
                position: "inside",
                formatter: function (params) {
                  if (params.value > 0) {
                    return params.value;
                  } else {
                    return "";
                  }
                },
              },
            },
            data: data3,
          },
          {
            name: "计划",
            type: "bar",
            stack: "总量",
            barMaxWidth: 26,
            itemStyle: {
              normal: {
                color: "#e8e8e8",
              },
            },
            label: {
              normal: {
                show: true,
                position: "inside",
                formatter: function (params) {
                  if (params.value > 0) {
                    return params.value;
                  } else {
                    return "";
                  }
                },
              },
            },
            data: data5,
          },
        ],
};
