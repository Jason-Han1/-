let barData = {
    xaxis: ["1月","2月","3月","4月","5月","6月","7月","8月"],
    series: [{
        name: "金额",
        data: [90, 19,68, 98, 87, 20, 150, 62]
    }],
    legend: ["金额"],
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
        start: "#FF6A18 ",
        end: "#FFBA93",
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
let normalColor = "#ccc";
  let list = [];
  let seriesData = barData.series.map((item, index) => {
    list = [...list, ...item.data];
    return {
      name: item.name,
      type: "bar", 
      barWidth: "30px",
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
      barGap: "0px",
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
      itemGap: 32,
      itemWidth: 26,
      itemHeight: 18,
      textStyle: {
        height: 30,
        rich: {
          a: {
            color: normalColor,
            fontSize: 36,
            fontFamily: "PingFangSC-Regular",
          },
        },
      },
      formatter: (name) => {
        return "{a|" + name + " " + "}";
      },
      data: barData.legend,
    },

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
          },
          formatter: function (value) {
            var ret = ""; //拼接加\n返回的类目项
            var maxLength = 9; //每项显示文字个数
            var valLength = value.length; //X轴类目项的文字个数
            var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
            if (rowN > 1) {
              //如果类目项的文字大于5,
              for (var i = 0; i < rowN; i++) {
                var temp = ""; //每次截取的字符串
                var start = i * maxLength; //开始截取的位置
                var end = start + maxLength; //结束截取的位置
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
        //     fontSize: 42,
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
          fontSize: 42,
          align: "right",
          padding: barData.namePadding,
        },
        axisLabel: {
          formatter: "{value}",
          align: "right",
          textStyle: {
            fontFamily: "PingFangSC-Regular",
            color: normalColor,
            fontSize: 42,
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
 }