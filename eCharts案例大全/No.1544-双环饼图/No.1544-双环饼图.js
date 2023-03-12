const color = ["#00B3FF", "", "#FFC633", "", "#13FFF1", ""];
const color1 = ["#0673D1", "", "#CD8D30", "", "#078680", ""];

let chartdata = [
        { value: 232, name: "第一产业" },
        { value: 132, name: "第二产业" },
        { value: 100, name: "第三产业" },
      ]
let sum = 0;
let data1 = [];
chartdata.forEach((item) => {
    sum += Number(item.value);
});
chartdata.forEach((item) => {
data1.push(item, {
  name: "",
  value: sum / 100,
  labelLine: {
    show: false,
    lineStyle: {
      color: "transparent",
    },
  },
  itemStyle: {
    color: "transparent",
  },
});
});

option = {
series: [
  {
    type: "pie",
    radius: ["55%", "75%"],
    center: ["50%", "50%"],
    hoverAnimation: false,
    startAngle: 180,
    selectedMode: "single",
    label: {
      show: false,
    },
    itemStyle: {
      normal: {
        color: function (params) {
          return color1[params.dataIndex];
        },
      },
    },
    data: data1,
    z: 666,
  },
  {
    type: "pie",
    radius: ["75%", "80%"],
    center: ["50%", "50%"],
    hoverAnimation: false,
    startAngle: 180,
    selectedMode: "single",
    label: {
      show: false,
    },
    itemStyle: {
      normal: {
        color: function (params) {
          return color[params.dataIndex];
        },
      },
    },
    data: data1,
    z: 1,
  },
],
};

let currentIndex = -2;
const dataLen = chartdata.length * 2;
var timer = setInterval(() => {
// 取消之前高亮的图形
myChart.dispatchAction({
  type: "unselect",
  seriesIndex: 0,
  dataIndex: currentIndex,
});
myChart.dispatchAction({
  type: "unselect",
  seriesIndex: 1,
  dataIndex: currentIndex,
});

currentIndex += 2;
if (currentIndex >= dataLen) {
  currentIndex = 0;
}

// 高亮当前图形
myChart.dispatchAction({
  type: "select",
  seriesIndex: 0,
  dataIndex: currentIndex,
});
myChart.dispatchAction({
  type: "select",
  seriesIndex: 1,
  dataIndex: currentIndex,
});
}, 3000);
