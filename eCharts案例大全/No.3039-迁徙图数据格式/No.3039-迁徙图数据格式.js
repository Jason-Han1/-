option = {
  backgroundColor: "#013954",
  geo: {
    map: "china",
    aspectScale: 0.75,
    zoom: 1,
    roam: false,
    regions: [
      {
        name: "南海诸岛",
        itemStyle: {
          areaColor: "rgba(0, 10, 52, 1)",
          borderColor: "rgba(0, 10, 52, 1)",
          normal: { opacity: 0, label: { show: false, color: "#009cc9" } },
        },
      },
    ],
  },
  series: [
    {
      type: "map",
      roam: false,
      zoom: 1,
      map: "china",
    },
    {
      type: "effectScatter", //点
      coordinateSystem: "geo",
      showEffectOn: "render",
      zlevel: 1,
      rippleEffect: { period: 1, scale: 4, brushType: "fill" },
      hoverAnimation: true,
      label: {
        normal: {
          formatter: "{b}",
          position: "right",
          offset: [15, 0],
          color: "#1DE9B6",
          show: true,
        },
      },
      itemStyle: {
        normal: { color: "#1DE9B6", shadowBlur: 10, shadowColor: "#333" },
      },
      symbolSize: 5,
      data: [
        { value: [118.8062, 31.9208] },
        { value: [127.9688, 45.368] },
        { value: [110.3467, 41.4899] },
        { value: [125.8154, 44.2584] },
        { value: [116.4551, 40.2539] },
        { value: [123.1238, 42.1216] },
        { value: [114.4995, 38.1006] },
        { value: [117.4219, 39.4189] },
        { value: [112.3352, 37.9413] },
        { value: [109.1162, 34.2004] },
        { value: [103.5901, 36.3043] },
        { value: [106.3586, 38.1775] },
        { value: [101.4038, 36.8207] },
        { value: [103.9526, 30.7617] },
        { value: [108.384366, 30.439702] },
        { value: [113.0823, 28.2568] },
        { value: [102.9199, 25.46639] },
        { value: [119.4543, 25.9222] },
      ],
    },
    {
      type: "lines", // 线
      zlevel: 2,
      effect: {
        show: true,
        period: 4,
        trailLength: 0.4,
        symbol: "arrow",
        symbolSize: 7,
      },
      lineStyle: {
        normal: { color: "#1DE9B6", width: 1, opacity: 0.1, curveness: 0.3 },
      },
      data: [
        {
          coords: [
            [118.8062, 31.9208],
            [119.4543, 25.9222],
          ],
        },
        {
          coords: [
            [127.9688, 45.368],
            [119.4543, 25.9222],
          ],
        },
        {
          coords: [
            [110.3467, 41.4899],
            [119.4543, 25.9222],
          ],
        },
        {
          coords: [
            [125.8154, 44.2584],
            [119.4543, 25.9222],
          ],
        },
        {
          coords: [
            [116.4551, 40.2539],
            [119.4543, 25.9222],
          ],
        },
        {
          coords: [
            [123.1238, 42.1216],
            [119.4543, 25.9222],
          ],
        },
        {
          coords: [
            [114.4995, 38.1006],
            [119.4543, 25.9222],
          ],
        },
        {
          coords: [
            [117.4219, 39.4189],
            [119.4543, 25.9222],
          ],
        },
        {
          coords: [
            [112.3352, 37.9413],
            [119.4543, 25.9222],
          ],
        },
        {
          coords: [
            [109.1162, 34.2004],
            [119.4543, 25.9222],
          ],
        },
        {
          coords: [
            [103.5901, 36.3043],
            [119.4543, 25.9222],
          ],
        },
        {
          coords: [
            [106.3586, 38.1775],
            [119.4543, 25.9222],
          ],
        },
        {
          coords: [
            [101.4038, 36.8207],
            [119.4543, 25.9222],
          ],
        },
        {
          coords: [
            [103.9526, 30.7617],
            [119.4543, 25.9222],
          ],
        },
        {
          coords: [
            [108.384366, 30.439702],
            [119.4543, 25.9222],
          ],
        },
        {
          coords: [
            [113.0823, 28.2568],
            [119.4543, 25.9222],
          ],
        },
        {
          coords: [
            [102.9199, 25.46639],
            [119.4543, 25.9222],
          ],
        },
      ],
    },
  ],
};
