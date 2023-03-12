var category = ["北京", "上海", "广州", "深圳", "杭州", "大连", "厦门", "珠海", "宁波", "东莞", "武汉", "青岛", "重庆", "西安", "长沙"];
      var area = [16410.54, 6340, 7434, 1996.85, 16853.58, 12573.85, 1699.39, 1711.24, 9816, 2460.1, 8569.15, 11282, 5472, 10752, 11819];
      var population = [2154.2, 2423.78, 1490.44, 1302.66, 980, 595, 411, 189.11, 820.2, 839.22, 1108, 929, 865, 1000.37, 815];
      var GDP = [140000, 135000, 157668, 189568, 140180, 109644, 118015, 159400, 132603, 98939, 135136, 128459, 107092, 85114, 135000];
      var realties = [51000, 59115, 31176, 54666, 27170, 13635, 46353, 21000, 22436, 15903, 17023, 16531, 11493, 12445, 10077];

      var GDP_PerMonth = [];
      for (let i = 0; i < GDP.length; i++) {
        GDP_PerMonth.push((GDP[i] / 12).toFixed(2));
      }

option = {
        backgroundColor: "rgba(31,34,55)",
        tooltip: {
          trigger: "axis",
          backgroundColor: "rgba(255,255,255,0.1)",
          axisPointer: {
            type: "shadow",
            label: {
              show: true,
              backgroundColor: "#7B7DDC"
            }
          }
        },
        legend: {
          data: ["面积", "人口", "人均GDP", "房产均价"],
          textStyle: {
            color: "#B4B4B4"
          },
          top: "7%"
        },
        grid: {
          x: "9%",
          width: "82%",
          y: "12%"
        },
        xAxis: {
          data: category,
          axisLine: {
            lineStyle: {
              color: "#B4B4B4"
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: [
          {
            splitLine: { show: false },
            axisLine: {
              lineStyle: {
                color: "#B4B4B4"
              }
            },

            axisLabel: {
              formatter: "{value} "
            }
          },
          {
            splitLine: { show: false },
            axisLine: {
              lineStyle: {
                color: "#B4B4B4"
              }
            },
            axisLabel: {
              formatter: "{value} "
            }
          }
        ],

        series: [
          {
            name: "面积",
            type: "bar",
            barWidth: "15%",
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "rgba(156,107,211,0.5)" },
                  { offset: 0.2, color: "rgba(156,107,211,0.3)" },
                  { offset: 1, color: "rgba(156,107,211,0.3)" }
                ])
              }
            },
            data: area
          },

          {
            name: "人口",
            type: "bar",
            barGap: "100%",
            barWidth: "15%",
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#956FD4" },
                  { offset: 1, color: "#3EACE5" }
                ])
              }
            },

            data: population
          },
          {
            name: "人均GDP",
            type: "line",
            smooth: true,
            showAllSymbol: true,
            symbol: "emptyCircle",
            symbolSize: 8,
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: "orangered"
              }
            },
            data: GDP_PerMonth
          },

          {
            name: "房产均价",
            type: "line",
            smooth: true,
            showAllSymbol: true,
            symbol: "emptyCircle",
            symbolSize: 8,
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: "#F02FC2"
              }
            },
            data: realties
          }
        ]
      };
     