var data = [
  {
    itemStyle: {color: '#00549d'},
    name: "10号线",
    value: 70
  },
  {
    itemStyle: {color: '#00541d'},
    name: "1号线",
    value: 70
  },
  {
    itemStyle: {color: '#00241d'},
    name: "2号线",
    value: 70
  }
]
  var count = 100;
  var option = {
    tooltip: {
      trigger: "item",
      backgroundColor: "#0C0D0D",
      borderWidth: 0,
      textStyle: {
        color: "#D3FFFF",
      },
      formatter: (params) => {
        return `${params.name}&nbsp&nbsp${(params.value/count*100).toFixed(2)}% <br />${params.value}&nbsp&nbsp人次`;
      },
    },
    legend: {},
    series: [
      {
        type: "treemap",
        top: 30,
        left: 0,
        right: 0,
        bottom: 10,
        nodeClick: false,
        breadcrumb: { show: false },
        data: data,
      },
    ],
  };