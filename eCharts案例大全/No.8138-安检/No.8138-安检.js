var colors = ["#5793f3", "#d14a61", "#675bba"];

function calMax(arr) {
  let max = Math.max(...arr);
  let maxint = Math.ceil(max / 9.5); //不让最高的值超过最上面的刻度
  let maxval = maxint * 10; //让显示的刻度是整数
  return maxval;
}

//计算最小值
function calMin(arr) {
  let min = Math.min(...arr);
  let minint = Math.floor(min / 10);
  let minval = minint * 10; //让显示的刻度是整数
  return minval;
}

var data1 = [
  2.0,
  4.9,
  7.0,
  23.2,
  25.6,
  76.7,
  135.6,
  162.2,
  32.6,
  20.0,
  6.4,
  3.3
];

var data2 = [
  2.6,
  5.9,
  9.0,
  26.4,
  28.7,
  70.7,
  175.6,
  182.2,
  48.7,
  18.8,
  6.0,
  2.3
];
var data3 = [
  2.6,
  5.9,
  9.0,
  26.4,
  28.7,
  70.7,
  175.6,
  182.2,
  48.7,
  18.8,
  6.0,
  2.3
];

var Min1 = calMin(data1),
  Min2 = calMin([...data2, ...data3]),
  Max1 = calMax(data1),
  Max2 = calMax([...data2, ...data3]);

option = {
  color: colors,
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
  tooltip: {
    trigger: "axis"
  },
  dataZoom: [
    {
      show: true,
      realtime: true
    },
    {
      type: "inside",
      realtime: true
    }
  ],
  yAxis: [
    {
      type: "value",
      name: "蒸发量",
      axisLine: {
        lineStyle: {
          color: colors[0]
        }
      },

      min: Min1,
      max: Max1,
      splitNumber: 10,
      interval: (Max1 - Min1) / 10
    },
    {
      type: "value",
      name: "降水量",
      position: "right",
      axisLine: {
        lineStyle: {
          color: colors[1]
        }
      },
      splitLine: {
        show: false
      },
      min: Min2,
      max: Max2,
      splitNumber: 10,
      interval: (Max2 - Min2) / 10
    }
  ],
  series: [
    {
      name: "蒸发量",
      type: "line",
      smooth: true,
      data: data1
    },
    {
      name: "降水量",
      type: "line",
      yAxisIndex: 1,
      smooth: true,
      data: data2
    },
    {
      name: "降水量",
      type: "line",
      yAxisIndex: 1,
      smooth: true,
      data: data3
    }
  ]
};
