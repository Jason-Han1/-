const barData = {
    xaxis: ["1月","2月","3月","4月","5月","6月","7月","8月"],
    series: [{
        name: "金额1",
        data: [90, 19,68, 98, 87, 20, 150, 62]
    },{
        name: "金额2",
        data: [90, 19,68, 98, 87, 20, 150, 62]
    },{
        name: "金额3",
        data: [90, 19,68, 98, 87, 20, 150, 62]
    }],
    legend: ["金额1","金额2","金额3",],
    unit: "个",
    namePadding: [0, 10, 50, 0],
    yName: "数",
    legendShow: true,
    legendX: "right",
    xAxisTickHidden: false,
    xLabelMargin: 25,
    colorArr: [
      {
        start: "#1B7AFF",
        end: "#51D7FF",
      },
      {
        start: "#01C12E",
        end: "#48FE73",
      },
      {
        start: "#FF6B1A",
        end: "#FF9179",
      },
    ],
    splitNumber: 3,
    dataZoom: {
      type: "slider",
      show: false,
      realtime: true,
      startValue: 0,
      endValue: 5,
      filterMode: "none",
    },
    len: 5,
    grid: {
      left: "122px",
      top: "156px",
      right: "5px",
      bottom: "65px",
      containLabel: false,
    },
}
  myChart.getZr().on("mousemove", (param) => {
    let pointInPixel = [param.offsetX, param.offsetY];
    if (myChart.containPixel("grid", pointInPixel)) {
      //若鼠标滑过区域位置在当前图表范围内 鼠标设置为小手
      myChart.getZr().setCursorStyle("pointer");
    } else {
      myChart.getZr().setCursorStyle("default");
    }
  });
  myChart.getZr().off("click");
  myChart.getZr().on("click", (params) => {
    this.$once("hook:beforeDestroy", () => {
      myChart.getZr().off("click");
    });
    const pointInPixel = [params.offsetX, params.offsetY];
    if (myChart.containPixel("grid", pointInPixel)) {
      let xIndex = myChart.convertFromPixel({ seriesIndex: 0 }, [
        params.offsetX,
        params.offsetY,
      ])[0]; //柱形的下标 ，此处取[1]
      xIndex = Math.abs(xIndex);
      this.$emit("clickBarIndex", xIndex);
    }
  });
  // document.oncontextmenu = () =>{ return false; }; 
  // myChart.getZr().off("contextmenu");
  // myChart.getZr().on("contextmenu", (params) => {
  //    const pointInPixel = [params.offsetX, params.offsetY];
  //   if (myChart.containPixel("grid", pointInPixel)) {
  //     let xIndex = myChart.convertFromPixel({ seriesIndex: 0 }, [
  //       params.offsetX,
  //       params.offsetY,
  //     ])[0]; //柱形的下标 ，此处取[1]
  //     xIndex = Math.abs(xIndex);
  //     this.$emit("contextMenuBarIndex", xIndex);
  //     }
  // });

  let normalColor = "#ECF8FF";
  let list = [];
  let seriesData = barData.series.map((item, index) => {
    list = [...list, ...item.data];
    return {
      name: item.name,
      type: "bar",
      barWidth: "64px",
      stack: "记录",
      itemStyle: {
        normal: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: barData.colorArr[index].start,
              },
              {
                offset: 1,
                color: barData.colorArr[index].end,
              },
            ],
            globalCoord: false,
          },
        },
      },
      label: {
        show: barData.label && index === 2 && true,
        position: "top",
        align: "center",
        // width: 72,
        height: 48,
        backgroundColor: "rgba(9,50,93,0.3)",
        borderColor: "rgba(9,50,93,0.5)",
        borderWidth: 3,
        formatter: (item) => {
          let value = barData.label && barData.label[item.dataIndex];
          return `{a|${value}%}`;
        },
        distance: 18,
        align: "center",
        rich: {
          a: {
            padding: [6, 8, 6, 8],
            fontFamily: "DINAlternate-Bold",
            fontSize: 42,
            color: "#3CF0FF",
            lineHeight: 52,
          },
        },
      },
      data: item.data,
    };
  });
  option = {
    backgroundColor: '#0A2E5D',
    legend: {
      show: barData.legendShow,
      x: barData.legendX,
      y: "top",
      icon: "rect",
      selectedMode: false,
      padding: [20, 0, 0, 0],
      itemGap: barData.itemGap || 32,
      itemWidth: 40,
      itemHeight: 28,
      textStyle: {
        height: 48,
        rich: {
          a: {
            color: normalColor,
            fontSize: 48,
            fontFamily: "PingFangSC-Regular",
          },
        },
      },
      formatter: (name) => {
        return "{a|" + name + " " + "}";
      },
      data: barData.legend,
    },
    cursor: "pointer",
    dataZoom: barData.dataZoom ? barData.dataZoom : [],
    grid: barData.grid,
    tooltip: {
      textStyle: {
        fontSize: 48,
      },
      trigger: "axis",
      formatter: function (params) {
        let str = "";
        for (let i = 0; i < params.length; i++) {
          if (
            (!!params[i].value || params[i].value === 0) &&
            params[i].seriesName !== ""
          ) {
            let unit = barData.unit;
            str += params[i].seriesName + ": " + params[i].value + unit + "<br/>";
          } else if (params[i].seriesName !== "") {
            str += params[i].seriesName + ": " + "无数据" + "<br/>";
          }
        }
        return str;
      },
    },
    xAxis: [
      {
        type: "category",
        data: barData.xaxis,
        axisPointer: {
          type: "shadow",
        },
        axisLabel: {
          interval: 0,
          margin: barData.xLabelMargin,
          textStyle: {
            fontFamily: "PingFangSC-Regular",
            color: normalColor,
            fontSize: 42,
            lineHeight: 52,
          },
          formatter: function (value) {
            let len = barData.series[0] ? barData.series[0].data.length : 0;
            let ret = ""; //拼接加\n返回的类目项
            let maxLength = 7;
            if (len < 5) {
              maxLength = 9;
            }
            let valLength = value.length; //X轴类目项的文字个数
            let rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
            if (rowN > 1) {
              //如果类目项的文字大于5,
              for (let i = 0; i < rowN; i++) {
                let temp = ""; //每次截取的字符串
                let start = i * maxLength; //开始截取的位置
                let end = start + maxLength; //结束截取的位置
                //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                temp = value.substring(start, end) + "\n";
                ret += temp; //凭借最终的字符串
              }
              return ret;
            } else {
              return value;
            }
          },
        },

        // axisLabel: {
        //   interval: 0,
        //   margin: barData.xLabelMargin,
        //   textStyle: {
        //     fontFamily: "PingFangSC-Regular",
        //     color: normalColor,
        //     fontSize: 36,
        //   },
        // },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: true,
          length: 5,
          alignWithLabel: true,
          lineStyle: {
            width: 2,
            color: "#CEF8FF",
          },
        },
        splitLine: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        name: barData.yName,
        splitNumber: barData.splitNumber,
        nameTextStyle: {
          fontFamily: "PingFangSC-Regular",
          color: normalColor,
          fontSize: 48,
          // align: "right",
          padding: barData.namePadding,
        },
        axisLabel: {
          formatter: "{value}",
          align: "right",
          textStyle: {
            fontFamily: "PingFangSC-Regular",
            color: normalColor,
            fontSize: 48,
          },
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: true,
          length: 5,
          lineStyle: {
            width: 2,
            color: "#CEF8FF",
          },
        },
        splitLine: {
          show: false,
        },
      },
    ],
    series: seriesData,
  };
  myChart.setOption(option);
  if (barData.dataZoom && !barData.noScroll) {
    let startNumber = 0;
    let start = new Date();
    let duration = 2000;
    let dataLen = barData.xaxis.length;
    let animation = () => {
      let time = new Date();
      let timePassed = time - start;
      if (timePassed >= duration) {
        start = new Date();
        if (startNumber === dataLen - barData.len) {
          startNumber = 0;
        }
        myChart.dispatchAction({
          type: "dataZoom",
          startValue: startNumber,
          endValue: startNumber + barData.len,
        });
        startNumber++;
      }
      this.rafId = requestAnimationFrame(animation);
    };
    animation();
    // this.$once("hook:beforeDestroy", () => {
    //   cancelAnimationFrame(this.rafId);
    // });
    // dom.onmouseover = () => {
    //   cancelAnimationFrame(this.rafId);
    // };
    // dom.onmouseleave = () => {
    //   animation();
    // };
  }