myChart.showLoading();

var geoCoordMap = {
  Aberdeen: [114.154527, 22.248614],
  Tsimshatsui: [114.171552, 22.296108],
  "Lai Chi Kok": [114.138628, 22.338379],
  Fanling: [114.143703, 22.500478],
  "Tuen Mun": [113.964351, 22.381489],
  "Sham Shui": [114.159874, 22.331216],
  "Tai Po": [114.168684, 22.444209],
  "Tuen Mun": [113.976737, 22.393006],
  Sanpokong: [114.196315, 22.336025],
  Central: [114.156604, 22.282287],
  Mongkok: [114.169249, 22.318697],
  "Chai Wan": [114.24899, 22.262842],
};

var convertData = function (data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var dataName = data[i].name;
    for (var key in geoCoordMap) {
      var geoCoord = geoCoordMap[key];
      if (dataName.indexOf(key) > -1) {
        res.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value),
          visualMap: true,
        });
        break;
      }
    }
  }
  return res;
};
//定义geo不同颜色的区域块
var regionsList = [
  //对不同的区块进行着色
  {
    name: "North", //区块名称
    itemStyle: {
      normal: {
        areaColor: "#177CC8",
      },
    },
  },
  {
    name: "Tai Po",
    itemStyle: {
      normal: {
        areaColor: "#177DC9",
      },
    },
  },
  {
    name: "Sha Tin",
    itemStyle: {
      normal: {
        areaColor: "#1584CB",
      },
    },
  },
  {
    name: "Central and Western",
    itemStyle: {
      normal: {
        areaColor: "#2553A8",
      },
    },
  },
  {
    name: "Eastern",
    itemStyle: {
      normal: {
        areaColor: "#3782CE",
      },
    },
  },
  {
    name: "Islands",
    itemStyle: {
      normal: {
        areaColor: "#1583CA",
      },
    },
  },
  {
    name: "Kowloon City",
    itemStyle: {
      normal: {
        areaColor: "#1C7EBE",
      },
    },
  },
  {
    name: "Kwai Tsing",
    itemStyle: {
      normal: {
        areaColor: "#2E8FCE",
      },
    },
  },
  {
    name: "Kwun Tong",
    itemStyle: {
      normal: {
        areaColor: "#2B79C7",
      },
    },
  },
  {
    name: "Sai Kung",
    itemStyle: {
      normal: {
        areaColor: "#1B6FC4",
      },
    },
  },
  {
    name: "Sham Shui Po",
    itemStyle: {
      normal: {
        areaColor: "#1659D6",
      },
    },
  },
  {
    name: "Southern",
    itemStyle: {
      normal: {
        areaColor: "#2089C4",
      },
    },
  },
  {
    name: "Tsuen Wan",
    itemStyle: {
      normal: {
        areaColor: "#418DDE",
      },
    },
  },
  {
    name: "Tuen Mun",
    itemStyle: {
      normal: {
        areaColor: "#2257C4",
      },
    },
  },
  {
    name: "Wan Chai",
    itemStyle: {
      normal: {
        areaColor: "#3782CE",
      },
    },
  },
  {
    name: "Wong Tai Sin",
    itemStyle: {
      normal: {
        areaColor: "#3176DB",
      },
    },
  },
  {
    name: "Yau Tsim Mong",
    itemStyle: {
      normal: {
        areaColor: "#226AD3",
      },
    },
  },
  {
    name: "Yuen Long",
    itemStyle: {
      normal: {
        areaColor: "#1B60C4",
      },
    },
  },
];
var max = 100; //期望生成的最小值
var min = 20; //期望生成的最大值
var randomData = [
  {
    name: "Tsimshatsui",
    value: Math.floor(Math.random() * (200 - 140 + 1) + 140),
  },
  {
    name: "Lai Chi Kok",
    value: Math.floor(Math.random() * (max - min + 1) + min),
  },
  {
    name: "Aberdeen",
    value: Math.floor(Math.random() * (max - min + 1) + min),
  },
  {
    name: "Fanling",
    value: Math.floor(Math.random() * (max - min + 1) + min),
  },
  {
    name: "Tuen Mun",
    value: Math.floor(Math.random() * (max - min + 1) + min),
  },
  {
    name: "Sham Shui",
    value: Math.floor(Math.random() * (max - min + 1) + min),
  },
  {
    name: "Tai Po",
    value: Math.floor(Math.random() * (max - min + 1) + min),
  },
  {
    name: "Tuen Mun",
    value: Math.floor(Math.random() * (max - min + 1) + min),
  },
  {
    name: "Sanpokong",
    value: Math.floor(Math.random() * (max - min + 1) + min),
  },
  {
    name: "Central",
    value: Math.floor(Math.random() * (max - min + 1) + min),
  },
  {
    name: "Mongkok",
    value: Math.floor(Math.random() * (max - min + 1) + min),
  },
  {
    name: "Chai Wan",
    value: Math.floor(Math.random() * (max - min + 1) + min),
  },
];
var NumDescSort = function (a, b) {
  return a.value - b.value;
};
randomData = randomData.sort(NumDescSort);
console.log(convertData(randomData));
$.get("https://echarts.apache.org/examples/data/asset/geo/HK.json", function (geoJson) {
  myChart.hideLoading();
  echarts.registerMap("HK", geoJson);

  myChart.setOption(
    (option = {
      backgroundColor: "#404a59",
      title: [
        {
          text: "Hong Kong XXX Store Network Latency",
          x: "center",
          y: "top",
          textStyle: {
            fontSize: 15,
            color: "#fff",
          },
        },
        {
          text: "Tsimshatsui anomaly detection",
          top: 60,
          left: '6%',
          textStyle: {
            color: "#FB977F",
            fontSize: 15,
          },
        },
      ],
      tooltip: {
        trigger: "item",
        formatter: "{b}<br/>{c} (p / km2)",
      },
      visualMap: {
        calculable: true,
        inRange: {
          color: ["#50a3ba", "#eac736", "#FC021D"],
        },
        textStyle: {
          color: "#fff",
        },
        seriesIndex: 0,
      },
      geo: {
        map: "HK",
        top: 100,
        left: "9%",
        bottom: "14%",
        zoom: 1.1,
        visualMap: true,
        itemStyle: {
          emphasis: {
            areaColor: "#2a333d",
          },
        },
        label: {
          normal: {
            show: true,
            color: "#01DAFF",
            fontSize: 10,
          },
          emphasis: {
            color: "#878787",
            fontSize: 10,
          },
        },
        regions: regionsList,
      },
      grid: [
        {
          right: 40,
          top: 60,
          bottom: 70,
          width: "28%",
        },
      ],
      xAxis: [
        {
          position: "top",
          type: "value",
          boundaryGap: false,
          axisLabel: {
            formatter: "{value} ms",
            textStyle: {
              color: "#c3dbff", //更改坐标轴文字颜色
              fontSize: 10, //更改坐标轴文字大小
            },
          },
          splitLine: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
      ],
      yAxis: [
        {
          type: "category",
          data: [],
          axisTick: {
            alignWithLabel: true,
          },
        },
      ],
      series: [
        {
          z: 1,
          type: "effectScatter",
          legendHoverLink: true,
          coordinateSystem: "geo",
          data: convertData(randomData),
          symbolSize: 10,
          showEffectOn: "render",
          rippleEffect: {
            brushType: "stroke",
          },
          hoverAnimation: true,
          label: {
            normal: {
              formatter: "{b}",
              position: "left",
              textStyle: {
                color: "#FFD857",
                fontSize: 10,
              },

              show: true,
            },
            emphasis: {
              formatter: "{b}",
              show: true,
            },
          },
          tooltip: {
            formatter: function (v) {
              return v.name + " : " + v.data.value[2] + " ms";
            },
          },
          itemStyle: {
            normal: {
              color: "#f4e925",
              shadowBlur: 30,
              shadowColor: "#EE0000",
            },
          },
          visualMap: true,
          zlevel: 1,
        },
        {
          type: "bar",
          // visualMap: true,
          tooltip: {
            formatter: function (v) {
              return v.data.name + " : " + v.data.value + " ms";
            },
          },
          itemStyle: {
            normal: {
              color: "#599D44",
            },
          },
          label: {
            normal: {
              show: true,
              formatter: "{b}",
              position: "insideLeft",
              textStyle: {
                color: "#FFFFFF",
                fontSize: 10,
              },
            },
            emphasis: {
              show: true,
            },
          },
          data: randomData,
        },
      ],
    })
  );
  var timer = 0;
  var total = option.series[0].data.length;
  var count = 0;
  function autoTip() {
    timer = setInterval(function () {
      var curr = count % total;

      //3.0以上版本的showTip使用方式
      //myChart.dispatchAction({type: 'showTip', seriesIndex: '1', dataIndex: '1'});
      myChart.dispatchAction({
        type: "showTip",
        seriesIndex: 0,
        dataIndex: curr,
      });
      count += 1;
    }, 5000);
  }
  autoTip();

  //mousemove和mouseout总是成对出现，而且out先出现。。。。所以没法解决鼠标hover时暂停自动tip的效果
  myChart.on("mousemove", function (param) {
    // console.log("move");
    if (timer) {
      clearInterval(timer);
      timer = 0;
    }
  });
  myChart.on("mouseout", function (param) {
    // console.log("OUT");
    if (param.event) {
      //判断坐标是否在图表上，然后在处理应该可以实现
      if (!timer) {
        autoTip();
      }
    }
  });
});
