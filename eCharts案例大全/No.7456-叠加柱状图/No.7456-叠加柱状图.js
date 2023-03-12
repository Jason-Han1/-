    let barColor = ["#745ffd", "#338cf9", "#e0b932", "#e03532"]

  let oldData = [
        {
          clrDate: "2020",
          amount: 371,
          currencyType: "计划",
          currencyCode: "计划"
        },
        {
          clrDate: "2020",
          amount: 324,
          currencyType: "合并",
          currencyCode: "预测"
        },
        {
          clrDate: "2020",
          amount: 0,
          currencyType: "合并",
          currencyCode: "黄色"
        },
        {
          clrDate: "2020",
          amount: 0,
          currencyType: "合并",
          currencyCode: "红色"
        },

        {
          clrDate: "2021",
          amount: 385,
          currencyType: "计划",
          currencyCode: "计划"
        },
        {
          clrDate: "2021",
          amount: 346,
          currencyType: "合并",
          currencyCode: "预测"
        },
        {
          clrDate: "2021",
          amount: 20,
          currencyType: "合并",
          currencyCode: "黄色"
        },
        {
          clrDate: "2021",
          amount: 0,
          currencyType: "合并",
          currencyCode: "红色"
        },
        {
          clrDate: "2022",
          amount: 392,
          currencyType: "计划",
          currencyCode: "计划"
        },
        {
          clrDate: "2022",
          amount: 332,
          currencyType: "合并",
          currencyCode: "预测"
        },
        {
          clrDate: "2022",
          amount: 0,
          currencyType: "合并",
          currencyCode: "黄色"
        },
        {
          clrDate: "2022",
          amount: 0,
          currencyType: "合并",
          currencyCode: "红色"
        }
      ];

      let dateArr = [],
        currentTypeArr = [],
        currencyCodeArr = [],
        seriesArr;

      oldData.forEach(item => {
        if (dateArr.indexOf(item.clrDate) < 0) {
          dateArr.push(item.clrDate);
        }
        if (currentTypeArr.indexOf(item.currencyType) < 0) {
          currentTypeArr.push(item.currencyType);
        }
        if (currencyCodeArr.indexOf(item.currencyCode) < 0) {
          currencyCodeArr.push(item.currencyCode);
        }
      });

      seriesArr = currencyCodeArr.map(currencyCode => {
        return {
          name: currencyCode,
          stack: "",
          type: "bar",
          data: [],
          itemStyle: {
            color: "#fff"
          }
        };
      });

      for (var i = 0; i < seriesArr.length; i++) {
        // stack 名字一样的会叠加
        if (seriesArr[i].name == "计划") {
          seriesArr[i].stack = "计划";
        } else {
          seriesArr[i].stack = "合并";
        }

        seriesArr[i].itemStyle["color"] = barColor[i];
        for (var j = 0; j < oldData.length; j++) {
          for (var k = 0; k < dateArr.length; k++) {
            if (
              seriesArr[i].name == oldData[j].currencyCode &&
              seriesArr[i].stack == oldData[j].currencyType &&
              dateArr[k] == oldData[j].clrDate
            ) {
              seriesArr[i].data[k] = oldData[j].amount;
            }
          }
        }
      }
     option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          },
          textStyle: {
            rich: {}
          },
          formatter: function(params, ticket, callback) {
            var htmlStr = "";
            for (var i = 0; i < params.length; i++) {
              if (
                params[i].seriesName != "黄色" &&
                params[i].seriesName != "红色"
              ) {
                var param = params[i];
                var xName = param.name; //x轴的名称
                var seriesName = param.seriesName; //图例名称

                var value = param.value; //y轴值
                if (seriesName == "预测") {
                  value = value + 20;
                }
                var color = param.color; //图例颜色

                // 预测显示
                if (i === 0) {
                  htmlStr += xName + "<br/>"; //x轴的名称
                  htmlStr += "<div>";
                  htmlStr += `<span style="display:inline-block;margin-right:5px;height:10px;width:10px;border-radius:3px;background:${color};"></span>`;
                  htmlStr += seriesName + "：" + value;
                  htmlStr += "</div>";
                } else {
                  htmlStr += "<div>";
                  htmlStr += `<span style="display:inline-block;margin-right:5px;height:10px;width:10px;border-radius:3px;background:${color};"></span>`;
                  htmlStr += seriesName + "：" + value;
                  htmlStr += "</div>";
                }
              }
            }
            return htmlStr;
          }
        },
        legend: {
          type: "scroll",
          data: [currencyCodeArr[0], currencyCodeArr[1]],
          bottom: 0,
          itemWidth: 14,
          textStyle: {
            color: "#626262",
            fontSize: 14
          }
        },
        grid: {
          top: "10%",
          bottom: "20%",
          left: "3%",
          right: "4%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: dateArr,
            axisLabel: {
              color: "#626262"
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            axisTick: {
              show: false
            },
            axisLabel: {
              color: "#626262"
            },
            axisLine: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#333",
                type: "dashed"
              }
            }
          }
        ],
        series: seriesArr
      };