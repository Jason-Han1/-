var symbolSize = 20;
var data = [
  ["c-40", -10],
  ["c-30", -5],
  ["c-76.5", 20],
  ["c-63.5", 40],
  ["c-22.1", 50],
];

option = {
  title: {
    text: "Try Dragging these Points",
    left: "center",
  },
  tooltip: {
    triggerOn: "none",
    formatter: function (params) {
      return "X: " + params.data[0] + "<br>Y: " + params.data[1].toFixed(2);
    },
  },
  grid: {
    top: "8%",
    bottom: "12%",
  },
  xAxis: {
    // min: -100,
    // max: 70,
    type: "category",
    axisLine: { onZero: false },
  },
  yAxis: {
    min: -30,
    max: 60,
    type: "value",
    axisLine: { onZero: !true },
  },
  // dataZoom: [
  //     {
  //         type: 'slider',
  //         xAxisIndex: 0,
  //         filterMode: 'none'
  //     },
  //     {
  //         type: 'slider',
  //         yAxisIndex: 0,
  //         filterMode: 'none'
  //     },
  //     {
  //         type: 'inside',
  //         xAxisIndex: 0,
  //         filterMode: 'none'
  //     },
  //     {
  //         type: 'inside',
  //         yAxisIndex: 0,
  //         filterMode: 'none'
  //     }
  // ],
  animation: false,
  series: [
    {
      id: "a",
      type: "bar",
      smooth: true,
      symbolSize: symbolSize,
      data: data,
    },
  ],
};

setTimeout(function () {
  // Add shadow circles (which is not visible) to enable drag.
  myChart.setOption({
    graphic: data.map(function (item, dataIndex) {
      return {
        type: "circle",
        position: myChart.convertToPixel("grid", item),
        shape: {
          cx: 0,
          cy: 0,
          r: symbolSize / 2,
        },
        // invisible: true,
        draggable: true,
        ondrag: function (dx, dy) {
          // console.log('.....vvvvv');
          onPointDragging(dataIndex, [this.x, this.y]);
        },
        onmousemove: function () {
          showTooltip(dataIndex);
        },
        onmouseout: function () {
          hideTooltip(dataIndex);
        },
        z: 100,
      };
    }),
  });
}, 0);

window.addEventListener("resize", updatePosition);

myChart.on("dataZoom", updatePosition);

function updatePosition() {
  myChart.setOption({
    graphic: data.map(function (item, dataIndex) {
      return {
        position: myChart.convertToPixel("grid", item),
      };
    }),
  });
}

function showTooltip(dataIndex) {
  myChart.dispatchAction({
    type: "showTip",
    seriesIndex: 0,
    dataIndex: dataIndex,
  });
}

function hideTooltip(dataIndex) {
  myChart.dispatchAction({
    type: "hideTip",
  });
}

function onPointDragging(dataIndex, pos) {
  // console.log(data[dataIndex])
  data[dataIndex][1] = myChart.convertFromPixel("grid", pos)[1];

  console.time("wwwwwwwwww");
  // Update data
  myChart.setOption({
    series: [
      {
        id: "a",
        data: data,
      },
    ],
  });

  setTimeout(() => {
    console.timeEnd("wwwwwwwwww");
  });
}
