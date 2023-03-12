const color = ["rgba(255,184,43,1)", "", "rgba(255,113,90,1)", "", "rgba(255,132,66,1)", "", 'rgba(63,246,254,1)', '', 'rgba(29,245,175,1)', ''];
const color1 = ["rgba(255,184,43, .2)", "", "rgba(255,113,90, .2)", "", "rgba(255,132,66, .2)", "", 'rgba(63,246,254,.2)', '', 'rgba(29,245,175,.2)', ''];
const color2 = ['rgba(79,113,240,1)', 'rgba(35,157,255,1)']

let chartdata = [
        { value: 100, name: "第一产业" },
        { value: 100, name: "第二产业" },
        { value: 100, name: "第三产业" },
        { value: 100, name: "第四产业" },
        { value: 100, name: "第五产业" },
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
  backgroundColor: '#081c47',
  tooltip: {
    trigger: 'item'
  },
  series: [
    {
      type: "pie",
      radius: ["0%", "50%"],
      center: ["50%", "50%"],
      hoverAnimation: true,
      startAngle: 90,
      selectedMode: "single",
      selectedOffset: 20,
      label: {
        show: true,
        position: 'inside',
        color: '#fff',
        fontSize: 24
      },
      itemStyle: {
        normal: {
          color: function (params) {
            return color2[params.dataIndex];
          },
          borderColor: '#fff',
          borderWidth: 2
        },
      },
      data: [{value: 240, name: '单位', selected: true}, {value: 80, name: '个人'}],
      z: 666,
    },
    {
      type: "pie",
      radius: ["60%", "63%"],
      center: ["50%", "50%"],
      hoverAnimation: true,
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
      radius: ["66%", "76%"],
      center: ["50%", "50%"],
      hoverAnimation: true,
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