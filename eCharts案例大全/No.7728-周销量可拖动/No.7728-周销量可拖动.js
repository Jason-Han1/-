 var xData = (function () {
        var data = [];
        for (var i = 1; i <= 52; i++) {
          data.push("第" + i + "周");
        }
        return data;
      })();

      // 遍历月份
      var salesWeekStr = "";
      for (let k = 1; k <= 52; k++) {
        salesWeekStr += "第" + k + "周,";
      }
      var alesWeekData = salesWeekStr.substring(0, salesWeekStr.lastIndexOf(",")).split(",");

      option = {
        toolbox: {
          // 工具栏
          itemSize: 20,
          showTitle: false,
          top: 10,
          right: 12,
          feature: {
            myTool: {
              //自定义工具 myTool
              show: true,
              title: "全屏显示",
              icon: "image://" + "images/full.png", //此处 图片路径前面必须加字符串  "image://"
              onclick: function () {
                //生成全屏显示的图表
                if (setFullScreenToolBox(optionSalesBottom1)) {
                  getChartData(chartScreen);
                }
              },
            },
          },
        },
        tooltip: {
          trigger: "axis",
          textStyle: {
            fontSize: 12,
          },
          position: "inside",
        },
        title: {
          text: "周日均销量",
          left: "10",
          top: "5",
          textStyle: {
            fontSize: 12,
            fontWeight: "bold",
            color: "#0ab7ff",
          },
          subtext: "单位:万元",
          subtextStyle: {
            lineHeight: 1,
            fontSize: 9,
            color: "#0ab7ff",
          },
        },
        grid: {
          left: "2%",
          right: "2%",
          bottom: "30",
          top: "25%",
          containLabel: true,
        },
        legend: {
          data: ["2019日均销量", "2020日均销量"],
          top: 5,
          textStyle: {
            fontSize: 10,
            color: "#0ab7ff",
          },
        },
        xAxis: [
          {
            type: "category",
            data: xData,
            // boundaryGap: false,
            axisPointer: {
              type: "shadow",
            },
            axisLabel: {
              // rotate: 35,
              // formatter: function (value) {
              //       //x轴的文字改为竖版显示
              //       var str = value.split("");
              //       return str.join("\n");
              //     },
              textStyle: {
                fontSize: 10,
              },
            },
            axisLine: {
              lineStyle: {
                color: "#0ab7ff",
                fontSize: 8,
              },
            },
            axisTick: {
                alignWithLabel: true
            }
          },
        ],
        yAxis: [
          {
            type: "value",
            splitLine: {
              show: false,
            },
            axisLabel: {
              textStyle: {
                fontSize: 8,
              },
            },
            axisLine: {
              lineStyle: {
                color: "#0ab7ff",
              },
            },
          },
        ],

        dataZoom: [
          {
            show: true,
            height: 20,
            xAxisIndex: [0],

            bottom: 6,
            // start: 0,//数据窗口范围的起始百分比
            // end: 50,//数据窗口范围的结束百分比
            startValue: 0,
            endValue: 11, //初始显示1-12周
            // handleIcon: 'path://M8.2,13.6V3.9H6.3v9.7H3.1v14.9h3.3v9.7h1.8v-9.7h3.3V13.6H8.2z M9.7,24.4H4.8v-1.4h4.9V24.4z M9.7,19.1H4.8v-1.4h4.9V19.1z',//拖动按钮图形-默认
            handleIcon: "path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z", //拖动按钮图形-矩形
            // handleIcon: 'image://images/echartmap-bg4.png',//自定义图形
            // handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',//拖动按钮图形-猪
            handleSize: "120%", //拖动按钮大小
            fillerColor: "#025bb2",
            handleStyle: {
              color: "#0ab7ff", //拖动按钮颜色
            },
            textStyle: {
              color: "#fff",
            },
            borderColor: "#0559ab",
          },
        ],
            series: [
            {
              name: "2019日均销量",
              type: "line",
              color: "#e5bd00",

              label: {
                        position: 'left',
                        show: true,
                        color: '#e5bd00',
                        offset:[0,-8],//偏移量
                        fontSize:8,
                        // lineHeight:10,
                        // backgroundColor: '#a93f56',
                        // padding:[5,5,2,5],
                        zlevel:9,
                        // borderRadius:5
                        
                    },
              data: [21517.47, 8833.02, 15852.86, 16171.63, 17335.13, 17997.83, 17627.1, 17293.01, 17871.43, 14938.53, 19547.43, 21284.8],
            },
           
            {
              name: "2020日均销量",
              type: "line",
              label: {
                        position: 'right',
                        show: true,
                        color: '#a93f56',
                        offset:[0,-12],//偏移量
                        fontSize:8,
                        // lineHeight:10,
                        // backgroundColor: '#a93f56',
                        // padding:[5,5,2,5],
                        // zlevel:9,
                        // borderRadius:5
                        
                    },
              color: "#a93f56",
              data: [13491.22, 0, 8499.88, 17786.13, 3422.57,],
            },
            {
              name: "2020日均销量",
              type: "line",

              label: {
                        position: 'right',
                        show: true,
                        color: 'gray',
                        offset:[0,-12],//偏移量
                        fontSize:8,
                        // lineHeight:10,
                        // backgroundColor: '#a93f56',
                        // padding:[5,5,2,5],
                        // zlevel:9,
                        // borderRadius:5
                        
                    },
              color: "gray",
              data: ["", "-", "-", "-",3422.57,20000, 21000, 22000,23000,24000,25000,26000], //前面第一段最后一个值要显示在这
              itemStyle: {
                //虚线样式
                normal: {
                  lineStyle: {
                    width: 2,
                    color: "gray",
                    type: "dotted", //'dotted'虚线 'solid'实线
                  },
                },
              },
            }
          ],
      
      };

   