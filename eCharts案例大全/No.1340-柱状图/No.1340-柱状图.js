 const barData = {
    xaxis: ["1月","2月","3月","4月",],
    series: [{
        name: "金额",
        data: [90, 19,68, 98,]
    }],
    legend: ["金额"],
    yName: "mm",
    unit: "",
    legendShow: true,
    colorArr: [
      {
        start: "rgba(124,225,255, 0.80)",
        end: "rgba(40,203,252,0.50)",
      }
    ],
    xLabelWidth: 160,
    xLabelheight: 48,
    splitNumber: 4,
    xLabelBg: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAAAwCAYAAAAfHSRCAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAb6ADAAQAAAABAAAAMAAAAABXoqNQAAABSklEQVR4Ae2cMW7CUADFGgaEOneiGzt35BA9Ta/RterGEYoQAzBlRF+qi5zBLERKnBfZgjHTx/ft9jL4HH5O74NLOv3PBg671+PolqvRBZ1froHiLbfN8Mmmt8/f7XzVdbPez8er8+VrPu7bNfCoS788twtaLx7S58LFc/2j9eIhfS5cPNc/Wi8e0ufCxXP9o/XiIX0uXDzXP1ovHtLnwsVz/aP14iF9Llw81z9aLx7S58LFc/2j9eIhfS5cPNc/Wi8e0ufCxXP9o/XiIX0uXDzXP1ovHtLnwsVz/aP14iF9Llw81z9aLx7S58LFc/2j9eIhfS5cPNc/Wi8e0ufCxXP9o/XiIX0uXDzXP1ovHtLnwsVz/aP14iF9Llw81z9aLx7S58LFc/2j9eIhfS5cPNc/Wp96cRzy9zS4F8c9Te0ybtzf5jI6/Okp7jqFGRdvmgByAAAAAElFTkSuQmCC`,
    grid: {
      left: "100px",
      top: "116px",
      right: "70px",
      bottom: "84px",
      containLabel: false,
    },
    namePadding: [0, 10, 30, 0],
 }
  let normalColor = "rgba(236,248,255,0.70)";
  let barBg = [];
  let list = [];
  let seriesData = barData.series.map((item, index) => {
    list = [...list, ...item.data];
    barBg.push({
      type: "pictorialBar",
      itemStyle: {
        normal: {
          opacity: 0.6,
          color:'#6494db'
        },
      },
      barGap: "-30%",
      symbolRepeat: "fixed", //使图形元素重复order
      symbolSize: [45, 10],
      symbolMargin: 2,
      symbol: `image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAKCAYAAAD7CH02AAAAO0lEQVRIiWPkTl34n4E4wPhlVhwDAwMDA0/aIgYGBoZBqY+JSMOHDBj10GAHox4a7GDUQ4MdjHposAMAHHwOJKeijY8AAAAASUVORK5CYII=`,
      data: barData.series[0] && barData.series[0].data,
    });

    let markPoint = item.data.map((item, index) => {
      return {
        coord: [index, item/2],
        itemStyle: {
          color: "black"
        },
        symbolSize: [35, 3],
        symbolOffset: [0, -5],
        symbol:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAADCAYAAAAp+adOAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAOaADAAQAAAABAAAAAwAAAABcACqHAAAAKElEQVQoFWOc/ez/fwYoSJViZISxkcVhYoOdxuV+psHucGq4b0R4EgAU2guFUrWCeQAAAABJRU5ErkJggg=='
      };
    });
    return {
      name: barData.legend[index],
      type: "bar",
      data: item.data,
      barGap: "45%",
      barWidth: "25px",
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
      markPoint: {
        data: markPoint,
      },
    };
  });
  seriesData = [...seriesData];
 option = {
    backgroundColor: "white",
    legend: {
      show: barData.legendShow,
      x: "right",
      y: "top",
      selectedMode: false,
      icon: "rect",
      padding: [0, 0, 0, 0],
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
    grid: barData.grid,
    tooltip: {
      textStyle: {
        fontSize: 48,
      },
      trigger: "axis",
      formatter: function (params) {
        let str = "";
        for (let i = 0; i < params.length - 1; i++) {
          if (i < 2) {
            if (
              (!!params[i].value || params[i].value === 0) &&
              params[i].seriesName !== ""
            ) {
              let value;
              if (i === params.length - 2) {
                value = params[i].value + params[0].value;
              } else [(value = params[i].value)];
              str += params[i].seriesName + ": " + value + barData.unit + "<br/>";
            } else if (params[i].seriesName !== "") {
              str += params[i].seriesName + ": " + "无数据" + "<br/>";
            }
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
          margin: 15,
          formatter: (value) => {
            return `{a|${value}}`;
          },
          width: barData.xLabelWidth,
          height: barData.xLabelheight,
          align: "center",
          backgroundColor: {
            image: barData.xLabelBg,
          },
          rich: {
            a: {
              fontFamily: "DINAlternate-Bold",
              color: normalColor,
              fontSize: 42,
              lineHeight: 54,
            },
          },
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
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
          showMinLabel: false,
          formatter: "{value}",
          align: "right",
          textStyle: {
            fontFamily: "PingFangSC-Regular",
            color: normalColor,
            fontSize: 42,
          }
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
      },
    ],
    series: seriesData,
  };
  myChart.setOption(option);