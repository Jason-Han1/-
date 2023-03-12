option =  {
    backgroundColor: "111111",
  title: {
    text: "实验总次数",
    subtext: "100",
    textStyle: {
      fontSize: 14,
      color: "#FFFFFF",
      lineHeight: 16,
    },
    subtextStyle: {
      fontSize: 24,
      color: "#1ED2FF",
    },
    textAlign: "center",
    left: "50%",
    top: "45%",
  },
  tooltip: {
    trigger: "item",
  },
  legend: {
    type: "scroll",

    itemGap: 30,
    selectedMode: false,
    icon: "pin",
    data: ["有效实验", "无效实验"],
    textStyle: {
      color: "#FFFFFF",
      rich: {
        uname: {
          width: 50,
        },
        unum: {
          color: "#4ed139",
        },
      },
    },
    // formatter(name) {
    //   return `{uname|${name}}{unum|1132}`;
    // },
  },
  color: ["#3AA0FF  ", "#EAE018 "],
  series: [
    {
      name: "实验次数",
      type: "pie",
      radius: [70, 90],
      center: ["50%", "50%"],
      label: {
        show: false,
      },
      labelLine: {
        show: false,
      },

      data: [
        { name: "有效实验", value: 100 },
        { name: "无效实验", value: 20 },
      ],
    },
  ]
};