  const linearStartColor = [
      "rgba(90, 142, 248, 0.4)",
      "rgba(90, 216, 166, 0.4)",
      "rgba(216, 90, 206, 0.4)",
      "rgba(249, 213, 91, 0.4)",
  ]
  const linearEndColor = [
      "rgba(90, 142, 248, 0)",
      "rgba(90, 216, 166, 0)",
      "rgba(216, 216, 216, 0)",
      "rgba(249, 213, 91, 0)",
  ]

  function drawingChart(chartVal) {
      let xData = chartVal[0].data;
      let gridData = {
          left: 132,
          right: 128,
          top: 133,
          bottom: 47,
          width: 1006,
          height: 204,
      };
      // x轴数据
      let xAxisData = {
          axisLine: {
              show: false,
          },
          axisLabel: {
              margin: 18,
              fontSize: 12,
              fontFamily: "PingFangSC-Regular,PingFang SC",
              fontWeight: 400,
              color: "rgba(154,154,154,1)",
              lineHeight: 17,
          },
          axisTick: {
              show: false,
          },
          data: [],
          boundaryGap: false,
      };
      // y轴配置
      let yAxisData = [{
              type: "value",
              splitNumber: 5,
              min: "dataMin",
            //   max: "dataMax",
              axisTick: {
                  show: false,
              },
              axisLine: {
                  show: false,
              },
              splitLine: {
                  show: true,
                  lineStyle: {
                      color: "rgba(233, 234, 236, 0.1)",
                  },
              },
              axisLabel: {
                  fontSize: 12,
                  fontFamily: "PingFangSC-Regular,PingFang SC",
                  fontWeight: 400,
                  color: "rgba(154,154,154,1)",
                  lineHeight: 17,
                  margin: 67,
                  verticalAlign: "top",
              },
          },
          {
              type: "value",
              // splitNumber: 5,
              axisLine: {
                  show: false,
              },
              boundaryGap: false,
              axisLabel: {
                  margin: 97,
                  fontSize: 12,
                  fontFamily: "PingFangSC-Regular,PingFang SC",
                  fontWeight: 400,
                  color: "rgba(154,154,154,1)",
                  lineHeight: 17,
                  align: "right",
              },
              splitLine: {
                  show: false,
              },
              axisTick: {
                  show: false,
              },
              min: "dataMin",
            //   max: "dataMax",
          },
      ];
      // 图例配置
      let legend = {
          show: true,
          icon: "rect",
          left: 16,
          top: 23,
          itemWidth: 15,
          itemHeight: 4,
          itemGap: 20,
          tooltip: {
              show: true,
          },
          selector: [{
              type: "all",
              title: "汇总",
          }, ],
          selectorPosition: "start",

          // selectorButtonGap: 600,
          selectorLabel: {
              width: 52,
              height: 28,
              distance: 20,
              padding: [4, 12],
              fontSize: 14,
              fontFamily: "PingFangSC-Regular,PingFang SC",
              fontWeight: 400,
              color: "rgba(255,255,255,1)",
              align: "middle",
              verticalAlign: "middle",
              lineHeight: 20,
              // textBorderColor: "red",
              backgroundColor: "rgba(79, 111, 222, 0.4)",
          },
          textStyle: {
              fontSize: 12,
              fontFamily: "PingFangSC-Regular,PingFang SC",
              fontWeight: 400,
              color: "rgba(154, 154, 154, 1)",
              lineHeight: 17,
          },
      };
      // 缩放配置
      let dataZoom = [{
          type: "inside",
          xAxisIndex: 0,
      }, ];
      let color = [
          "rgba(90, 142, 248, 1)",
          "rgba(90, 216, 166, 1)",
          "rgba(195, 84, 189, 1)",
          "rgba(234, 201, 89, 1)",
      ];
      // 折线名称
      let titleData = [{
              text: "",
              x: 24,
              y: 84,
              textStyle: {
                  fontSize: 12,
                  fontWeight: 400,
                  fontFamily: "PingFangSC-Regular,PingFang SC",
                  lineHeight: 17,
                  color: "rgba(154,154,154,1)", // 主标题文字颜色
              },
          },
          {
              text: "时间(分钟)",
              right: "2%",
              y: 350,
              textStyle: {
                  fontSize: 12,
                  fontWeight: 400,
                  fontFamily: "PingFangSC-Regular,PingFang SC",
                  lineHeight: 17,
                  color: "rgba(154,154,154,1)", // 主标题文字颜色
              },
          },
          {
              text: "▲",
              right: "18.5%",
              top: 26,
              textStyle: {
                  fontSize: 12,
                  lineHeight: 17,
                  textVerticalAlign: "center",
                  color: "rgba(255, 255, 255, 1)", // 主标题文字颜色
              },
          },
          {
              text: "事件",
              right: "16%",
              top: 26,
              textStyle: {
                  fontSize: 12,
                  fontWeight: 400,
                  fontFamily: "PingFangSC-Regular,PingFang SC",
                  lineHeight: 17,
                  textVerticalAlign: "center",
                  color: "rgba(154,154,154,1)", // 主标题文字颜色
              },
          },
          {
              // text: "⬤",
              text: "●",
              right: "13.5%",
              top: 26,
              textStyle: {
                  fontSize: 12,
                  lineHeight: 17,
                  textVerticalAlign: "center",
                  color: "rgba(255, 255, 255, 1)", // 主标题文字颜色
              },
          },
          {
              text: "措施执行",
              right: "9%",
              top: 26,
              textStyle: {
                  textVerticalAlign: "center",
                  fontSize: 12,
                  fontWeight: 400,
                  fontFamily: "PingFangSC-Regular,PingFang SC",
                  lineHeight: 17,
                  color: "rgba(154,154,154,1)", // 主标题文字颜色
              },
          },
          {
              text: "⯁",
              right: "6.5%",
              top: 26,
              textStyle: {
                  fontSize: 12,
                  textVerticalAlign: "center",
                  lineHeight: 17,
                  color: "rgba(255, 255, 255, 1)", // 主标题文字颜色
              },
          },
          {
              text: "措施生效",
              right: "2%",
              top: 26,
              textStyle: {
                  textVerticalAlign: "center",
                  fontSize: 12,
                  fontWeight: 400,
                  fontFamily: "PingFangSC-Regular,PingFang SC",
                  lineHeight: 17,
                  color: "rgba(154,154,154,1)", // 主标题文字颜色
              },
          },
      ];
      // 折线数据
      let seriesData = [];
      // 浮层
      let toolTipData = {
          trigger: "axis",
          padding: 0,
          axisPointer: {
              lineStyle: {
                  color: "rgba(182, 182, 182, 1)",
                  type: "dashed",
              },
              label: {
                  show: false,
                  color: "rgba(0, 0, 0, 0.65)",
              },
          },
          textStyle: {
              width: 160,
              color: "rgba(0, 0, 0, 0.65)",
              fontSize: 14,
              fontFamily: "PingFangSC-Regular,PingFang SC",
              fontWeight: 400,
              lineHeight: 20,
          },
          backgroundColor: "rgba(255,255,255,1)",
      };
      for (let i = 0; i < xData.length; i++) {
          let x = xData[i].scale;
          xAxisData.data.push(x);
      }

      // 获取折线名称数据 --> 有几条线
      let seriesName = chartVal.map(item => {
          return item.indexName;
      });
      seriesName.forEach((item, index) => {
          if (item.indexOf("度") >= 0) {
              seriesData.push({
                  name: item,
                  type: "line",
                  yAxisIndex: 1,
                  lineStyle: {
                      width: 2,
                  },
                  itemStyle: {
                      opacity: 0,
                  },
                  markPoint: {
                      data: [],
                  },
                  connectNulls: true,
                  areaStyle: {
                      normal: {
                          color: new echarts.graphic.LinearGradient(
                              0,
                              0,
                              0,
                              1,
                              [{
                                      offset: 0,
                                      color: linearStartColor[0],
                                  },
                                  {
                                      offset: 1,
                                      color: linearEndColor[0],
                                  },
                              ],
                              false
                          ),
                      },
                  },
              });
              titleData.push({
                  text: item + "(%)",
                  right: "2%",
                  top: 84,
                  textStyle: {
                      fontSize: 12,
                      fontWeight: 400,
                      fontFamily: "PingFangSC-Regular,PingFang SC",
                      lineHeight: 17,
                      color: "rgba(154,154,154,1)", // 主标题文字颜色
                  },
              });
          } else {
              seriesData.push({
                  name: item,
                  type: "line",
                  lineStyle: {
                      width: 2,
                  },
                  connectNulls: true,
                  itemStyle: {
                      opacity: 0,
                  },
                  markPoint: {
                      data: [],
                  },
                  areaStyle: {
                      normal: {
                          color: new echarts.graphic.LinearGradient(
                              0,
                              0,
                              0,
                              1,
                              [{
                                      offset: 0,
                                      color: linearStartColor[index],
                                  },
                                  {
                                      offset: 1,
                                      color: linearEndColor[index],
                                  },
                              ],
                              false
                          ),
                      },
                  },
              });
          }
          if (index > 0) {
              titleData[0].text += item + "/";
          }
      });
      // 配置y轴名
      titleData[0].text += "（人）";
      // 配置数据项 series 绘制折线图
      // x轴各坐标数据
      let pointData = chartVal.map(item => {
          return item.data;
      });

      // x轴每条线数据
      let valueData = [];
      // 标志点信息
      let markerData = [];
      for (let i = 0; i < pointData.length; i++) {
          let result = [];
          let markArr = [];
          for (let j = 0; j < pointData[i].length; j++) {
              let k = pointData[i][j];
              markArr.push(k.data);
              if (k.yValue) {
                  if (i > 0) {
                      result.push(parseInt(k.yValue));
                  } else {
                      result.push(k.yValue);
                  }
              } else {
                  result.push(null);
              }
          }
          // 标志点信息
          markerData.push(markArr);
          // 每条折线数据信息
          valueData.push(result);
      }

      // 数据 标记 浮层
      // 每条折线赋予数据 先赋予数据再打标记
      for (let i = 0; i < valueData.length; i++) {
          seriesData[i].data = valueData[i];
      }

      // 浮层文本数据
      let contentArr = [];
      for (let i = 0; i < markerData.length; i++) {
          let k = markerData[i];
          for (let j = 0; j < k.length; j++) {
              let t = k[j];
              // 浮层文本
              let content = [];
              for (let m = 0; m < t.length; m++) {
                  let n = t[m];
                  if ("symbol" in n) {
                      seriesData[i].markPoint.data.push(n);
                      contentArr.push(n);
                      content.push(n.name + "</br>");
                  }
              }
          }
      }

      yAxisData.min = parseInt(yAxisData.min);
      // 提取每个时刻所发生的所有事件和措施，去重
      let toolTipRes = [];
      for (let i = 0; i < xData.length; i++) {
          toolTipRes[i] = [];
          contentArr.forEach((item) => {
              if (item.coord[0] === i) {
                  toolTipRes[i].push(`${item.name}</br>`);
              }
          });
          toolTipRes[i] = Array.from(new Set(toolTipRes[i]));
      }

      // 设置浮层提示文字
      toolTipData.formatter = function(params) {
          // console.log(params)
          let styleList = [];
          let result = "";
          params.forEach(item => {
              // console.log(item)
              item.marker = `
              <span style="display:inline-block;
                           width:12px;
                           height:6px;
                           margin-right:7px;
                           background: ${item.color};
              ">
              </span>
              `;
              if (
                  item.seriesName.indexOf("度") >= 0 &&
                  item.value &&
                  typeof item.value !== "undefined"
              ) {
                  styleList.push(
                      `
                   ${item.marker}${item.seriesName}：${item.value.toFixed(2)}%
                   `
                  );
              }
              if (item.value) {
                  styleList.push(
                      `
                ${item.marker}${item.seriesName}：${parseInt(item.value)}
                `
                  );
              }
          });
          // 删除重复第二项元素 保证满意度项不重复
          styleList.splice(1, 1);
          let t = toolTipRes[params[0].dataIndex];
          // console.log(t,'wqdqwdqwdq')
          if (t.length) {
              let toolTipContent = "";
              for (let i = 0; i < t.length; i++) {
                  toolTipContent += t[i];
              }
              result =
                  `<div style="margin: 10px 12px 0 12px
                         padding-right: 7px;
                         padding-bottom: 8px;
            ">` +
                  styleList.join("</br>") +
                  `</div>`;
              params.forEach(item => {
                  result =
                      `
                <p style="width:max-content;
                          height:max-content;
                          font-size:14px;
                          font-family: PingFangSC-Regular,PingFang SC;
                          font-weight:400;
                          background-color:rgba(237,239,241,1);
                          color:rgba(81,90,110,1);
                          line-height:20px;
                ">
                  <p style="padding:8px 12px;
                            border-radius: 4px;
                            background-color: rgba(237, 239, 241, 1);
                  ">` +
                      toolTipContent +
                      `<div style="margin: 8px 12px 0 12px;
                           padding-bottom: 8px;
              ">` +
                      styleList.join("</br>") +
                      `</div>`;
              });
          }
          return result;
      };

      return {
          backgroundColor: 'rgba(47, 51, 82, 1)',
          color,
          dataZoom,
          legend,
          grid: gridData,
          xAxis: xAxisData,
          title: titleData,
          yAxis: yAxisData,
          series: seriesData,
          tooltip: toolTipData,
      };
  }
  let val = [{
      "indexName": "目标人群满意度",
      "indexId": "ed104ac4-5294-4525-b4dd-1ebaa1f7a6bb",
      "data": [{
          "scale": 0,
          "yValue": 60.28,
          "data": [{
              "coord": [0, 60.28],
              "symbolSize": 10,
              "name": "官方媒体宣传措施执行",
              "symbol": "circle"
          }, {
              "coord": [0, 60.28],
              "symbolSize": 10,
              "name": "事件发生",
              "symbol": "triangle"
          }, {
              "coord": [0, 60.28],
              "symbolSize": 10,
              "name": "设置咨询服务台措施执行",
              "symbol": "circle"
          }, {
              "coord": [0, 60.28],
              "symbolSize": 10,
              "name": "举办讲座和发放宣传册措施执行",
              "symbol": "circle"
          }, {
              "coord": [0, 60.28],
              "symbolSize": 10,
              "name": "妇幼健康门诊建设措施执行",
              "symbol": "circle"
          }, {
              "coord": [0, 60.28],
              "symbolSize": 10,
              "name": "推进母婴设施建设措施执行",
              "symbol": "circle"
          }, {
              "coord": [0, 60.28],
              "symbolSize": 10,
              "name": "延长婚假产假措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 1,
          "yValue": 60.47,
          "data": [{
              "coord": [1, 60.47],
              "symbolSize": 10,
              "name": "加强生育意愿跟踪措施执行",
              "symbol": "circle"
          }, {
              "coord": [1, 60.47],
              "symbolSize": 10,
              "name": "简化生育审批制度措施执行",
              "symbol": "circle"
          }, {
              "coord": [1, 60.47],
              "symbolSize": 10,
              "name": "事件发生",
              "symbol": "triangle"
          }, {
              "coord": [1, 60.47],
              "symbolSize": 10,
              "name": "保障女性就业权益措施执行",
              "symbol": "circle"
          }, {
              "coord": [1, 60.47],
              "symbolSize": 10,
              "name": "落实婚假产假制度措施执行",
              "symbol": "circle"
          }, {
              "coord": [1, 60.47],
              "symbolSize": 10,
              "name": "招聘新教师措施执行",
              "symbol": "circle"
          }, {
              "coord": [1, 60.47],
              "symbolSize": 10,
              "name": "挖掘现有教师资源措施执行",
              "symbol": "circle"
          }, {
              "coord": [1, 60.47],
              "symbolSize": 10,
              "name": "创成优质幼儿园措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 2,
          "yValue": 60.57,
          "data": [{
              "coord": [2, 60.57],
              "symbolSize": 10,
              "name": "新建幼儿园措施执行",
              "symbol": "circle"
          }, {
              "coord": [2, 60.57],
              "symbolSize": 10,
              "name": "事件发生",
              "symbol": "triangle"
          }]
      }, {
          "scale": 3,
          "yValue": 61.260000000000005,
          "data": [{
              "symbolSize": 10,
              "coord": [3, 61.260000000000005]
          }]
      }, {
          "scale": 4,
          "yValue": 61.95,
          "data": [{
              "coord": [4, 61.95],
              "symbolSize": 10,
              "name": "官方媒体宣传措施生效",
              "symbol": "diamond"
          }, {
              "coord": [4, 61.95],
              "symbolSize": 10,
              "name": "设置咨询服务台措施生效",
              "symbol": "diamond"
          }, {
              "coord": [4, 61.95],
              "symbolSize": 10,
              "name": "简化生育审批制度措施生效",
              "symbol": "diamond"
          }, {
              "coord": [4, 61.95],
              "symbolSize": 10,
              "name": "延长婚假产假措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 5,
          "yValue": 62.79,
          "data": [{
              "coord": [5, 62.79],
              "symbolSize": 10,
              "name": "加强生育意愿跟踪措施生效",
              "symbol": "diamond"
          }, {
              "coord": [5, 62.79],
              "symbolSize": 10,
              "name": "举办讲座和发放宣传册措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 6,
          "yValue": 63.65,
          "data": [{
              "coord": [6, 63.65],
              "symbolSize": 10,
              "name": "落实婚假产假制度措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 7,
          "yValue": 64.36,
          "data": [{
              "coord": [7, 64.36],
              "symbolSize": 10,
              "name": "保障女性就业权益措施生效",
              "symbol": "diamond"
          }, {
              "coord": [7, 64.36],
              "symbolSize": 10,
              "name": "出生缺陷防治宣传教育措施执行",
              "symbol": "circle"
          }, {
              "coord": [7, 64.36],
              "symbolSize": 10,
              "name": "提高孕期检查水平措施执行",
              "symbol": "circle"
          }, {
              "coord": [7, 64.36],
              "symbolSize": 10,
              "name": "新生儿疾病筛查措施执行",
              "symbol": "circle"
          }, {
              "coord": [7, 64.36],
              "symbolSize": 10,
              "name": "建立产妇重症救治中心措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 8,
          "yValue": 64.36,
          "data": [{
              "coord": [8, 64.36],
              "symbolSize": 10,
              "name": "加强孕前咨询与检查措施执行",
              "symbol": "circle"
          }, {
              "coord": [8, 64.36],
              "symbolSize": 10,
              "name": "加大养老机构建设措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 9,
          "yValue": 64.36,
          "data": [{
              "coord": [9, 64.36],
              "symbolSize": 10,
              "name": "培训全科医生措施执行",
              "symbol": "circle"
          }, {
              "coord": [9, 64.36],
              "symbolSize": 10,
              "name": "设置咨询服务台措施执行",
              "symbol": "circle"
          }, {
              "coord": [9, 64.36],
              "symbolSize": 10,
              "name": "购买教学设备措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 10,
          "yValue": 65.34,
          "data": [{
              "coord": [10, 65.34],
              "symbolSize": 10,
              "name": "官方媒体宣传措施执行",
              "symbol": "circle"
          }, {
              "coord": [10, 65.34],
              "symbolSize": 10,
              "name": "挖掘现有教师资源措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 11,
          "yValue": 67.5,
          "data": [{
              "coord": [11, 67.5],
              "symbolSize": 10,
              "name": "延长婚假产假措施执行",
              "symbol": "circle"
          }, {
              "coord": [11, 67.5],
              "symbolSize": 10,
              "name": "招聘新教师措施生效",
              "symbol": "diamond"
          }, {
              "coord": [11, 67.5],
              "symbolSize": 10,
              "name": "落实婚假产假制度措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 12,
          "yValue": 67.55,
          "data": [{
              "coord": [12, 67.55],
              "symbolSize": 10,
              "name": "保障女性就业权益措施执行",
              "symbol": "circle"
          }, {
              "coord": [12, 67.55],
              "symbolSize": 10,
              "name": "接产机构人才激励机制措施执行",
              "symbol": "circle"
          }, {
              "coord": [12, 67.55],
              "symbolSize": 10,
              "name": "事件发生",
              "symbol": "triangle"
          }, {
              "coord": [12, 67.55],
              "symbolSize": 10,
              "name": "吸引持证人员回归措施执行",
              "symbol": "circle"
          }, {
              "coord": [12, 67.55],
              "symbolSize": 10,
              "name": "举办讲座和发放宣传册措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 13,
          "yValue": 69.17,
          "data": [{
              "coord": [13, 69.17],
              "symbolSize": 10,
              "name": "提升幼儿早期发展服务措施执行",
              "symbol": "circle"
          }, {
              "coord": [13, 69.17],
              "symbolSize": 10,
              "name": "设置咨询服务台措施生效",
              "symbol": "diamond"
          }, {
              "coord": [13, 69.17],
              "symbolSize": 10,
              "name": "妇幼健康门诊建设措施生效",
              "symbol": "diamond"
          }, {
              "coord": [13, 69.17],
              "symbolSize": 10,
              "name": "事件发生",
              "symbol": "triangle"
          }]
      }, {
          "scale": 14,
          "yValue": 71.1,
          "data": [{
              "coord": [14, 71.1],
              "symbolSize": 10,
              "name": "官方媒体宣传措施生效",
              "symbol": "diamond"
          }, {
              "coord": [14, 71.1],
              "symbolSize": 10,
              "name": "推进母婴设施建设措施生效",
              "symbol": "diamond"
          }, {
              "coord": [14, 71.1],
              "symbolSize": 10,
              "name": "挖掘现有教师资源措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 15,
          "yValue": 73.07,
          "data": [{
              "coord": [15, 73.07],
              "symbolSize": 10,
              "name": "创成优质幼儿园措施生效",
              "symbol": "diamond"
          }, {
              "coord": [15, 73.07],
              "symbolSize": 10,
              "name": "招聘新教师措施执行",
              "symbol": "circle"
          }, {
              "coord": [15, 73.07],
              "symbolSize": 10,
              "name": "事件发生",
              "symbol": "triangle"
          }, {
              "coord": [15, 73.07],
              "symbolSize": 10,
              "name": "延长婚假产假措施生效",
              "symbol": "diamond"
          }, {
              "coord": [15, 73.07],
              "symbolSize": 10,
              "name": "购买教学设备措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 16,
          "yValue": 75.71,
          "data": [{
              "coord": [16, 75.71],
              "symbolSize": 10,
              "name": "建立产妇重症救治中心措施生效",
              "symbol": "diamond"
          }, {
              "coord": [16, 75.71],
              "symbolSize": 10,
              "name": "事件发生",
              "symbol": "triangle"
          }, {
              "coord": [16, 75.71],
              "symbolSize": 10,
              "name": "吸引持证人员回归措施生效",
              "symbol": "diamond"
          }, {
              "coord": [16, 75.71],
              "symbolSize": 10,
              "name": "落实婚假产假制度措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 17,
          "yValue": 76.78,
          "data": [{
              "coord": [17, 76.78],
              "symbolSize": 10,
              "name": "购买教学设备措施执行",
              "symbol": "circle"
          }, {
              "coord": [17, 76.78],
              "symbolSize": 10,
              "name": "接产机构人才激励机制措施生效",
              "symbol": "diamond"
          }, {
              "coord": [17, 76.78],
              "symbolSize": 10,
              "name": "事件发生",
              "symbol": "triangle"
          }, {
              "coord": [17, 76.78],
              "symbolSize": 10,
              "name": "吸引持证人员回归措施执行",
              "symbol": "circle"
          }, {
              "coord": [17, 76.78],
              "symbolSize": 10,
              "name": "举办讲座和发放宣传册措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 18,
          "yValue": 77.46,
          "data": [{
              "coord": [18, 77.46],
              "symbolSize": 10,
              "name": "保障女性就业权益措施生效",
              "symbol": "diamond"
          }, {
              "coord": [18, 77.46],
              "symbolSize": 10,
              "name": "举办讲座和发放宣传册措施执行",
              "symbol": "circle"
          }, {
              "coord": [18, 77.46],
              "symbolSize": 10,
              "name": "事件发生",
              "symbol": "triangle"
          }]
      }, {
          "scale": 19,
          "yValue": 81.57,
          "data": [{
              "coord": [19, 81.57],
              "symbolSize": 10,
              "name": "培训全科医生措施生效",
              "symbol": "diamond"
          }, {
              "coord": [19, 81.57],
              "symbolSize": 10,
              "name": "延长婚假产假措施执行",
              "symbol": "circle"
          }, {
              "coord": [19, 81.57],
              "symbolSize": 10,
              "name": "出生缺陷防治宣传教育措施生效",
              "symbol": "diamond"
          }, {
              "coord": [19, 81.57],
              "symbolSize": 10,
              "name": "新生儿疾病筛查措施生效",
              "symbol": "diamond"
          }, {
              "coord": [19, 81.57],
              "symbolSize": 10,
              "name": "事件发生",
              "symbol": "triangle"
          }]
      }, {
          "scale": 20,
          "yValue": 84.81,
          "data": [{
              "coord": [20, 84.81],
              "symbolSize": 10,
              "name": "新建幼儿园措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 21,
          "yValue": 85.9,
          "data": [{
              "coord": [21, 85.9],
              "symbolSize": 10,
              "name": "提升幼儿早期发展服务措施生效",
              "symbol": "diamond"
          }, {
              "coord": [21, 85.9],
              "symbolSize": 10,
              "name": "开展医养结合服务措施执行",
              "symbol": "circle"
          }, {
              "coord": [21, 85.9],
              "symbolSize": 10,
              "name": "设置咨询服务台措施执行",
              "symbol": "circle"
          }, {
              "coord": [21, 85.9],
              "symbolSize": 10,
              "name": "官方媒体宣传措施执行",
              "symbol": "circle"
          }, {
              "coord": [21, 85.9],
              "symbolSize": 10,
              "name": "吸引持证人员回归措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 22,
          "yValue": 87.62,
          "data": [{
              "coord": [22, 87.62],
              "symbolSize": 10,
              "name": "执行人员培训措施执行",
              "symbol": "circle"
          }, {
              "coord": [22, 87.62],
              "symbolSize": 10,
              "name": "加强孕前咨询与检查措施生效",
              "symbol": "diamond"
          }, {
              "coord": [22, 87.62],
              "symbolSize": 10,
              "name": "事件发生",
              "symbol": "triangle"
          }, {
              "coord": [22, 87.62],
              "symbolSize": 10,
              "name": "出生缺陷防治宣传教育措施执行",
              "symbol": "circle"
          }, {
              "coord": [22, 87.62],
              "symbolSize": 10,
              "name": "成立产前管制中心措施执行",
              "symbol": "circle"
          }, {
              "coord": [22, 87.62],
              "symbolSize": 10,
              "name": "提高婚检服务水平措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 23,
          "yValue": 92.82,
          "data": [{
              "coord": [23, 92.82],
              "symbolSize": 10,
              "name": "保障女性就业权益措施执行",
              "symbol": "circle"
          }, {
              "coord": [23, 92.82],
              "symbolSize": 10,
              "name": "购买教学设备措施生效",
              "symbol": "diamond"
          }, {
              "coord": [23, 92.82],
              "symbolSize": 10,
              "name": "落实婚假产假制度措施执行",
              "symbol": "circle"
          }, {
              "coord": [23, 92.82],
              "symbolSize": 10,
              "name": "举办讲座和发放宣传册措施生效",
              "symbol": "diamond"
          }, {
              "coord": [23, 92.82],
              "symbolSize": 10,
              "name": "加大养老机构建设措施生效",
              "symbol": "diamond"
          }, {
              "coord": [23, 92.82],
              "symbolSize": 10,
              "name": "延长婚假产假措施生效",
              "symbol": "diamond"
          }, {
              "coord": [23, 92.82],
              "symbolSize": 10,
              "name": "挖掘现有教师资源措施生效",
              "symbol": "diamond"
          }, {
              "coord": [23, 92.82],
              "symbolSize": 10,
              "name": "简化生育审批制度措施执行",
              "symbol": "circle"
          }, {
              "coord": [23, 92.82],
              "symbolSize": 10,
              "name": "延长婚假产假措施执行",
              "symbol": "circle"
          }, {
              "coord": [23, 92.82],
              "symbolSize": 10,
              "name": "加强生育意愿跟踪措施执行",
              "symbol": "circle"
          }, {
              "coord": [23, 92.82],
              "symbolSize": 10,
              "name": "提升幼儿早期发展服务措施执行",
              "symbol": "circle"
          }, {
              "coord": [23, 92.82],
              "symbolSize": 10,
              "name": "提高孕期检查水平措施生效",
              "symbol": "diamond"
          }, {
              "coord": [23, 92.82],
              "symbolSize": 10,
              "name": "妇幼健康门诊建设措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 24,
          "yValue": 93.715,
          "data": [{
              "symbolSize": 10,
              "coord": [24, 93.715]
          }]
      }, {
          "scale": 25,
          "yValue": 94.61,
          "data": [{
              "coord": [25, 94.61],
              "symbolSize": 10,
              "name": "事件发生",
              "symbol": "triangle"
          }, {
              "coord": [25, 94.61],
              "symbolSize": 10,
              "name": "招聘新教师措施生效",
              "symbol": "diamond"
          }, {
              "coord": [25, 94.61],
              "symbolSize": 10,
              "name": "举办讲座和发放宣传册措施执行",
              "symbol": "circle"
          }, {
              "coord": [25, 94.61],
              "symbolSize": 10,
              "name": "官方媒体宣传措施生效",
              "symbol": "diamond"
          }, {
              "coord": [25, 94.61],
              "symbolSize": 10,
              "name": "设置咨询服务台措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 26,
          "yValue": 95.16,
          "data": [{
              "coord": [26, 95.16],
              "symbolSize": 10,
              "name": "简化生育审批制度措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 27,
          "yValue": 97.15,
          "data": [{
              "coord": [27, 97.15],
              "symbolSize": 10,
              "name": "官方媒体宣传措施执行",
              "symbol": "circle"
          }, {
              "coord": [27, 97.15],
              "symbolSize": 10,
              "name": "开展医养结合服务措施生效",
              "symbol": "diamond"
          }, {
              "coord": [27, 97.15],
              "symbolSize": 10,
              "name": "简化生育审批制度措施执行",
              "symbol": "circle"
          }, {
              "coord": [27, 97.15],
              "symbolSize": 10,
              "name": "成立产前管制中心措施生效",
              "symbol": "diamond"
          }, {
              "coord": [27, 97.15],
              "symbolSize": 10,
              "name": "延长婚假产假措施生效",
              "symbol": "diamond"
          }, {
              "coord": [27, 97.15],
              "symbolSize": 10,
              "name": "加强生育意愿跟踪措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 28,
          "yValue": 98.41,
          "data": [{
              "coord": [28, 98.41],
              "symbolSize": 10,
              "name": "事件发生",
              "symbol": "triangle"
          }, {
              "coord": [28, 98.41],
              "symbolSize": 10,
              "name": "落实婚假产假制度措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 29,
          "yValue": 99.98,
          "data": [{
              "coord": [29, 99.98],
              "symbolSize": 10,
              "name": "执行人员培训措施生效",
              "symbol": "diamond"
          }, {
              "coord": [29, 99.98],
              "symbolSize": 10,
              "name": "设置咨询服务台措施执行",
              "symbol": "circle"
          }, {
              "coord": [29, 99.98],
              "symbolSize": 10,
              "name": "保障女性就业权益措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 30,
          "yValue": 100,
          "data": [{
              "coord": [30, 100],
              "symbolSize": 10,
              "name": "加强生育意愿跟踪措施执行",
              "symbol": "circle"
          }, {
              "coord": [30, 100],
              "symbolSize": 10,
              "name": "简化生育审批制度措施生效",
              "symbol": "diamond"
          }, {
              "coord": [30, 100],
              "symbolSize": 10,
              "name": "举办讲座和发放宣传册措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 31,
          "yValue": 100,
          "data": [{
              "coord": [31, 100],
              "symbolSize": 10,
              "name": "官方媒体宣传措施生效",
              "symbol": "diamond"
          }, {
              "coord": [31, 100],
              "symbolSize": 10,
              "name": "提升幼儿早期发展服务措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 32,
          "yValue": 100,
          "data": [{
              "symbolSize": 10,
              "coord": [32, 100]
          }]
      }, {
          "scale": 33,
          "yValue": 100,
          "data": [{
              "coord": [33, 100],
              "symbolSize": 10,
              "name": "设置咨询服务台措施生效",
              "symbol": "diamond"
          }, {
              "coord": [33, 100],
              "symbolSize": 10,
              "name": "官方媒体宣传措施执行",
              "symbol": "circle"
          }, {
              "coord": [33, 100],
              "symbolSize": 10,
              "name": "简化生育审批制度措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 34,
          "yValue": 100,
          "data": [{
              "coord": [34, 100],
              "symbolSize": 10,
              "name": "加强生育意愿跟踪措施生效",
              "symbol": "diamond"
          }, {
              "coord": [34, 100],
              "symbolSize": 10,
              "name": "出生缺陷防治宣传教育措施生效",
              "symbol": "diamond"
          }, {
              "coord": [34, 100],
              "symbolSize": 10,
              "name": "提高婚检服务水平措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 35,
          "yValue": 100,
          "data": [{
              "coord": [35, 100],
              "symbolSize": 10,
              "name": "设置咨询服务台措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 36,
          "yValue": 100,
          "data": [{
              "coord": [36, 100],
              "symbolSize": 10,
              "name": "简化生育审批制度措施生效",
              "symbol": "diamond"
          }, {
              "coord": [36, 100],
              "symbolSize": 10,
              "name": "妇幼健康门诊建设措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 37,
          "yValue": 100,
          "data": [{
              "coord": [37, 100],
              "symbolSize": 10,
              "name": "官方媒体宣传措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 38,
          "data": [{
              "coord": [38],
              "symbolSize": 10
          }]
      }, {
          "scale": 39,
          "data": [{
              "coord": [39],
              "symbolSize": 10
          }]
      }, {
          "scale": 40,
          "data": [{
              "coord": [40],
              "symbolSize": 10
          }]
      }, {
          "scale": 41,
          "data": [{
              "coord": [41],
              "symbolSize": 10
          }]
      }, {
          "scale": 42,
          "data": [{
              "coord": [42],
              "symbolSize": 10
          }]
      }, {
          "scale": 43,
          "data": [{
              "coord": [43],
              "symbolSize": 10
          }]
      }, {
          "scale": 44,
          "data": [{
              "coord": [44],
              "symbolSize": 10
          }]
      }, {
          "scale": 45,
          "data": [{
              "coord": [45],
              "symbolSize": 10
          }]
      }, {
          "scale": 46,
          "data": [{
              "coord": [46],
              "symbolSize": 10
          }]
      }, {
          "scale": 47,
          "data": [{
              "coord": [47],
              "symbolSize": 10
          }]
      }, {
          "scale": 48,
          "data": [{
              "coord": [48],
              "symbolSize": 10
          }]
      }, {
          "scale": 49,
          "data": [{
              "coord": [49],
              "symbolSize": 10
          }]
      }]
  }, {
      "indexName": "意愿人数",
      "indexId": "32b6d0ee-da6a-436c-9948-7e2e10a60b7d",
      "data": [{
          "scale": 0,
          "yValue": 49046,
          "data": [{
              "coord": [0, 49046],
              "symbolSize": 10,
              "name": "官方媒体宣传措施执行",
              "symbol": "circle"
          }, {
              "coord": [0, 49046],
              "symbolSize": 10,
              "name": "事件发生",
              "symbol": "triangle"
          }, {
              "coord": [0, 49046],
              "symbolSize": 10,
              "name": "设置咨询服务台措施执行",
              "symbol": "circle"
          }, {
              "coord": [0, 49046],
              "symbolSize": 10,
              "name": "举办讲座和发放宣传册措施执行",
              "symbol": "circle"
          }, {
              "coord": [0, 49046],
              "symbolSize": 10,
              "name": "妇幼健康门诊建设措施执行",
              "symbol": "circle"
          }, {
              "coord": [0, 49046],
              "symbolSize": 10,
              "name": "推进母婴设施建设措施执行",
              "symbol": "circle"
          }, {
              "coord": [0, 49046],
              "symbolSize": 10,
              "name": "延长婚假产假措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 1,
          "yValue": 49046,
          "data": [{
              "coord": [1, 49046],
              "symbolSize": 10,
              "name": "加强生育意愿跟踪措施执行",
              "symbol": "circle"
          }, {
              "coord": [1, 49046],
              "symbolSize": 10,
              "name": "简化生育审批制度措施执行",
              "symbol": "circle"
          }, {
              "coord": [1, 49046],
              "symbolSize": 10,
              "name": "保障女性就业权益措施执行",
              "symbol": "circle"
          }, {
              "coord": [1, 49046],
              "symbolSize": 10,
              "name": "落实婚假产假制度措施执行",
              "symbol": "circle"
          }, {
              "coord": [1, 49046],
              "symbolSize": 10,
              "name": "招聘新教师措施执行",
              "symbol": "circle"
          }, {
              "coord": [1, 49046],
              "symbolSize": 10,
              "name": "挖掘现有教师资源措施执行",
              "symbol": "circle"
          }, {
              "coord": [1, 49046],
              "symbolSize": 10,
              "name": "创成优质幼儿园措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 2,
          "yValue": 49046,
          "data": [{
              "coord": [2, 49046],
              "symbolSize": 10,
              "name": "新建幼儿园措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 3,
          "yValue": 49534.5,
          "data": [{
              "symbolSize": 10,
              "coord": [3, 49534.5]
          }]
      }, {
          "scale": 4,
          "yValue": 50023,
          "data": [{
              "coord": [4, 50023],
              "symbolSize": 10,
              "name": "官方媒体宣传措施生效",
              "symbol": "diamond"
          }, {
              "coord": [4, 50023],
              "symbolSize": 10,
              "name": "设置咨询服务台措施生效",
              "symbol": "diamond"
          }, {
              "coord": [4, 50023],
              "symbolSize": 10,
              "name": "简化生育审批制度措施生效",
              "symbol": "diamond"
          }, {
              "coord": [4, 50023],
              "symbolSize": 10,
              "name": "延长婚假产假措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 5,
          "yValue": 50594,
          "data": [{
              "coord": [5, 50594],
              "symbolSize": 10,
              "name": "加强生育意愿跟踪措施生效",
              "symbol": "diamond"
          }, {
              "coord": [5, 50594],
              "symbolSize": 10,
              "name": "举办讲座和发放宣传册措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 6,
          "yValue": 51136,
          "data": [{
              "coord": [6, 51136],
              "symbolSize": 10,
              "name": "事件发生",
              "symbol": "triangle"
          }, {
              "coord": [6, 51136],
              "symbolSize": 10,
              "name": "落实婚假产假制度措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 7,
          "yValue": 51696,
          "data": [{
              "coord": [7, 51696],
              "symbolSize": 10,
              "name": "保障女性就业权益措施生效",
              "symbol": "diamond"
          }, {
              "coord": [7, 51696],
              "symbolSize": 10,
              "name": "出生缺陷防治宣传教育措施执行",
              "symbol": "circle"
          }, {
              "coord": [7, 51696],
              "symbolSize": 10,
              "name": "提高孕期检查水平措施执行",
              "symbol": "circle"
          }, {
              "coord": [7, 51696],
              "symbolSize": 10,
              "name": "新生儿疾病筛查措施执行",
              "symbol": "circle"
          }, {
              "coord": [7, 51696],
              "symbolSize": 10,
              "name": "建立产妇重症救治中心措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 8,
          "yValue": 51696,
          "data": [{
              "coord": [8, 51696],
              "symbolSize": 10,
              "name": "加强孕前咨询与检查措施执行",
              "symbol": "circle"
          }, {
              "coord": [8, 51696],
              "symbolSize": 10,
              "name": "加大养老机构建设措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 9,
          "yValue": 51696,
          "data": [{
              "coord": [9, 51696],
              "symbolSize": 10,
              "name": "培训全科医生措施执行",
              "symbol": "circle"
          }, {
              "coord": [9, 51696],
              "symbolSize": 10,
              "name": "设置咨询服务台措施执行",
              "symbol": "circle"
          }, {
              "coord": [9, 51696],
              "symbolSize": 10,
              "name": "购买教学设备措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 10,
          "yValue": 52470,
          "data": [{
              "coord": [10, 52470],
              "symbolSize": 10,
              "name": "官方媒体宣传措施执行",
              "symbol": "circle"
          }, {
              "coord": [10, 52470],
              "symbolSize": 10,
              "name": "挖掘现有教师资源措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 11,
          "yValue": 54189,
          "data": [{
              "coord": [11, 54189],
              "symbolSize": 10,
              "name": "延长婚假产假措施执行",
              "symbol": "circle"
          }, {
              "coord": [11, 54189],
              "symbolSize": 10,
              "name": "招聘新教师措施生效",
              "symbol": "diamond"
          }, {
              "coord": [11, 54189],
              "symbolSize": 10,
              "name": "落实婚假产假制度措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 12,
          "yValue": 54189,
          "data": [{
              "coord": [12, 54189],
              "symbolSize": 10,
              "name": "保障女性就业权益措施执行",
              "symbol": "circle"
          }, {
              "coord": [12, 54189],
              "symbolSize": 10,
              "name": "接产机构人才激励机制措施执行",
              "symbol": "circle"
          }, {
              "coord": [12, 54189],
              "symbolSize": 10,
              "name": "吸引持证人员回归措施执行",
              "symbol": "circle"
          }, {
              "coord": [12, 54189],
              "symbolSize": 10,
              "name": "举办讲座和发放宣传册措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 13,
          "yValue": 55480,
          "data": [{
              "coord": [13, 55480],
              "symbolSize": 10,
              "name": "提升幼儿早期发展服务措施执行",
              "symbol": "circle"
          }, {
              "coord": [13, 55480],
              "symbolSize": 10,
              "name": "设置咨询服务台措施生效",
              "symbol": "diamond"
          }, {
              "coord": [13, 55480],
              "symbolSize": 10,
              "name": "妇幼健康门诊建设措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 14,
          "yValue": 56956,
          "data": [{
              "coord": [14, 56956],
              "symbolSize": 10,
              "name": "官方媒体宣传措施生效",
              "symbol": "diamond"
          }, {
              "coord": [14, 56956],
              "symbolSize": 10,
              "name": "推进母婴设施建设措施生效",
              "symbol": "diamond"
          }, {
              "coord": [14, 56956],
              "symbolSize": 10,
              "name": "挖掘现有教师资源措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 15,
          "yValue": 58553,
          "data": [{
              "coord": [15, 58553],
              "symbolSize": 10,
              "name": "创成优质幼儿园措施生效",
              "symbol": "diamond"
          }, {
              "coord": [15, 58553],
              "symbolSize": 10,
              "name": "招聘新教师措施执行",
              "symbol": "circle"
          }, {
              "coord": [15, 58553],
              "symbolSize": 10,
              "name": "延长婚假产假措施生效",
              "symbol": "diamond"
          }, {
              "coord": [15, 58553],
              "symbolSize": 10,
              "name": "购买教学设备措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 16,
          "yValue": 60636,
          "data": [{
              "coord": [16, 60636],
              "symbolSize": 10,
              "name": "建立产妇重症救治中心措施生效",
              "symbol": "diamond"
          }, {
              "coord": [16, 60636],
              "symbolSize": 10,
              "name": "吸引持证人员回归措施生效",
              "symbol": "diamond"
          }, {
              "coord": [16, 60636],
              "symbolSize": 10,
              "name": "落实婚假产假制度措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 17,
          "yValue": 61424,
          "data": [{
              "coord": [17, 61424],
              "symbolSize": 10,
              "name": "购买教学设备措施执行",
              "symbol": "circle"
          }, {
              "coord": [17, 61424],
              "symbolSize": 10,
              "name": "接产机构人才激励机制措施生效",
              "symbol": "diamond"
          }, {
              "coord": [17, 61424],
              "symbolSize": 10,
              "name": "吸引持证人员回归措施执行",
              "symbol": "circle"
          }, {
              "coord": [17, 61424],
              "symbolSize": 10,
              "name": "举办讲座和发放宣传册措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 18,
          "yValue": 61999,
          "data": [{
              "coord": [18, 61999],
              "symbolSize": 10,
              "name": "保障女性就业权益措施生效",
              "symbol": "diamond"
          }, {
              "coord": [18, 61999],
              "symbolSize": 10,
              "name": "举办讲座和发放宣传册措施执行",
              "symbol": "circle"
          }, {
              "coord": [18, 61999],
              "symbolSize": 10,
              "name": "事件发生",
              "symbol": "triangle"
          }]
      }, {
          "scale": 19,
          "yValue": 64997,
          "data": [{
              "coord": [19, 64997],
              "symbolSize": 10,
              "name": "培训全科医生措施生效",
              "symbol": "diamond"
          }, {
              "coord": [19, 64997],
              "symbolSize": 10,
              "name": "延长婚假产假措施执行",
              "symbol": "circle"
          }, {
              "coord": [19, 64997],
              "symbolSize": 10,
              "name": "出生缺陷防治宣传教育措施生效",
              "symbol": "diamond"
          }, {
              "coord": [19, 64997],
              "symbolSize": 10,
              "name": "新生儿疾病筛查措施生效",
              "symbol": "diamond"
          }, {
              "coord": [19, 64997],
              "symbolSize": 10,
              "name": "事件发生",
              "symbol": "triangle"
          }]
      }, {
          "scale": 20,
          "yValue": 67580,
          "data": [{
              "coord": [20, 67580],
              "symbolSize": 10,
              "name": "新建幼儿园措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 21,
          "yValue": 68375,
          "data": [{
              "coord": [21, 68375],
              "symbolSize": 10,
              "name": "提升幼儿早期发展服务措施生效",
              "symbol": "diamond"
          }, {
              "coord": [21, 68375],
              "symbolSize": 10,
              "name": "开展医养结合服务措施执行",
              "symbol": "circle"
          }, {
              "coord": [21, 68375],
              "symbolSize": 10,
              "name": "设置咨询服务台措施执行",
              "symbol": "circle"
          }, {
              "coord": [21, 68375],
              "symbolSize": 10,
              "name": "官方媒体宣传措施执行",
              "symbol": "circle"
          }, {
              "coord": [21, 68375],
              "symbolSize": 10,
              "name": "吸引持证人员回归措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 22,
          "yValue": 69617,
          "data": [{
              "coord": [22, 69617],
              "symbolSize": 10,
              "name": "执行人员培训措施执行",
              "symbol": "circle"
          }, {
              "coord": [22, 69617],
              "symbolSize": 10,
              "name": "加强孕前咨询与检查措施生效",
              "symbol": "diamond"
          }, {
              "coord": [22, 69617],
              "symbolSize": 10,
              "name": "出生缺陷防治宣传教育措施执行",
              "symbol": "circle"
          }, {
              "coord": [22, 69617],
              "symbolSize": 10,
              "name": "成立产前管制中心措施执行",
              "symbol": "circle"
          }, {
              "coord": [22, 69617],
              "symbolSize": 10,
              "name": "提高婚检服务水平措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 23,
          "yValue": 73582,
          "data": [{
              "coord": [23, 73582],
              "symbolSize": 10,
              "name": "保障女性就业权益措施执行",
              "symbol": "circle"
          }, {
              "coord": [23, 73582],
              "symbolSize": 10,
              "name": "购买教学设备措施生效",
              "symbol": "diamond"
          }, {
              "coord": [23, 73582],
              "symbolSize": 10,
              "name": "落实婚假产假制度措施执行",
              "symbol": "circle"
          }, {
              "coord": [23, 73582],
              "symbolSize": 10,
              "name": "举办讲座和发放宣传册措施生效",
              "symbol": "diamond"
          }, {
              "coord": [23, 73582],
              "symbolSize": 10,
              "name": "加大养老机构建设措施生效",
              "symbol": "diamond"
          }, {
              "coord": [23, 73582],
              "symbolSize": 10,
              "name": "延长婚假产假措施生效",
              "symbol": "diamond"
          }, {
              "coord": [23, 73582],
              "symbolSize": 10,
              "name": "挖掘现有教师资源措施生效",
              "symbol": "diamond"
          }, {
              "coord": [23, 73582],
              "symbolSize": 10,
              "name": "简化生育审批制度措施执行",
              "symbol": "circle"
          }, {
              "coord": [23, 73582],
              "symbolSize": 10,
              "name": "延长婚假产假措施执行",
              "symbol": "circle"
          }, {
              "coord": [23, 73582],
              "symbolSize": 10,
              "name": "加强生育意愿跟踪措施执行",
              "symbol": "circle"
          }, {
              "coord": [23, 73582],
              "symbolSize": 10,
              "name": "提升幼儿早期发展服务措施执行",
              "symbol": "circle"
          }, {
              "coord": [23, 73582],
              "symbolSize": 10,
              "name": "提高孕期检查水平措施生效",
              "symbol": "diamond"
          }, {
              "coord": [23, 73582],
              "symbolSize": 10,
              "name": "妇幼健康门诊建设措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 24,
          "yValue": 74144.5,
          "data": [{
              "symbolSize": 10,
              "coord": [24, 74144.5]
          }]
      }, {
          "scale": 25,
          "yValue": 74707,
          "data": [{
              "coord": [25, 74707],
              "symbolSize": 10,
              "name": "招聘新教师措施生效",
              "symbol": "diamond"
          }, {
              "coord": [25, 74707],
              "symbolSize": 10,
              "name": "举办讲座和发放宣传册措施执行",
              "symbol": "circle"
          }, {
              "coord": [25, 74707],
              "symbolSize": 10,
              "name": "官方媒体宣传措施生效",
              "symbol": "diamond"
          }, {
              "coord": [25, 74707],
              "symbolSize": 10,
              "name": "设置咨询服务台措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 26,
          "yValue": 75083,
          "data": [{
              "coord": [26, 75083],
              "symbolSize": 10,
              "name": "简化生育审批制度措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 27,
          "yValue": 76592,
          "data": [{
              "coord": [27, 76592],
              "symbolSize": 10,
              "name": "官方媒体宣传措施执行",
              "symbol": "circle"
          }, {
              "coord": [27, 76592],
              "symbolSize": 10,
              "name": "开展医养结合服务措施生效",
              "symbol": "diamond"
          }, {
              "coord": [27, 76592],
              "symbolSize": 10,
              "name": "简化生育审批制度措施执行",
              "symbol": "circle"
          }, {
              "coord": [27, 76592],
              "symbolSize": 10,
              "name": "成立产前管制中心措施生效",
              "symbol": "diamond"
          }, {
              "coord": [27, 76592],
              "symbolSize": 10,
              "name": "延长婚假产假措施生效",
              "symbol": "diamond"
          }, {
              "coord": [27, 76592],
              "symbolSize": 10,
              "name": "加强生育意愿跟踪措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 28,
          "yValue": 77234,
          "data": [{
              "coord": [28, 77234],
              "symbolSize": 10,
              "name": "落实婚假产假制度措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 29,
          "yValue": 78436,
          "data": [{
              "coord": [29, 78436],
              "symbolSize": 10,
              "name": "执行人员培训措施生效",
              "symbol": "diamond"
          }, {
              "coord": [29, 78436],
              "symbolSize": 10,
              "name": "设置咨询服务台措施执行",
              "symbol": "circle"
          }, {
              "coord": [29, 78436],
              "symbolSize": 10,
              "name": "保障女性就业权益措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 30,
          "yValue": 78937,
          "data": [{
              "coord": [30, 78937],
              "symbolSize": 10,
              "name": "加强生育意愿跟踪措施执行",
              "symbol": "circle"
          }, {
              "coord": [30, 78937],
              "symbolSize": 10,
              "name": "简化生育审批制度措施生效",
              "symbol": "diamond"
          }, {
              "coord": [30, 78937],
              "symbolSize": 10,
              "name": "举办讲座和发放宣传册措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 31,
          "yValue": 79691,
          "data": [{
              "coord": [31, 79691],
              "symbolSize": 10,
              "name": "官方媒体宣传措施生效",
              "symbol": "diamond"
          }, {
              "coord": [31, 79691],
              "symbolSize": 10,
              "name": "提升幼儿早期发展服务措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 32,
          "yValue": 79818,
          "data": [{
              "symbolSize": 10,
              "coord": [32, 79818]
          }]
      }, {
          "scale": 33,
          "yValue": 79945,
          "data": [{
              "coord": [33, 79945],
              "symbolSize": 10,
              "name": "设置咨询服务台措施生效",
              "symbol": "diamond"
          }, {
              "coord": [33, 79945],
              "symbolSize": 10,
              "name": "官方媒体宣传措施执行",
              "symbol": "circle"
          }, {
              "coord": [33, 79945],
              "symbolSize": 10,
              "name": "简化生育审批制度措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 34,
          "yValue": 81831,
          "data": [{
              "coord": [34, 81831],
              "symbolSize": 10,
              "name": "加强生育意愿跟踪措施生效",
              "symbol": "diamond"
          }, {
              "coord": [34, 81831],
              "symbolSize": 10,
              "name": "出生缺陷防治宣传教育措施生效",
              "symbol": "diamond"
          }, {
              "coord": [34, 81831],
              "symbolSize": 10,
              "name": "提高婚检服务水平措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 35,
          "yValue": 81831,
          "data": [{
              "coord": [35, 81831],
              "symbolSize": 10,
              "name": "设置咨询服务台措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 36,
          "yValue": 82990,
          "data": [{
              "coord": [36, 82990],
              "symbolSize": 10,
              "name": "简化生育审批制度措施生效",
              "symbol": "diamond"
          }, {
              "coord": [36, 82990],
              "symbolSize": 10,
              "name": "妇幼健康门诊建设措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 37,
          "yValue": 83286,
          "data": [{
              "coord": [37, 83286],
              "symbolSize": 10,
              "name": "官方媒体宣传措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 38,
          "data": [{
              "coord": [38],
              "symbolSize": 10
          }]
      }, {
          "scale": 39,
          "data": [{
              "coord": [39],
              "symbolSize": 10
          }]
      }, {
          "scale": 40,
          "data": [{
              "coord": [40],
              "symbolSize": 10
          }]
      }, {
          "scale": 41,
          "data": [{
              "coord": [41],
              "symbolSize": 10
          }]
      }, {
          "scale": 42,
          "data": [{
              "coord": [42],
              "symbolSize": 10
          }]
      }, {
          "scale": 43,
          "data": [{
              "coord": [43],
              "symbolSize": 10
          }]
      }, {
          "scale": 44,
          "data": [{
              "coord": [44],
              "symbolSize": 10
          }]
      }, {
          "scale": 45,
          "data": [{
              "coord": [45],
              "symbolSize": 10
          }]
      }, {
          "scale": 46,
          "data": [{
              "coord": [46],
              "symbolSize": 10
          }]
      }, {
          "scale": 47,
          "data": [{
              "coord": [47],
              "symbolSize": 10
          }]
      }, {
          "scale": 48,
          "data": [{
              "coord": [48],
              "symbolSize": 10
          }]
      }, {
          "scale": 49,
          "data": [{
              "coord": [49],
              "symbolSize": 10
          }]
      }]
  }, {
      "indexName": "登记人数",
      "indexId": "5ec7d8d3-d24a-4f79-a7f3-a26cd79bd76f",
      "data": [{
          "scale": 0,
          "yValue": 32019,
          "data": [{
              "coord": [0, 32019],
              "symbolSize": 10,
              "name": "官方媒体宣传措施执行",
              "symbol": "circle"
          }, {
              "coord": [0, 32019],
              "symbolSize": 10,
              "name": "设置咨询服务台措施执行",
              "symbol": "circle"
          }, {
              "coord": [0, 32019],
              "symbolSize": 10,
              "name": "举办讲座和发放宣传册措施执行",
              "symbol": "circle"
          }, {
              "coord": [0, 32019],
              "symbolSize": 10,
              "name": "事件发生",
              "symbol": "triangle"
          }, {
              "coord": [0, 32019],
              "symbolSize": 10,
              "name": "妇幼健康门诊建设措施执行",
              "symbol": "circle"
          }, {
              "coord": [0, 32019],
              "symbolSize": 10,
              "name": "推进母婴设施建设措施执行",
              "symbol": "circle"
          }, {
              "coord": [0, 32019],
              "symbolSize": 10,
              "name": "延长婚假产假措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 1,
          "yValue": 32019,
          "data": [{
              "coord": [1, 32019],
              "symbolSize": 10,
              "name": "加强生育意愿跟踪措施执行",
              "symbol": "circle"
          }, {
              "coord": [1, 32019],
              "symbolSize": 10,
              "name": "简化生育审批制度措施执行",
              "symbol": "circle"
          }, {
              "coord": [1, 32019],
              "symbolSize": 10,
              "name": "保障女性就业权益措施执行",
              "symbol": "circle"
          }, {
              "coord": [1, 32019],
              "symbolSize": 10,
              "name": "落实婚假产假制度措施执行",
              "symbol": "circle"
          }, {
              "coord": [1, 32019],
              "symbolSize": 10,
              "name": "招聘新教师措施执行",
              "symbol": "circle"
          }, {
              "coord": [1, 32019],
              "symbolSize": 10,
              "name": "挖掘现有教师资源措施执行",
              "symbol": "circle"
          }, {
              "coord": [1, 32019],
              "symbolSize": 10,
              "name": "创成优质幼儿园措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 2,
          "yValue": 32019,
          "data": [{
              "coord": [2, 32019],
              "symbolSize": 10,
              "name": "新建幼儿园措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 3,
          "yValue": 32472,
          "data": [{
              "symbolSize": 10,
              "coord": [3, 32472]
          }]
      }, {
          "scale": 4,
          "yValue": 32925,
          "data": [{
              "coord": [4, 32925],
              "symbolSize": 10,
              "name": "官方媒体宣传措施生效",
              "symbol": "diamond"
          }, {
              "coord": [4, 32925],
              "symbolSize": 10,
              "name": "设置咨询服务台措施生效",
              "symbol": "diamond"
          }, {
              "coord": [4, 32925],
              "symbolSize": 10,
              "name": "简化生育审批制度措施生效",
              "symbol": "diamond"
          }, {
              "coord": [4, 32925],
              "symbolSize": 10,
              "name": "延长婚假产假措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 5,
          "yValue": 33432,
          "data": [{
              "coord": [5, 33432],
              "symbolSize": 10,
              "name": "加强生育意愿跟踪措施生效",
              "symbol": "diamond"
          }, {
              "coord": [5, 33432],
              "symbolSize": 10,
              "name": "举办讲座和发放宣传册措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 6,
          "yValue": 33896,
          "data": [{
              "coord": [6, 33896],
              "symbolSize": 10,
              "name": "事件发生",
              "symbol": "triangle"
          }, {
              "coord": [6, 33896],
              "symbolSize": 10,
              "name": "落实婚假产假制度措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 7,
          "yValue": 34375,
          "data": [{
              "coord": [7, 34375],
              "symbolSize": 10,
              "name": "保障女性就业权益措施生效",
              "symbol": "diamond"
          }, {
              "coord": [7, 34375],
              "symbolSize": 10,
              "name": "出生缺陷防治宣传教育措施执行",
              "symbol": "circle"
          }, {
              "coord": [7, 34375],
              "symbolSize": 10,
              "name": "提高孕期检查水平措施执行",
              "symbol": "circle"
          }, {
              "coord": [7, 34375],
              "symbolSize": 10,
              "name": "新生儿疾病筛查措施执行",
              "symbol": "circle"
          }, {
              "coord": [7, 34375],
              "symbolSize": 10,
              "name": "建立产妇重症救治中心措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 8,
          "yValue": 34375,
          "data": [{
              "coord": [8, 34375],
              "symbolSize": 10,
              "name": "加强孕前咨询与检查措施执行",
              "symbol": "circle"
          }, {
              "coord": [8, 34375],
              "symbolSize": 10,
              "name": "加大养老机构建设措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 9,
          "yValue": 34375,
          "data": [{
              "coord": [9, 34375],
              "symbolSize": 10,
              "name": "培训全科医生措施执行",
              "symbol": "circle"
          }, {
              "coord": [9, 34375],
              "symbolSize": 10,
              "name": "设置咨询服务台措施执行",
              "symbol": "circle"
          }, {
              "coord": [9, 34375],
              "symbolSize": 10,
              "name": "购买教学设备措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 10,
          "yValue": 35040,
          "data": [{
              "coord": [10, 35040],
              "symbolSize": 10,
              "name": "官方媒体宣传措施执行",
              "symbol": "circle"
          }, {
              "coord": [10, 35040],
              "symbolSize": 10,
              "name": "挖掘现有教师资源措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 11,
          "yValue": 36521,
          "data": [{
              "coord": [11, 36521],
              "symbolSize": 10,
              "name": "延长婚假产假措施执行",
              "symbol": "circle"
          }, {
              "coord": [11, 36521],
              "symbolSize": 10,
              "name": "招聘新教师措施生效",
              "symbol": "diamond"
          }, {
              "coord": [11, 36521],
              "symbolSize": 10,
              "name": "落实婚假产假制度措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 12,
          "yValue": 36521,
          "data": [{
              "coord": [12, 36521],
              "symbolSize": 10,
              "name": "保障女性就业权益措施执行",
              "symbol": "circle"
          }, {
              "coord": [12, 36521],
              "symbolSize": 10,
              "name": "接产机构人才激励机制措施执行",
              "symbol": "circle"
          }, {
              "coord": [12, 36521],
              "symbolSize": 10,
              "name": "吸引持证人员回归措施执行",
              "symbol": "circle"
          }, {
              "coord": [12, 36521],
              "symbolSize": 10,
              "name": "举办讲座和发放宣传册措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 13,
          "yValue": 37614,
          "data": [{
              "coord": [13, 37614],
              "symbolSize": 10,
              "name": "提升幼儿早期发展服务措施执行",
              "symbol": "circle"
          }, {
              "coord": [13, 37614],
              "symbolSize": 10,
              "name": "设置咨询服务台措施生效",
              "symbol": "diamond"
          }, {
              "coord": [13, 37614],
              "symbolSize": 10,
              "name": "妇幼健康门诊建设措施生效",
              "symbol": "diamond"
          }, {
              "coord": [13, 37614],
              "symbolSize": 10,
              "name": "事件发生",
              "symbol": "triangle"
          }]
      }, {
          "scale": 14,
          "yValue": 38865,
          "data": [{
              "coord": [14, 38865],
              "symbolSize": 10,
              "name": "官方媒体宣传措施生效",
              "symbol": "diamond"
          }, {
              "coord": [14, 38865],
              "symbolSize": 10,
              "name": "推进母婴设施建设措施生效",
              "symbol": "diamond"
          }, {
              "coord": [14, 38865],
              "symbolSize": 10,
              "name": "挖掘现有教师资源措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 15,
          "yValue": 40239,
          "data": [{
              "coord": [15, 40239],
              "symbolSize": 10,
              "name": "创成优质幼儿园措施生效",
              "symbol": "diamond"
          }, {
              "coord": [15, 40239],
              "symbolSize": 10,
              "name": "招聘新教师措施执行",
              "symbol": "circle"
          }, {
              "coord": [15, 40239],
              "symbolSize": 10,
              "name": "延长婚假产假措施生效",
              "symbol": "diamond"
          }, {
              "coord": [15, 40239],
              "symbolSize": 10,
              "name": "购买教学设备措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 16,
          "yValue": 41989,
          "data": [{
              "coord": [16, 41989],
              "symbolSize": 10,
              "name": "建立产妇重症救治中心措施生效",
              "symbol": "diamond"
          }, {
              "coord": [16, 41989],
              "symbolSize": 10,
              "name": "吸引持证人员回归措施生效",
              "symbol": "diamond"
          }, {
              "coord": [16, 41989],
              "symbolSize": 10,
              "name": "落实婚假产假制度措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 17,
          "yValue": 42645,
          "data": [{
              "coord": [17, 42645],
              "symbolSize": 10,
              "name": "购买教学设备措施执行",
              "symbol": "circle"
          }, {
              "coord": [17, 42645],
              "symbolSize": 10,
              "name": "接产机构人才激励机制措施生效",
              "symbol": "diamond"
          }, {
              "coord": [17, 42645],
              "symbolSize": 10,
              "name": "吸引持证人员回归措施执行",
              "symbol": "circle"
          }, {
              "coord": [17, 42645],
              "symbolSize": 10,
              "name": "举办讲座和发放宣传册措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 18,
          "yValue": 43124,
          "data": [{
              "coord": [18, 43124],
              "symbolSize": 10,
              "name": "保障女性就业权益措施生效",
              "symbol": "diamond"
          }, {
              "coord": [18, 43124],
              "symbolSize": 10,
              "name": "举办讲座和发放宣传册措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 19,
          "yValue": 45403,
          "data": [{
              "coord": [19, 45403],
              "symbolSize": 10,
              "name": "培训全科医生措施生效",
              "symbol": "diamond"
          }, {
              "coord": [19, 45403],
              "symbolSize": 10,
              "name": "延长婚假产假措施执行",
              "symbol": "circle"
          }, {
              "coord": [19, 45403],
              "symbolSize": 10,
              "name": "出生缺陷防治宣传教育措施生效",
              "symbol": "diamond"
          }, {
              "coord": [19, 45403],
              "symbolSize": 10,
              "name": "新生儿疾病筛查措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 20,
          "yValue": 47619,
          "data": [{
              "coord": [20, 47619],
              "symbolSize": 10,
              "name": "新建幼儿园措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 21,
          "yValue": 48252,
          "data": [{
              "coord": [21, 48252],
              "symbolSize": 10,
              "name": "提升幼儿早期发展服务措施生效",
              "symbol": "diamond"
          }, {
              "coord": [21, 48252],
              "symbolSize": 10,
              "name": "开展医养结合服务措施执行",
              "symbol": "circle"
          }, {
              "coord": [21, 48252],
              "symbolSize": 10,
              "name": "设置咨询服务台措施执行",
              "symbol": "circle"
          }, {
              "coord": [21, 48252],
              "symbolSize": 10,
              "name": "官方媒体宣传措施执行",
              "symbol": "circle"
          }, {
              "coord": [21, 48252],
              "symbolSize": 10,
              "name": "吸引持证人员回归措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 22,
          "yValue": 49212,
          "data": [{
              "coord": [22, 49212],
              "symbolSize": 10,
              "name": "执行人员培训措施执行",
              "symbol": "circle"
          }, {
              "coord": [22, 49212],
              "symbolSize": 10,
              "name": "加强孕前咨询与检查措施生效",
              "symbol": "diamond"
          }, {
              "coord": [22, 49212],
              "symbolSize": 10,
              "name": "出生缺陷防治宣传教育措施执行",
              "symbol": "circle"
          }, {
              "coord": [22, 49212],
              "symbolSize": 10,
              "name": "成立产前管制中心措施执行",
              "symbol": "circle"
          }, {
              "coord": [22, 49212],
              "symbolSize": 10,
              "name": "提高婚检服务水平措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 23,
          "yValue": 52603,
          "data": [{
              "coord": [23, 52603],
              "symbolSize": 10,
              "name": "保障女性就业权益措施执行",
              "symbol": "circle"
          }, {
              "coord": [23, 52603],
              "symbolSize": 10,
              "name": "购买教学设备措施生效",
              "symbol": "diamond"
          }, {
              "coord": [23, 52603],
              "symbolSize": 10,
              "name": "落实婚假产假制度措施执行",
              "symbol": "circle"
          }, {
              "coord": [23, 52603],
              "symbolSize": 10,
              "name": "举办讲座和发放宣传册措施生效",
              "symbol": "diamond"
          }, {
              "coord": [23, 52603],
              "symbolSize": 10,
              "name": "加大养老机构建设措施生效",
              "symbol": "diamond"
          }, {
              "coord": [23, 52603],
              "symbolSize": 10,
              "name": "挖掘现有教师资源措施生效",
              "symbol": "diamond"
          }, {
              "coord": [23, 52603],
              "symbolSize": 10,
              "name": "延长婚假产假措施生效",
              "symbol": "diamond"
          }, {
              "coord": [23, 52603],
              "symbolSize": 10,
              "name": "简化生育审批制度措施执行",
              "symbol": "circle"
          }, {
              "coord": [23, 52603],
              "symbolSize": 10,
              "name": "延长婚假产假措施执行",
              "symbol": "circle"
          }, {
              "coord": [23, 52603],
              "symbolSize": 10,
              "name": "加强生育意愿跟踪措施执行",
              "symbol": "circle"
          }, {
              "coord": [23, 52603],
              "symbolSize": 10,
              "name": "提升幼儿早期发展服务措施执行",
              "symbol": "circle"
          }, {
              "coord": [23, 52603],
              "symbolSize": 10,
              "name": "提高孕期检查水平措施生效",
              "symbol": "diamond"
          }, {
              "coord": [23, 52603],
              "symbolSize": 10,
              "name": "妇幼健康门诊建设措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 24,
          "yValue": 53217.5,
          "data": [{
              "symbolSize": 10,
              "coord": [24, 53217.5]
          }]
      }, {
          "scale": 25,
          "yValue": 53832,
          "data": [{
              "coord": [25, 53832],
              "symbolSize": 10,
              "name": "招聘新教师措施生效",
              "symbol": "diamond"
          }, {
              "coord": [25, 53832],
              "symbolSize": 10,
              "name": "举办讲座和发放宣传册措施执行",
              "symbol": "circle"
          }, {
              "coord": [25, 53832],
              "symbolSize": 10,
              "name": "设置咨询服务台措施生效",
              "symbol": "diamond"
          }, {
              "coord": [25, 53832],
              "symbolSize": 10,
              "name": "官方媒体宣传措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 26,
          "yValue": 53949,
          "data": [{
              "coord": [26, 53949],
              "symbolSize": 10,
              "name": "简化生育审批制度措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 27,
          "yValue": 55246,
          "data": [{
              "coord": [27, 55246],
              "symbolSize": 10,
              "name": "官方媒体宣传措施执行",
              "symbol": "circle"
          }, {
              "coord": [27, 55246],
              "symbolSize": 10,
              "name": "开展医养结合服务措施生效",
              "symbol": "diamond"
          }, {
              "coord": [27, 55246],
              "symbolSize": 10,
              "name": "简化生育审批制度措施执行",
              "symbol": "circle"
          }, {
              "coord": [27, 55246],
              "symbolSize": 10,
              "name": "成立产前管制中心措施生效",
              "symbol": "diamond"
          }, {
              "coord": [27, 55246],
              "symbolSize": 10,
              "name": "延长婚假产假措施生效",
              "symbol": "diamond"
          }, {
              "coord": [27, 55246],
              "symbolSize": 10,
              "name": "加强生育意愿跟踪措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 28,
          "yValue": 55800,
          "data": [{
              "coord": [28, 55800],
              "symbolSize": 10,
              "name": "落实婚假产假制度措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 29,
          "yValue": 56857,
          "data": [{
              "coord": [29, 56857],
              "symbolSize": 10,
              "name": "执行人员培训措施生效",
              "symbol": "diamond"
          }, {
              "coord": [29, 56857],
              "symbolSize": 10,
              "name": "设置咨询服务台措施执行",
              "symbol": "circle"
          }, {
              "coord": [29, 56857],
              "symbolSize": 10,
              "name": "保障女性就业权益措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 30,
          "yValue": 57318,
          "data": [{
              "coord": [30, 57318],
              "symbolSize": 10,
              "name": "加强生育意愿跟踪措施执行",
              "symbol": "circle"
          }, {
              "coord": [30, 57318],
              "symbolSize": 10,
              "name": "简化生育审批制度措施生效",
              "symbol": "diamond"
          }, {
              "coord": [30, 57318],
              "symbolSize": 10,
              "name": "举办讲座和发放宣传册措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 31,
          "yValue": 57958,
          "data": [{
              "coord": [31, 57958],
              "symbolSize": 10,
              "name": "官方媒体宣传措施生效",
              "symbol": "diamond"
          }, {
              "coord": [31, 57958],
              "symbolSize": 10,
              "name": "提升幼儿早期发展服务措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 32,
          "yValue": 58074,
          "data": [{
              "symbolSize": 10,
              "coord": [32, 58074]
          }]
      }, {
          "scale": 33,
          "yValue": 58190,
          "data": [{
              "coord": [33, 58190],
              "symbolSize": 10,
              "name": "设置咨询服务台措施生效",
              "symbol": "diamond"
          }, {
              "coord": [33, 58190],
              "symbolSize": 10,
              "name": "官方媒体宣传措施执行",
              "symbol": "circle"
          }, {
              "coord": [33, 58190],
              "symbolSize": 10,
              "name": "简化生育审批制度措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 34,
          "yValue": 59796,
          "data": [{
              "coord": [34, 59796],
              "symbolSize": 10,
              "name": "加强生育意愿跟踪措施生效",
              "symbol": "diamond"
          }, {
              "coord": [34, 59796],
              "symbolSize": 10,
              "name": "出生缺陷防治宣传教育措施生效",
              "symbol": "diamond"
          }, {
              "coord": [34, 59796],
              "symbolSize": 10,
              "name": "提高婚检服务水平措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 35,
          "yValue": 59796,
          "data": [{
              "coord": [35, 59796],
              "symbolSize": 10,
              "name": "设置咨询服务台措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 36,
          "yValue": 60799,
          "data": [{
              "coord": [36, 60799],
              "symbolSize": 10,
              "name": "简化生育审批制度措施生效",
              "symbol": "diamond"
          }, {
              "coord": [36, 60799],
              "symbolSize": 10,
              "name": "妇幼健康门诊建设措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 37,
          "yValue": 61085,
          "data": [{
              "coord": [37, 61085],
              "symbolSize": 10,
              "name": "官方媒体宣传措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 38,
          "data": [{
              "coord": [38],
              "symbolSize": 10
          }]
      }, {
          "scale": 39,
          "data": [{
              "coord": [39],
              "symbolSize": 10
          }]
      }, {
          "scale": 40,
          "data": [{
              "coord": [40],
              "symbolSize": 10
          }]
      }, {
          "scale": 41,
          "data": [{
              "coord": [41],
              "symbolSize": 10
          }]
      }, {
          "scale": 42,
          "data": [{
              "coord": [42],
              "symbolSize": 10
          }]
      }, {
          "scale": 43,
          "data": [{
              "coord": [43],
              "symbolSize": 10
          }]
      }, {
          "scale": 44,
          "data": [{
              "coord": [44],
              "symbolSize": 10
          }]
      }, {
          "scale": 45,
          "data": [{
              "coord": [45],
              "symbolSize": 10
          }]
      }, {
          "scale": 46,
          "data": [{
              "coord": [46],
              "symbolSize": 10
          }]
      }, {
          "scale": 47,
          "data": [{
              "coord": [47],
              "symbolSize": 10
          }]
      }, {
          "scale": 48,
          "data": [{
              "coord": [48],
              "symbolSize": 10
          }]
      }, {
          "scale": 49,
          "data": [{
              "coord": [49],
              "symbolSize": 10
          }]
      }]
  }, {
      "indexName": "生育人数",
      "indexId": "cef53cdf-a16a-423d-8b9f-8039661df147",
      "data": [{
          "scale": 0,
          "yValue": 28056,
          "data": [{
              "coord": [0, 28056],
              "symbolSize": 10,
              "name": "官方媒体宣传措施执行",
              "symbol": "circle"
          }, {
              "coord": [0, 28056],
              "symbolSize": 10,
              "name": "设置咨询服务台措施执行",
              "symbol": "circle"
          }, {
              "coord": [0, 28056],
              "symbolSize": 10,
              "name": "事件发生",
              "symbol": "triangle"
          }, {
              "coord": [0, 28056],
              "symbolSize": 10,
              "name": "举办讲座和发放宣传册措施执行",
              "symbol": "circle"
          }, {
              "coord": [0, 28056],
              "symbolSize": 10,
              "name": "妇幼健康门诊建设措施执行",
              "symbol": "circle"
          }, {
              "coord": [0, 28056],
              "symbolSize": 10,
              "name": "推进母婴设施建设措施执行",
              "symbol": "circle"
          }, {
              "coord": [0, 28056],
              "symbolSize": 10,
              "name": "延长婚假产假措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 1,
          "yValue": 28101,
          "data": [{
              "coord": [1, 28101],
              "symbolSize": 10,
              "name": "加强生育意愿跟踪措施执行",
              "symbol": "circle"
          }, {
              "coord": [1, 28101],
              "symbolSize": 10,
              "name": "简化生育审批制度措施执行",
              "symbol": "circle"
          }, {
              "coord": [1, 28101],
              "symbolSize": 10,
              "name": "事件发生",
              "symbol": "triangle"
          }, {
              "coord": [1, 28101],
              "symbolSize": 10,
              "name": "保障女性就业权益措施执行",
              "symbol": "circle"
          }, {
              "coord": [1, 28101],
              "symbolSize": 10,
              "name": "落实婚假产假制度措施执行",
              "symbol": "circle"
          }, {
              "coord": [1, 28101],
              "symbolSize": 10,
              "name": "招聘新教师措施执行",
              "symbol": "circle"
          }, {
              "coord": [1, 28101],
              "symbolSize": 10,
              "name": "挖掘现有教师资源措施执行",
              "symbol": "circle"
          }, {
              "coord": [1, 28101],
              "symbolSize": 10,
              "name": "创成优质幼儿园措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 2,
          "yValue": 28101,
          "data": [{
              "coord": [2, 28101],
              "symbolSize": 10,
              "name": "新建幼儿园措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 3,
          "yValue": 28358.5,
          "data": [{
              "symbolSize": 10,
              "coord": [3, 28358.5]
          }]
      }, {
          "scale": 4,
          "yValue": 28616,
          "data": [{
              "coord": [4, 28616],
              "symbolSize": 10,
              "name": "官方媒体宣传措施生效",
              "symbol": "diamond"
          }, {
              "coord": [4, 28616],
              "symbolSize": 10,
              "name": "设置咨询服务台措施生效",
              "symbol": "diamond"
          }, {
              "coord": [4, 28616],
              "symbolSize": 10,
              "name": "简化生育审批制度措施生效",
              "symbol": "diamond"
          }, {
              "coord": [4, 28616],
              "symbolSize": 10,
              "name": "延长婚假产假措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 5,
          "yValue": 28892,
          "data": [{
              "coord": [5, 28892],
              "symbolSize": 10,
              "name": "加强生育意愿跟踪措施生效",
              "symbol": "diamond"
          }, {
              "coord": [5, 28892],
              "symbolSize": 10,
              "name": "举办讲座和发放宣传册措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 6,
          "yValue": 29181,
          "data": [{
              "coord": [6, 29181],
              "symbolSize": 10,
              "name": "事件发生",
              "symbol": "triangle"
          }, {
              "coord": [6, 29181],
              "symbolSize": 10,
              "name": "落实婚假产假制度措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 7,
          "yValue": 29497,
          "data": [{
              "coord": [7, 29497],
              "symbolSize": 10,
              "name": "保障女性就业权益措施生效",
              "symbol": "diamond"
          }, {
              "coord": [7, 29497],
              "symbolSize": 10,
              "name": "出生缺陷防治宣传教育措施执行",
              "symbol": "circle"
          }, {
              "coord": [7, 29497],
              "symbolSize": 10,
              "name": "提高孕期检查水平措施执行",
              "symbol": "circle"
          }, {
              "coord": [7, 29497],
              "symbolSize": 10,
              "name": "新生儿疾病筛查措施执行",
              "symbol": "circle"
          }, {
              "coord": [7, 29497],
              "symbolSize": 10,
              "name": "建立产妇重症救治中心措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 8,
          "yValue": 29497,
          "data": [{
              "coord": [8, 29497],
              "symbolSize": 10,
              "name": "加强孕前咨询与检查措施执行",
              "symbol": "circle"
          }, {
              "coord": [8, 29497],
              "symbolSize": 10,
              "name": "加大养老机构建设措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 9,
          "yValue": 29497,
          "data": [{
              "coord": [9, 29497],
              "symbolSize": 10,
              "name": "培训全科医生措施执行",
              "symbol": "circle"
          }, {
              "coord": [9, 29497],
              "symbolSize": 10,
              "name": "设置咨询服务台措施执行",
              "symbol": "circle"
          }, {
              "coord": [9, 29497],
              "symbolSize": 10,
              "name": "购买教学设备措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 10,
          "yValue": 29868,
          "data": [{
              "coord": [10, 29868],
              "symbolSize": 10,
              "name": "官方媒体宣传措施执行",
              "symbol": "circle"
          }, {
              "coord": [10, 29868],
              "symbolSize": 10,
              "name": "挖掘现有教师资源措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 11,
          "yValue": 30852,
          "data": [{
              "coord": [11, 30852],
              "symbolSize": 10,
              "name": "延长婚假产假措施执行",
              "symbol": "circle"
          }, {
              "coord": [11, 30852],
              "symbolSize": 10,
              "name": "招聘新教师措施生效",
              "symbol": "diamond"
          }, {
              "coord": [11, 30852],
              "symbolSize": 10,
              "name": "落实婚假产假制度措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 12,
          "yValue": 30852,
          "data": [{
              "coord": [12, 30852],
              "symbolSize": 10,
              "name": "保障女性就业权益措施执行",
              "symbol": "circle"
          }, {
              "coord": [12, 30852],
              "symbolSize": 10,
              "name": "接产机构人才激励机制措施执行",
              "symbol": "circle"
          }, {
              "coord": [12, 30852],
              "symbolSize": 10,
              "name": "吸引持证人员回归措施执行",
              "symbol": "circle"
          }, {
              "coord": [12, 30852],
              "symbolSize": 10,
              "name": "举办讲座和发放宣传册措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 13,
          "yValue": 31589,
          "data": [{
              "coord": [13, 31589],
              "symbolSize": 10,
              "name": "提升幼儿早期发展服务措施执行",
              "symbol": "circle"
          }, {
              "coord": [13, 31589],
              "symbolSize": 10,
              "name": "设置咨询服务台措施生效",
              "symbol": "diamond"
          }, {
              "coord": [13, 31589],
              "symbolSize": 10,
              "name": "妇幼健康门诊建设措施生效",
              "symbol": "diamond"
          }, {
              "coord": [13, 31589],
              "symbolSize": 10,
              "name": "事件发生",
              "symbol": "triangle"
          }]
      }, {
          "scale": 14,
          "yValue": 32455,
          "data": [{
              "coord": [14, 32455],
              "symbolSize": 10,
              "name": "官方媒体宣传措施生效",
              "symbol": "diamond"
          }, {
              "coord": [14, 32455],
              "symbolSize": 10,
              "name": "推进母婴设施建设措施生效",
              "symbol": "diamond"
          }, {
              "coord": [14, 32455],
              "symbolSize": 10,
              "name": "挖掘现有教师资源措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 15,
          "yValue": 33509,
          "data": [{
              "coord": [15, 33509],
              "symbolSize": 10,
              "name": "创成优质幼儿园措施生效",
              "symbol": "diamond"
          }, {
              "coord": [15, 33509],
              "symbolSize": 10,
              "name": "招聘新教师措施执行",
              "symbol": "circle"
          }, {
              "coord": [15, 33509],
              "symbolSize": 10,
              "name": "事件发生",
              "symbol": "triangle"
          }, {
              "coord": [15, 33509],
              "symbolSize": 10,
              "name": "购买教学设备措施生效",
              "symbol": "diamond"
          }, {
              "coord": [15, 33509],
              "symbolSize": 10,
              "name": "延长婚假产假措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 16,
          "yValue": 34421,
          "data": [{
              "coord": [16, 34421],
              "symbolSize": 10,
              "name": "建立产妇重症救治中心措施生效",
              "symbol": "diamond"
          }, {
              "coord": [16, 34421],
              "symbolSize": 10,
              "name": "事件发生",
              "symbol": "triangle"
          }, {
              "coord": [16, 34421],
              "symbolSize": 10,
              "name": "吸引持证人员回归措施生效",
              "symbol": "diamond"
          }, {
              "coord": [16, 34421],
              "symbolSize": 10,
              "name": "落实婚假产假制度措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 17,
          "yValue": 34793,
          "data": [{
              "coord": [17, 34793],
              "symbolSize": 10,
              "name": "购买教学设备措施执行",
              "symbol": "circle"
          }, {
              "coord": [17, 34793],
              "symbolSize": 10,
              "name": "接产机构人才激励机制措施生效",
              "symbol": "diamond"
          }, {
              "coord": [17, 34793],
              "symbolSize": 10,
              "name": "事件发生",
              "symbol": "triangle"
          }, {
              "coord": [17, 34793],
              "symbolSize": 10,
              "name": "吸引持证人员回归措施执行",
              "symbol": "circle"
          }, {
              "coord": [17, 34793],
              "symbolSize": 10,
              "name": "举办讲座和发放宣传册措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 18,
          "yValue": 35109,
          "data": [{
              "coord": [18, 35109],
              "symbolSize": 10,
              "name": "保障女性就业权益措施生效",
              "symbol": "diamond"
          }, {
              "coord": [18, 35109],
              "symbolSize": 10,
              "name": "举办讲座和发放宣传册措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 19,
          "yValue": 36906,
          "data": [{
              "coord": [19, 36906],
              "symbolSize": 10,
              "name": "培训全科医生措施生效",
              "symbol": "diamond"
          }, {
              "coord": [19, 36906],
              "symbolSize": 10,
              "name": "延长婚假产假措施执行",
              "symbol": "circle"
          }, {
              "coord": [19, 36906],
              "symbolSize": 10,
              "name": "出生缺陷防治宣传教育措施生效",
              "symbol": "diamond"
          }, {
              "coord": [19, 36906],
              "symbolSize": 10,
              "name": "新生儿疾病筛查措施生效",
              "symbol": "diamond"
          }, {
              "coord": [19, 36906],
              "symbolSize": 10,
              "name": "事件发生",
              "symbol": "triangle"
          }]
      }, {
          "scale": 20,
          "yValue": 38528,
          "data": [{
              "coord": [20, 38528],
              "symbolSize": 10,
              "name": "新建幼儿园措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 21,
          "yValue": 38991,
          "data": [{
              "coord": [21, 38991],
              "symbolSize": 10,
              "name": "提升幼儿早期发展服务措施生效",
              "symbol": "diamond"
          }, {
              "coord": [21, 38991],
              "symbolSize": 10,
              "name": "开展医养结合服务措施执行",
              "symbol": "circle"
          }, {
              "coord": [21, 38991],
              "symbolSize": 10,
              "name": "设置咨询服务台措施执行",
              "symbol": "circle"
          }, {
              "coord": [21, 38991],
              "symbolSize": 10,
              "name": "官方媒体宣传措施执行",
              "symbol": "circle"
          }, {
              "coord": [21, 38991],
              "symbolSize": 10,
              "name": "吸引持证人员回归措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 22,
          "yValue": 39764,
          "data": [{
              "coord": [22, 39764],
              "symbolSize": 10,
              "name": "执行人员培训措施执行",
              "symbol": "circle"
          }, {
              "coord": [22, 39764],
              "symbolSize": 10,
              "name": "加强孕前咨询与检查措施生效",
              "symbol": "diamond"
          }, {
              "coord": [22, 39764],
              "symbolSize": 10,
              "name": "事件发生",
              "symbol": "triangle"
          }, {
              "coord": [22, 39764],
              "symbolSize": 10,
              "name": "出生缺陷防治宣传教育措施执行",
              "symbol": "circle"
          }, {
              "coord": [22, 39764],
              "symbolSize": 10,
              "name": "成立产前管制中心措施执行",
              "symbol": "circle"
          }, {
              "coord": [22, 39764],
              "symbolSize": 10,
              "name": "提高婚检服务水平措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 23,
          "yValue": 41966,
          "data": [{
              "coord": [23, 41966],
              "symbolSize": 10,
              "name": "保障女性就业权益措施执行",
              "symbol": "circle"
          }, {
              "coord": [23, 41966],
              "symbolSize": 10,
              "name": "购买教学设备措施生效",
              "symbol": "diamond"
          }, {
              "coord": [23, 41966],
              "symbolSize": 10,
              "name": "落实婚假产假制度措施执行",
              "symbol": "circle"
          }, {
              "coord": [23, 41966],
              "symbolSize": 10,
              "name": "举办讲座和发放宣传册措施生效",
              "symbol": "diamond"
          }, {
              "coord": [23, 41966],
              "symbolSize": 10,
              "name": "加大养老机构建设措施生效",
              "symbol": "diamond"
          }, {
              "coord": [23, 41966],
              "symbolSize": 10,
              "name": "挖掘现有教师资源措施生效",
              "symbol": "diamond"
          }, {
              "coord": [23, 41966],
              "symbolSize": 10,
              "name": "延长婚假产假措施生效",
              "symbol": "diamond"
          }, {
              "coord": [23, 41966],
              "symbolSize": 10,
              "name": "简化生育审批制度措施执行",
              "symbol": "circle"
          }, {
              "coord": [23, 41966],
              "symbolSize": 10,
              "name": "延长婚假产假措施执行",
              "symbol": "circle"
          }, {
              "coord": [23, 41966],
              "symbolSize": 10,
              "name": "加强生育意愿跟踪措施执行",
              "symbol": "circle"
          }, {
              "coord": [23, 41966],
              "symbolSize": 10,
              "name": "提升幼儿早期发展服务措施执行",
              "symbol": "circle"
          }, {
              "coord": [23, 41966],
              "symbolSize": 10,
              "name": "提高孕期检查水平措施生效",
              "symbol": "diamond"
          }, {
              "coord": [23, 41966],
              "symbolSize": 10,
              "name": "妇幼健康门诊建设措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 24,
          "yValue": 42323,
          "data": [{
              "symbolSize": 10,
              "coord": [24, 42323]
          }]
      }, {
          "scale": 25,
          "yValue": 42680,
          "data": [{
              "coord": [25, 42680],
              "symbolSize": 10,
              "name": "事件发生",
              "symbol": "triangle"
          }, {
              "coord": [25, 42680],
              "symbolSize": 10,
              "name": "招聘新教师措施生效",
              "symbol": "diamond"
          }, {
              "coord": [25, 42680],
              "symbolSize": 10,
              "name": "举办讲座和发放宣传册措施执行",
              "symbol": "circle"
          }, {
              "coord": [25, 42680],
              "symbolSize": 10,
              "name": "官方媒体宣传措施生效",
              "symbol": "diamond"
          }, {
              "coord": [25, 42680],
              "symbolSize": 10,
              "name": "设置咨询服务台措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 26,
          "yValue": 42880,
          "data": [{
              "coord": [26, 42880],
              "symbolSize": 10,
              "name": "简化生育审批制度措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 27,
          "yValue": 43727,
          "data": [{
              "coord": [27, 43727],
              "symbolSize": 10,
              "name": "官方媒体宣传措施执行",
              "symbol": "circle"
          }, {
              "coord": [27, 43727],
              "symbolSize": 10,
              "name": "开展医养结合服务措施生效",
              "symbol": "diamond"
          }, {
              "coord": [27, 43727],
              "symbolSize": 10,
              "name": "简化生育审批制度措施执行",
              "symbol": "circle"
          }, {
              "coord": [27, 43727],
              "symbolSize": 10,
              "name": "成立产前管制中心措施生效",
              "symbol": "diamond"
          }, {
              "coord": [27, 43727],
              "symbolSize": 10,
              "name": "延长婚假产假措施生效",
              "symbol": "diamond"
          }, {
              "coord": [27, 43727],
              "symbolSize": 10,
              "name": "加强生育意愿跟踪措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 28,
          "yValue": 43916,
          "data": [{
              "coord": [28, 43916],
              "symbolSize": 10,
              "name": "事件发生",
              "symbol": "triangle"
          }, {
              "coord": [28, 43916],
              "symbolSize": 10,
              "name": "落实婚假产假制度措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 29,
          "yValue": 44563,
          "data": [{
              "coord": [29, 44563],
              "symbolSize": 10,
              "name": "执行人员培训措施生效",
              "symbol": "diamond"
          }, {
              "coord": [29, 44563],
              "symbolSize": 10,
              "name": "设置咨询服务台措施执行",
              "symbol": "circle"
          }, {
              "coord": [29, 44563],
              "symbolSize": 10,
              "name": "保障女性就业权益措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 30,
          "yValue": 44803,
          "data": [{
              "coord": [30, 44803],
              "symbolSize": 10,
              "name": "加强生育意愿跟踪措施执行",
              "symbol": "circle"
          }, {
              "coord": [30, 44803],
              "symbolSize": 10,
              "name": "简化生育审批制度措施生效",
              "symbol": "diamond"
          }, {
              "coord": [30, 44803],
              "symbolSize": 10,
              "name": "举办讲座和发放宣传册措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 31,
          "yValue": 45222,
          "data": [{
              "coord": [31, 45222],
              "symbolSize": 10,
              "name": "官方媒体宣传措施生效",
              "symbol": "diamond"
          }, {
              "coord": [31, 45222],
              "symbolSize": 10,
              "name": "提升幼儿早期发展服务措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 32,
          "yValue": 45289,
          "data": [{
              "symbolSize": 10,
              "coord": [32, 45289]
          }]
      }, {
          "scale": 33,
          "yValue": 45356,
          "data": [{
              "coord": [33, 45356],
              "symbolSize": 10,
              "name": "设置咨询服务台措施生效",
              "symbol": "diamond"
          }, {
              "coord": [33, 45356],
              "symbolSize": 10,
              "name": "官方媒体宣传措施执行",
              "symbol": "circle"
          }, {
              "coord": [33, 45356],
              "symbolSize": 10,
              "name": "简化生育审批制度措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 34,
          "yValue": 46415,
          "data": [{
              "coord": [34, 46415],
              "symbolSize": 10,
              "name": "加强生育意愿跟踪措施生效",
              "symbol": "diamond"
          }, {
              "coord": [34, 46415],
              "symbolSize": 10,
              "name": "出生缺陷防治宣传教育措施生效",
              "symbol": "diamond"
          }, {
              "coord": [34, 46415],
              "symbolSize": 10,
              "name": "提高婚检服务水平措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 35,
          "yValue": 46415,
          "data": [{
              "coord": [35, 46415],
              "symbolSize": 10,
              "name": "设置咨询服务台措施执行",
              "symbol": "circle"
          }]
      }, {
          "scale": 36,
          "yValue": 47099,
          "data": [{
              "coord": [36, 47099],
              "symbolSize": 10,
              "name": "简化生育审批制度措施生效",
              "symbol": "diamond"
          }, {
              "coord": [36, 47099],
              "symbolSize": 10,
              "name": "妇幼健康门诊建设措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 37,
          "yValue": 47259,
          "data": [{
              "coord": [37, 47259],
              "symbolSize": 10,
              "name": "官方媒体宣传措施生效",
              "symbol": "diamond"
          }]
      }, {
          "scale": 38,
          "data": [{
              "coord": [38],
              "symbolSize": 10
          }]
      }, {
          "scale": 39,
          "data": [{
              "coord": [39],
              "symbolSize": 10
          }]
      }, {
          "scale": 40,
          "data": [{
              "coord": [40],
              "symbolSize": 10
          }]
      }, {
          "scale": 41,
          "data": [{
              "coord": [41],
              "symbolSize": 10
          }]
      }, {
          "scale": 42,
          "data": [{
              "coord": [42],
              "symbolSize": 10
          }]
      }, {
          "scale": 43,
          "data": [{
              "coord": [43],
              "symbolSize": 10
          }]
      }, {
          "scale": 44,
          "data": [{
              "coord": [44],
              "symbolSize": 10
          }]
      }, {
          "scale": 45,
          "data": [{
              "coord": [45],
              "symbolSize": 10
          }]
      }, {
          "scale": 46,
          "data": [{
              "coord": [46],
              "symbolSize": 10
          }]
      }, {
          "scale": 47,
          "data": [{
              "coord": [47],
              "symbolSize": 10
          }]
      }, {
          "scale": 48,
          "data": [{
              "coord": [48],
              "symbolSize": 10
          }]
      }, {
          "scale": 49,
          "data": [{
              "coord": [49],
              "symbolSize": 10
          }]
      }]
  }]
  option = drawingChart(val)