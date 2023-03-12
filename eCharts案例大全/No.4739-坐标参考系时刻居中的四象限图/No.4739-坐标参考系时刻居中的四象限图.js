option = {
    tooltip: {
        // trigger: 'axis',
        showDelay: 0,
        // backgroundColor: "rgba(255,255,255,0.95)", //通过设置rgba调节背景颜色与透明度
        backgroundColor: "rgba(0,0,0,0.6)",
        color: "#666666",
        textStyle: {
          color: "#666666",
          fontSize: 12
        },
        padding: [5, 10],
        extraCssText: "box-shadow:0 2px 4px rgba(91,121,251,0.3);",
        formatter: function (params) {
          var table = "";
          if (params.value.length > 3) {
            table = "<table><tr><td style='color:#FFFFFF;'>" + params.data[2] + "</td></tr>";
            table += "<tr>";
            table += "<td><span style='color:#FFFFFF;'>业绩</span></td>";
            table += "<td><span style='color:#FFFFFF;font-size: 14px;font-family: Roboto-Medium;margin-left: 12px;'>" + params.data[3] + "</span></td>";
            table += "</tr>";
            table += "<tr>";
            table += "<td><span style='color:#FFFFFF;'>达标率</span></td>";
            table += "<td><span style='color:#FFFFFF;font-size: 14px;font-family: Roboto-Medium;margin-left: 12px;'>" + params.data[4] + "%</span></td>";
            table += "</tr>";
            table += "<tr>";
            table += "<td><span style='color:#FFFFFF;'>同比</span></td>";
            table += "<td><span style='color:#FFFFFF;font-size: 14px;font-family: Roboto-Medium;margin-left: 12px;'>" + params.data[5] + "%</span></td>";
            table += "</tr>";
            table += "</table>";
          } else {
            table = params.seriesName + ' <br>' + params.name + '   ' + params.value + '% ';
          }
          return table;
        },
        axisPointer: {
          show: true,
          type: "line",
          lineStyle: {
            type: "dashed",
            width: 1
          }
        }
    },
    grid: {
        left: '30',
        right: '80',
        bottom: '10',
        top: '30',
        containLabel: true
    },
    graphic: [
        {
          type: "text",
          z: 100,
          left: "20",
          top: "20",
          style: {
            fill: "#296BEF",
            textAlign: "right",
            text: ["良好", "同比高", "达标率低"].join("\n"),
            font: "10px Microsoft YaHei"
          }
        },
        {
          type: "text",
          z: 100,
          right: "20",
          top: "20",
          style: {
            fill: "#296BEF",
            text: ["优秀", "同比高", "达标率高"].join("\n"),
            font: "10px Microsoft YaHei"
          }
        },
        {
          type: "text",
          z: 100,
          right: "20",
          bottom: "20",
          style: {
            fill: "#296BEF",
            text: ["一般", "同比低", "达标率高"].join("\n"),
            font: "10px Microsoft YaHei"
          }
        },
        {
          type: "text",
          z: 100,
          left: "20",
          bottom: "20",
          style: {
            fill: "#296BEF",
            textAlign: "right",
            text: ["加油", "同比低", "达标率低"].join("\n"),
            font: "10px Microsoft YaHei"
          }
        }
    ], //4个角的文字 + 上，右侧全国数据
    "xAxis": {
        "show": false,
        // 此处需要加 max和min 属性实现坐标轴时刻居中显示
        "axisLine": {
            "lineStyle": {
                "color": "#ddd"
            }
        },
        "axisLabel": {
            "color": "#666"
        },
        "splitLine": {
            "show": false,
            "lineStyle": {
                "color": "#eee"
            }
        },
        "splitArea": {
            "show": false
        }
    },
    "yAxis": {
        "show": false,
        // 此处需要加 max和min 属性实现坐标轴时刻居中显示
        "axisLine": {
            "lineStyle": {
                "color": "#ddd"
            }
        },
        "axisLabel": {
            "color": "#666"
        },
        "splitLine": {
            "show": false,
            "lineStyle": {
                "color": "#eee"
            }
        },
        "splitArea": {
            "show": false
        }
    },
    series: [{
          type: 'scatter',
          symbolSize: 40,
          data: [
            ["199.9", "-43.2", "宋伊", "1235", "199.9", "-43.2"],
            ["72.7", "-35.7", "杨东", "353", "72.7", "-35.7"],
            ["76.2", "-32.5", "郑洪", "432", "76.2", "-32.5"],
            ["74.8", "-34.8", "段凤", "359", "74.8", "-34.8"],
            ["73.2", "-28.0", "余珊", "284", "73.2", "-28.0"],
            ["83.8", "-18.6", "张忠", "736", "83.8", "-18.6"],
            ["76.6", "-25.5", "刘一泓", "751", "76.6", "-25.5"],
            ["79.3", "-22.7", "梁洪亮", "614", "79.3", "-22.7"],
            ["80.7", "-32.2", "宋兰", "363", "80.7", "-32.2"],
            ["78.7", "-28.9", "易斌", "482", "78.7", "-28.9"],
            ["78.7", "-18.4", "余鸿", "606", "78.7", "-18.4"]   
          ],
          label: {
              show: true,
              position: 'bottom',
              formatter: '{b}'
          },
          itemStyle: {
              "normal": {
                  "color": "#FF6520",
                  "opacity": 0.3,
                  "label": {
                      "show": true,
                      "fontSize": 10,
                      "color": "#666666"
                  }
              },
              "labelLine": {
                  "show": true
              }
          },
          // 中心点交集象限轴
          markLine: {
              silent: true, // 是否不响应鼠标事件
              symbol: ['none', 'none'], // 设置平均线首段无点末端无箭头
              precision: 2, // 精度
              lineStyle: {
                  type: 'solid',
                  color: '#666666'
              },
              label: {
                  color: '#666666',
                  position: 'end',
                  formatter: '{b}'
              },
              data:
                [{
                    "name": "达标\n率85.1%",
                    "xAxis": "85.1"
                }, {
                    "name": "同比\n-22.0%",
                    "yAxis": "-22.0"
                }]
          }
    }]
}