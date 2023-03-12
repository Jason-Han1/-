let colorList = [
  "#f36c6c",
  "#e6cf4e",
  "#20d180",
  "#0093ff",
  "#f36c6c",
  "#e6cf4e",
  "#20d180",
  "#0093ff"
];

let allData = [
  {
    name: "杭州市",
    count: 100,
    percent: 0.182
  },
  {
    name: "宁波市",
    count: 366,

    percent: 0.22
  },

  {
    name: "温州市",

    count: 733,

    percent: 0.452
  },

  {
    name: "湖州市",

    count: 287,

    percent: 0.229
  },

  {
    name: "丽水市",

    count: 89,

    percent: 0.082
  },

  {
    name: "舟山市",

    count: 25,

    percent: 0.112
  }
];

option = {
  tooltip: {
    trigger: "axis",

    axisPointer: {
      type: "shadow"
    }
  },

  legend: {
    show: false
  },

  grid: {
    left: 100
  },

  xAxis: {
    type: "value",

    splitLine: {
      show: false
    },

    axisLabel: {
      show: false
    },

    axisTick: {
      show: false
    },

    axisLine: {
      show: false
    }
  },

  yAxis: [
    {
      type: "category",

      inverse: true,

      axisLine: {
        show: false
      },

      axisTick: {
        show: false
      },

      axisPointer: {
        label: {
          show: true
        }
      },

      data: allData.map(item => item.name),

      axisLabel: {
        margin: 20,

        fontSize: 14,

        color: "#333"
      }
    },

    {
      type: "category",

      inverse: true,

      axisTick: "none",

      axisLine: "none",
      offset: -10,
      zlevel: 100,
      show: true,
      position: "left",
      axisLabel: {
        textStyle: {
          color: "#000",
          // fontSize: "10"
          align:'left'
        }
      },
      data: allData.map(item => item.count)
    }
  ],
  series: [
    {
      z: 2,
      name: "value",
      type: "bar",
      align: "left",
      data: allData
        .map(item => item.percent)
        .map((item, i) => {
          itemStyle = {
            color: colorList[i]
          };
          return {
            value: item,
            itemStyle: itemStyle
          };
        }),
      label: {
        normal: {
          show: true,
          position: "right",
          color: "#333333",
          fontSize: 14,
          formatter: function(value) {
            let val = (value && value.data && value.data.value) || 0;
            return parseFloat(val * 100).toFixed(2) + "%";
          }
        }
      }
    }
  ]
};
